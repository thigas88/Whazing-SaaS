(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"8ee8":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return"admin"===e.userProfile?a("div",{staticClass:"mass-container container-rounded-10",class:e.$q.dark.isActive?"text-green bg-grey-10":"container-border"},[a("q-list",{staticClass:"text-weight-medium"},[a("q-item-label",{class:["text-bold text-h6 q-mb-lg",e.$q.dark.isActive?"text-green":"text-black"],attrs:{header:""}},[e._v("\n        Configurações\n      ")]),a("q-item-label",{staticClass:"q-mt-lg q-pl-sm",attrs:{caption:""}},[e._v("Módulo: Atendimento")]),a("q-separator",{attrs:{spaced:""}}),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Reabrir tickets anteriores ao receber novas mensagens")]),a("q-item-label",{attrs:{caption:""}},[e._v("Com essa opção ativada caso já exista ticket fechada ele vai abrir ele novamente e não criar um ticket novo.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.ReopenTicket?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("ReopenTicket")}},model:{value:e.ReopenTicket,callback:function(a){e.ReopenTicket=a},expression:"ReopenTicket"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Não visualizar Tickets já atribuidos à outros usuários")]),a("q-item-label",{attrs:{caption:""}},[e._v("Somente o usuário responsável pelo ticket e/ou os administradores visualizarão a\n            atendimento.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.NotViewAssignedTickets?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("NotViewAssignedTickets")}},model:{value:e.NotViewAssignedTickets,callback:function(a){e.NotViewAssignedTickets=a},expression:"NotViewAssignedTickets"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Não visualizar Tickets no ChatBot")]),a("q-item-label",{attrs:{caption:""}},[e._v("Somente administradores poderão visualizar tickets que estivem interagindo com o\n            ChatBot.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.NotViewTicketsChatBot?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("NotViewTicketsChatBot")}},model:{value:e.NotViewTicketsChatBot,callback:function(a){e.NotViewTicketsChatBot=a},expression:"NotViewTicketsChatBot"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Habilitar guia de atendimento de Chatbots")]),a("q-item-label",{attrs:{caption:""}},[e._v(" Habilitando esta opção será adicionada uma guia de atendimento exclusiva para os chatbots. ")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.chatbotLane?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("chatbotLane")}},model:{value:e.chatbotLane,callback:function(a){e.chatbotLane=a},expression:"chatbotLane"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Habilitar ocultas guia de atendimento sem tickets")]),a("q-item-label",{attrs:{caption:""}},[e._v("Habilitando esta opção somente guia de atendimento com tickets será visivel.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.hidetab?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("hidetab")}},model:{value:e.hidetab,callback:function(a){e.hidetab=a},expression:"hidetab"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Habilitar notificações de grupos")]),a("q-item-label",{attrs:{caption:""}},[e._v("Habilitando esta opção notificações de mensagens grupos aparece.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.groupnotification?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("groupnotification")}},model:{value:e.groupnotification,callback:function(a){e.groupnotification=a},expression:"groupnotification"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Somente administradores podem acessar os lista de contatos")]),a("q-item-label",{attrs:{caption:""}},[e._v("Somente os administradores visualizarão lista de contatos no sistema.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.ContactAdmin?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("ContactAdmin")}},model:{value:e.ContactAdmin,callback:function(a){e.ContactAdmin=a},expression:"ContactAdmin"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Forçar atendimento via Carteira")]),a("q-item-label",{attrs:{caption:""}},[e._v("Caso o contato tenha carteira vínculada, o sistema irá direcionar o atendimento somente\n            para os donos da carteira de clientes.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.DirectTicketsToWallets?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("DirectTicketsToWallets")}},model:{value:e.DirectTicketsToWallets,callback:function(a){e.DirectTicketsToWallets=a},expression:"DirectTicketsToWallets"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Fluxo ativo para o Bot de atendimento")]),a("q-item-label",{attrs:{caption:""}},[e._v("Fluxo a ser utilizado pelo Bot para os novos atendimentos")])],1),a("q-btn",{staticClass:"bg-padrao btn-rounded",attrs:{flat:"",icon:"mdi-replay",color:"negative"},on:{click:e.resetarFluxoAtivo}},[a("q-tooltip",{attrs:{"content-class":"bg-negative text-bold"}},[e._v("\n            Resetar Fluxo Chatbot\n          ")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-select",{staticStyle:{width:"300px"},attrs:{outlined:"",dense:"",options:e.listaChatFlow,"map-options":"","emit-value":"","option-value":"id","option-label":"name"},on:{input:function(a){return e.atualizarConfiguracao("botTicketActive")}},model:{value:e.botTicketActive,callback:function(a){e.botTicketActive=a},expression:"botTicketActive"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Ignorar Mensagens de Grupo")]),a("q-item-label",{attrs:{caption:""}},[e._v("Habilitando esta opção o sistema não abrirá ticket para grupos")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.ignoreGroupMsg?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("ignoreGroupMsg")}},model:{value:e.ignoreGroupMsg,callback:function(a){e.ignoreGroupMsg=a},expression:"ignoreGroupMsg"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Recusar chamadas no Whatsapp")]),a("q-item-label",{attrs:{caption:""}},[e._v("Quando ativo, as ligações de aúdio e vídeo serão recusadas,\n            automaticamente.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.rejectCalls?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("rejectCalls")}},model:{value:e.rejectCalls,callback:function(a){e.rejectCalls=a},expression:"rejectCalls"}})],1)],1),"enabled"===e.rejectCalls?a("div",{staticClass:"row q-px-md"},[a("div",{staticClass:"col-12"},[a("q-input",{attrs:{type:"textarea",autogrow:"",dense:"",outlined:"",label:"Mensagem ao rejeitar ligação:","input-style":"min-height: 6vh; max-height: 9vh;",debounce:"700"},on:{input:function(a){return e.atualizarConfiguracao("callRejectMessage")}},model:{value:e.callRejectMessage,callback:function(a){e.callRejectMessage=a},expression:"callRejectMessage"}})],1)]):e._e(),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Permitir que usuário desabilite a assinatura")]),a("q-item-label",{attrs:{caption:""}},[e._v("Os usuários poderão desativar a assinatura das mensagens")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.userDisableSignature?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("userDisableSignature")}},model:{value:e.userDisableSignature,callback:function(a){e.userDisableSignature=a},expression:"userDisableSignature"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Listar apenas os contatos da carteira do Usuario")]),a("q-item-label",{attrs:{caption:""}},[e._v("Irá listar apenas os contatos da carteira que tiver vinculado ao usuario")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.userContactWallet?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("userContactWallet")}},model:{value:e.userContactWallet,callback:function(a){e.userContactWallet=a},expression:"userContactWallet"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Usuarios podem espiar ticket")]),a("q-item-label",{attrs:{caption:""}},[e._v("Desativando essa opção somente administradores podem ver mensagens antes de iniciar atendimento")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.spyticket?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("spyticket")}},model:{value:e.spyticket,callback:function(a){e.spyticket=a},expression:"spyticket"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Usuarios podem reabrir ticket")]),a("q-item-label",{attrs:{caption:""}},[e._v("Desativando essa opção somente administradores podem reabrir ticket fechados")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.userReopenTicket?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("userReopenTicket")}},model:{value:e.userReopenTicket,callback:function(a){e.userReopenTicket=a},expression:"userReopenTicket"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Contador nas tabs superiores (Privados/Grupos)")]),a("q-item-label",{attrs:{caption:""}},[e._v(" Habilitando esta opção o usuário irá visualizar os tickcets com mensagens abertas nas tabs superiores de conversas privadas e grupos. ")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.universalCounter?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("universalCounter")}},model:{value:e.universalCounter,callback:function(a){e.universalCounter=a},expression:"universalCounter"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Resolver atendimento sem interação automaticamente")]),a("q-item-label",{attrs:{caption:""}},[e._v("Caso não for respondido pelo contato o ticket vai se fechar automaticamente.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.autoClose?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("autoClose")}},model:{value:e.autoClose,callback:function(a){e.autoClose=a},expression:"autoClose"}})],1)],1),"enabled"===e.autoClose?a("div",{staticClass:"row q-px-md"},[a("div",{staticClass:"col-12"},[a("q-select",{attrs:{options:e.tempoOptions,outlined:"",label:"Escolha uma opção (tempo em minutos)","input-style":"min-height: 6vh; max-height: 9vh;",debounce:"700"},on:{input:function(a){return e.atualizarConfiguracao("autoCloseTime")}},model:{value:e.autoCloseTime,callback:function(a){e.autoCloseTime=a},expression:"autoCloseTime"}})],1)]):e._e(),"enabled"===e.autoClose?a("div",{staticClass:"row q-px-md"},[a("div",{staticClass:"col-12"},[a("q-input",{attrs:{type:"textarea",autogrow:"",dense:"",outlined:"",label:"Mensagem de encerramento","input-style":"min-height: 6vh; max-height: 9vh;",debounce:"700"},on:{input:function(a){return e.atualizarConfiguracao("autoCloseMessage")}},model:{value:e.autoCloseMessage,callback:function(a){e.autoCloseMessage=a},expression:"autoCloseMessage"}})],1)]):e._e(),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Se atendente demorar responder voltar tickets aos Pendentes")]),a("q-item-label",{attrs:{caption:""}},[e._v("Caso o atendendete demorar a responder o contato o ticket vai voltar automaticamente para os Tickets pedentes.")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-toggle",{attrs:{"false-value":"disabled","true-value":"enabled","checked-icon":"check","keep-color":"",color:"enabled"===e.autoPending?"green":"negative",size:"md","unchecked-icon":"clear"},on:{input:function(a){return e.atualizarConfiguracao("autoPending")}},model:{value:e.autoPending,callback:function(a){e.autoPending=a},expression:"autoPending"}})],1)],1),"enabled"===e.autoPending?a("div",{staticClass:"row q-px-md"},[a("div",{staticClass:"col-12"},[a("q-input",{attrs:{type:"number",label:"Tempo em minutos para voltar aos Pendentes",dense:"",outlined:"",autogrow:"",debounce:"700","input-style":"min-height: 6vh; max-height: 9vh;"},on:{input:function(a){return e.atualizarConfiguracao("autoPendingTime")}},model:{value:e.autoPendingTime,callback:function(a){e.autoPendingTime=a},expression:"autoPendingTime"}})],1)]):e._e(),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Máximo de vezes que a mensagem de horário de atendimento deve ser enviada para o cliente.")]),a("q-item-label",{attrs:{caption:""}},[e._v("Insira aqui a quantidade de vezes que a mensagem de ausência pode ser enviada para cada atendimento...")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-input",{staticStyle:{width:"300px"},attrs:{type:"number",dense:"",outlined:"",debounce:"700"},on:{input:function(a){return e.atualizarConfiguracao("maxRetriesBusinessHours")}},model:{value:e.maxRetriesBusinessHours,callback:function(a){e.maxRetriesBusinessHours=a},expression:"maxRetriesBusinessHours"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Quantidades de tickets abertos\\pendentes será carregado na tela de atendimento.")]),a("q-item-label",{attrs:{caption:""}},[e._v("Insira aqui a quantidade de tickets que será carregado na tela de atendimento...")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-input",{staticStyle:{width:"300px"},attrs:{type:"number",dense:"",outlined:"",debounce:"700"},on:{input:function(a){return e.atualizarConfiguracao("TicketsLimitOpen")}},model:{value:e.TicketsLimitOpen,callback:function(a){e.TicketsLimitOpen=a},expression:"TicketsLimitOpen"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v("Quantidades de tickets fechados será carregado na tela de atendimento.")]),a("q-item-label",{attrs:{caption:""}},[e._v("Insira aqui a quantidade de tickets que será carregado na tela de atendimento...")])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-input",{staticStyle:{width:"300px"},attrs:{type:"number",dense:"",outlined:"",debounce:"700"},on:{input:function(a){return e.atualizarConfiguracao("TicketsLimitClosed")}},model:{value:e.TicketsLimitClosed,callback:function(a){e.TicketsLimitClosed=a},expression:"TicketsLimitClosed"}})],1)],1)],1),a("q-separator",{attrs:{spaced:""}})],1):e._e()},o=[],n=t("824a"),l=t("7963"),s={name:"IndexConfiguracoes",data(){return{userProfile:"user",tempoOptions:[{value:"10",label:"10 minutos"},{value:"60",label:"1 hora"},{value:"1440",label:"1 dia"},{value:"7200",label:"5 dias"},{value:"14400",label:"10 dias"}],configuracoes:[],listaChatFlow:[],NotViewAssignedTickets:null,NotViewTicketsChatBot:null,ContactAdmin:null,DirectTicketsToWallets:null,botTicketActive:null,ignoreGroupMsg:null,userContactWallet:null,rejectCalls:null,userDisableSignature:null,sendGreetingAccepted:null,sendMsgTransfTicket:null,spyticket:null,userReopenTicket:null,universalCounter:null,autoClose:null,autoCloseTime:null,autoCloseMessage:"",chatbotLane:null,callRejectMessage:"",autoPendingTime:null,autoPending:null,hidetab:null,maxRetriesBusinessHours:null,TicketsLimitOpen:null,TicketsLimitClosed:null,groupnotification:null,ReopenTicket:null}},methods:{resetarFluxoAtivo(){this.botTicketActive="",this.atualizarConfiguracao("botTicketActive")},async listarConfiguracoes(){const{data:e}=await Object(l["b"])();this.configuracoes=e,this.configuracoes.forEach((e=>{let a=e.value;"botTicketActive"===e.key&&e.value&&(a=+e.value),this.$data[e.key]=a}))},async listarChatFlow(){const{data:e}=await Object(n["c"])();this.listaChatFlow=e.chatFlow},async atualizarConfiguracao(e){if("autoCloseTime"===e){const t={key:e,value:this.$data[e].value};try{await Object(l["a"])(t),this.$q.notify({type:"positive",message:"Configuração alterada!",progress:!0,actions:[{icon:"close",round:!0,color:"white"}]})}catch(a){console.error("error - AlterarConfiguracao",a),this.$data[e]="enabled"===this.$data[e]?"disabled":"enabled",this.$notificarErro("Ocorreu um erro!",a)}}else{const t={key:e,value:this.$data[e]};try{await Object(l["a"])(t),this.$q.notify({type:"positive",message:"Configuração alterada!",progress:!0,actions:[{icon:"close",round:!0,color:"white"}]})}catch(a){console.error("error - AlterarConfiguracao",a),this.$data[e]="enabled"===this.$data[e]?"disabled":"enabled",this.$notificarErro("Ocorreu um erro!",a)}}}},async mounted(){this.userProfile=localStorage.getItem("profile"),await this.listarConfiguracoes(),await this.listarChatFlow()}},r=s,c=t("2877"),u=t("1c1c"),d=t("0170"),m=t("eb85"),p=t("66e5"),v=t("4074"),b=t("9564"),g=t("9c40"),k=t("05c0"),q=t("ddd8"),h=t("27f9"),f=t("714f"),C=t("eebe"),T=t.n(C),w=Object(c["a"])(r,i,o,!1,null,"1e46bc0f",null);a["default"]=w.exports;T()(w,"components",{QList:u["a"],QItemLabel:d["a"],QSeparator:m["a"],QItem:p["a"],QItemSection:v["a"],QToggle:b["a"],QBtn:g["a"],QTooltip:k["a"],QSelect:q["a"],QInput:h["a"]}),T()(w,"directives",{Ripple:f["a"]})}}]);