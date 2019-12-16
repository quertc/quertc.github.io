(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85219058"],{"17b3":function(e,t,i){},a951:function(e,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getUsers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"users"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"provider"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"img"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"balance"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:224}};i.loc.source={body:"query {\r\n  getUsers {\r\n    count,\r\n    users {\r\n      id,\r\n      name,\r\n      customId,\r\n      email,\r\n      status,\r\n      provider,\r\n      role,\r\n      img,\r\n      createdAt,\r\n      updatedAt,\r\n      balance\r\n    }\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,t)})),e.definitions&&e.definitions.forEach((function(e){n(e,t)}))}var a={};(function(){i.definitions.forEach((function(e){if(e.name){var t=new Set;n(e,t),a[e.name.value]=t}}))})(),e.exports=i},ed81:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{staticClass:"py-0 px-4"},[n("v-card",{attrs:{elevation:"0"}},[n("v-card-title",[n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"12",sm:"4"}},[e._v(" Пользователи ")]),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-select",{attrs:{label:"Категория",items:["All","Admin","Moderator","User"]}})],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск"}})],1)],1)],1)],1),n("ApolloQuery",{attrs:{query:i("a951")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.result,a=i.data,r=i.error,s=t.isLoading;return[s?n("div",{staticClass:"loading apollo"},[e._v("Loading...")]):r?n("div",{staticClass:"error apollo"},[e._v("An error occurred")]):a?n("div",{staticClass:"result apollo"},[n("v-data-table",{attrs:{headers:e.headers,items:a.getUsers.users,page:e.page,"items-per-page":e.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(t){e.page=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"item.img",fn:function(e){return[n("v-avatar",{attrs:{size:"37"}},[n("img",{attrs:{src:e.item.img}})])]}},{key:"item.action",fn:function(t){return[n("v-btn",{attrs:{to:{name:"users",params:{id:t.item.id}},icon:""}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1)]}}],null,!0)}),n("div",{staticClass:"text-center pt-2"},[n("v-pagination",{attrs:{length:e.pageCount},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),n("v-text-field",{attrs:{value:e.itemsPerPage,label:"Пользователей на странице",type:"number",min:"1",max:"100"},on:{input:function(t){e.itemsPerPage=parseInt(t,10)}}})],1)],1):n("div",{staticClass:"no-result apollo"},[e._v("No result")])]}}])})],1)],1)},a=[],r={data:function(){return{page:1,pageCount:0,itemsPerPage:10,headers:[{text:"ID",align:"left",value:"id"},{text:"Имя",value:"name"},{text:"Custom ID",value:"customId"},{text:"Почта",value:"email"},{text:"Статус",value:"status"},{text:"Провайдер",value:"provider"},{text:"Роль",value:"role"},{text:"Аватар",value:"img",sortable:!1},{text:"Зарегистирован",value:"createdAt"},{text:"Обновлен",value:"updatedAt"},{text:"Баланс",value:"balance"},{text:"Действия",value:"action",sortable:!1}]}}},s=r,l=i("2877"),o=i("6544"),u=i.n(o),c=i("8212"),d=i("8336"),v=i("b0af"),m=i("99d9"),h=i("62ad"),p=i("8fea"),f=i("132d"),g=(i("a4d3"),i("99af"),i("4de4"),i("4160"),i("d81d"),i("0d03"),i("a9e3"),i("1d1c"),i("7a82"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("e25e"),i("25f0"),i("159b"),i("4795"),i("d0ff")),b=i("fc11"),k=(i("17b3"),i("9d26")),x=i("dc22"),y=i("58df"),O=i("a9ad"),S=i("7560");function N(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function I(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?N(Object(i),!0).forEach((function(t){Object(b["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var j=Object(y["a"])(O["a"],S["a"]).extend({name:"v-pagination",directives:{Resize:x["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(e){return e%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return I({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10),t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var i=t%2===0?1:0,n=Math.floor(t/2),a=this.length-n+1+i;if(this.value>n&&this.value<a){var r=this.value-n+2,s=this.value+n-2-i;return[1,"..."].concat(Object(g["a"])(this.range(r,s)),["...",this.length])}if(this.value===n){var l=this.value+n-1-i;return[].concat(Object(g["a"])(this.range(1,l)),["...",this.length])}if(this.value===a){var o=this.value-n+1;return[1,"..."].concat(Object(g["a"])(this.range(o,this.length)))}return[].concat(Object(g["a"])(this.range(1,n)),["..."],Object(g["a"])(this.range(a,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){var i=[];e=e>0?e:1;for(var n=e;n<=t;n++)i.push(n);return i},genIcon:function(e,t,i,n){return e("li",[e("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button"},on:i?{}:{click:n}},[e(k["a"],[t])])])},genItem:function(e,t){var i=this,n=t===this.value&&(this.color||"primary");return e("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":t===this.value},attrs:{type:"button"},on:{click:function(){return i.$emit("input",t)}}}),[t.toString()])},genItems:function(e){var t=this;return this.items.map((function(i,n){return e("li",{key:n},[isNaN(Number(i))?e("span",{class:"v-pagination__more"},[i.toString()]):t.genItem(e,i)])}))}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}}),w=i("0fd9"),_=i("b974"),C=i("8654"),P=Object(l["a"])(s,n,a,!1,null,null,null);t["default"]=P.exports;u()(P,{VAvatar:c["a"],VBtn:d["a"],VCard:v["a"],VCardTitle:m["c"],VCol:h["a"],VDataTable:p["a"],VIcon:f["a"],VPagination:j,VRow:w["a"],VSelect:_["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=chunk-85219058.4de34b02.js.map