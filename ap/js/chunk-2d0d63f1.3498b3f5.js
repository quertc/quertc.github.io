(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"ma-sm-4"},[a("v-col",{attrs:{cols:"12"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.dates,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.dates=e},"update:return-value":function(e){t.dates=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({staticClass:"rounded-lg",attrs:{solo:"",flat:"","hide-details":"auto","background-color":"#464646",label:"Диапазон дат",readonly:""},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"mr-1"},[t._v(" mdi-calendar ")])]},proxy:!0}],null,!0),model:{value:t.dateRangeText,callback:function(e){t.dateRangeText=e},expression:"dateRangeText"}},s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:"",range:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Отмена ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.saveDates}},[t._v(" ОК ")])],1)],1)],1),a("v-col",[a("v-row",[t._l(t.cards,(function(e){return a("v-col",{key:e.value,attrs:{cols:"ngr"===e.value?"12":null}},[a("v-card",{staticClass:"px-3",attrs:{flat:""}},[a("v-card-title",[t._v(t._s(e.text))]),a("v-card-text",{staticClass:"text-h3 white--text font-weight-bold"},[t.dashboardInfo?a("span",[t._v(t._s(t.dashboardInfo[e.value]))]):a("span",[t._v("?")]),a("span",{staticClass:"text-subtitle-2 font-weight-bold ml-1"},[t._v("RUB")])]),"promotions"===e.value?[a("v-btn",{attrs:{icon:"",absolute:"",top:"",right:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",t._l(t.expenses,(function(e){return a("v-list-item",{key:e.value,attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))]),a("v-list-item-subtitle",[t._v(" "+t._s(t.dashboardInfo[e.value])+" ")])],1)],1)})),1)],1)])]:t._e()],2)],1)})),a("v-col",{staticClass:"text-center text-h5",attrs:{cols:"12"}},[t._v(" Игры ")]),a("v-col",[a("v-card",{staticClass:"px-4 pb-2",attrs:{flat:""}},[a("v-data-table",{attrs:{headers:t.headers,items:[],"items-per-page":5,"no-data-text":"Статистика по режимам отсутствует"}})],1)],1)],2)],1)],1)},n=[],o=(a("a15b"),a("3835")),i={data:function(){return{menu:!1,dates:[],dateFrom:"",dateTo:"",cards:[{text:"Поступления (депозиты)",value:"deposits"},{text:"Расходы (выводы)",value:"withdraws"},{text:"Иные расходы (по умолч. промо)",value:"promotions"},{text:"Доход (NGR)",value:"ngr"}],show:!1,expenses:[{text:"Бонусы",value:"bonuses"},{text:"Подарки",value:"gifts"},{text:"Рефералка",value:"referrals"},{text:"Комиссия платёжной системы",value:"commissions"}],dashboardInfo:{deposits:13405,withdraws:2345,promotions:8344,ngr:30498,bonuses:8384,gifts:1020,referrals:1734,commissions:3450},headers:[{text:"Режим",value:"gameMode",class:"white--text text-subtitle-2"},{text:"Кол-во ставок:",value:"betsQty",class:"white--text text-subtitle-2"},{text:"Сумма ставок:",value:"betsAmount",class:"white--text text-subtitle-2"},{text:"Выиграно:",value:"winsAmount",class:"white--text text-subtitle-2"},{text:"Проиграно:",value:"looseAmount",class:"white--text text-subtitle-2"},{text:"GGR:",value:"ggr",class:"white--text text-subtitle-2"},{text:"",value:"action",align:"center"}]}},computed:{dateRangeText:function(){return this.dates.join(" ~ ")}},methods:{saveDates:function(){this.$refs.menu.save(this.dates);var t=Object(o["a"])(this.dates,2);this.dateFrom=t[0],this.dateTo=t[1]}}},l=i,r=a("2877"),c=a("6544"),u=a.n(c),d=a("8336"),v=a("b0af"),x=a("99d9"),m=a("62ad"),f=a("8fea"),h=a("2e4b"),p=a("ce7e"),b=a("0789"),w=a("132d"),_=a("da13"),g=a("5d23"),V=a("e449"),k=a("0fd9"),C=a("2fa4"),T=a("8654"),y=Object(r["a"])(l,s,n,!1,null,null,null);e["default"]=y.exports;u()(y,{VBtn:d["a"],VCard:v["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:m["a"],VDataTable:f["a"],VDatePicker:h["a"],VDivider:p["a"],VExpandTransition:b["a"],VIcon:w["a"],VListItem:_["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VMenu:V["a"],VRow:k["a"],VSpacer:C["a"],VTextField:T["a"]})}}]);
//# sourceMappingURL=chunk-2d0d63f1.3498b3f5.js.map