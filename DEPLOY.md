# Deploy — Templates WhatsApp Business

## 1. Criar repositório no GitHub

Acesse: https://github.com/new
- Repository name: `templates-whatsapp`
- Visibility: Public (necessário para Render gratuito)
- NÃO marque "Add README" (o código já está pronto)
- Clique em "Create repository"

## 2. Push do código

Abra o Git Bash dentro da pasta `C:\Users\User\TemplatesWhatsApp` e rode:

```bash
git remote add origin https://github.com/beernardoo/templates-whatsapp.git
git branch -M main
git push -u origin main
```

## 3. Deploy no Render (gratuito)

1. Acesse: https://render.com → "New +" → "Web Service"
2. Conecte sua conta GitHub
3. Selecione o repositório `templates-whatsapp`
4. Configure:
   - **Name**: templates-whatsapp
   - **Region**: Oregon (US West) ou São Paulo se disponível
   - **Branch**: main
   - **Runtime**: Node
   - **Build Command**: (deixe vazio)
   - **Start Command**: `node server.js`
   - **Plan**: Free
5. Clique em "Create Web Service"
6. Aguarde ~3 min para o primeiro deploy
7. URL pública gerada: `https://templates-whatsapp.onrender.com`

## Acesso local (sem internet)

- **Mesmo computador**: http://localhost:3031
- **Celular/outro PC na rede WiFi**: http://10.1.0.145:3031
  (use o atalho TemplatesWhatsApp.vbs na área de trabalho — ele mostra os IPs ao iniciar)

## Notas importantes

- O Render gratuito "dorme" após 15 min sem acesso (primeiro acesso demora ~30s para acordar)
- O NutriSaúde (Projeto01) fica em seu próprio repositório/URL — sem conflito
- Porta 3031 já liberada no Firewall do Windows para acesso na rede local
