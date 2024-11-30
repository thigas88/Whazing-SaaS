(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"5be3":function(t,o,a){"use strict";a("5c56")},"5c56":function(t,o,a){},d4bd:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t._self._c;return"admin"===t.userProfile?o("div",[o("q-table",{staticClass:"contact-table my-sticky-dynamic container-rounded-10",attrs:{title:"Protocolos",data:t.protocolos,columns:t.columns,loading:t.loading,"row-key":"id","virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,pagination:t.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(o){t.pagination=o},"virtual-scroll":t.onScroll},scopedSlots:t._u([{key:"top-left",fn:function(){return[o("div",[o("h2",{class:t.$q.dark.isActive?"text-green":""},[o("q-icon",{attrs:{name:"mdi-timeline-text-outline"}}),t._v("\n          Protocolos\n        ")],1),o("q-input",{staticClass:"contact-search",class:{"order-last q-mt-md":t.$q.screen.width<500},staticStyle:{width:"300px"},attrs:{filled:"",dense:"",debounce:"500",clearable:"",placeholder:"Localize"},on:{input:t.filtrarProtocolos},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,2901929698),model:{value:t.filter,callback:function(o){t.filter=o},expression:"filter"}})],1)]},proxy:!0},{key:"body-cell-id",fn:function(a){return[o("q-td",{attrs:{props:a}},[o("a",{attrs:{href:t.getTicketUrl(a.row.id)}},[t._v(t._s(a.row.id))])])]}},{key:"body-cell-contactId",fn:function(a){return[o("q-td",{attrs:{props:a}},[t._v("\n        "+t._s(a.row.contactName||"Carregando...")+"\n      ")])]}},{key:"body-cell-userId",fn:function(a){return[o("q-td",{attrs:{props:a}},[t._v("\n        "+t._s(t.formatUser(a.row.userId))+"\n      ")])]}},{key:"body-cell-createdAt",fn:function(a){return[o("q-td",{attrs:{props:a}},[t._v("\n        "+t._s(t.formatDate(a.row.createdAt))+"\n      ")])]}},{key:"pagination",fn:function({pagination:o}){return[t._v("\n      "+t._s(t.protocolos.length)+"/"+t._s(o.rowsNumber)+"\n    ")]}}],null,!1,1378720102)})],1):t._e()},r=[],n=a("8982");function s(t){return Object(n["a"])({url:"/protocol",method:"get",params:t})}var i=a("9a1b"),l=a("73ad"),c={name:"Protocolos",data(){return{userProfile:"user",filter:null,contatosCache:{},usuarios:[],protocolos:[],pagination:{rowsPerPage:40,rowsNumber:0,lastIndex:0},params:{pageNumber:1,searchParam:null,hasMore:!0},loading:!1,columns:[{name:"id",label:"Ticket",field:"id",align:"left"},{name:"protocol",label:"Protocolo",field:"protocol",align:"left"},{name:"contactId",label:"Contato",field:"contactId",align:"center",format:t=>this.formatContact(t),sortable:!1},{name:"userId",label:"Usuário",field:"userId",align:"center",format:t=>this.formatUser(t)},{name:"createdAt",label:"Data",field:"createdAt",align:"center",format:t=>this.formatDate(t)}]}},methods:{async listarUsuarios(){const t=await Object(i["e"])();this.usuarios=t.data.users},async listarProtocolos(){this.loading=!0;try{const t=await s({searchParam:this.filter,pageNumber:this.params.pageNumber,tenantId:localStorage.getItem("tenantId")});t.data&&Array.isArray(t.data.protocols)?(this.protocolos=[...this.protocolos,...await Promise.all(t.data.protocols.map((async t=>(t.contactName=await this.getContactName(t.contactId),t))))],this.pagination.rowsNumber=t.data.count||0,this.pagination.hasMore=t.data.hasMore):console.error("Resposta da API não está no formato esperado:",t.data)}catch(t){console.error("Erro ao listar protocolos:",t)}finally{this.loading=!1}},async getContactName(t){if(this.contatosCache[t])return this.contatosCache[t].name;try{const o=await Object(l["i"])(t),a=o.data;return this.contatosCache[t]=a,a.name}catch(o){return console.error("Erro ao buscar contato:",o),"Contato não encontrado"}},formatUser(t){const o=this.usuarios.find((o=>o.id===t));return o?o.name:"Usuário não encontrado"},getTicketUrl(t){const o=this.$router.resolve({path:`/atendimento/${t}`});return o.href},formatDate(t){const o=new Date(t);o.setMinutes(o.getMinutes()+o.getTimezoneOffset());const a=o.getDate().toString().padStart(2,"0"),e=(o.getMonth()+1).toString().padStart(2,"0"),r=o.getFullYear();return`${a}-${e}-${r}`},async filtrarProtocolos(){this.params.pageNumber=1,this.params.hasMore=!0,this.protocolos=[],await this.listarProtocolos()},onScroll({to:t,ref:o,...a}){!this.loading&&this.params.hasMore&&t>=this.protocolos.length-10&&(this.loading=!0,this.params.pageNumber++,this.listarProtocolos())}},async mounted(){await this.listarProtocolos(),await this.listarUsuarios(),this.userProfile=localStorage.getItem("profile")}},d=c,u=(a("5be3"),a("2877")),p=a("eaac"),m=a("0016"),f=a("27f9"),h=a("db86"),g=a("eebe"),b=a.n(g),y=Object(u["a"])(d,e,r,!1,null,null,null);o["default"]=y.exports;b()(y,"components",{QTable:p["a"],QIcon:m["a"],QInput:f["a"],QTd:h["a"]})}}]);