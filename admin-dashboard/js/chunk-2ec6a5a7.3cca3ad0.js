(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ec6a5a7"],{"1d3a":function(t,e,r){"use strict";var s=r("a5eb"),i=r("dfdb"),a=r("6220"),n=r("4508"),o=r("6725"),u=r("a421"),c=r("6c15"),l=r("9c96"),v=r("0363"),f=v("species"),m=[].slice,d=Math.max;s({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var r,s,l,v=u(this),p=o(v.length),b=n(t,p),g=n(void 0===e?p:e,p);if(a(v)&&(r=v.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?i(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(v,b,g);for(s=new(void 0===r?Array:r)(d(g-b,0)),l=0;b<g;b++,l++)b in v&&c(s,l,v[b]);return s.length=l,s}})},"42e6":function(t,e,r){var s=r("06fa");t.exports=!s((function(){return Object.isExtensible(Object.preventExtensions({}))}))},4387:function(t,e,r){t.exports=r("7f97")},4929:function(t,e,r){t.exports=r("e332")},"5ac4":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"flex-column"},[r("v-col",{staticClass:"px-6 mb-3"},[r("v-card",{style:t.$vuetify.theme.dark?"background: #424242":"background: #57707D",attrs:{dark:""}},[r("v-row",{staticClass:"pa-4"},[r("v-col",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("ID")]),r("v-list-item-subtitle",[t._v("1")])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Сумма ставок")]),r("v-list-item-subtitle",[t._v("4")])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Сумма выигрышей")]),r("v-list-item-subtitle",[t._v("1000")])],1)],1)],1),r("v-col",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Прибыль")]),r("v-list-item-subtitle",[t._v("2000")])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Коэффициент")]),r("v-list-item-subtitle",[t._v("1.8")])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Подкрутка")]),r("v-list-item-subtitle",[t._v("Нет")])],1)],1)],1)],1)],1)],1),r("v-col",{staticClass:"px-6"},[r("v-card",{attrs:{elevation:"0"}},[r("v-card-title",[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{attrs:{cols:"12",sm:"4"}},[t._v(" Информация ")]),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("v-select",{attrs:{label:"Категория",items:["Все","Автовывод","Ручная"]},model:{value:t.group_type,callback:function(e){t.group_type=e},expression:"group_type"}})],1),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),r("v-data-table",{attrs:{headers:t.headers,items:t.filteredItems,search:t.search},scopedSlots:t._u([{key:"item.userName",fn:function(e){return[r("div",{staticStyle:{cursor:"pointer"},on:{click:function(r){return t.$router.push({name:"users",params:{id:e.item.userId}})}}},[r("v-avatar",{staticClass:"mr-2",attrs:{size:"35"}},[r("img",{attrs:{src:e.item.src}})]),r("span",[t._v(t._s(e.item.userName))])],1)]}}])})],1)],1)],1)},i=[],a=(r("4de4"),r("a9e3"),r("c13b")),n=r.n(a),o=r("4387"),u=r.n(o),c=r("ad99"),l=r.n(c);function v(t,e){return e||(e=l()(t).call(t,0)),u()(n()(t,{raw:{value:u()(e)}}))}var f=r("9530"),m=r.n(f);function d(){var t=v(["query user($id: Int!) {\n        getUser(id: $id) {\n          name\n        }\n      }"]);return d=function(){return t},t}var p={props:{id:{type:[Number,String],required:!0}},data:function(){return{getUser:null,group_type:null,search:"",headers:[{text:"ID",align:"left",value:"userId"},{text:"Имя пользователя",value:"userName"},{text:"Ставка",value:"bet"},{text:"Автовывод",value:"autoOutput"},{text:"Вывел на",value:"broughtTo"},{text:"Выиграл",value:"won"}],items:[{userId:1,userName:"Алекс",bet:100,autoOutput:"Да",broughtTo:1.55,won:155,src:"https://cdn.vuetifyjs.com/images/john.jpg",category:"Автовывод"},{userId:22,userName:"Саша",bet:100,autoOutput:"Да",broughtTo:1.55,won:155,src:"https://cdn.vuetifyjs.com/images/john.jpg",category:"Автовывод"},{userId:4,userName:"Алекс",bet:100,autoOutput:"Нет",broughtTo:1.6,won:160,src:"https://cdn.vuetifyjs.com/images/john.jpg",category:"Ручная"},{userId:1,userName:"Алекс",bet:1e3,autoOutput:"Да",broughtTo:1.55,won:1550,src:"https://cdn.vuetifyjs.com/images/john.jpg",category:"Автовывод"},{userId:8,userName:"Иван",bet:100,autoOutput:"Да",broughtTo:1.55,won:155,src:"https://cdn.vuetifyjs.com/images/john.jpg",category:"Автовывод"},{userId:21,userName:"Даша",bet:100,autoOutput:"Да",broughtTo:1.55,won:155,src:"https://cdn.vuetifyjs.com/images/john.jpg",category:"Автовывод"}]}},computed:{filteredItems:function(){var t=this;return this.items.filter((function(e){return"Все"==t.group_type?e:!t.group_type||e.category.toLowerCase()===t.group_type.toLowerCase()}))}},apollo:{getUser:{query:m()(d()),variables:{id:1}}}},b=p,g=r("2877"),h=r("6544"),y=r.n(h),j=r("8212"),x=r("b0af"),_=r("99d9"),w=r("62ad"),I=r("8fea"),O=r("da13"),k=r("5d23"),V=r("0fd9"),C=r("b974"),D=r("8654"),T=Object(g["a"])(b,s,i,!1,null,null,null);e["default"]=T.exports;y()(T,{VAvatar:j["a"],VCard:x["a"],VCardTitle:_["c"],VCol:w["a"],VDataTable:I["a"],VListItem:O["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VRow:V["a"],VSelect:C["a"],VTextField:D["a"]})},6594:function(t,e,r){var s=r("6e9a"),i=r("dfdb"),a=r("78e7"),n=r("4180").f,o=r("3e80"),u=r("42e6"),c=o("meta"),l=0,v=Object.isExtensible||function(){return!0},f=function(t){n(t,c,{value:{objectID:"O"+ ++l,weakData:{}}})},m=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,c)){if(!v(t))return"F";if(!e)return"E";f(t)}return t[c].objectID},d=function(t,e){if(!a(t,c)){if(!v(t))return!0;if(!e)return!1;f(t)}return t[c].weakData},p=function(t){return u&&b.REQUIRED&&v(t)&&!a(t,c)&&f(t),t},b=t.exports={REQUIRED:!1,fastKey:m,getWeakData:d,onFreeze:p};s[c]=!0},7972:function(t,e,r){t.exports=r("930e")},"7f97":function(t,e,r){t.exports=r("f6d8")},"92cd":function(t,e,r){r("1d3a");var s=r("a169");t.exports=s("Array").slice},"930e":function(t,e,r){r("9515");var s=r("764b"),i=s.Object,a=t.exports=function(t,e){return i.defineProperties(t,e)};i.defineProperties.sham&&(a.sham=!0)},9515:function(t,e,r){var s=r("a5eb"),i=r("c1b2"),a=r("c230");s({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperties:a})},ad99:function(t,e,r){t.exports=r("4929")},c13b:function(t,e,r){t.exports=r("7972")},dc15:function(t,e,r){var s=r("a5eb"),i=r("42e6"),a=r("06fa"),n=r("dfdb"),o=r("6594").onFreeze,u=Object.freeze,c=a((function(){u(1)}));s({target:"Object",stat:!0,forced:c,sham:!i},{freeze:function(t){return u&&n(t)?u(o(t)):t}})},e332:function(t,e,r){var s=r("92cd"),i=Array.prototype;t.exports=function(t){var e=t.slice;return t===i||t instanceof Array&&e===i.slice?s:e}},f6d8:function(t,e,r){r("dc15");var s=r("764b");t.exports=s.Object.freeze}}]);
//# sourceMappingURL=chunk-2ec6a5a7.3cca3ad0.js.map