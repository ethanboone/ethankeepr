(function(e){function t(t){for(var c,n,s=t[0],l=t[1],d=t[2],i=0,u=[];i<s.length;i++)n=s[i],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var c={},n={app:0},o={app:0},r=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b59d8":"4e563116","chunk-2d0c19e3":"99cd5453","chunk-2d2261b5":"6138cbc4","chunk-5635aa8e":"3c0aa6bf","chunk-74a9f4f0":"2c42bf36"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-5635aa8e":1,"chunk-74a9f4f0":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0b59d8":"31d6cfe0","chunk-2d0c19e3":"31d6cfe0","chunk-2d2261b5":"31d6cfe0","chunk-5635aa8e":"7c3543aa","chunk-74a9f4f0":"e030fb2e"}[e]+".css",o=l.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var d=r[s],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===c||i===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],i=d.getAttribute("data-href");if(i===c||i===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete n[e],b.parentNode.removeChild(b),a(r)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){n[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,a){c=o[e]=[t,a]}));t.push(c[2]=r);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(e);var u=new Error;d=function(t){i.onerror=i.onload=null,clearTimeout(b);var a=o[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}o[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(a,c,function(t){return e[t]}.bind(null,c));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var b=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"079d":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a("83fc"),n=a("8a4e"),o=a("2b20");class r{async getOne(e){const t=await o["a"].get("api/vaultkeeps/"+e);c["a"].vaultkeep=t.data}async create(e){const t=await o["a"].post("api/vaultkeeps",e);c["a"].vaultkeep.push(t.data),n["a"].log(t.data)}async delete(e){await o["a"].delete("api/vaultkeeps/"+e)}async getVaultKeepByVaultAndKeepId(e,t){return await o["a"].get(`api/vaultkeeps/${e}/keeps/${t}`)}}const s=new r},"238b":function(e,t,a){"use strict";a("3bd8")},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var c=a("bc3a"),n=a.n(c),o=a("8c89");const r=n.a.create({baseURL:o["b"],timeout:8e3}),s=function(e){r.defaults.headers.authorization=e}},"3bd8":function(e,t,a){},"41cb":function(e,t,a){"use strict";var c=a("6c02"),n=a("8816");function o(e){return()=>a("a2f9")(`./${e}.vue`)}const r=[{path:"/",name:"Home",component:o("HomePage")},{path:"/about",name:"About",component:o("AboutPage")},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:n["a"]},{path:"/profile/:id",name:"Profile",component:o("ProfilePage")},{path:"/vault/:id",name:"Vault",component:o("VaultPage")}],s=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:r});t["a"]=s},"52e8":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["H"])("data-v-7c7f3264"),o=n((e,t,a,n,o,r)=>(Object(c["r"])(),Object(c["d"])("div")));var r={setup(){const e=Object(c["v"])({});return{state:e}}};r.render=o,r.__scopeId="data-v-7c7f3264";t["default"]=r},"55aa":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["h"])("footer",null,[Object(c["h"])("div",{class:"bg-dark text-light text-center p-4"}," Made with 💖 by CodeWorks ")],-1);function o(e,t,a,o,r,s){const l=Object(c["y"])("Navbar"),d=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("header",null,[Object(c["h"])(l)]),Object(c["h"])("main",null,[Object(c["h"])(d)]),n],64)}var r=a("83fc"),s={name:"App",setup(){return{appState:Object(c["b"])(()=>r["a"])}}};a("5d0a");s.render=o;var l=s;function d(e){const t=a("ccc2");t.keys().forEach(a=>{const c=t(a),n=c.default||c,o=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,n)})}var i=a("41cb"),u=a("4989"),b=a.n(u),p=a("1157"),v=a.n(p),O=a("f0bd");const f=Object(c["c"])(l);d(f),f.use(i["a"],b.a,v.a,O["default"]).mount("#app")},"591d":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["H"])("data-v-6a69faee");Object(c["u"])("data-v-6a69faee");const o={class:"column mx-1 my-2 rounded bg-card border-0 shadow-lg"},r={class:"border-0"},s={class:"card bg-dark text-white border-0"},l={class:"m-0"},d={class:"row transparent rounded m-0"},i={class:"col-12 d-flex justify-content-center"},u={class:"card-title mb-0"},b={class:"col-12 d-flex justify-content-center"},p={class:"my-2"},v={class:""},O={class:"modal-dialog"},f={class:"modal-content"},j={class:"modal-body"},h=Object(c["f"])('<div class="row justify-content-end" data-v-6a69faee><div class="col-6" data-v-6a69faee><div class="text-right" data-v-6a69faee><button type="button" class="close mb-3" data-dismiss="modal" aria-label="Close" data-v-6a69faee><span aria-hidden="true" data-v-6a69faee>×</span></button></div></div></div>',1),m={class:"row"},g={class:"col-12 col-md-6 d-flex"},y={class:"col-12 col-md-6 d-flex flex-column"},k={id:"keepModal",class:"d-flex"},w={class:"d-flex flex-row"},x={class:"mx-2"},A={class:"router my-2"},V={class:"d-flex justify-content-center my-2"},_={class:"dropdown"},C=Object(c["h"])("button",{class:"btn btn-sm btn-outline-info dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Add To Vault ",-1),P={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"};Object(c["s"])();const T=n((e,t,a,T,E,I)=>{const K=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("div",o,[Object(c["h"])("div",r,[Object(c["h"])("div",s,[Object(c["h"])("img",{src:a.keep.img,class:"card-img",alt:"keep image"},null,8,["src"]),Object(c["h"])("div",{class:"card-img-overlay p-0 d-flex align-items-end",onClick:t[1]||(t[1]=e=>T.details(a.keep.id,a.keep))},[Object(c["h"])("div",l,[Object(c["h"])("div",d,[Object(c["h"])("div",i,[Object(c["h"])("h5",u,Object(c["A"])(a.keep.name),1)]),Object(c["h"])("div",b,[Object(c["h"])(K,{to:{name:"Profile",params:{id:a.keep.creatorId}}},{default:n(()=>[Object(c["h"])("div",p,[Object(c["h"])("img",{src:a.keep.creator.picture,width:"40",class:"rounded-circle",alt:""},null,8,["src"]),Object(c["g"])(" "+Object(c["A"])(a.keep.creator.name),1)])]),_:1},8,["to"])])])])])])]),Object(c["h"])("div",v,[Object(c["h"])("div",{class:"modal",id:"keep"+a.keep.id,tabindex:"-1","aria-labelledby":"keepModal","aria-hidden":"true"},[Object(c["h"])("div",O,[Object(c["h"])("div",f,[Object(c["h"])("div",j,[h,Object(c["h"])("div",m,[Object(c["h"])("div",g,[Object(c["h"])("img",{src:a.keep.img,"max-width":"100%",height:"auto",class:"img-fluid",alt:""},null,8,["src"])]),Object(c["h"])("div",y,[Object(c["h"])("h3",k,Object(c["A"])(a.keep.name),1),Object(c["h"])("div",w,[Object(c["h"])("p",x," Keeps: "+Object(c["A"])(a.keep.keeps),1)]),Object(c["h"])("p",null,Object(c["A"])(a.keep.description),1),Object(c["h"])(K,{to:{name:"Profile",params:{id:a.keep.creatorId}}},{default:n(()=>[Object(c["h"])("div",A,[Object(c["h"])("img",{src:a.keep.creator.picture,width:"60",class:"rounded-circle",alt:""},null,8,["src"]),Object(c["g"])(" "+Object(c["A"])(a.keep.creator.name),1)])]),_:1},8,["to"]),Object(c["h"])("div",V,[Object(c["h"])("div",_,[C,Object(c["h"])("div",P,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(T.state.myVaults,e=>(Object(c["r"])(),Object(c["d"])("button",{class:"dropdown-item",type:"button",key:e.id,onClick:t=>T.addToVault(a.keep.id,a.keep,e.id)},Object(c["A"])(e.name),9,["onClick"]))),128))])]),T.state.account&&T.state.account.id==a.keep.creatorId?(Object(c["r"])(),Object(c["d"])("button",{key:0,type:"button-sm",class:"btn btn-sm btn-outline-danger mx-2",onClick:t[2]||(t[2]=e=>T.deleteKeep(a.keep.id))}," Delete ")):Object(c["e"])("",!0)])])])])])])],8,["id"])])])});var E=a("1157"),I=a.n(E),K=a("6c96"),M=a("83fc"),S=a("079d"),H={props:{keep:{type:Object,required:!0}},setup(){const e=Object(c["v"])({account:Object(c["b"])(()=>M["a"].account),myVaults:Object(c["b"])(()=>M["a"].myVaults)});return{state:e,details(e,t){I()("#keep"+e).modal("toggle")},async addToVault(e,t,a){t.keeps++,K["a"].userEdit(e,t);const c={keepId:e,vaultId:a};S["a"].create(c)},async deleteKeep(e){try{const t=window.confirm("Are you sure you want to delete this keep?");t&&window.alert(await K["a"].delete(e))}catch(t){}}}}};a("e47a");H.render=T,H.__scopeId="data-v-6a69faee";t["default"]=H},5957:function(e,t,a){"use strict";a.r(t);const c={};t["default"]=c},"5d0a":function(e,t,a){"use strict";a("7598")},"6c96":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a("83fc"),n=a("8a4e"),o=a("2b20");class r{async getAll(){const e=await o["a"].get("api/keeps");c["a"].keeps=e.data}async getOne(e){const t=await o["a"].get("api/keeps/"+e);c["a"].activeKeep=t.data}async create(e){await o["a"].post("api/keeps",e),this.getAll()}async update(e,t){const a=await o["a"].put("api/keeps/"+e,t);c["a"].keeps.push(a.data)}async userEdit(e,t){const a=await o["a"].put(`api/keeps/${e}/edit`,t);this.getAll(),n["a"].log(a.data)}async delete(e){const t=await o["a"].delete("api/keeps/"+e);return this.getAll(),t.data}async getKeepsByVaultId(e){const t=await o["a"].get(`api/vaults/${e}/keeps`);c["a"].vaultKeeps=t.data}}const s=new r},7598:function(e,t,a){},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("7a23");const n=Object(c["v"])({user:{},account:{},activeProfile:{},vaults:[],activeVault:{},myVaults:[],keeps:[],activeKeep:{},vaultKeeps:[]})},"8a4e":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("8c89");function n(e,t){if(c["d"])console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const o={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}}},"8c89":function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s}));const c=window.location.origin.includes("localhost"),n=c?"https://localhost:5001":"",o="dev-uw7z52yt.us.auth0.com",r="https://ethanboone.com",s="YZV5BqC7twMXzA68pxeMNBjqBwTOJxE8"},"9cc1":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["H"])("data-v-c692904e");Object(c["u"])("data-v-c692904e");const o={key:0,class:"mx-1 my-2 card rounded"},r={class:"m-2"},s={key:0,class:"d-flex justify-content-end"},l=Object(c["h"])("span",{"aria-hidden":"true"},"×",-1),d={class:"modal-dialog"},i={class:"modal-content"},u={class:"modal-header"},b={class:"modal-title",id:"exampleModalLabel"},p=Object(c["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["h"])("span",{"aria-hidden":"true"},"×")],-1),v={class:"modal-body"},O=Object(c["h"])("div",{class:"modal-footer"},[Object(c["h"])("button",{type:"button",class:"btn btn-primary"}," Save changes ")],-1);Object(c["s"])();const f=n((e,t,a,f,j,h)=>{const m=Object(c["y"])("router-link");return f.state.account?(Object(c["r"])(),Object(c["d"])("div",o,[Object(c["h"])("div",r,[f.state.account.id==a.vault.creatorId?(Object(c["r"])(),Object(c["d"])("div",s,[Object(c["h"])("button",{type:"button",class:"close mb-1",onClick:t[1]||(t[1]=e=>f.deleteVault(a.vault.id))},[l])])):Object(c["e"])("",!0),Object(c["h"])(m,{to:{name:"Vault",params:{id:a.vault.id}}},{default:n(()=>[Object(c["h"])("h4",null,Object(c["A"])(a.vault.name),1)]),_:1},8,["to"]),Object(c["h"])(m,{to:{name:"Profile",params:{id:a.vault.creatorId}}},{default:n(()=>[Object(c["g"])(Object(c["A"])(a.vault.creator.img)+" "+Object(c["A"])(a.vault.creator.name),1)]),_:1},8,["to"])]),Object(c["h"])("div",{class:"modal",id:a.vault.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[Object(c["h"])("div",d,[Object(c["h"])("div",i,[Object(c["h"])("div",u,[Object(c["h"])("img",{src:a.vault.img,height:"100",alt:""},null,8,["src"]),Object(c["h"])("h3",b,Object(c["A"])(a.vault.name),1),p]),Object(c["h"])("div",v,Object(c["A"])(a.vault.description),1),O])])],8,["id"])])):Object(c["e"])("",!0)});var j=a("1157"),h=a.n(j),m=a("d10d"),g=a("83fc"),y={props:{vault:{type:Object,required:!0}},setup(){const e=Object(c["v"])({account:Object(c["b"])(()=>g["a"].account)});return{state:e,details(e){h()(""+e).modal("toggle")},async deleteVault(e){const t=window.confirm("Are you sure you want to delete this vault?");t&&await m["a"].delete(e)}}}};y.render=f,y.__scopeId="data-v-c692904e";t["default"]=y},"9d8d":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["H"])("data-v-c5b0a578");Object(c["u"])("data-v-c5b0a578");const o={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r=Object(c["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(c["h"])("h1",null,"Keepr")],-1),s=Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-nav mr-auto"},i={class:"nav-item"},u=Object(c["g"])(" Home "),b={class:"nav-item"},p=Object(c["g"])(" About "),v={class:"navbar-text"},O={key:1,class:"dropdown"},f={class:"mx-3"},j=Object(c["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(c["s"])();const h=n((e,t,a,h,m,g)=>{const y=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",o,[Object(c["h"])(y,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:n(()=>[r]),_:1}),s,Object(c["h"])("div",l,[Object(c["h"])("ul",d,[Object(c["h"])("li",i,[Object(c["h"])(y,{to:{name:"Home"},class:"nav-link"},{default:n(()=>[u]),_:1})]),Object(c["h"])("li",b,[Object(c["h"])(y,{to:{name:"About"},class:"nav-link"},{default:n(()=>[p]),_:1})])]),Object(c["h"])("span",v,[h.user.isAuthenticated?(Object(c["r"])(),Object(c["d"])("div",O,[Object(c["h"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>h.state.dropOpen=!h.state.dropOpen)},[Object(c["h"])("img",{src:h.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(c["h"])("span",f,Object(c["A"])(h.user.name),1)]),Object(c["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:h.state.dropOpen}],onClick:t[4]||(t[4]=e=>h.state.dropOpen=!1)},[Object(c["h"])(y,{to:{name:"Profile",params:{id:h.state.account.id}}},{default:n(()=>[j]),_:1},8,["to"]),Object(c["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>h.logout&&h.logout(...e))}," logout ")],2)])):(Object(c["r"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>h.login&&h.login(...e))}," Login "))])])])});var m=a("8816"),g=a("83fc"),y=a("8c89"),k=a("41cb"),w=a("8a4e"),x=a("2b20");class A{async getAccount(){try{const e=await x["a"].get("/account");g["a"].account=e.data}catch(e){w["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const V=new A;var _=a("d10d");const C=Object(m["b"])({domain:y["e"],clientId:y["c"],audience:y["a"],onRedirectCallback:e=>{k["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});C.on(C.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(x["b"])(C.bearer),g["a"].user=C.user,await V.getAccount(),await _["a"].getMyVaults(g["a"].account.id)}));var P={name:"Navbar",setup(){const e=Object(c["v"])({dropOpen:!1,account:Object(c["b"])(()=>g["a"].account)});return{state:e,user:Object(c["b"])(()=>g["a"].user),async login(){C.loginWithPopup()},async logout(){await C.logout({returnTo:window.location.origin})}}}};a("238b");P.render=h,P.__scopeId="data-v-c5b0a578";t["default"]=P},a2f9:function(e,t,a){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-74a9f4f0"],"./HomePage.vue":["78a7","chunk-5635aa8e"],"./ProfilePage.vue":["1a3e","chunk-2d0b59d8"],"./VaultPage.vue":["e6f4","chunk-2d2261b5"]};function n(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",e.exports=n},a72c:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["H"])("data-v-1605f0fe");Object(c["u"])("data-v-1605f0fe");const o={class:"mx-1 my-2 card rounded"},r={class:""},s={class:"text-center my-2"},l={class:"d-flex justify-content-center my-3"},d={class:""},i={class:"modal-dialog"},u={class:"modal-content"},b={class:"modal-body"},p=Object(c["f"])('<div class="row justify-content-end" data-v-1605f0fe><div class="col-6" data-v-1605f0fe><div class="text-right" data-v-1605f0fe><button type="button" class="close mb-3" data-dismiss="modal" aria-label="Close" data-v-1605f0fe><span aria-hidden="true" data-v-1605f0fe>×</span></button></div></div></div>',1),v={class:"row"},O={class:"col-12 col-md-6 d-flex"},f={class:"col-12 col-md-6 d-flex flex-column"},j={id:"keepModal",class:"d-flex"},h={class:"d-flex flex-row"},m={class:"mx-2"},g={class:"my-2"},y={class:"row d-flex"},k={class:"col-12 d-flex justify-content-center my-2"},w={key:1,class:"dropdown"},x=Object(c["h"])("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Add To Vault ",-1),A={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},V={class:"d-none"};Object(c["s"])();const _=n((e,t,a,_,C,P)=>{const T=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("div",o,[Object(c["h"])("div",r,[Object(c["h"])("button",{type:"button",class:"btn","data-toggle":"modal",onClick:t[1]||(t[1]=e=>_.details(a.keep.id,a.keep))},[Object(c["h"])("img",{src:a.keep.img,class:"w-100",alt:""},null,8,["src"]),Object(c["g"])(" "+Object(c["A"])(a.keep.name),1)]),Object(c["h"])(T,{to:{name:"Profile",params:{id:a.keep.creatorId}}},{default:n(()=>[Object(c["h"])("div",s,[Object(c["h"])("img",{src:a.keep.creator.picture,width:"60",class:"rounded-circle",alt:""},null,8,["src"]),Object(c["g"])(" "+Object(c["A"])(a.keep.creator.name),1)])]),_:1},8,["to"]),Object(c["h"])("div",l,[_.state.vault.creatorId==_.state.account.id?(Object(c["r"])(),Object(c["d"])("button",{key:0,class:"btn btn-secondary",onClick:t[2]||(t[2]=e=>_.removeKeep(a.keep.id))}," Remove From Vault ")):Object(c["e"])("",!0)])]),Object(c["h"])("div",d,[Object(c["h"])("div",{class:"modal",id:"keep"+a.keep.id,tabindex:"-1","aria-labelledby":"keepModal","aria-hidden":"true"},[Object(c["h"])("div",i,[Object(c["h"])("div",u,[Object(c["h"])("div",b,[p,Object(c["h"])("div",v,[Object(c["h"])("div",O,[Object(c["h"])("img",{src:a.keep.img,"max-width":"100%",height:"auto",class:"img-fluid",alt:""},null,8,["src"])]),Object(c["h"])("div",f,[Object(c["h"])("h3",j,Object(c["A"])(a.keep.name),1),Object(c["h"])("div",h,[Object(c["h"])("p",m," Keeps: "+Object(c["A"])(a.keep.keeps),1)]),Object(c["h"])("p",null,Object(c["A"])(a.keep.description),1),Object(c["h"])(T,{to:{name:"Profile",params:{id:a.keep.creatorId}}},{default:n(()=>[Object(c["h"])("div",g,[Object(c["h"])("img",{src:a.keep.creator.picture,width:"60",class:"rounded-circle",alt:""},null,8,["src"]),Object(c["g"])(" "+Object(c["A"])(a.keep.creator.name),1)])]),_:1},8,["to"]),Object(c["h"])("div",y,[Object(c["h"])("div",k,[_.state.account.id==_.state.vault.creatorId?(Object(c["r"])(),Object(c["d"])("button",{key:0,class:"btn btn-secondary",onClick:t[3]||(t[3]=e=>_.removeKeep(a.keep.id))}," Remove From Vault ")):(Object(c["r"])(),Object(c["d"])("div",w,[x,Object(c["h"])("div",A,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(_.state.myVaults,e=>(Object(c["r"])(),Object(c["d"])("button",{class:"dropdown-item",type:"button",key:e.id,onClick:t=>_.addToVault(a.keep.id,a.keep,e.id)},Object(c["A"])(e.name),9,["onClick"]))),128))])]))])]),_.state.account&&_.state.account.id==a.keep.creatorId?(Object(c["r"])(),Object(c["d"])("button",{key:0,type:"button-sm",class:"btn btn-danger",onClick:t[4]||(t[4]=e=>_.deleteKeep(a.keep.id))}," Delete ")):Object(c["e"])("",!0),Object(c["h"])("div",V,Object(c["A"])(_.state.keepId=a.keep.id),1)])])])])])],8,["id"])])])});var C=a("1157"),P=a.n(C),T=a("6c96"),E=a("83fc"),I=a("079d"),K=a("8a4e"),M={props:{keep:{type:Object,required:!0}},setup(){const e=Object(c["v"])({account:Object(c["b"])(()=>E["a"].account),myVaults:Object(c["b"])(()=>E["a"].myVaults),vault:Object(c["b"])(()=>E["a"].activeVault),vaultKeep:null,keepId:null});return{state:e,details(e,t){P()("#keep"+e).modal("toggle")},async addToVault(e,t,a){t.keeps++,T["a"].userEdit(e,t);const c={keepId:e,vaultId:a};I["a"].create(c)},async deleteKeep(e){try{const t=window.confirm("Are you sure you want to delete this keep?");t&&window.alert(await T["a"].delete(e))}catch(t){}},async removeKeep(t){try{const a=window.confirm("Are you sure you want to remove this keep from the vault?");a&&(e.vaultKeep=await I["a"].getVaultKeepByVaultAndKeepId(e.vault.id,t),await I["a"].delete(e.vaultKeep.data.id))}catch(a){K["a"].error(a)}}}}};M.render=_,M.__scopeId="data-v-1605f0fe";t["default"]=M},ccc2:function(e,t,a){var c={"./Keep.vue":"591d","./KeepDetails.vue":"5957","./NewKeep.vue":"52e8","./NewVault.vue":"f9f8","./Vault.vue":"9cc1","./VaultKeep.vue":"a72c","./navbar.vue":"9d8d"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=o,e.exports=n,n.id="ccc2"},d10d:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),n=a("2b20");class o{async getAll(){const e=await n["a"].get("api/vaults");c["a"].vaults=e.data}async getOne(e){const t=await n["a"].get("api/vaults/"+e);c["a"].activeVault=t.data}async create(e){const t=await n["a"].post("api/vaults",e);c["a"].vaults.push(t.data)}async update(e,t){const a=await n["a"].put("api/vaults/"+e,t);c["a"].vaults.push(a.data)}async delete(e){await n["a"].delete("api/vaults/"+e),c["a"].vaults.filter(t=>t.id!==e)}async getMyVaults(e){const t=await n["a"].get(`api/profiles/${e}/vaults`);c["a"].myVaults=t.data}}const r=new o},e47a:function(e,t,a){"use strict";a("55aa")},f9f8:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["H"])("data-v-d2eaf738");Object(c["u"])("data-v-d2eaf738");const o=Object(c["h"])("form",null,[Object(c["h"])("div",{class:"form-group"},[Object(c["h"])("label",{for:"exampleFormControlSelect1"},"Example select"),Object(c["h"])("select",{class:"form-control",id:"exampleFormControlSelect1"},[Object(c["h"])("option",null,"1"),Object(c["h"])("option",null,"2")])])],-1);Object(c["s"])();const r=n((e,t,a,n,r,s)=>(Object(c["r"])(),Object(c["d"])("div",null,[o])));var s={setup(){const e=Object(c["v"])({});return{state:e}}};s.render=r,s.__scopeId="data-v-d2eaf738";t["default"]=s}});