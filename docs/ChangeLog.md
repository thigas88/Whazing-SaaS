Versão: 2.3.4

- Bug Assas - Cada vez gerava link novo agora usa o mesmo
- Bug - Lista de contatos não carregava as etiquetas
- Tirado coluna instagram e telegram tela contatos ficar mais limpa
- Sistema de envio mensagem ao aceitar ticket e transferir ticket foi remodelado, as configurações agora são nos canais e será possivel personalizar mensagens
- Botão resolver ticket na lista de tickets
- Busca tela atendimento busca mensagens tambem
- Envio de reações
- Configuração para bloquear usuarios reabrir tickets fechados(Podem consultar mas não reabrir o mesmo)
- Opção contatos para desativar bot ou campanha
- Ajuste para exibir mensagem de erro ao tentar cadastrar contato sem ter whatsapp conectado

Versão: 2.3.3

- Bug cadastra empresa pelo painel sem CNPJ
- Bug limite 40 usuarios alterar grupos chat interno
- Silencioso não desativava

Versão: 2.3.2

- Suporte Asaas
- Retirada campo CNPJ tela solicitar teste e Validação campos
- Tela SaaS campo cnpj passa a ser opcional
- Ao cadastra teste na pagina solicitação redireciona para pagina login

Versão: 2.3.1

- bug - adicionar novo canal nao aceitava

Versão: 2.3.0

- outros pequenos bugs
- bug - Tela canais e atendimento listar mais de 40 usuários
- bug - tarefa mesmo concluida aparecia ainda na notificações
- bug - ajustes planos aceita planos com virgula no preço
- Configuração mercado pago foi colocado detalhes do webhook
- Atualização libs do backend e do frontend
- Remoção conteudos não usados/defasados
- Colocado Logo nos relatorios gerar impressão
- Opção tirar som das notificações
- Variveis adicionadas ({{user}}, {{phoneNumber}}, {{email}})
- Novas configurações do banco de dados (para ajustes desempenho) via .env
- Ajustes chaves para performace baileys
- Exibir horario na lista de agendamentos
- Sistema de avalição
- Transcrição de audio
- Configuração para quantidade tickets carregar tela atendimento(padrão 30)
- Tela atendimento abas (Aberto, pedentes, fechados e bots aparece somente se tiver tickets) - mudado no filtro texto resolvidos para fechados para seguir mesmo padrão
- Tela atendimento botão carregar mais tickets

Versão: 2.2.5

- Atualização emergencia - Update lib não oficial baileys

Versão: 2.2.4

- Update lib não oficial baileys
- Totalmente remodelado sistema importar mensagens ao ler QRCODE
- Detectar mensagem apagada pelo contato
- Integração com Mercado Pago

Versão: 2.2.3

- Modulos tarefas
- Bug envio audio IPHONE
- Bug painel escutar audio IPHONE
- Bug não tava exibindo mais de 40 usuarios
- Correção outros pequenos bugs

Versão: 2.2.2

- Caso desabilitar smtp ou opção solicitar teste agora botão esqueci senha e registre-se agora sai da pagina login
- Correção erro na API
- Envia mensagem para whatsapp cadastrar teste(caso whatsapp seja invalido não vai aceitar cadastrar teste)
- Novas apis mostrar informação do Ticket, mostrar tickets no chatbot, mostrar todos tickets, troca de etiquetas, troca de filas, envio mensagens via metodo GET, alterar status ticket
- Correção outros pequenos bugs

Versão: 2.2.1

- Correção geração protocolo, somente gerar quando solicitado
- Opção caso atendente demorar responder voltar ticket para Pedentes
- Correção opção autoclose não estava funcionando
- Nova opção flow para bot enviar mensagem depois tempo caso cliente não responder
- Ajuste menu lateral flow
- Opção flow quando cliente manda mensagem fora do horario de atendimento o que fazer aquele ticket
- Opção para colocar numero vezes bot deve enviar mensagem de fora horairo de atendimento
- Correção erro obter carteira, tags
- Melhoriar no MODO DARK
- Opção de baixar Fluxo e importar Fluxo
- Correção outros pequenos bugs