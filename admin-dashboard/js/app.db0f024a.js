(function(e){function t(t){for(var r,a,o=t[0],u=t[1],l=t[2],s=0,d=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-3c5b70ec":"e769404b","chunk-1af6cc80":"708b1485","chunk-67c79ddf":"06a1dbec","chunk-2d0b2c9c":"1eb253bf","chunk-2d0e886e":"3a31f9c7","chunk-2d2102b7":"66a6f52d","chunk-2d2308ce":"cbab99a7","chunk-6f934930":"95219380"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-3c5b70ec":1,"chunk-1af6cc80":1,"chunk-67c79ddf":1,"chunk-6f934930":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3c5b70ec":"7db8f8c8","chunk-1af6cc80":"219bf7a1","chunk-67c79ddf":"636b0300","chunk-2d0b2c9c":"31d6cfe0","chunk-2d0e886e":"31d6cfe0","chunk-2d2102b7":"31d6cfe0","chunk-2d2308ce":"31d6cfe0","chunk-6f934930":"0fcce812"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=o(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/admin-dashboard/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{to:"/users"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Пользователи")])],1)],1),n("v-list-item",{attrs:{to:"/games-history"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-gamepad-variant")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("История всех игр")])],1)],1),n("v-list-item",{attrs:{to:"/withdrawal"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-cash-multiple")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Заявки на вывод средств")])],1)],1),n("v-list-item",{attrs:{to:"/logs"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-login-variant")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Логи")])],1)],1),n("v-list-item",{attrs:{to:"/statistics"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-information-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Общая статистика")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Admin Dashboard")])],1),n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("router-view")],1)],1)],1)},c=[],i={name:"App",data:function(){return{drawer:null}}},o=i,u=n("2877"),l=n("6544"),s=n.n(l),d=n("7496"),f=n("40dc"),p=n("5bc1"),h=n("a523"),v=n("a75b"),m=n("132d"),b=n("8860"),k=n("da13"),g=n("1800"),y=n("5d23"),w=n("f774"),_=n("2a7f"),P=Object(u["a"])(o,a,c,!1,null,null,null),O=P.exports;s()(P,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:p["a"],VContainer:h["a"],VContent:v["a"],VIcon:m["a"],VList:b["a"],VListItem:k["a"],VListItemAction:g["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VNavigationDrawer:w["a"],VToolbarTitle:_["a"]});n("d3b7");var V=n("8c4f");r["a"].use(V["a"]);var j=[{path:"/",redirect:"/users"},{path:"/users",component:function(){return Promise.all([n.e("chunk-3c5b70ec"),n.e("chunk-67c79ddf"),n.e("chunk-2d2308ce")]).then(n.bind(null,"ed81"))}},{path:"/games-history",component:function(){return Promise.all([n.e("chunk-3c5b70ec"),n.e("chunk-67c79ddf"),n.e("chunk-2d0b2c9c")]).then(n.bind(null,"2635"))}},{path:"/withdrawal",component:function(){return Promise.all([n.e("chunk-3c5b70ec"),n.e("chunk-67c79ddf"),n.e("chunk-2d0e886e")]).then(n.bind(null,"8a3b"))}},{path:"/logs",component:function(){return Promise.all([n.e("chunk-3c5b70ec"),n.e("chunk-67c79ddf"),n.e("chunk-2d2102b7")]).then(n.bind(null,"b76b"))}},{path:"/statistics",component:function(){return Promise.all([n.e("chunk-3c5b70ec"),n.e("chunk-1af6cc80")]).then(n.bind(null,"f2a0"))}},{path:"*",redirect:"/404"},{path:"/404",component:function(){return n.e("chunk-6f934930").then(n.bind(null,"9703"))}}],A=new V["a"]({mode:"history",base:"/admin-dashboard/",routes:j}),C=A,T=n("f309");r["a"].use(T["a"]);var E=new T["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:C,vuetify:E,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.db0f024a.js.map