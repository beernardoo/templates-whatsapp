const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const DIR        = __dirname;
const PORT       = process.env.PORT || 3031;
const CACHE_FILE = path.join(DIR, 'precos-cache.json');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
};

// ── Preços padrão (vigentes desde 01/01/2026 — modelo por mensagem) ─
const PRECOS_DEFAULT = {
  utility: {
    categoria: 'Utility',
    valor: 0.0068,
    moeda: 'USD',
    unidade: 'por mensagem',
    mercado: 'Brasil',
    vigencia: '2026-01-01',
  },
  marketing: {
    categoria: 'Marketing',
    valor: 0.0625,
    moeda: 'USD',
    unidade: 'por mensagem',
    mercado: 'Brasil',
    vigencia: '2026-01-01',
  },
};

// URL da documentação pública (página SSR com links para CSV)
const DOCS_URL = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing';

// ── Cache ─────────────────────────────────────────────────────────────
function lerCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    }
  } catch (_) {}
  return null;
}

function salvarCache(dados) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(dados, null, 2), 'utf8');
  } catch (_) {}
}

function getCacheAtual() {
  const cache = lerCache();
  if (cache) return cache;
  const agora = new Date().toISOString();
  return {
    atualizadoEm: null,
    statusConsulta: 'default',
    avisoFallback: false,
    fontUrl: DOCS_URL,
    utility:   { ...PRECOS_DEFAULT.utility,   consultadoEm: null },
    marketing: { ...PRECOS_DEFAULT.marketing, consultadoEm: null },
  };
}

// ── Scraping ──────────────────────────────────────────────────────────
function httpsGet(url, tentativas) {
  tentativas = tentativas || 0;
  return new Promise((resolve, reject) => {
    const opts = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
      },
      timeout: 15000,
    };
    const req = https.get(url, opts, (res) => {
      // Segue redirecionamentos (max 5)
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && tentativas < 5) {
        const redir = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        return httpsGet(redir, tentativas + 1).then(resolve).catch(reject);
      }
      let body = '';
      res.on('data', d => { body += d; });
      res.on('end', () => resolve({ status: res.statusCode, body }));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function extrairTodasCsvUrls(html) {
  // As URLs de CSV aparecem como:
  // "https://l.facebook.com/l.php?u=CDN_URL_ENCODED&h=...&s=1"
  // onde CDN_URL_ENCODED é a URL do fbcdn URL-encoded no parâmetro u=
  const urls = [];
  const lfbRe = /"(https?:\/\/l\.facebook\.com\/l\.php\?u=[^"]+?)"/g;
  let m;
  while ((m = lfbRe.exec(html)) !== null) {
    const uParam = m[1].match(/[?&]u=([^&]+)/);
    if (!uParam) continue;
    try {
      const decoded = decodeURIComponent(uParam[1]);
      if (decoded.includes('.csv') && decoded.includes('fbcdn')) urls.push(decoded);
    } catch (_) {}
  }

  // Fallback: CDN direto em href ou JSON escapado
  if (urls.length === 0) {
    const cdnDireto = html.match(/"(https?:\/\/scontent[^"]+\.csv[^"]*?)"/);
    if (cdnDireto) urls.push(cdnDireto[1]);
    const cdnEsc = html.match(/https:\\\/\\\/scontent[^"\\]+?_n\.csv[^"\\]*/);
    if (cdnEsc) urls.push(cdnEsc[0].replace(/\\\//g, '/').replace(/\\u0026/g, '&'));
  }
  return urls;
}

function parseCsv(csv) {
  const linhas = csv.replace(/\r/g, '').split('\n').filter(l => l.trim());
  let hi = -1;
  for (let i = 0; i < linhas.length; i++) {
    if (/market/i.test(linhas[i]) && /marketing/i.test(linhas[i]) && /utility/i.test(linhas[i])) {
      hi = i; break;
    }
  }
  if (hi === -1) return null;

  const hdrs = linhas[hi].split(',').map(h => h.trim().toLowerCase().replace(/["\s]/g, ''));
  const mi = hdrs.indexOf('marketing');
  const ui = hdrs.indexOf('utility');

  for (let i = hi + 1; i < linhas.length; i++) {
    if (/brazil/i.test(linhas[i])) {
      const cols = linhas[i].split(',');
      const mkt  = parseFloat(cols[mi]);
      const uti  = parseFloat(cols[ui]);
      if (!isNaN(mkt) && !isNaN(uti)) return { marketing: mkt, utility: uti };
    }
  }
  return null;
}

async function buscarPrecosMeta() {
  const agora = new Date().toISOString();
  try {
    console.log('[Preços] Buscando página da documentação Meta...');
    const { body: html } = await httpsGet(DOCS_URL);
    const csvUrls = extrairTodasCsvUrls(html);
    if (csvUrls.length === 0) throw new Error('Nenhuma URL de CSV encontrada na página de documentação');

    // Tenta até 3 CSVs até encontrar um com linha do Brasil
    let precos = null;
    for (let i = 0; i < Math.min(csvUrls.length, 3); i++) {
      console.log('[Preços] Tentando CSV #' + i + ':', csvUrls[i].substring(0, 80) + '...');
      try {
        const { body: csv } = await httpsGet(csvUrls[i]);
        precos = parseCsv(csv);
        if (precos) { console.log('[Preços] CSV #' + i + ' OK'); break; }
      } catch (_) {}
    }
    if (!precos) throw new Error('Linha do Brasil não encontrada nos ' + Math.min(csvUrls.length, 3) + ' CSVs testados');

    const cache = {
      atualizadoEm:   agora,
      statusConsulta: 'ok',
      avisoFallback:  false,
      fontUrl:        DOCS_URL,
      utility: {
        ...PRECOS_DEFAULT.utility,
        valor:        precos.utility,
        consultadoEm: agora,
      },
      marketing: {
        ...PRECOS_DEFAULT.marketing,
        valor:        precos.marketing,
        consultadoEm: agora,
      },
    };
    salvarCache(cache);
    console.log('[Preços] ✅ Atualizado — Utility: $' + precos.utility + ' | Marketing: $' + precos.marketing);
    return cache;

  } catch (err) {
    console.warn('[Preços] ⚠️  Scraping falhou:', err.message, '— usando fallback');
    const cacheExistente = lerCache();
    if (cacheExistente) {
      // Atualiza apenas o status de aviso, preserva valores válidos
      cacheExistente.avisoFallback = true;
      cacheExistente.ultimaFalha   = agora;
      cacheExistente.erroScraping  = err.message;
      salvarCache(cacheExistente);
      return cacheExistente;
    }
    // Salva os defaults com flag de fallback
    const fallback = {
      atualizadoEm:   agora,
      statusConsulta: 'fallback',
      avisoFallback:  true,
      ultimaFalha:    agora,
      erroScraping:   err.message,
      fontUrl:        DOCS_URL,
      utility:   { ...PRECOS_DEFAULT.utility,   consultadoEm: agora },
      marketing: { ...PRECOS_DEFAULT.marketing, consultadoEm: agora },
    };
    salvarCache(fallback);
    return fallback;
  }
}

// ── Agendamento diário ────────────────────────────────────────────────
function verificarEAtualizar() {
  const cache = lerCache();
  const agora = Date.now();
  const velhoOuAusente = !cache
    || !cache.atualizadoEm
    || (agora - new Date(cache.atualizadoEm).getTime()) > 24 * 60 * 60 * 1000;

  if (velhoOuAusente) {
    buscarPrecosMeta().catch(() => {});
  } else {
    console.log('[Preços] Cache válido, próxima atualização em ~'
      + Math.round((new Date(cache.atualizadoEm).getTime() + 86400000 - agora) / 3600000)
      + 'h');
  }
}

// Verifica na inicialização e a cada 24h
verificarEAtualizar();
setInterval(verificarEAtualizar, 24 * 60 * 60 * 1000);

// ── Servidor HTTP ─────────────────────────────────────────────────────
http.createServer((req, res) => {

  // GET /api/precos — retorna preços em cache (instantâneo)
  if (req.url === '/api/precos' && req.method === 'GET') {
    const dados = getCacheAtual();
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    });
    return res.end(JSON.stringify(dados));
  }

  // POST /api/precos/atualizar — força nova busca (botão "Atualizar agora")
  if (req.url === '/api/precos/atualizar' && req.method === 'POST') {
    buscarPrecosMeta()
      .then(dados => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(dados));
      })
      .catch(() => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(getCacheAtual()));
      });
    return;
  }

  // Arquivos estáticos
  const url      = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const filePath = path.join(DIR, url);
  try {
    const data = fs.readFileSync(filePath);
    const ext  = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('404 Not found');
  }

}).listen(PORT, '0.0.0.0', () => {
  // Descobre o IP local para exibir o endereço de rede
  const os = require('os');
  const ifaces = os.networkInterfaces();
  let ipLocal = 'localhost';
  Object.values(ifaces).flat().forEach(i => {
    if (i.family === 'IPv4' && !i.internal) ipLocal = i.address;
  });
  console.log('Templates WhatsApp rodando em:');
  console.log('  Local  : http://localhost:' + PORT);
  console.log('  Rede   : http://' + ipLocal + ':' + PORT);
});
