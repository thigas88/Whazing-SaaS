Versão: 2.6.0

- Suporte facebook e instagram  e WebChat via hub (função exclusiva versão premium)
- Melhorias de segurança socket
- Respeitar delay Typebot
- Deletar um canal definitivamente agora, antes somente ocultava conexão


Versão: 2.5.1

- bug - greeting nao tava mais funcionando
- bug - Erro criar contatos conflito entre empresas

Versão: 2.5.0

- bug - Clicar ticket pendente todas opções do topo estavam habilitadas
- bug - TypeBot e outras integrações aciona quando envia mensagem fora da prataforma
- bug - revisado opção deletar empresa para evitar erros
- bug - retornar ticket para fila limpa usuario
- bug - painel atendimento não mostra mais tickets fechados
- Pagina usuarios foi colocado exibir id para ser mais facil usar no TypeBot
- Integração  ChatGPT
- Integração Groq
- Integração Microsoft Azure Text-to-Speech
- Opção mensagem despedida personalizadas, pelo admin e pelos usuarios, admin pode criar, vizualizar e editar mensagens de todos usuarios,Usuarios somente podem acessar suas proprias mensagens 
- Mudança sistemas de variaveis e novas variaveis consultar arquivo pasta docs
- Opção escolher ocultar tabs ou não tela de atendimento
- ChatFlow opção enviar mensagem ao roteador para fila ou usuario
- Opção cadastro usuario para ignorar carteira mostrar todos contatos

Versão: 2.4.1

- Melhoria TypeBot caso transcrição audio estiver ativa transmite resultado para o typebot
- Novas opções TypeBot, transferir ticket, fechar ticket, colocar tag, parar ver arquivo docs


Versão: 2.4.0

- bug - botao enviar mensagem e audio tinha clicar lado meio nao funciona - obrigado Felipe
- bug - Ao clicar ticket nao exibia cor do canal e sem clicar nao exibia nome do usuario
- bug - Responder audio com transcrição perdia a resposta, pois fazia transcrição novamente
- Menu saas da empresa foi colocado opção para listar Faturas em aberto para apagar ou marcar como pagas
- Integração TypeBot
- Melhorias internas da integração baileys
- Alteração Menu para abrir descrição no computador - melhorias nesse menu pelo Felipe
- Alteração do Chat Interno e tela atendimento para tela cheia
- Novas configurações disponiveis .env, verifica .example da pasta backend

Versão: 2.3.5

- bug - não carregar alguns tickets
- bug - Não envia nome atentende aceitar ticket
- bug - ajustes (Admin) - Visualizar Todos para melhor funcionamento
- Separado opção quantidades tickets abertos/pedentes e fechados carregar tela de atendimento
- Escolha cor canal para diferenciar tela atendimento
- Botão reniciar as conexões no canais
- Colocando sistema simular digitando e gravando audio para tornar atendimento mais humano
- Suporte WebHook - N8N

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