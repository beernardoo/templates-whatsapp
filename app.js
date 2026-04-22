// ============================================================
// UTILITY — DADOS
// ============================================================
const TIPOS_UTILITY = [
  { id: 'confirmacao-contato',     label: 'Confirmação de Contato',     icon: '📋', justificativa: 'Mensagem transacional de confirmação de registro de atendimento. Contém apenas informação factual sobre o recebimento do contato, sem apelo comercial. Enquadra-se como Utility por notificar o cliente sobre uma ação operacional realizada.' },
  { id: 'atualizacao-status',      label: 'Atualização de Status',      icon: '🔄', justificativa: 'Notificação operacional de mudança de estado de solicitação. Transmite dado objetivo sobre o status atual de um processo em andamento, sem conteúdo promocional.' },
  { id: 'confirmacao-agendamento', label: 'Confirmação de Agendamento', icon: '📅', justificativa: 'Confirmação de evento previamente agendado pelo cliente. Contém dados objetivos de data, local e identificação, sem conteúdo persuasivo.' },
  { id: 'aviso-pagamento',         label: 'Aviso de Pagamento',         icon: '💳', justificativa: 'Notificação de cobrança operacional com dados financeiros factuais. Enquadra-se como Utility por tratar de débito existente e vencimento, sem persuasão de venda.' },
  { id: 'envio-documento',         label: 'Envio de Documento',         icon: '📄', justificativa: 'Notificação de envio de documento gerado em nome do cliente. Contém apenas dados de rastreamento e confirmação, sem conteúdo comercial.' },
  { id: 'atualizacao-cadastro',    label: 'Atualização de Cadastro',    icon: '👤', justificativa: 'Confirmação de alteração cadastral com dados operacionais. Enquadra-se como Utility por tratar de registro administrativo sem apelo comercial.' },
  { id: 'confirmacao-entrega',     label: 'Confirmação de Entrega',     icon: '📦', justificativa: 'Notificação de conclusão de entrega com dados de rastreamento. Mensagem transacional pura sem conteúdo promocional.' },
];

const VARIAVEIS_UTILITY = [
  { id: 'nome',       label: '{{nome}}',       desc: 'Nome do destinatário' },
  { id: 'empresa',    label: '{{empresa}}',    desc: 'Nome da empresa' },
  { id: 'valor',      label: '{{valor}}',      desc: 'Valor monetário' },
  { id: 'data',       label: '{{data}}',       desc: 'Data ou data/hora' },
  { id: 'protocolo',  label: '{{protocolo}}',  desc: 'Número de protocolo' },
  { id: 'status',     label: '{{status}}',     desc: 'Status atual' },
  { id: 'vencimento', label: '{{vencimento}}', desc: 'Data de vencimento' },
];

const TEMPLATES_UTILITY = {
  'confirmacao-contato': [
    "Confirmamos o recebimento do seu contato[?nome], {{nome}}[/?nome].[?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?data] Data de registro: {{data}}.[/?data] Nossa equipe dará retorno em breve.[?empresa] — {{empresa}}[/?empresa]",
    "Seu contato foi recebido e registrado em nosso sistema.[?nome] Identificação: {{nome}}.[/?nome][?protocolo] Protocolo de atendimento: {{protocolo}}.[/?protocolo][?data] Data: {{data}}.[/?data] Em breve um atendente retornará.",
    "Registramos seu contato com sucesso.[?nome] Nome: {{nome}}.[/?nome][?data] Data: {{data}}.[/?data][?protocolo] Protocolo: {{protocolo}}.[/?protocolo] Aguarde o retorno da nossa equipe.[?empresa] Equipe {{empresa}}.[/?empresa]",
    "Aviso de registro: seu contato foi recebido.[?data] Registrado em: {{data}}.[/?data][?nome] Cliente: {{nome}}.[/?nome][?protocolo] Nº do protocolo: {{protocolo}}.[/?protocolo] O retorno será realizado pela equipe responsável.[?empresa] — {{empresa}} Atendimento[/?empresa]",
    "Seu contato foi registrado e encaminhado para análise.[?nome] Titular: {{nome}}.[/?nome][?empresa] Empresa: {{empresa}}.[/?empresa][?protocolo] Protocolo gerado: {{protocolo}}.[/?protocolo][?data] Data: {{data}}.[/?data] Retornaremos assim que possível.",
  ],
  'atualizacao-status': [
    "Atualização de status[?nome] — {{nome}}[/?nome].[?status] Situação atual: {{status}}.[/?status][?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?data] Atualizado em: {{data}}.[/?data][?empresa] — {{empresa}}[/?empresa]",
    "Informamos que o status da sua solicitação foi atualizado.[?status] Status atual: {{status}}.[/?status][?nome] Cliente: {{nome}}.[/?nome][?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?data] Data: {{data}}.[/?data]",
    "O status do seu pedido foi alterado em nosso sistema.[?nome] Titular: {{nome}}.[/?nome][?status] Novo status: {{status}}.[/?status][?protocolo] Nº do protocolo: {{protocolo}}.[/?protocolo][?empresa] — {{empresa}}[/?empresa]",
    "Notificação de atualização:[?nome] {{nome}},[/?nome] o status da sua solicitação foi modificado.[?status] Status: {{status}}.[/?status][?data] Data: {{data}}.[/?data][?protocolo] Protocolo de referência: {{protocolo}}.[/?protocolo]",
    "Status atualizado em nosso sistema.[?protocolo] Protocolo {{protocolo}}.[/?protocolo][?nome] Cliente: {{nome}}.[/?nome][?status] Situação atual: {{status}}.[/?status][?data] Registro em: {{data}}.[/?data][?empresa] Equipe {{empresa}}[/?empresa]",
  ],
  'confirmacao-agendamento': [
    "Seu agendamento foi confirmado.[?nome] Cliente: {{nome}}.[/?nome][?data] Data e horário: {{data}}.[/?data][?empresa] Local: {{empresa}}.[/?empresa][?protocolo] Protocolo: {{protocolo}}.[/?protocolo] Compareça no horário agendado.",
    "Confirmamos o agendamento solicitado.[?nome] Nome: {{nome}}.[/?nome][?data] Agendado para: {{data}}.[/?data][?protocolo] Código: {{protocolo}}.[/?protocolo][?empresa] — {{empresa}}[/?empresa]",
    "Agendamento registrado e confirmado.[?data] Data: {{data}}.[/?data][?nome] Titular: {{nome}}.[/?nome][?empresa] Unidade: {{empresa}}.[/?empresa][?protocolo] Protocolo: {{protocolo}}.[/?protocolo] Em caso de impedimento, solicite o reagendamento.",
    "Notificação de agendamento: confirmado.[?nome] Cliente: {{nome}}.[/?nome][?data] Horário: {{data}}.[/?data][?empresa] Local: {{empresa}}.[/?empresa][?protocolo] Referência: {{protocolo}}.[/?protocolo]",
    "Seu agendamento está confirmado.[?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?nome] Nome: {{nome}}.[/?nome][?data] Data/hora: {{data}}.[/?data][?empresa] Unidade: {{empresa}}.[/?empresa] Leve documento de identificação.",
  ],
  'aviso-pagamento': [
    "Aviso de pagamento.[?nome] Cliente: {{nome}}.[/?nome][?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Vencimento: {{vencimento}}.[/?vencimento][?protocolo] Referência: {{protocolo}}.[/?protocolo][?empresa] — {{empresa}}[/?empresa]",
    "Informamos que existe um pagamento registrado em seu cadastro.[?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Data de vencimento: {{vencimento}}.[/?vencimento][?nome] Titular: {{nome}}.[/?nome][?protocolo] Protocolo: {{protocolo}}.[/?protocolo]",
    "Notificação de cobrança registrada.[?nome] Cliente: {{nome}}.[/?nome][?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Vencimento: {{vencimento}}.[/?vencimento][?empresa] Empresa: {{empresa}}.[/?empresa][?protocolo] Protocolo: {{protocolo}}.[/?protocolo]",
    "Aviso financeiro: pagamento pendente.[?nome] Titular: {{nome}}.[/?nome][?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Vencimento: {{vencimento}}.[/?vencimento][?protocolo] Nº de referência: {{protocolo}}.[/?protocolo]",
    "Seu pagamento está registrado como pendente.[?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?nome] Titular: {{nome}}.[/?nome][?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Vencimento: {{vencimento}}.[/?vencimento][?empresa] — {{empresa}} Financeiro[/?empresa]",
  ],
  'envio-documento': [
    "Documento enviado com sucesso.[?nome] Destinatário: {{nome}}.[/?nome][?data] Data de envio: {{data}}.[/?data][?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?empresa] Remetente: {{empresa}}.[/?empresa]",
    "Informamos que um documento foi encaminhado para você.[?nome] Nome: {{nome}}.[/?nome][?data] Data: {{data}}.[/?data][?protocolo] Código do envio: {{protocolo}}.[/?protocolo] Verifique seu e-mail ou acesse o portal.[?empresa] — {{empresa}}[/?empresa]",
    "Envio de documento registrado.[?data] Data de emissão: {{data}}.[/?data][?nome] Destinatário: {{nome}}.[/?nome][?protocolo] Protocolo de envio: {{protocolo}}.[/?protocolo][?empresa] Emitido por: {{empresa}}.[/?empresa] Em caso de não recebimento, entre em contato.",
    "Notificação de documento: enviado.[?nome] Titular: {{nome}}.[/?nome][?protocolo] Referência: {{protocolo}}.[/?protocolo][?data] Data: {{data}}.[/?data][?empresa] — {{empresa}}[/?empresa] Guarde este registro.",
    "Um documento foi gerado e encaminhado ao seu cadastro.[?protocolo] Nº: {{protocolo}}.[/?protocolo][?nome] Cliente: {{nome}}.[/?nome][?empresa] Emitido por: {{empresa}}.[/?empresa][?data] Data: {{data}}.[/?data]",
  ],
  'atualizacao-cadastro': [
    "Seu cadastro foi atualizado com sucesso.[?nome] Titular: {{nome}}.[/?nome][?data] Data: {{data}}.[/?data][?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?empresa] — {{empresa}}[/?empresa]",
    "Informamos que os dados do seu cadastro foram alterados.[?nome] Nome: {{nome}}.[/?nome][?data] Atualizado em: {{data}}.[/?data][?protocolo] Nº de protocolo: {{protocolo}}.[/?protocolo] Se não reconhecer esta alteração, entre em contato.",
    "Atualização cadastral concluída.[?nome] Cliente: {{nome}}.[/?nome][?empresa] Empresa: {{empresa}}.[/?empresa][?data] Data: {{data}}.[/?data][?protocolo] Protocolo: {{protocolo}}.[/?protocolo]",
    "Notificação: cadastro atualizado.[?nome] Titular: {{nome}}.[/?nome][?data] Modificado em: {{data}}.[/?data][?protocolo] Referência: {{protocolo}}.[/?protocolo][?empresa] — {{empresa}} Cadastro[/?empresa]",
    "Confirmamos a atualização do seu perfil cadastral.[?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?nome] Nome: {{nome}}.[/?nome][?data] Data: {{data}}.[/?data][?empresa] Sistema {{empresa}}[/?empresa]",
  ],
  'confirmacao-entrega': [
    "Entrega confirmada.[?nome] Destinatário: {{nome}}.[/?nome][?data] Data de entrega: {{data}}.[/?data][?protocolo] Rastreamento: {{protocolo}}.[/?protocolo][?empresa] — {{empresa}}[/?empresa]",
    "Informamos que a entrega foi realizada com sucesso.[?nome] Nome: {{nome}}.[/?nome][?data] Entregue em: {{data}}.[/?data][?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?empresa] — {{empresa}}[/?empresa]",
    "Sua entrega foi concluída e registrada.[?data] Data: {{data}}.[/?data][?nome] Destinatário: {{nome}}.[/?nome][?protocolo] Nº de rastreio: {{protocolo}}.[/?protocolo] Em caso de divergência, entre em contato.[?empresa] — {{empresa}}[/?empresa]",
    "Notificação de entrega: concluída.[?nome] Cliente: {{nome}}.[/?nome][?protocolo] Protocolo: {{protocolo}}.[/?protocolo][?data] Data/hora: {{data}}.[/?data][?empresa] — {{empresa}} Logística[/?empresa]",
    "Entrega registrada como concluída.[?protocolo] Rastreamento: {{protocolo}}.[/?protocolo][?nome] Titular: {{nome}}.[/?nome][?data] Data: {{data}}.[/?data][?empresa] — {{empresa}}[/?empresa] Guarde este comprovante.",
  ],
};

// ============================================================
// MARKETING — DADOS
// ============================================================
const TIPOS_MARKETING = [
  { id: 'cobranca-amigavel',    label: 'Cobrança Amigável',     icon: '💬', justificativa: 'Template de cobrança com apelo persuasivo e call-to-action direto. Categoria Marketing por usar linguagem de pressão positiva. Requer opt-in ativo do destinatário e aprovação no canal Marketing do WhatsApp Business.' },
  { id: 'cobranca-urgente',     label: 'Cobrança Urgente',      icon: '⚠️', justificativa: 'Template de cobrança com senso de urgência. Categoria Marketing por linguagem mais pressiva. Evite termos ameaçadores que possam ser interpretados como coação, pois podem ser rejeitados pelo WhatsApp.' },
  { id: 'aviso-desconto',       label: 'Aviso de Desconto',     icon: '🏷️', justificativa: 'Template promocional com oferta de desconto. Categoria Marketing por conter benefício comercial. Requer opt-in ativo. Indique sempre a validade da oferta para aumentar a taxa de aprovação.' },
  { id: 'promocao-relampago',   label: 'Promoção Relâmpago',    icon: '⚡', justificativa: 'Template de promoção com urgência temporal definida. Categoria Marketing. Prazos claros e definidos aumentam a probabilidade de aprovação pelo WhatsApp Business.' },
  { id: 'oferta-exclusiva',     label: 'Oferta Exclusiva',      icon: '🎁', justificativa: 'Template de oferta personalizada ao destinatário. Categoria Marketing. Evite termos como "selecionado" ou "escolhido" que soam como spam.' },
  { id: 'recuperacao-cliente',  label: 'Recuperação de Cliente',icon: '🔄', justificativa: 'Template de reengajamento de cliente inativo. Categoria Marketing. O WhatsApp exige opt-in válido e pode rejeitar se o cliente não tiver interagido recentemente.' },
  { id: 'campanha-fidelidade',  label: 'Campanha de Fidelidade',icon: '⭐', justificativa: 'Template de programa de fidelidade. Categoria Marketing. Mensagens de fidelidade têm boa taxa de aprovação por demonstrar valor real ao cliente cadastrado.' },
];

const VARIAVEIS_MARKETING = [
  { id: 'nome',       label: '{{nome}}',       desc: 'Nome do destinatário' },
  { id: 'empresa',    label: '{{empresa}}',    desc: 'Nome da empresa' },
  { id: 'valor',      label: '{{valor}}',      desc: 'Valor monetário' },
  { id: 'vencimento', label: '{{vencimento}}', desc: 'Data de vencimento' },
  { id: 'desconto',   label: '{{desconto}}',   desc: 'Percentual de desconto' },
  { id: 'produto',    label: '{{produto}}',    desc: 'Produto ou serviço' },
  { id: 'codigo',     label: '{{codigo}}',     desc: 'Código promocional' },
  { id: 'link',       label: '{{link}}',       desc: 'Link de acesso' },
  { id: 'prazo',      label: '{{prazo}}',      desc: 'Prazo da oferta' },
];

const TEMPLATES_MARKETING = {
  'cobranca-amigavel': [
    "Olá[?nome], {{nome}}[/?nome]! Você tem um pagamento em aberto[?valor] de R$ {{valor}}[/?valor][?vencimento] com vencimento em {{vencimento}}[/?vencimento]. Regularize agora para evitar encargos adicionais.[?link] Pague aqui: {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Atenção[?nome], {{nome}}[/?nome]: identificamos um débito pendente.[?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Vence em: {{vencimento}}.[/?vencimento] Regularize antes do prazo e evite juros.[?empresa] — {{empresa}}[/?empresa]",
    "Lembrete de pagamento[?nome] para {{nome}}[/?nome]: boleto aguardando liquidação.[?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Prazo final: {{vencimento}}.[/?vencimento] Não deixe acumular juros.[?link] {{link}}[/?link]",
    "Olá[?nome], {{nome}}[/?nome]! Sua conta apresenta débito em aberto.[?valor] R$ {{valor}}[/?valor][?vencimento] — vencendo em {{vencimento}}.[/?vencimento] Quite agora e mantenha seu cadastro em dia.[?link] {{link}}[/?link]",
    "Aviso financeiro[?nome] — {{nome}}[/?nome]: pagamento pendente em seu cadastro.[?valor] Valor: R$ {{valor}}.[/?valor][?vencimento] Data limite: {{vencimento}}.[/?vencimento] Regularize para evitar restrições.[?empresa] — {{empresa}} Financeiro[/?empresa]",
  ],
  'cobranca-urgente': [
    "Atenção[?nome], {{nome}}[/?nome]: seu débito está vencido.[?valor] Valor: R$ {{valor}}.[/?valor] Regularize imediatamente para evitar encargos e restrições cadastrais.[?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Aviso de inadimplência[?nome] — {{nome}}[/?nome]. Pagamento em atraso[?valor] de R$ {{valor}}[/?valor]. Regularize para evitar negativação.[?link] {{link}}[/?link]",
    "Sua conta está em atraso[?nome], {{nome}}[/?nome].[?valor] Valor vencido: R$ {{valor}}.[/?valor] A regularização evita encargos adicionais e restrições. Entre em contato hoje.[?empresa] — {{empresa}}[/?empresa]",
    "Débito vencido[?nome] — {{nome}}[/?nome].[?valor] R$ {{valor}}[/?valor] em atraso.[?vencimento] Vencido em: {{vencimento}}.[/?vencimento] Regularize agora ou negocie.[?link] {{link}}[/?link]",
    "Último aviso de cobrança[?nome] — {{nome}}[/?nome].[?valor] Valor: R$ {{valor}}.[/?valor] Pendência pode resultar em restrições ao seu CPF/CNPJ.[?link] {{link}}[/?link][?empresa] — {{empresa}} Cobrança[/?empresa]",
  ],
  'aviso-desconto': [
    "Novidade[?nome] para você, {{nome}}[/?nome]![?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% de desconto[/?desconto].[?prazo] Válido até {{prazo}}.[/?prazo][?codigo] Código: {{codigo}}.[/?codigo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Olá[?nome], {{nome}}[/?nome]! Oferta especial para você.[?produto] {{produto}}[/?produto][?desconto] por {{desconto}}% a menos.[/?desconto][?prazo] Até {{prazo}}.[/?prazo][?codigo] Cupom: {{codigo}}.[/?codigo][?link] {{link}}[/?link]",
    "🎉 Desconto disponível[?nome] para {{nome}}[/?nome]![?produto] {{produto}}[/?produto][?desconto] — {{desconto}}% OFF.[/?desconto][?prazo] Até {{prazo}}.[/?prazo][?codigo] Cupom: {{codigo}}.[/?codigo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Sua oferta está esperando[?nome], {{nome}}[/?nome].[?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% de desconto.[/?desconto][?prazo] Válida até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Desconto disponível em seu cadastro[?nome], {{nome}}[/?nome].[?produto] {{produto}}.[/?produto][?desconto] Desconto: {{desconto}}%.[/?desconto][?codigo] Código: {{codigo}}.[/?codigo][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
  ],
  'promocao-relampago': [
    "⚡ Promoção relâmpago[?nome] para {{nome}}[/?nome]![?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% OFF.[/?desconto][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Atenção[?nome], {{nome}}[/?nome]: promoção por tempo limitado![?produto] {{produto}}[/?produto][?desconto] {{desconto}}% de desconto.[/?desconto][?prazo] Somente até {{prazo}}.[/?prazo][?codigo] Código: {{codigo}}.[/?codigo][?link] {{link}}[/?link]",
    "Oferta por tempo limitado[?nome] para {{nome}}[/?nome].[?produto] {{produto}}[/?produto][?desconto] — {{desconto}}% OFF.[/?desconto][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "🔥 Desconto relâmpago[?nome] para {{nome}}[/?nome].[?produto] {{produto}}[/?produto][?desconto] {{desconto}}% menos[/?desconto][?prazo] — até {{prazo}}.[/?prazo][?codigo] Cupom: {{codigo}}.[/?codigo][?link] {{link}}[/?link]",
    "Promoção exclusiva com prazo definido[?nome] para {{nome}}[/?nome].[?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% de desconto.[/?desconto][?prazo] Encerra em {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
  ],
  'oferta-exclusiva': [
    "Olá[?nome], {{nome}}[/?nome]! Oferta exclusiva disponível para você.[?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% de desconto.[/?desconto][?prazo] Válida até {{prazo}}.[/?prazo][?codigo] Código: {{codigo}}.[/?codigo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Oferta especial[?nome] para {{nome}}[/?nome]![?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% OFF.[/?desconto][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Prezado(a)[?nome] {{nome}}[/?nome], condição diferenciada disponível.[?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% de benefício.[/?desconto][?prazo] Válido até {{prazo}}.[/?prazo][?codigo] Código: {{codigo}}.[/?codigo][?empresa] — {{empresa}}[/?empresa]",
    "Condição exclusiva[?nome] para você, {{nome}}[/?nome].[?produto] {{produto}}[/?produto][?desconto] — {{desconto}}% de desconto.[/?desconto][?codigo] Use: {{codigo}}.[/?codigo][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Benefício disponível no seu cadastro[?nome], {{nome}}[/?nome].[?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% OFF.[/?desconto][?prazo] Até {{prazo}}.[/?prazo][?codigo] Código: {{codigo}}.[/?codigo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
  ],
  'recuperacao-cliente': [
    "Olá[?nome], {{nome}}[/?nome]! Sentimos sua falta.[?empresa] A {{empresa}}[/?empresa] tem condição especial para você voltar.[?desconto] {{desconto}}% de desconto[/?desconto][?produto] em {{produto}}[/?produto].[?prazo] Válido até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Olá[?nome], {{nome}}[/?nome]! Oferta de retorno para você.[?produto] {{produto}}[/?produto][?desconto] com {{desconto}}% de desconto.[/?desconto][?codigo] Código exclusivo: {{codigo}}.[/?codigo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Faz tempo que não nos vemos[?nome], {{nome}}[/?nome]![?empresa] A {{empresa}}[/?empresa] preparou condição especial para te receber de volta.[?desconto] {{desconto}}% OFF[/?desconto][?produto] em {{produto}}[/?produto].[?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Temos saudade de você[?nome], {{nome}}[/?nome]![?desconto] {{desconto}}% de desconto[/?desconto][?produto] em {{produto}}[/?produto] na sua volta.[?codigo] Código: {{codigo}}.[/?codigo][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Olá[?nome], {{nome}}[/?nome]! Benefício especial de retorno.[?empresa] A {{empresa}}[/?empresa] aguarda você.[?desconto] {{desconto}}% OFF[/?desconto][?produto] em {{produto}}[/?produto].[?codigo] Código: {{codigo}}.[/?codigo][?link] {{link}}[/?link]",
  ],
  'campanha-fidelidade': [
    "Olá[?nome], {{nome}}[/?nome]! Você tem benefícios acumulados no programa de fidelidade.[?desconto] Desconto de {{desconto}}%[/?desconto][?produto] em {{produto}}[/?produto].[?prazo] Use até {{prazo}}.[/?prazo][?codigo] Código: {{codigo}}.[/?codigo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Parabéns[?nome], {{nome}}[/?nome]! Você é um cliente especial.[?empresa] Na {{empresa}},[/?empresa] clientes fiéis têm condições diferenciadas.[?desconto] {{desconto}}% OFF[/?desconto][?produto] em {{produto}}[/?produto].[?codigo] Use: {{codigo}}.[/?codigo][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Novidades no seu programa de fidelidade[?nome], {{nome}}[/?nome]![?desconto] {{desconto}}% de desconto[/?desconto][?produto] em {{produto}}[/?produto].[?prazo] Expira em {{prazo}}.[/?prazo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
    "Obrigado pela sua fidelidade[?nome], {{nome}}[/?nome]![?empresa] A {{empresa}}[/?empresa] tem um presente.[?desconto] {{desconto}}% OFF[/?desconto][?produto] em {{produto}}[/?produto].[?codigo] Código: {{codigo}}.[/?codigo][?prazo] Até {{prazo}}.[/?prazo][?link] {{link}}[/?link]",
    "Como cliente fiel[?nome], {{nome}}[/?nome],[?desconto] você ganhou {{desconto}}% de desconto[/?desconto][?produto] em {{produto}}[/?produto].[?prazo] Até {{prazo}}.[/?prazo][?codigo] Código: {{codigo}}.[/?codigo][?link] {{link}}[/?link][?empresa] — {{empresa}}[/?empresa]",
  ],
};

// ============================================================
// VALIDAÇÃO DE RISCO
// ============================================================
const RISCO_UTILITY = {
  alto:  ['oferta', 'promoção', 'desconto', 'grátis', 'gratuito', 'exclusivo', 'aproveite',
          'não perca', 'clique aqui', 'assine agora', 'compre', 'ganhe', 'lucro',
          'oportunidade', 'imperdível', 'acesse agora', 'frete grátis', 'black friday', 'cashback'],
  medio: ['saiba mais', 'conheça nossos', 'descubra', 'veja mais', 'para saber mais', 'não deixe de'],
};

const RISCO_MARKETING = {
  alto:  ['você foi selecionado', 'prêmio garantido', 'ganhe dinheiro', 'renda extra',
          'sorteio', 'milagre', 'resultado garantido', 'enriqueça'],
  medio: ['último aviso', 'encaminharemos ao jurídico', 'órgãos de proteção ao crédito', 'ação judicial'],
};

function avaliarRisco(texto, categoria) {
  const t = texto.toLowerCase();
  const regras = categoria === 'marketing' ? RISCO_MARKETING : RISCO_UTILITY;
  for (const w of regras.alto)
    if (t.includes(w)) return { nivel: 'alto',  label: 'ALTO',  motivo: `Contém termo de alto risco: "${w}". Alta chance de rejeição.` };
  for (const w of regras.medio)
    if (t.includes(w)) return { nivel: 'medio', label: 'MÉDIO', motivo: `Expressão sensível: "${w}". Revise antes de submeter.` };
  return categoria === 'utility'
    ? { nivel: 'baixo', label: 'BAIXO', motivo: 'Linguagem neutra, operacional e factual. Alta probabilidade de aprovação.' }
    : { nivel: 'baixo', label: 'BAIXO', motivo: 'Linguagem marketing padrão sem termos de spam. Probabilidade razoável com opt-in válido.' };
}

// ============================================================
// MOTOR DE TEMPLATES
// ============================================================
function renderizarTemplate(tmpl, vars) {
  let r = tmpl.replace(/\[\?(\w+)\]([\s\S]*?)\[\/\?\1\]/g, (_, v, c) => vars.includes(v) ? c : '');
  r = r.replace(/\{\{(\w+)\}\}/g, '<code>{{$1}}</code>');
  return r.replace(/\s+([.,!?;:])/g, '$1').replace(/\s+/g, ' ').trim();
}

function textoPlano(tmpl, vars) {
  let r = tmpl.replace(/\[\?(\w+)\]([\s\S]*?)\[\/\?\1\]/g, (_, v, c) => vars.includes(v) ? c : '');
  return r.replace(/\s+([.,!?;:])/g, '$1').replace(/\s+/g, ' ').trim();
}

// ============================================================
// ESTADO
// ============================================================
const estado = {
  categoria:        null,
  tipoSelecionado:  null,
  varsSelecionadas: [],
  templatesGerados: [],
};

function getDados() {
  return estado.categoria === 'marketing'
    ? { tipos: TIPOS_MARKETING, variaveis: VARIAVEIS_MARKETING, templates: TEMPLATES_MARKETING }
    : { tipos: TIPOS_UTILITY,   variaveis: VARIAVEIS_UTILITY,   templates: TEMPLATES_UTILITY };
}

// ============================================================
// NAVEGAÇÃO
// ============================================================
function irParaStep(step) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  document.getElementById(`panel-${step}`).classList.remove('hidden');

  const stepsBar = document.getElementById('steps-bar');
  if (step >= 1 && step <= 3) {
    stepsBar.classList.remove('hidden');
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active', 'done'));
    for (let i = 1; i < step; i++) document.getElementById(`step-indicator-${i}`)?.classList.add('done');
    document.getElementById(`step-indicator-${step}`)?.classList.add('active');
  } else {
    stepsBar.classList.add('hidden');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// DEFINIR CATEGORIA (atualiza badge e cores)
// ============================================================
function definirCategoria(cat) {
  estado.categoria = cat;
  const app   = document.getElementById('app');
  const badge = document.getElementById('categoria-badge');
  if (cat === 'marketing') {
    app.classList.add('modo-marketing');
    badge.textContent = 'Categoria: MARKETING';
    badge.style.cssText = 'background:rgba(245,158,11,0.12);color:#f59e0b;border-color:rgba(245,158,11,0.3)';
  } else {
    app.classList.remove('modo-marketing');
    badge.textContent = 'Categoria: UTILITY';
    badge.style.cssText = 'background:rgba(57,211,83,0.12);color:#39d353;border-color:rgba(57,211,83,0.3)';
  }
}

// ============================================================
// STEP 1: TIPOS
// ============================================================
function renderizarTipos() {
  const { tipos } = getDados();
  const grid = document.getElementById('tipos-grid');
  const cat  = estado.categoria;
  const desc = document.getElementById('panel-1-desc');
  desc.innerHTML = cat === 'marketing'
    ? 'Templates <strong>Marketing</strong> — com apelo comercial e cobrança ativa.'
    : 'Templates <strong>Utility</strong> — operacionais, transacionais e sem apelo comercial.';

  grid.innerHTML = tipos.map(t => `
    <button class="tipo-card" data-id="${t.id}">
      <span class="tipo-icon">${t.icon}</span>
      <span class="tipo-label">${t.label}</span>
    </button>`).join('');

  grid.addEventListener('click', function h(e) {
    const card = e.target.closest('.tipo-card');
    if (!card) return;
    grid.removeEventListener('click', h);
    selecionarTipo(card.dataset.id);
  });
}

function selecionarTipo(id) {
  estado.tipoSelecionado = id;
  estado.varsSelecionadas = [];
  const tipo = getDados().tipos.find(t => t.id === id);
  document.getElementById('panel-2-title').textContent = tipo.label;
  renderizarVariaveis();
  irParaStep(2);
}

// ============================================================
// STEP 2: VARIÁVEIS
// ============================================================
function renderizarVariaveis() {
  const { variaveis } = getDados();
  const grid = document.getElementById('variaveis-grid');
  grid.innerHTML = variaveis.map(v => `
    <div class="variavel-chip" data-id="${v.id}">
      <span class="var-label">${v.label}</span>
      <span class="var-desc">${v.desc}</span>
    </div>`).join('');
  grid.querySelectorAll('.variavel-chip').forEach(c =>
    c.addEventListener('click', () => toggleVariavel(c.dataset.id, c)));
  atualizarContador();
}

function toggleVariavel(id, chip) {
  if (estado.varsSelecionadas.includes(id)) {
    estado.varsSelecionadas = estado.varsSelecionadas.filter(v => v !== id);
    chip.classList.remove('selected');
  } else {
    estado.varsSelecionadas.push(id);
    chip.classList.add('selected');
  }
  atualizarContador();
}

function atualizarContador() {
  const n = estado.varsSelecionadas.length;
  document.getElementById('vars-selected-count').textContent =
    n === 0 ? 'Nenhuma variável selecionada' : n === 1 ? '1 variável selecionada' : `${n} variáveis selecionadas`;
}

// ============================================================
// STEP 3: RENDERIZAR TEMPLATES GERADOS
// ============================================================
function renderizarResultados(metaHTML, justHTML, justBg, justColor) {
  document.getElementById('result-meta').innerHTML = metaHTML;

  const jBox = document.getElementById('justificativa-box');
  jBox.style.background = justBg;
  jBox.innerHTML = justHTML;

  const grid = document.getElementById('templates-grid');
  grid.innerHTML = estado.templatesGerados.map(t => {
    const chars = t.texto.length;
    return `
      <div class="template-card risco-${t.risco.nivel}">
        <div class="template-header">
          <span class="template-num">Variação ${t.idx}</span>
          <span class="risco-badge risco-${t.risco.nivel}">${t.risco.label}</span>
        </div>
        <div class="template-body"><p class="template-text">${t.html}</p></div>
        <div class="template-meta-row">
          <span class="char-count ${chars > 1024 ? 'over' : ''}">${chars} caracteres${chars > 1024 ? ' ⚠ limite excedido' : ''}</span>
        </div>
        <div class="template-footer">
          <span class="risco-motivo">${t.risco.motivo}</span>
          <button class="btn-copy" data-idx="${t.idx - 1}">Copiar</button>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.btn-copy').forEach(btn =>
    btn.addEventListener('click', () => {
      const t = estado.templatesGerados[parseInt(btn.dataset.idx)];
      navigator.clipboard.writeText(t.texto).then(() => {
        btn.textContent = 'Copiado!'; btn.classList.add('copied');
        mostrarToast('Template copiado!');
        setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
      });
    }));
}

function gerarTemplates() {
  const { tipos, templates } = getDados();
  const tipo = tipos.find(t => t.id === estado.tipoSelecionado);
  const cat  = estado.categoria;
  const vars = estado.varsSelecionadas;

  estado.templatesGerados = templates[estado.tipoSelecionado].map((raw, i) => ({
    idx: i + 1, html: renderizarTemplate(raw, vars),
    texto: textoPlano(raw, vars), risco: avaliarRisco(textoPlano(raw, vars), cat),
  }));

  const catLabel = cat === 'marketing' ? '📢 MARKETING' : '✅ UTILITY';
  const cor      = cat === 'marketing' ? '#f59e0b' : '#39d353';
  const bg       = cat === 'marketing' ? 'rgba(245,158,11,0.08)' : 'rgba(57,211,83,0.08)';
  const jLabel   = cat === 'marketing' ? 'Justificativa Marketing' : 'Justificativa Utility';

  renderizarResultados(
    `<span class="meta-tag">${catLabel}</span>
     <span class="meta-tag">${tipo.icon} ${tipo.label}</span>
     <span class="meta-vars">${vars.length ? vars.map(v => `<code>{{${v}}}</code>`).join('') : '<em>sem variáveis</em>'}</span>`,
    `<div class="justificativa-icon">ℹ️</div>
     <div><strong style="color:${cor}">${jLabel}</strong><p>${tipo.justificativa}</p></div>`,
    bg, cor
  );
  irParaStep(3);
}

// ============================================================
// PANEL 4: VARIAÇÕES A PARTIR DE FRASEOLOGIA PRÓPRIA
// ============================================================
function limparTextoUtility(texto) {
  let t = texto;
  // Aplica todas as substituições de risco
  for (const [orig, sub] of Object.entries(SUBSTITUICOES)) {
    const esc = orig.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    t = t.replace(new RegExp(esc, 'gi'), sub);
  }
  // Remove exclamações excessivas
  t = t.replace(/!{2,}/g, '.').replace(/([^!])!/g, '$1.');
  // Normaliza pontuação e espaços
  t = t.replace(/\s+([.,;:])/g, '$1')
       .replace(/([.,;:])\s*[!?.,;:]/g, '$1')
       .replace(/\s{2,}/g, ' ')
       .replace(/^[,!?;:\s]+/, '')
       .trim();
  return t;
}

function criarVariacoes(texto, cat) {
  let t = texto.trim();

  // Para utility: limpar linguagem comercial antes de gerar variações
  if (cat === 'utility') t = limparTextoUtility(t);

  // Remove saudação + nome: "Olá, JOAO," → resto do texto
  const sem = t
    .replace(/^(olá[,!]?\s*|oi[,!]?\s*|prezado\(a\)[,!]?\s*|prezado[,!]?\s*|bom dia[,!]?\s*|boa tarde[,!]?\s*|boa noite[,!]?\s*)/i, '')
    .replace(/^([A-Za-záéíóúàâêîôûãõçÁÉÍÓÚÀÂÊÎÔÛÃÕÇ]+[,!]?\s*)/, '')
    .trim();

  const uc  = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  const pt  = s => s && !/[.!?]$/.test(s) ? s + '.' : s;
  const lc  = s => s.charAt(0).toLowerCase() + s.slice(1);
  const core = pt(uc(sem));

  if (cat === 'utility') {
    return [
      pt(sem),
      core,
      pt('Informamos que ' + lc(sem)),
      pt('Comunicamos que ' + lc(sem)),
      pt('Notificamos: ' + core),
    ];
  } else {
    return [
      pt(t),
      pt(core + '. Não perca essa oportunidade'),
      pt('Atenção! ' + core),
      pt(core + '. Entre em contato agora'),
      pt('Oferta especial: ' + lc(sem)),
    ];
  }
}

function gerarVariacoesDeTexto() {
  const texto = document.getElementById('textarea-fraseologia').value.trim();
  if (!texto) { mostrarToast('Cole uma fraseologia primeiro!'); return; }

  const cat = estado.categoria;
  const variacoes = criarVariacoes(texto, cat);

  estado.templatesGerados = variacoes.map((v, i) => ({
    idx: i + 1,
    html: v.replace(/\{\{(\w+)\}\}/g, '<code>{{$1}}</code>'),
    texto: v,
    risco: avaliarRisco(v, cat),
  }));

  const catLabel = cat === 'marketing' ? '📢 MARKETING' : '✅ UTILITY';
  const cor  = cat === 'marketing' ? '#f59e0b' : '#39d353';
  const bg   = cat === 'marketing' ? 'rgba(245,158,11,0.08)' : 'rgba(57,211,83,0.08)';

  renderizarResultados(
    `<span class="meta-tag">${catLabel}</span>
     <span class="meta-tag">📝 A partir da sua fraseologia</span>`,
    `<div class="justificativa-icon">📝</div>
     <div><strong style="color:${cor}">Variações geradas</strong>
     <p>5 variações estruturais mantendo a essência da mensagem original, com ajustes de prefixo, formalidade e estrutura de frase.</p></div>`,
    bg, cor
  );

  // Ajustar botão "← Alterar variáveis" para voltar ao painel 4
  document.getElementById('btn-back-2').onclick = () => irParaStep(4);
  irParaStep(3);
}

// ============================================================
// PANEL 5: ANALISAR PROBABILIDADE UTILITY — ENGINE V2
// ============================================================

// --- Camada 2: Palavras de risco ---
const PALAVRAS_ALTAS_UTIL = [
  'oferta', 'promoção', 'desconto', 'grátis', 'gratuito', 'exclusivo',
  'aproveite', 'não perca', 'clique aqui', 'compre', 'ganhe', 'lucro',
  'imperdível', 'acesse agora', 'frete grátis', 'black friday', 'cashback',
  'cupom', 'sorteio', 'bônus', 'prêmio', 'ganhou', 'brinde', 'grátis',
];
const PALAVRAS_MEDIAS_UTIL = [
  'saiba mais', 'conheça', 'descubra', 'veja mais', 'acesse o site',
  'clique', 'não deixe de', 'oportunidade', 'benefício', 'vantagem',
];

// --- Camada 1: Intenção ---
const PALAVRAS_OPERACIONAIS = [
  'protocolo', 'agendamento', 'entrega', 'documento', 'atualização', 'status',
  'cadastro', 'notificamos', 'comunicamos', 'comprovante', 'vencimento',
  'informamos', 'confirmamos', 'registrado', 'pagamento', 'fatura', 'boleto',
  'pedido', 'solicitação', 'atendimento', 'chamado', 'ticket', 'contrato',
];
const PALAVRAS_COMERCIAIS = [
  'produto', 'loja', 'compra', 'venda', 'plano', 'assinatura', 'pacote',
  'preço', 'valor', 'oferta', 'promoção', 'desconto', 'serviço',
];

// --- Camada 4: Tom ---
const PALAVRAS_URGENCIA = [
  'agora', 'urgente', 'expira', 'vence hoje', 'imediato', 'imediatamente',
  'última chance', 'só hoje', 'corre', 'rapidinho',
];

const SUBSTITUICOES = {
  // Frases longas primeiro (prioridade por comprimento)
  'não perca essa oferta imperdível': '',
  'não perca essa oportunidade': '',
  'aproveite essa oportunidade': '',
  'aproveite essa chance': '',
  'aproveite esse momento': '',
  'por apenas': 'de',
  'frete grátis': '',
  'black friday': '',
  'desconto especial': '',
  'oferta especial': '',
  'oferta exclusiva': '',
  'promoção exclusiva': '',
  'promoção relâmpago': '',
  'acesse agora': 'acesse',
  'clique aqui': 'acesse',
  'não deixe de': '',
  'não perca': '',
  // Palavras simples
  'imperdível': '',
  'aproveite': 'utilize',
  'compre': 'solicite',
  'ganhe': 'receba',
  'lucro': '',
  'grátis': '',
  'gratuito': '',
  'exclusivo': '',
  'exclusiva': '',
  'promoção': '',
  'oferta': '',
  'desconto': 'valor',
  'cashback': '',
  'cupom': 'código',
  'sorteio': '',
  'um brinde': '',
  'brinde': '',
};

// --- Camada 1: analisar intenção ---
function analisarIntencao(t) {
  const pontsOp  = PALAVRAS_OPERACIONAIS.filter(w => t.includes(w)).length;
  const pontsCom = PALAVRAS_COMERCIAIS.filter(w => t.includes(w)).length;
  if (pontsOp > pontsCom)  return { tipo: 'Operacional',  cor: '#39d353', desc: 'Intenção informativa/transacional identificada — bom sinal para Utility.' };
  if (pontsCom > pontsOp)  return { tipo: 'Comercial',    cor: '#ef4444', desc: 'Intenção predominantemente comercial — alto risco de recusa.' };
  return                          { tipo: 'Indefinida',   cor: '#f59e0b', desc: 'Intenção mista ou não identificada — adicione contexto operacional.' };
}

// --- Camada 4: analisar tom ---
function analisarTom(texto, t) {
  const problemas = [];
  const excl  = (texto.match(/!/g) || []).length;
  const caps  = (texto.match(/\b[A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ]{3,}\b/g) || [])
                  .filter(w => !['CPF','CNPJ','CEP','PIX','SMS'].includes(w)).length;
  if (excl > 1) problemas.push(`${excl} pontos de exclamação (máx. 1 para Utility)`);
  if (caps > 0) problemas.push(`${caps} palavra(s) em CAIXA ALTA desnecessárias`);
  PALAVRAS_URGENCIA.forEach(u => { if (t.includes(u)) problemas.push(`Urgência artificial: "${u}"`); });
  return {
    problemas,
    desc: problemas.length === 0 ? 'Tom neutro e adequado ao padrão Utility.' : 'Tom com elementos persuasivos ou de urgência.',
  };
}

// --- Engine principal ---
function calcularScore(texto) {
  let score = 100;
  const t = texto.toLowerCase();
  const problemas = [], sugestoes = [];

  // Camada 1 — Intenção
  const intencao = analisarIntencao(t);
  if (intencao.tipo === 'Comercial')  score -= 15;
  if (intencao.tipo === 'Indefinida') score -= 5;

  // Camada 2 — Palavras de risco
  const riscoAlto = [], riscoMedio = [];
  for (const w of PALAVRAS_ALTAS_UTIL) {
    if (t.includes(w)) {
      score -= 20; riscoAlto.push(w);
      problemas.push(`Termo promocional alto risco: "<strong>${w}</strong>"`);
      sugestoes.push(getSugestao(w));
    }
  }
  for (const w of PALAVRAS_MEDIAS_UTIL) {
    if (t.includes(w)) {
      score -= 10; riscoMedio.push(w);
      problemas.push(`Expressão persuasiva: "<strong>${w}</strong>"`);
      sugestoes.push(`Substitua "${w}" por linguagem neutra ou remova`);
    }
  }

  // Camada 3 — Contexto operacional
  const ctxOp = PALAVRAS_OPERACIONAIS.filter(w => t.includes(w));
  let bonus = 0;
  ctxOp.forEach(w => { if (bonus < 21) { score += 3; bonus += 3; } });

  // Camada 4 — Tom
  const tom = analisarTom(texto, t);
  tom.problemas.forEach(p => {
    score -= 8;
    problemas.push(p);
    sugestoes.push('Ajuste o tom: use linguagem neutra e informativa.');
  });

  // Emojis
  const emojis = (texto.match(/\p{Emoji}/gu) || []).length;
  if (emojis > 2) {
    score -= 8 * (emojis - 2);
    problemas.push(`${emojis} emojis detectados — Utility aceita no máximo 1-2`);
    sugestoes.push('Remova emojis decorativos. Máximo 1 emoji funcional.');
  }

  // Comprimento
  if (texto.length < 20)  { score -= 15; problemas.push('Texto muito curto (<20 caracteres)'); sugestoes.push('Adicione contexto operacional: protocolo, data ou status.'); }
  if (texto.length > 800) { score -= 10; problemas.push('Texto longo (>800 caracteres)'); sugestoes.push('Reduza para 150–400 caracteres para melhor aprovação.'); }

  score = Math.max(0, Math.min(100, score));

  // Classificação final
  const classificacao = score >= 70 ? 'UTILITY' : score >= 40 ? 'MARKETING' : 'ALTO RISCO';

  // Camadas (para exibição)
  const camadas = {
    intencao,
    risco: {
      alto: riscoAlto, medio: riscoMedio,
      nivel: riscoAlto.length === 0 && riscoMedio.length === 0 ? 'limpo'
           : riscoAlto.length <= 1 && riscoMedio.length <= 1 ? 'moderado' : 'alto',
    },
    contexto: {
      palavras: ctxOp,
      desc: ctxOp.length > 0
        ? `Contexto operacional identificado (${ctxOp.slice(0,3).join(', ')})`
        : 'Nenhum contexto operacional detectado',
    },
    tom,
  };

  // Versão reescrita (rewrite)
  let corrigido = texto;
  for (const [orig, sub] of Object.entries(SUBSTITUICOES)) {
    corrigido = corrigido.replace(new RegExp(orig, 'gi'), sub);
  }
  corrigido = corrigido
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/([.,!?;:])\s*[!?.,;:]/g, '$1')
    .replace(/!\s*\./g, '.')
    .replace(/\s{2,}/g, ' ')
    .replace(/^[,!?;:\s]+/, '')
    .trim();
  if (!/^(informamos|comunicamos|notificamos|confirmamos)/i.test(corrigido)) {
    // Remove saudação completa: "Olá João!" / "Oi Maria," / "Olá!" etc.
    const semSaud = corrigido
      .replace(/^(olá|oi)[,!]?\s*([A-Za-záéíóúàâêîôûãõçÁÉÍÓÚÀÂÊÎÔÛÃÕÇ]+[,!]?\s*)?/i, '')
      .trim();
    if (semSaud !== corrigido)
      corrigido = 'Informamos que ' + semSaud.charAt(0).toLowerCase() + semSaud.slice(1);
  }
  if (!/[.!?]$/.test(corrigido)) corrigido += '.';

  // 5 variações estratégicas
  const variacoesEstrategicas = gerarVariacoesEstrategicas(corrigido);

  return { score, classificacao, camadas, problemas, sugestoes, corrigido, variacoesEstrategicas };
}

// --- 5 variações com estratégias distintas ---
function gerarVariacoesEstrategicas(textoCorrigido) {
  // Extrai núcleo sem prefixos utilitários já adicionados
  let nucleo = textoCorrigido
    .replace(/^(informamos que |comunicamos que |notificamos: |confirmamos que )/i, '')
    .replace(/[.!?]+$/, '')
    .trim();
  const lc = s => s.charAt(0).toLowerCase() + s.slice(1);
  const uc = s => s.charAt(0).toUpperCase() + s.slice(1);

  return [
    {
      estrategia: 'Continuidade',
      icone: '🔄',
      desc: 'Enquadra como sequência de atendimento em aberto',
      texto: `Dando continuidade ao seu atendimento, ${lc(nucleo)}. Para prosseguir, entre em contato pelo canal oficial ou acesse sua conta.`,
    },
    {
      estrategia: 'Registro administrativo',
      icone: '📋',
      desc: 'Enquadra como registro formal no cadastro',
      texto: `Para fins de registro administrativo em seu cadastro: ${lc(nucleo)}. Confirme o recebimento desta comunicação respondendo a esta mensagem.`,
    },
    {
      estrategia: 'Atualização de sistema',
      icone: '🔔',
      desc: 'Enquadra como notificação automática gerada pelo sistema',
      texto: `Notificação automática: seu cadastro foi atualizado. ${uc(nucleo)}. Nenhuma ação é necessária no momento. Dúvidas? Entre em contato.`,
    },
    {
      estrategia: 'Validação de dados',
      icone: '✅',
      desc: 'Enquadra como solicitação de validação de informações',
      texto: `Identificamos necessidade de validação em seu cadastro. ${uc(nucleo)}. Confirme suas informações acessando o canal oficial para regularização.`,
    },
    {
      estrategia: 'Pendência técnica',
      icone: '⚙️',
      desc: 'Enquadra como item técnico pendente no sistema',
      texto: `Há uma pendência técnica registrada em seu atendimento. ${uc(nucleo)}. Acesse sua conta ou entre em contato para verificar os detalhes.`,
    },
  ];
}

function getSugestao(w) {
  const m = {
    'oferta':      'Substitua "oferta" por dado operacional (ex: "pagamento", "serviço", "solicitação")',
    'promoção':    'Remova "promoção" — use linguagem factual e operacional',
    'desconto':    'Substitua "desconto" por valor objetivo ou remova completamente',
    'grátis':      'Remova "grátis" — sinaliza spam para os filtros da Meta',
    'gratuito':    'Remova "gratuito" — sinaliza spam para os filtros da Meta',
    'aproveite':   'Substitua "aproveite" por "utilize", "acesse" ou "confira"',
    'não perca':   'Remova — cria urgência artificial, característica de Marketing',
    'ganhe':       'Substitua "ganhe" por "receba" acompanhado de dado factual',
    'imperdível':  'Remova — linguagem tipicamente promocional, alto risco de recusa',
    'cashback':    'Cashback é conteúdo comercial — não se enquadra como Utility',
    'cupom':       'Substitua "cupom" por "código de referência" se for indispensável',
    'sorteio':     'Remova "sorteio" — associado a spam e fraude pelos filtros da Meta',
    'bônus':       'Remova "bônus" — linguagem comercial incompatível com Utility',
    'prêmio':      'Remova "prêmio" — associado a marketing e sorteios',
    'brinde':      'Remova "brinde" — linguagem comercial direta',
    'compre':      'Substitua "compre" por "solicite", "acesse" ou "confirme"',
    'exclusivo':   'Remova "exclusivo" — cria apelo persuasivo desnecessário',
    'oportunidade':'Substitua "oportunidade" por contexto operacional concreto',
    'benefício':   'Substitua "benefício" por dado factual do serviço/produto',
  };
  return m[w] || `Remova ou substitua "${w}" por linguagem operacional e neutra`;
}

function exibirAnalise(resultado, textoOriginal) {
  const { score, classificacao, camadas, problemas, sugestoes, corrigido, variacoesEstrategicas } = resultado;

  // Cores e rótulos por faixa de score
  const cor    = score >= 70 ? '#39d353' : score >= 40 ? '#f59e0b' : '#ef4444';
  const nivel  = score >= 70 ? 'ALTA' : score >= 40 ? 'MODERADA' : 'IMPROVÁVEL';
  const descScore = score >= 70 ? 'Boa probabilidade de aprovação como Utility. Poucos ajustes necessários.'
                  : score >= 40 ? 'Aprovação possível com revisão de linguagem e tom.'
                  : 'Muito afastado do padrão Utility. Recomenda-se reescrever do zero.';

  // Badge de classificação
  const badgeCls = classificacao === 'UTILITY' ? 'utility' : classificacao === 'MARKETING' ? 'marketing' : 'alto-risco';

  // Helper para badge de nível de risco nas camadas
  const nivelCor = n => n === 'limpo' ? '#39d353' : n === 'moderado' ? '#f59e0b' : '#ef4444';

  // Renderização das 5 variações estratégicas
  const varHtml = variacoesEstrategicas.map((v, i) => `
    <div class="var-card">
      <div class="var-card-header">
        <span class="var-card-icone">${v.icone}</span>
        <div>
          <span class="var-card-estrategia">${v.estrategia}</span>
          <span class="var-card-desc">${v.desc}</span>
        </div>
      </div>
      <p class="var-card-texto" id="var-texto-${i}">${v.texto}</p>
      <div class="var-card-actions">
        <button class="btn-copy btn-copy-sm" data-var-idx="${i}">Copiar</button>
        <button class="btn-generate btn-generate-xs" data-var-gerar="${i}">Gerar variações →</button>
      </div>
    </div>`).join('');

  const div = document.getElementById('analise-resultado');
  div.classList.remove('hidden');
  div.innerHTML = `

    <!-- ETAPA 1+2: Score + Classificação -->
    <div class="score-display">
      <div class="score-circle" style="border-color:${cor}">
        <span class="score-num" style="color:${cor}">${score}%</span>
        <span class="score-label">aprovação</span>
      </div>
      <div class="score-info">
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <span class="score-nivel" style="background:${cor}22;color:${cor};border:1px solid ${cor}44">
            PROBABILIDADE ${nivel}
          </span>
          <span class="classificacao-badge ${badgeCls}">${classificacao}</span>
        </div>
        <p class="score-desc">${descScore}</p>
        <p class="score-chars">${textoOriginal.length} caracteres no original</p>
      </div>
    </div>

    <!-- ETAPA 3: Análise em 4 camadas -->
    <div class="camadas-titulo">Análise em 4 camadas</div>
    <div class="camadas-grid">

      <div class="camada-card">
        <div class="camada-label">① Intenção</div>
        <span class="camada-tag" style="background:${camadas.intencao.cor}22;color:${camadas.intencao.cor};border:1px solid ${camadas.intencao.cor}44">${camadas.intencao.tipo}</span>
        <p class="camada-desc">${camadas.intencao.desc}</p>
      </div>

      <div class="camada-card">
        <div class="camada-label">② Palavras de risco</div>
        <span class="camada-tag" style="background:${nivelCor(camadas.risco.nivel)}22;color:${nivelCor(camadas.risco.nivel)};border:1px solid ${nivelCor(camadas.risco.nivel)}44">${camadas.risco.nivel.toUpperCase()}</span>
        <p class="camada-desc">${
          camadas.risco.alto.length === 0 && camadas.risco.medio.length === 0
            ? 'Nenhum termo de risco detectado.'
            : [
                camadas.risco.alto.length  > 0 ? `Alto risco: ${camadas.risco.alto.join(', ')}` : '',
                camadas.risco.medio.length > 0 ? `Médio risco: ${camadas.risco.medio.join(', ')}` : '',
              ].filter(Boolean).join(' | ')
        }</p>
      </div>

      <div class="camada-card">
        <div class="camada-label">③ Contexto</div>
        <span class="camada-tag" style="background:${camadas.contexto.palavras.length > 0 ? '#39d35322' : '#f59e0b22'};color:${camadas.contexto.palavras.length > 0 ? '#39d353' : '#f59e0b'};border:1px solid ${camadas.contexto.palavras.length > 0 ? '#39d35344' : '#f59e0b44'}">${camadas.contexto.palavras.length > 0 ? 'PRESENTE' : 'AUSENTE'}</span>
        <p class="camada-desc">${camadas.contexto.desc}</p>
      </div>

      <div class="camada-card">
        <div class="camada-label">④ Tom</div>
        <span class="camada-tag" style="background:${camadas.tom.problemas.length === 0 ? '#39d35322' : '#ef444422'};color:${camadas.tom.problemas.length === 0 ? '#39d353' : '#ef4444'};border:1px solid ${camadas.tom.problemas.length === 0 ? '#39d35344' : '#ef444444'}">${camadas.tom.problemas.length === 0 ? 'NEUTRO' : 'PERSUASIVO'}</span>
        <p class="camada-desc">${camadas.tom.desc}</p>
      </div>

    </div>

    <!-- ETAPA 4: Problemas -->
    ${problemas.length > 0 ? `
    <div class="analise-section">
      <h3 class="analise-section-title">⚠️ Problemas encontrados (${problemas.length})</h3>
      <ul class="analise-list">${problemas.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>` : `<div class="analise-section analise-ok">✅ Nenhum problema crítico encontrado!</div>`}

    <!-- ETAPA 5: Sugestões -->
    ${sugestoes.length > 0 ? `
    <div class="analise-section">
      <h3 class="analise-section-title">💡 Sugestões de melhoria</h3>
      <ul class="analise-list analise-list-suggestions">${[...new Set(sugestoes)].map(s => `<li>${s}</li>`).join('')}</ul>
    </div>` : ''}

    <!-- ETAPA 6: Versão reescrita -->
    <div class="analise-corrigida">
      <h3 class="analise-section-title">✍️ Versão reescrita pelo sistema</h3>
      <p class="versao-texto" id="versao-corrigida-texto">${corrigido}</p>
      <div class="versao-actions">
        <button class="btn-copy" id="btn-copiar-corrigida">Copiar versão reescrita</button>
        <button class="btn-generate btn-generate-sm" id="btn-gerar-corrigida">Gerar variações desta versão →</button>
        <button class="btn-generate btn-generate-sm btn-outline" id="btn-gerar-original">Gerar variações do original →</button>
      </div>
    </div>

    <!-- ETAPA 7: 5 variações estratégicas -->
    <div class="variacoes-estrategicas">
      <h3 class="analise-section-title">🎯 5 variações com estratégias distintas</h3>
      ${varHtml}
    </div>`;

  // Eventos — versão reescrita
  document.getElementById('btn-copiar-corrigida')?.addEventListener('click', () => {
    navigator.clipboard.writeText(corrigido).then(() => mostrarToast('Versão reescrita copiada!'));
  });
  document.getElementById('btn-gerar-corrigida')?.addEventListener('click', () =>
    gerarVariacoesEspecificas(corrigido, 'utility'));
  document.getElementById('btn-gerar-original')?.addEventListener('click', () =>
    gerarVariacoesEspecificas(textoOriginal, 'utility'));

  // Eventos — variações estratégicas
  div.querySelectorAll('[data-var-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.varIdx;
      navigator.clipboard.writeText(variacoesEstrategicas[i].texto)
        .then(() => mostrarToast(`"${variacoesEstrategicas[i].estrategia}" copiada!`));
    });
  });
  div.querySelectorAll('[data-var-gerar]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.varGerar;
      gerarVariacoesEspecificas(variacoesEstrategicas[i].texto, 'utility');
    });
  });
}

function gerarVariacoesEspecificas(texto, cat) {
  estado.categoria = cat;
  definirCategoria(cat);
  const variacoes = criarVariacoes(texto, cat);
  estado.templatesGerados = variacoes.map((v, i) => ({
    idx: i + 1,
    html: v.replace(/\{\{(\w+)\}\}/g, '<code>{{$1}}</code>'),
    texto: v, risco: avaliarRisco(v, cat),
  }));
  const cor = '#39d353';
  renderizarResultados(
    `<span class="meta-tag">✅ UTILITY</span><span class="meta-tag">📝 A partir da análise</span>`,
    `<div class="justificativa-icon">📝</div>
     <div><strong style="color:${cor}">Variações geradas</strong>
     <p>5 variações estruturais com linguagem adequada ao padrão Utility.</p></div>`,
    'rgba(57,211,83,0.08)', cor
  );
  document.getElementById('btn-back-2').onclick = () => irParaStep(5);
  irParaStep(3);
}

// ============================================================
// UTILITÁRIOS
// ============================================================
function copiarTodos() {
  const todos = estado.templatesGerados.map(t => `--- Variação ${t.idx} ---\n${t.texto}`).join('\n\n');
  navigator.clipboard.writeText(todos).then(() => mostrarToast('Todos os templates copiados!'));
}

function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Home: botões de ação dentro de cada card
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat  = btn.dataset.cat;
      const modo = btn.dataset.mode;
      definirCategoria(cat);
      estado.tipoSelecionado  = null;
      estado.varsSelecionadas = [];

      if (modo === 'gerar') {
        renderizarTipos();
        irParaStep(1);
      } else if (modo === 'fraseologia') {
        // Setup painel 4
        const tag = document.getElementById('panel-4-cat-tag');
        if (cat === 'marketing') {
          tag.textContent = '📢 MARKETING';
          tag.style.cssText = 'background:rgba(245,158,11,0.12);color:#f59e0b';
        } else {
          tag.textContent = '✅ UTILITY';
          tag.style.cssText = 'background:rgba(57,211,83,0.12);color:#39d353';
        }
        document.getElementById('textarea-fraseologia').value = '';
        document.getElementById('fraseologia-chars').textContent = '0 caracteres';
        irParaStep(4);
      } else if (modo === 'analisar') {
        document.getElementById('textarea-analise').value = '';
        document.getElementById('analise-chars').textContent = '0 caracteres';
        document.getElementById('analise-resultado').classList.add('hidden');
        irParaStep(5);
      }
    });
  });

  // Navegação
  document.getElementById('btn-back-0').addEventListener('click',  () => irParaStep(0));
  document.getElementById('btn-back-1').addEventListener('click',  () => irParaStep(1));
  document.getElementById('btn-back-2').addEventListener('click',  () => irParaStep(2));
  document.getElementById('btn-novo-tipo').addEventListener('click',() => { renderizarTipos(); irParaStep(1); });
  document.getElementById('btn-home').addEventListener('click',    () => irParaStep(0));
  document.getElementById('btn-back-4').addEventListener('click',  () => irParaStep(0));
  document.getElementById('btn-back-5').addEventListener('click',  () => irParaStep(0));

  // Gerar templates (fluxo normal)
  document.getElementById('btn-generate').addEventListener('click', gerarTemplates);
  document.getElementById('btn-copy-all').addEventListener('click', copiarTodos);

  document.getElementById('btn-clear-vars').addEventListener('click', () => {
    estado.varsSelecionadas = [];
    document.querySelectorAll('.variavel-chip').forEach(c => c.classList.remove('selected'));
    atualizarContador();
  });

  // Painel 4: contador de chars + gerar variações
  document.getElementById('textarea-fraseologia').addEventListener('input', e => {
    document.getElementById('fraseologia-chars').textContent = `${e.target.value.length} caracteres`;
  });
  document.getElementById('btn-gerar-variacoes').addEventListener('click', gerarVariacoesDeTexto);

  // Painel 5: contador + analisar
  document.getElementById('textarea-analise').addEventListener('input', e => {
    document.getElementById('analise-chars').textContent = `${e.target.value.length} caracteres`;
  });
  document.getElementById('btn-analisar').addEventListener('click', () => {
    const texto = document.getElementById('textarea-analise').value.trim();
    if (!texto) { mostrarToast('Cole uma fraseologia para analisar!'); return; }
    exibirAnalise(calcularScore(texto), texto);
  });

  // Botão atualizar preços
  document.getElementById('btn-atualizar-precos').addEventListener('click', () => {
    atualizarPrecos(true);
  });

  // Carrega preços ao iniciar
  carregarPrecos();

});

// ============================================================
// PREÇOS META
// ============================================================

function formatarDataPreco(isoStr) {
  if (!isoStr) return null;
  try {
    const d = new Date(isoStr);
    const agora = new Date();
    const diffMs = agora - d;
    const diffMin = Math.floor(diffMs / 60000);
    const diffH   = Math.floor(diffMs / 3600000);
    const diffD   = Math.floor(diffMs / 86400000);
    if (diffMin < 2)  return 'agora mesmo';
    if (diffMin < 60) return `há ${diffMin} min`;
    if (diffH < 24)   return `há ${diffH}h`;
    if (diffD === 1)  return 'ontem';
    if (diffD < 7)    return `há ${diffD} dias`;
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
  } catch (_) { return null; }
}

function atualizarCardPreco(cat, dados, fallback) {
  const valorEl     = document.getElementById(`preco-valor-${cat}`);
  const statusEl    = document.getElementById(`preco-status-${cat}`);
  const atualizEl   = document.getElementById(`preco-atualizado-${cat}`);
  const blocoEl     = document.getElementById(`preco-${cat}`);
  if (!valorEl) return;

  const info    = dados[cat];
  const valor   = info && info.valor != null ? info.valor : null;
  const dataStr = info && info.consultadoEm ? formatarDataPreco(info.consultadoEm) : null;
  const status  = dados.statusConsulta;

  // Atualiza valor
  if (valor !== null) {
    valorEl.textContent = valor.toFixed(4);
  }

  // Atualiza status icon e classes
  blocoEl.classList.remove('preco-ok', 'preco-fallback', 'preco-erro');
  statusEl.classList.remove('girando');

  if (status === 'ok') {
    statusEl.textContent = '✅';
    statusEl.title = 'Preço atualizado com sucesso da fonte oficial Meta';
    blocoEl.classList.add('preco-ok');
  } else if (status === 'fallback' || fallback) {
    statusEl.textContent = '⚠️';
    statusEl.title = 'Usando último valor salvo — scraping temporariamente indisponível';
    blocoEl.classList.add('preco-fallback');
  } else if (status === 'default') {
    statusEl.textContent = 'ℹ️';
    statusEl.title = 'Valor padrão (vigente desde 01/01/2026). Aguardando primeira consulta.';
  } else {
    statusEl.textContent = '❌';
    statusEl.title = 'Falha ao buscar preço. Usando último valor disponível.';
    blocoEl.classList.add('preco-erro');
  }

  // Atualiza linha de data
  if (dataStr) {
    atualizEl.textContent = `Atualizado ${dataStr}`;
    if (fallback) atualizEl.textContent += ' · ⚠️ cache';
  } else if (status === 'default') {
    atualizEl.textContent = 'Valor padrão · vigência 01/01/2026';
  } else {
    atualizEl.textContent = 'Data desconhecida';
  }
}

async function carregarPrecos() {
  try {
    const resp  = await fetch('/api/precos');
    const dados = await resp.json();
    atualizarCardPreco('utility',   dados, dados.avisoFallback);
    atualizarCardPreco('marketing', dados, dados.avisoFallback);
  } catch (_) {
    // Servidor pode não ter o endpoint ainda — silencioso
  }
}

async function atualizarPrecos(manual) {
  const btn     = document.getElementById('btn-atualizar-precos');
  const txtEl   = document.getElementById('btn-atualizar-texto');
  const statusU = document.getElementById('preco-status-utility');
  const statusM = document.getElementById('preco-status-marketing');

  btn.classList.add('carregando');
  btn.disabled = true;
  if (txtEl) txtEl.textContent = 'Buscando...';
  if (statusU) { statusU.textContent = '⏳'; statusU.classList.add('girando'); }
  if (statusM) { statusM.textContent = '⏳'; statusM.classList.add('girando'); }

  try {
    const endpoint = manual ? '/api/precos/atualizar' : '/api/precos';
    const method   = manual ? 'POST' : 'GET';
    const resp     = await fetch(endpoint, { method });
    const dados    = await resp.json();
    atualizarCardPreco('utility',   dados, dados.avisoFallback);
    atualizarCardPreco('marketing', dados, dados.avisoFallback);
    if (manual) {
      mostrarToast(dados.statusConsulta === 'ok'
        ? '✅ Preços atualizados da Meta!'
        : '⚠️ Usando último valor disponível');
    }
  } catch (_) {
    if (statusU) { statusU.textContent = '❌'; statusU.classList.remove('girando'); }
    if (statusM) { statusM.textContent = '❌'; statusM.classList.remove('girando'); }
    if (manual)  mostrarToast('❌ Falha ao conectar ao servidor');
  } finally {
    btn.classList.remove('carregando');
    btn.disabled = false;
    if (txtEl) txtEl.textContent = 'Atualizar preços';
  }
}
