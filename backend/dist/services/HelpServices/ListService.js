'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x1c3))/0x1*(parseInt(k(0x1d1))/0x2)+-parseInt(l(0x1d8))/0x3*(parseInt(l(0x1c9))/0x4)+-parseInt(l(0x1d7))/0x5+parseInt(l(0x1d3))/0x6*(-parseInt(k(0x1cb))/0x7)+-parseInt(k(0x1ca))/0x8+-parseInt(l(0x1d4))/0x9*(-parseInt(l(0x1c5))/0xa)+parseInt(l(0x1cc))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x26cfe));function b(c,d){const e=a();return b=function(f,g){f=f-0x1c1;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[m(0x1cf)]||function(c){const n=m;return c&&c[n(0x1cd)]?c:{'default':c};};Object[o(0x1c2)](exports,m(0x1cd),{'value':!![]});function a(){const r=['900sbtYov','title','trim','421180ReHwoC','37707ZHomzP','ASC','col','defineProperty','81tjCidW','LOWER','29610UNhzSM','length','toLowerCase','default','60QjwDEi','1326920ZdBKoC','28XlWcly','5580960odcQeS','__esModule','Sequelize','__importDefault','findAndCountAll','844YPXhNk','sequelize','257502xHlEhs'];a=function(){return r;};return a();}const sequelize_1=require(m(0x1d2)),Help_1=__importDefault(require('../../models/Help')),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const p=m,q=o,c={[sequelize_1['Op']['or']]:[{'title':sequelize_1[p(0x1ce)]['where'](sequelize_1[p(0x1ce)]['fn'](q(0x1c4),sequelize_1[q(0x1ce)][p(0x1c1)](q(0x1d5))),'LIKE','%'+searchParam[q(0x1c7)]()[q(0x1d6)]()+'%')}]},d=0x14,e=d*(+pageNumber-0x1),{count:f,rows:g}=await Help_1[q(0x1c8)][q(0x1d0)]({'where':c,'limit':d,'offset':e,'order':[['title',p(0x1d9)]]}),h=f>e+g[q(0x1c6)];return{'records':g,'count':f,'hasMore':h};};exports['default']=ListService;