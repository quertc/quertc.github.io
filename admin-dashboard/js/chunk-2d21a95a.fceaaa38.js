(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a95a"],{bbae:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"px-1",attrs:{elevation:"0"}},[a("v-card-title",[a("v-row",{attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[e._v(" Логи ")]),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-select",{attrs:{label:"Категория",items:["All","Admin","Moderator","User"]},model:{value:e.group_type,callback:function(t){e.group_type=t},expression:"group_type"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),a("v-data-table",{attrs:{headers:e.headers,items:e.filteredItems,search:e.search},scopedSlots:e._u([{key:"item.action",fn:function(){return[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-information-outline ")])],1)]},proxy:!0}])})],1)},s=[],o=(a("4de4"),a("accc"),a("0d03"),{data:function(){return{group_type:null,search:"",headers:[{text:"ID пользователя",align:"left",value:"userId"},{text:"Имя пользователя",value:"userName"},{text:"Роль",value:"userRole"},{text:"Дата",value:"date"},{text:"Способ входа",value:"loginMethod"},{text:"Действия",value:"action",sortable:!1}],items:[{userId:21,userName:"Саша",userRole:"moderator",date:(new Date).toISOString().substr(0,10),loginMethod:"vkontakte"},{userId:22,userName:"Ваня",userRole:"user",date:(new Date).toISOString().substr(0,10),loginMethod:"local"},{userId:30,userName:"Катя",userRole:"user",date:(new Date).toISOString().substr(0,10),loginMethod:"vkontakte"},{userId:4,userName:"Даша",userRole:"user",date:(new Date).toISOString().substr(0,10),loginMethod:"local"},{userId:51,userName:"Леша",userRole:"user",date:(new Date).toISOString().substr(0,10),loginMethod:"vkontakte"},{userId:6,userName:"Андрей",userRole:"moderator",date:(new Date).toISOString().substr(0,10),loginMethod:"vkontakte"},{userId:7,userName:"Алекс",userRole:"user",date:(new Date).toISOString().substr(0,10),loginMethod:"vkontakte"}]}},computed:{filteredItems:function(){var e=this;return this.items.filter((function(t){return"All"==e.group_type?t:!e.group_type||t.userRole.toLowerCase()===e.group_type.toLowerCase()}))}}}),l=o,n=a("2877"),u=a("6544"),i=a.n(u),d=a("8336"),c=a("b0af"),m=a("99d9"),v=a("62ad"),p=a("8fea"),g=a("132d"),b=a("0fd9"),f=a("b974"),h=a("8654"),I=Object(n["a"])(l,r,s,!1,null,null,null);t["default"]=I.exports;i()(I,{VBtn:d["a"],VCard:c["a"],VCardTitle:m["c"],VCol:v["a"],VDataTable:p["a"],VIcon:g["a"],VRow:b["a"],VSelect:f["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=chunk-2d21a95a.fceaaa38.js.map