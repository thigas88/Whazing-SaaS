(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{b839:function(e,a,t){"use strict";t.r(a);var d=function(){var e=this,a=e._self._c;return a("div",[a("q-table",{staticClass:"contact-table container-rounded-10 my-sticky-dynamic q-ma-lg",attrs:{flat:"",bordered:"",square:"","hide-bottom":"",title:"Mensagem de despedida",data:e.despedidas,columns:e.columns,loading:e.loading,"row-key":"id",pagination:e.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"top-left",fn:function(){return[a("div",{staticStyle:{display:"flex","flex-direction":"column",gap:"1vh"}},[a("h2",{class:e.$q.dark.isActive?"text-white":""},[a("q-icon",{attrs:{name:"mdi-message-bulleted-off q-pr-sm"}}),e._v("\n          Mensagem de despedida\n        ")],1),a("div",{staticClass:"row flex-gap-1"},[a("q-input",{staticClass:"contact-search",class:{"order-last q-mt-md":e.$q.screen.width<500},staticStyle:{width:"300px"},attrs:{filled:"",dense:"",debounce:"500",clearable:"",placeholder:"Localize"},on:{input:e.filtrarDespedidas},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}}),a("q-btn",{staticClass:"generate-button btn-rounded-50",staticStyle:{"margin-bottom":"15px","margin-right":"5px"},attrs:{icon:"eva-plus-outline",label:"Adicionar"},on:{click:function(a){e.despedidaEdicao={},e.modalDespedida=!0}}})],1)])]},proxy:!0},{key:"body-cell-color",fn:function(t){return[a("q-td",{staticClass:"text-center"},[a("div",{staticClass:"q-pa-sm rounded-borders",style:`background: ${t.row.color}`},[e._v("\n          "+e._s(t.row.color)+"\n        ")])])]}},{key:"body-cell-isActive",fn:function(e){return[a("q-td",{staticClass:"text-center"},[a("q-icon",{attrs:{size:"24px",name:e.value?"mdi-check-circle-outline":"mdi-close-circle-outline",color:e.value?"positive":"negative"}})],1)]}},{key:"body-cell-acoes",fn:function(t){return[a("q-td",{staticClass:"text-center"},[a("q-btn",{class:e.$q.dark.isActive?"text-white":"",attrs:{flat:"",round:"",icon:"eva-edit-outline"},on:{click:function(a){return e.editarDespedida(t.row)}}}),a("q-btn",{class:e.$q.dark.isActive?"text-white":"",attrs:{flat:"",round:"",icon:"eva-trash-outline"},on:{click:function(a){return e.deletarDespedida(t.row)}}})],1)]}}])}),a("ModalDespedida",{attrs:{modalDespedida:e.modalDespedida,despedidaEdicao:e.despedidaEdicao},on:{"update:modalDespedida":function(a){e.modalDespedida=a},"update:modal-despedida":function(a){e.modalDespedida=a},"update:despedidaEdicao":function(a){e.despedidaEdicao=a},"update:despedida-edicao":function(a){e.despedidaEdicao=a},"modal-despedida:criada":e.despedidaCriada,"modal-despedida:editada":e.despedidaEditada}})],1)},i=[],s=(t("14d9"),t("0cb4")),o=function(){var e=this,a=e._self._c;return a("q-dialog",{attrs:{persistent:"",value:e.modalDespedida},on:{hide:e.fecharModal,show:e.abrirModal}},[a("q-card",{staticClass:"q-pa-lg modal-container container-rounded-10"},[a("q-card-actions",{staticClass:"q-mt-md",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"negative",flat:"",icon:"eva-close"}})],1),a("q-card-section",[a("div",{staticClass:"text-h6 text-center font-family-main"},[e._v(e._s(e.despedidaEdicao.id?"Editar":"Criar")+" Despedida")])]),a("q-card-section",{staticClass:"q-pa-lg container-border container-rounded-10"},[a("div",{staticClass:"text-h6 font-family-main q-mb-md"},[e._v("\n        Despedida\n      ")]),a("q-input",{staticClass:"row col",staticStyle:{"margin-bottom":"15px","margin-right":"5px"},attrs:{rounded:"",outlined:"",label:"Despedida",autogrow:""},model:{value:e.despedida.message,callback:function(a){e.$set(e.despedida,"message",a)},expression:"despedida.message"}}),"admin"===e.userProfile?a("div",{staticClass:"full-width"},[a("q-checkbox",{attrs:{label:"Mostrar para todos"},model:{value:e.despedida.global,callback:function(a){e.$set(e.despedida,"global",a)},expression:"despedida.global"}})],1):e._e()],1),a("q-card-actions",{staticClass:"q-mt-md",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mr-md btn-rounded-50",attrs:{label:"Cancelar",color:"negative"}}),a("q-btn",{staticClass:"generate-button btn-rounded-50",attrs:{label:"Salvar",icon:"eva-save-outline"},on:{click:e.handleDespedida}})],1)],1)],1)},n=[],r={name:"ModalDespedida",props:{modalDespedida:{type:Boolean,default:!1},despedidaEdicao:{type:Object,default:()=>({id:null})}},data(){return{userProfile:"user",despedida:{id:null}}},methods:{resetarDespedida(){this.despedida={id:null}},fecharModal(){this.resetarDespedida(),this.$emit("update:despedidaEdicao",{id:null}),this.$emit("update:modalDespedida",!1)},abrirModal(){this.despedidaEdicao.id?this.despedida={...this.despedidaEdicao}:this.resetarDespedida()},async handleDespedida(){try{if(this.loading=!0,this.despedida.id){const{data:e}=await Object(s["a"])(this.despedida);this.$emit("modal-despedida:editada",e),this.$q.notify({type:"info",progress:!0,position:"top",textColor:"black",message:"Despedida editado!",actions:[{icon:"close",round:!0,color:"white"}]})}else{const{data:e}=await Object(s["b"])(this.despedida);this.$emit("modal-despedida:criada",e),this.$q.notify({type:"positive",progress:!0,position:"top",message:"Despedida criado!",actions:[{icon:"close",round:!0,color:"white"}]})}this.loading=!1,this.fecharModal()}catch(e){console.error(e),this.$notificarErro("Ocorreu um erro ao criar o despedida",e)}}},mounted(){this.userProfile=localStorage.getItem("profile")}},l=r,c=t("2877"),p=t("24e8"),u=t("f09f"),m=t("4b7e"),h=t("9c40"),f=t("a370"),g=t("27f9"),b=t("8f8e"),D=t("7f67"),v=t("eebe"),q=t.n(v),w=Object(c["a"])(l,o,n,!1,null,"8381c5a4",null),y=w.exports;q()(w,"components",{QDialog:p["a"],QCard:u["a"],QCardActions:m["a"],QBtn:h["a"],QCardSection:f["a"],QInput:g["a"],QCheckbox:b["a"]}),q()(w,"directives",{ClosePopup:D["a"]});var x=t("9a1b"),C={name:"Despedidas",components:{ModalDespedida:y},data(){return{params:{searchParam:null,userId:null},filter:null,despedidaEdicao:{},usuarios:[],grupos:[],modalDespedida:!1,despedidas:[],pagination:{rowsPerPage:40,rowsNumber:0,lastIndex:0},loading:!1,columns:[{name:"id",label:"#",field:"id",align:"left"},{name:"message",label:"Mensagem",field:"message",align:"left"},{name:"usuerId",label:"Usuário",field:"userId",align:"center",format:e=>this.formatUser(e)},{name:"createdAt",label:"Data",field:"createdAt",align:"center",format:e=>this.formatDate(e)},{name:"acoes",label:"Ações",field:"acoes",align:"center"}]}},methods:{async listarUsuarios(){const e=await Object(x["e"])();this.usuarios=e.data.users},formatUser(e){const a=this.usuarios.find((a=>a.id===e));return a?a.name:"Usuário não encontrado"},formatDate(e){const a=new Date(e);a.setMinutes(a.getMinutes()+a.getTimezoneOffset());const t=a.getDate().toString().padStart(2,"0"),d=(a.getMonth()+1).toString().padStart(2,"0"),i=a.getFullYear();return`${t}-${d}-${i}`},filtrarDespedidas(e){this.despedidas=[],this.params.searchParam=e,this.loading=!0,this.listarDespedidasFiltro(),this.loading=!1},async listarDespedidasFiltro(){this.loading=!0;const e=await Object(s["e"])(this.params),a=e.data;try{const e=this.params.searchParam.toLowerCase(),t=a.filter((a=>{const t=JSON.stringify(a).toLowerCase();return t.includes(e)}));this.LOAD_DESPEDIDAS(t)}catch(t){this.despedidas=e.data.farewellMessages}this.loading=!1},LOAD_DESPEDIDAS(e){this.despedidas=e},async listarDespedidas(){this.params.userId=localStorage.getItem("userId");const{data:e}=await Object(s["e"])(this.params);this.despedidas=e.farewellMessages},despedidaCriada(e){const a=[...this.despedidas];a.push(e),this.despedidas=[...a]},despedidaEditada(e){const a=[...this.despedidas],t=a.findIndex((a=>a.id===e.id));t>-1&&(a[t]=e),this.despedidas=[...a]},editarDespedida(e){this.despedidaEdicao={...e},this.modalDespedida=!0},deletarDespedida(e){this.$q.dialog({title:"Atenção!!",message:`Deseja realmente deletar o Despedida "${e.id}"?`,cancel:{label:"Não",color:"primary",push:!0},ok:{label:"Sim",color:"negative",push:!0},persistent:!0}).onOk((()=>{this.loading=!0,Object(s["c"])(e).then((a=>{let t=[...this.despedidas];t=t.filter((a=>a.id!==e.id)),this.despedidas=[...t],this.$q.notify({type:"positive",progress:!0,position:"top",message:`Despedida ${e.id} deletado!`,actions:[{icon:"close",round:!0,color:"white"}]})})),this.loading=!1}))}},mounted(){this.listarDespedidas(),this.listarUsuarios()}},k=C,E=t("eaac"),$=t("0016"),S=t("db86"),M=Object(c["a"])(k,d,i,!1,null,"344ecd7a",null);a["default"]=M.exports;q()(M,"components",{QTable:E["a"],QIcon:$["a"],QInput:g["a"],QBtn:h["a"],QTd:S["a"]})}}]);