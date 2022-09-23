(function(){"use strict";var e={23:function(e,t,n){var r=n(963),s=n(252);const a={class:"container mx-auto h-screen bg-white max-w-xl"},i={class:"flex flex-col justify-between h-full"};function o(e,t,n,r,o,u){const l=(0,s.up)("Header"),c=(0,s.up)("Request"),f=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",i,[(0,s.Wm)(l,{onUserId:u.searchUser},null,8,["onUserId"]),(0,s.Wm)(c,{client:this.status},null,8,["client"]),(0,s.Wm)(f)])])}var u=JSON.parse('{"r":[{"id":1,"name":"Абдибеков","lname":"Асет","mname":"Мейржанович","bday":"07.08.1993","iin":930807351075},{"id":2,"name":"Абдраимов","lname":"Дулат","mname":"Болатович","bday":"27.09.1974","iin":740927302733},{"id":3,"name":"Абдубаитов","lname":"Ержан","mname":"Тойшыбекұлы","bday":"04.06.1972","iin":720604302238},{"id":4,"name":"Абдубайтов","lname":"Асылжан","mname":"Сапарханович","bday":"03.05.1987","iin":870530302880}]}'),l=n.p+"./img/camera.1d68d3b5.svg";const c={class:"mx-auto w-full px-10"},f=(0,s._)("div",{class:"my-11 text-center"}," Поиск клиента в АФМ ",-1),m={class:"flex items-center justify-between rounded border-2 border-stone-200 px-5 py-2 w-full"},d=(0,s._)("button",{class:"flex items-center justify-center"},[(0,s._)("img",{src:l,alt:"camera"})],-1),p=(0,s._)("input",{class:"my-4 w-full px-6 py-4 rounded bg-blue-200 text-sm transition-colors hover:bg-blue-300",type:"submit",value:"Выполнить поиск"},null,-1);function v(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("div",c,[f,(0,s._)("form",{action:"",onSubmit:t[1]||(t[1]=(0,r.iM)(((...e)=>o.searchUser&&o.searchUser(...e)),["prevent"])),class:"flex flex-col items-center"},[(0,s._)("div",m,[(0,s.wy)((0,s._)("input",{type:"text",class:"outline-none px-1 py-2",placeholder:"Введите ИИН","onUpdate:modelValue":t[0]||(t[0]=e=>i.ID_value=e),minlength:"12",maxlength:"12"},null,512),[[r.nr,i.ID_value,void 0,{number:!0}]]),d]),p],32)])}var h={name:"app_header",data(){return{ID_value:""}},methods:{searchUser(){this.$emit("userId",this.ID_value)}}},x=n(744);const b=(0,x.Z)(h,[["render",v]]);var y=b;const w={class:"mx-auto w-full px-10"},g={key:0,class:"text-center"},_=(0,s._)("p",{class:"text-blue-400 mb-5"},"Клиент не обнаружен",-1),O=(0,s._)("p",{class:"text-slate-400 w-60 mx-auto"},"Проведение сделок с данным клиентом возможно",-1),j=[_,O],k={key:1,class:"text-center"},D=(0,s._)("p",{class:"text-red-400 mb-5"},"Клиент обнаружен",-1),U=(0,s._)("p",{class:"text-slate-400 w-60 mx-auto"},"Проведение сделок с клиентом не рекомендуется",-1),I=[D,U];function q(e,t,n,r,a,i){return(0,s.wg)(),(0,s.iD)("div",w,[0==this.client?((0,s.wg)(),(0,s.iD)("div",g,j)):(0,s.kq)("",!0),1==this.client?((0,s.wg)(),(0,s.iD)("div",k,I)):(0,s.kq)("",!0)])}var Z={name:"content_app",props:["client"]};const F=(0,x.Z)(Z,[["render",q]]);var W=F;const C={class:"mx-auto self-end text-center text-orange-700 mb-11"},H=(0,s._)("p",{class:"px-5"},"Сервис позволяет найти клиента в списке агенства финансового мониторинга",-1),P=[H];function R(e,t){return(0,s.wg)(),(0,s.iD)("div",C,P)}const S={},T=(0,x.Z)(S,[["render",R]]);var A=T,E=(n(669),{name:"App",components:{Header:y,Request:W,Footer:A},data(){return{users:[],status:null}},methods:{searchUser(e){for(let t of u.r){if(e===t.iin)return void(this.status=!0);this.status=!1}}}});const J=(0,x.Z)(E,[["render",o]]);var M=J;(0,r.ri)(M).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],a=e[c][2];for(var o=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(o=!1,a<i&&(i=a));if(o){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,s,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,i=r[0],o=r[1],u=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(u)var c=u(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkhalyk_project"]=self["webpackChunkhalyk_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(23)}));r=n.O(r)})();
//# sourceMappingURL=app.39c2f727.js.map
