(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ff5822"],{"013e":function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAllAdminUsers"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllAdminUsers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"permissions"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:120}};n.loc.source={body:"query getAllAdminUsers {\r\n  getAllAdminUsers {\r\n    createdAt\r\n    id\r\n    username\r\n    role\r\n    permissions\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}var a={};function s(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function r(e,i){var n={kind:e.kind,definitions:[s(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=a[i]||new Set,r=new Set,o=new Set;t.forEach((function(e){o.add(e)}));while(o.size>0){var d=o;o=new Set,d.forEach((function(e){if(!r.has(e)){r.add(e);var i=a[e]||new Set;i.forEach((function(e){o.add(e)}))}}))}return r.forEach((function(i){var t=s(e,i);t&&n.definitions.push(t)})),n}(function(){n.definitions.forEach((function(e){if(e.name){var i=new Set;t(e,i),a[e.name.value]=i}}))})(),e.exports=n,e.exports["getAllAdminUsers"]=r(n,"getAllAdminUsers")},"0fd9":function(e,i,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var t=n("ade3"),a=n("5530"),s=(n("4b85"),n("2b0e")),r=n("d9f7"),o=n("80d2"),d=["sm","md","lg","xl"],l=["start","end","center"];function c(e,i){return d.reduce((function(n,t){return n[e+Object(o["F"])(t)]=i(),n}),{})}var u=function(e){return[].concat(l,["baseline","stretch"]).includes(e)},m=c("align",(function(){return{type:String,default:null,validator:u}})),v=function(e){return[].concat(l,["space-between","space-around"]).includes(e)},f=c("justify",(function(){return{type:String,default:null,validator:v}})),p=function(e){return[].concat(l,["space-between","space-around","stretch"]).includes(e)},h=c("alignContent",(function(){return{type:String,default:null,validator:p}})),k={align:Object.keys(m),justify:Object.keys(f),alignContent:Object.keys(h)},g={align:"align",justify:"justify",alignContent:"align-content"};function b(e,i,n){var t=g[e];if(null!=n){if(i){var a=i.replace(e,"");t+="-".concat(a)}return t+="-".concat(n),t.toLowerCase()}}var A=new Map;i["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},m),{},{justify:{type:String,default:null,validator:v}},f),{},{alignContent:{type:String,default:null,validator:p}},h),render:function(e,i){var n=i.props,a=i.data,s=i.children,o="";for(var d in n)o+=String(n[d]);var l=A.get(o);return l||function(){var e,i;for(i in l=[],k)k[i].forEach((function(e){var t=n[e],a=b(i,e,t);a&&l.push(a)}));l.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(t["a"])(e,"align-".concat(n.align),n.align),Object(t["a"])(e,"justify-".concat(n.justify),n.justify),Object(t["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),A.set(o,l)}(),e(n.tag,Object(r["a"])(a,{staticClass:"row",class:l}),s)}})},"169a":function(e,i,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var t=n("5530"),a=n("2909"),s=n("ade3"),r=(n("368e"),n("480e")),o=n("4ad4"),d=n("b848"),l=n("75eb"),c=n("e707"),u=n("e4d3"),m=n("21be"),v=n("f2e7"),f=n("a293"),p=n("58df"),h=n("d9bd"),k=n("80d2"),g=Object(p["a"])(o["a"],d["a"],l["a"],c["a"],u["a"],m["a"],v["a"]);i["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(s["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(e,"v-dialog--active",this.isActive),Object(s["a"])(e,"v-dialog--persistent",this.persistent),Object(s["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(e,"v-dialog--scrollable",this.scrollable),Object(s["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(h["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var i=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(i)||this.overlay&&i&&!this.overlay.$el.contains(i))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===k["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var i=e.target;if(i&&![document,this.$refs.content].includes(i)&&!this.$refs.content.contains(i)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(i)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=Object(a["a"])(n).find((function(e){return!e.hasAttribute("disabled")}));t&&t.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(r["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(t["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(t["a"])(Object(t["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(k["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(k["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"29a2":function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createAdminUser"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"role"}},type:{kind:"NamedType",name:{kind:"Name",value:"Rolem"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"permissions"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Permissions"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createAdminUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}},{kind:"Argument",name:{kind:"Name",value:"role"},value:{kind:"Variable",name:{kind:"Name",value:"role"}}},{kind:"Argument",name:{kind:"Name",value:"permissions"},value:{kind:"Variable",name:{kind:"Name",value:"permissions"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"permissions"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:287}};n.loc.source={body:"mutation createAdminUser($username: String!, $password: String!, $role: Rolem, $permissions: [Permissions!]) {\r\n  createAdminUser(username: $username, password: $password, role: $role, permissions: $permissions) {\r\n    createdAt\r\n    id\r\n    username\r\n    role\r\n    permissions\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}var a={};function s(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function r(e,i){var n={kind:e.kind,definitions:[s(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=a[i]||new Set,r=new Set,o=new Set;t.forEach((function(e){o.add(e)}));while(o.size>0){var d=o;o=new Set,d.forEach((function(e){if(!r.has(e)){r.add(e);var i=a[e]||new Set;i.forEach((function(e){o.add(e)}))}}))}return r.forEach((function(i){var t=s(e,i);t&&n.definitions.push(t)})),n}(function(){n.definitions.forEach((function(e){if(e.name){var i=new Set;t(e,i),a[e.name.value]=i}}))})(),e.exports=n,e.exports["createAdminUser"]=r(n,"createAdminUser")},"368e":function(e,i,n){},6271:function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ApolloQuery",{staticClass:"row ma-sm-4",attrs:{query:n("947b")},scopedSlots:e._u([{key:"default",fn:function(i){var a=i.result,s=a.error,r=a.data,o=i.isLoading;return[1===o?t("div",{staticClass:"mx-auto"},[t("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):s?t("AppNotification",{attrs:{message:s.message}}):r?["SUPERUSER"!==r.getAdminProfile.role?t("v-col",[t("v-alert",{attrs:{outlined:"",type:"error"}},[e._v(" Этот раздел вам недоступен! ")])],1):t("v-col",[t("ApolloQuery",{attrs:{query:n("013e")},scopedSlots:e._u([{key:"default",fn:function(i){var a=i.result,s=a.error,r=a.data,o=i.isLoading;return[s?t("AppNotification",{attrs:{message:s.message}}):r||1===o?t("v-card",{staticClass:"px-4 pb-2",attrs:{loading:1===o,flat:""}},[r?[t("v-card-title",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6"}},[e._v(" Админы: ")]),t("v-col",{staticClass:"text-right"},[t("ApolloMutation",{attrs:{mutation:n(-1===e.editedIndex?"29a2":"9e0f"),variables:{id:e.editedAdmin.id,username:e.editedAdmin.username,password:e.editedAdmin.password,role:e.editedAdmin.role,permissions:e.editedAdmin.permissions},update:e.updateCache},scopedSlots:e._u([{key:"default",fn:function(i){var n=i.mutate,a=i.loading,s=i.error;return[t("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(i){var n=i.on,a=i.attrs;return[t("v-btn",e._g(e._b({staticClass:"text-none",attrs:{depressed:"",color:"primary",large:"",height:"36"}},"v-btn",a,!1),n),[e._v(" Создать ")])]}}],null,!0),model:{value:e.dialog,callback:function(i){e.dialog=i},expression:"dialog"}},[t("v-card",{attrs:{loading:a}},[t("v-card-title",[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),t("v-card-text",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-text-field",{attrs:{"hide-details":"auto",label:"Имя"},model:{value:e.editedAdmin.username,callback:function(i){e.$set(e.editedAdmin,"username",i)},expression:"editedAdmin.username"}})],1),t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-text-field",{attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password","hide-details":"auto",label:"Пароль"},on:{"click:append":function(i){e.show=!e.show}},model:{value:e.editedAdmin.password,callback:function(i){e.$set(e.editedAdmin,"password",i)},expression:"editedAdmin.password"}})],1),t("v-col",{attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.roles,"hide-details":"auto",clearable:"",label:"Роль"},model:{value:e.editedAdmin.role,callback:function(i){e.$set(e.editedAdmin,"role",i)},expression:"editedAdmin.role"}})],1),t("v-col",{attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.permissionsItems,"hide-details":"auto",clearable:"",label:"Права",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(i){var n=i.item,a=i.index;return[0===a?t("v-chip",[t("span",[e._v(e._s(n))])]):e._e(),1===a?t("span",{staticClass:"grey--text text-caption"},[e._v(" (+"+e._s(e.editedAdmin.permissions.length-1)+" others) ")]):e._e()]}}],null,!0),model:{value:e.editedAdmin.permissions,callback:function(i){e.$set(e.editedAdmin,"permissions",i)},expression:"editedAdmin.permissions"}})],1)],1)],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.close}},[e._v(" Отмена ")]),t("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return n()}}},[e._v(" "+e._s(e.buttonText)+" ")])],1)],1)],1),s?t("AppNotification",{attrs:{message:s.message,"icon-disabled":!0}}):e._e()]}}],null,!0)})],1)],1)],1),t("v-data-table",{attrs:{headers:e.headers,items:r.getAllAdminUsers,"items-per-page":5,"no-data-text":"Админы отсутствуют"},scopedSlots:e._u([{key:"item.permissions",fn:function(i){var n=i.item;return[n.permissions[0]?t("v-chip",[t("span",[e._v(e._s(n.permissions[0]))])]):t("span",[e._v(" "+e._s("SUPERUSER"===n.role?"Все":"Отсутствуют")+" ")]),n.permissions[1]?t("span",{staticClass:"grey--text text-caption"},[e._v(" (+"+e._s(n.permissions.length-1)+" others) ")]):e._e()]}},{key:"item.createdAt",fn:function(i){var n=i.item;return[e._v(" "+e._s(e._f("moment")(n.createdAt,"DD.MM.YYYY, HH:mm"))+" ")]}},{key:"item.action",fn:function(i){var n=i.item;return[t("v-btn",{staticClass:"text-none",attrs:{depressed:"",large:"",height:"36"},on:{click:function(i){return e.editAdmin(n)}}},[e._v(" Редактировать ")])]}}],null,!0)})]:e._e()],2):t("AppNotification",{attrs:{message:"Нет результата :("}})]}}],null,!0)})],1)]:t("AppNotification",{attrs:{message:"Нет результата :("}})]}}])})},a=[],s=n("5530"),r=n("dfe4"),o=n("013e"),d=n.n(o),l={components:{AppNotification:r["a"]},data:function(){return{dialog:!1,editedIndex:-1,editedAdmin:{},show:!1,roles:["ROLE_UNDEFINED","USER","ADMINISTRATOR","SUPERUSER","PARTNER","BLOGGER","BANNED","PUBLIC"],permissionsItems:["DASHBOARD_ADMINISTRATION","CHAT_ADMINISTRATION","BONUS_ADMINISTRATION","USERS_ADMINISTRATION","WITHDRAW_ADMINISTRATION","GAMES_ADMINISTRATION"],headers:[{text:"ID:",value:"id",class:"white--text text-subtitle-2"},{text:"Имя:",value:"username",class:"white--text text-subtitle-2"},{text:"Роль:",value:"role",class:"white--text text-subtitle-2"},{text:"Права:",value:"permissions",class:"white--text text-subtitle-2"},{text:"Дата регистрации:",value:"createdAt",class:"white--text text-subtitle-2"},{text:"",value:"action",align:"center"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"Создать админа":"Редактирование"},buttonText:function(){return-1===this.editedIndex?"Создать":"Сохранить"}},methods:{close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedIndex=-1,e.editedAdmin={}}))},editAdmin:function(e){this.editedIndex=e.id,this.editedAdmin=Object(s["a"])({},e),this.dialog=!0},updateCache:function(e,i){var n=i.data.createAdminUser;if(-1===this.editedIndex){var t={query:d.a},a=e.readQuery(t);a.getAllAdminUsers.push(n),e.writeQuery(Object(s["a"])(Object(s["a"])({},t),{},{data:a}))}this.close()}}},c=l,u=n("2877"),m=n("6544"),v=n.n(m),f=n("0798"),p=n("8336"),h=n("b0af"),k=n("99d9"),g=n("cc20"),b=n("62ad"),A=n("a523"),y=n("8fea"),N=n("169a"),S=n("490a"),w=n("0fd9"),x=n("b974"),O=n("2fa4"),T=n("8654"),_=Object(u["a"])(c,t,a,!1,null,null,null);i["default"]=_.exports;v()(_,{VAlert:f["a"],VBtn:p["a"],VCard:h["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VChip:g["a"],VCol:b["a"],VContainer:A["a"],VDataTable:y["a"],VDialog:N["a"],VProgressCircular:S["a"],VRow:w["a"],VSelect:x["a"],VSpacer:O["a"],VTextField:T["a"]})},"9e0f":function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateAdminUser"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"role"}},type:{kind:"NamedType",name:{kind:"Name",value:"Rolem"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"permissions"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Permissions"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateAdminUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}},{kind:"Argument",name:{kind:"Name",value:"role"},value:{kind:"Variable",name:{kind:"Name",value:"role"}}},{kind:"Argument",name:{kind:"Name",value:"permissions"},value:{kind:"Variable",name:{kind:"Name",value:"permissions"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"permissions"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:293}};n.loc.source={body:"mutation updateAdminUser($id: String!, $username: String, $password: String, $role: Rolem, $permissions: [Permissions!]) {\r\n  updateAdminUser(id: $id, username: $username, password: $password, role: $role, permissions: $permissions) {\r\n    id\r\n    username\r\n    role\r\n    permissions\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}var a={};function s(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function r(e,i){var n={kind:e.kind,definitions:[s(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=a[i]||new Set,r=new Set,o=new Set;t.forEach((function(e){o.add(e)}));while(o.size>0){var d=o;o=new Set,d.forEach((function(e){if(!r.has(e)){r.add(e);var i=a[e]||new Set;i.forEach((function(e){o.add(e)}))}}))}return r.forEach((function(i){var t=s(e,i);t&&n.definitions.push(t)})),n}(function(){n.definitions.forEach((function(e){if(e.name){var i=new Set;t(e,i),a[e.name.value]=i}}))})(),e.exports=n,e.exports["updateAdminUser"]=r(n,"updateAdminUser")}}]);
//# sourceMappingURL=chunk-02ff5822.20bab4cb.js.map