(function(t){function e(e){for(var n,o,r=e[0],s=e[1],c=e[2],m=0,p=[];m<r.length;m++)o=r[m],i[o]&&p.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},l=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=s;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),i=a.n(n);i.a},"196e":function(t,e,a){},"256e":function(t,e,a){},"3cc7":function(t,e,a){"use strict";var n=a("d197"),i=a.n(n);i.a},4245:function(t,e,a){},4837:function(t,e,a){"use strict";var n=a("256e"),i=a.n(n);i.a},"491a":function(t,e,a){"use strict";var n=a("196e"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=a("4af9"),l=a("5c96"),o=a.n(l),r=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[t._v("View")]),a("el-dropdown-item",[t._v("Add")]),a("el-dropdown-item",[t._v("Delete")])],1)],1),a("span",[t._v("Tom")])],1),a("el-container",[a("el-aside",{staticStyle:{"background-color":"#B3C0D1"},attrs:{width:"200px"}},[a("el-menu",{attrs:{router:!0}},t._l(t.menu,function(e){return a("el-menu-item",{key:e.componentName,attrs:{index:e.id}},[a("template",{slot:"title"},[a("span",{domProps:{textContent:t._s(e.name)}})])],2)}))],1),a("el-main",[a("router-view")],1)],1)],1)}),s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"Search"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.fetchAllItems(e):null}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"submit"},on:{click:t.fetchAllItems}},[t._v("Search")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.cases}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),a("el-table-column",{attrs:{prop:"number",sortable:"",label:"Part Number",width:"180"}}),a("el-table-column",{attrs:{prop:"name_eng",sortable:"",label:"Description"}}),a("el-table-column",{attrs:{prop:"inventory",sortable:"",label:"Inventory"}}),a("el-table-column",{attrs:{prop:"price_list",sortable:"",label:"List Price"}}),a("el-table-column",{attrs:{prop:"price_enduser",sortable:"",label:"Enduser Price"}}),a("el-table-column",{attrs:{prop:"price_dealer",sortable:"",label:"Dealer Price"}}),a("el-table-column",{attrs:{fixed:"right",label:"Operations",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.fetchAppliedUnits(e.$id,e.row)}}},[t._v("Detail")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editKey(e.$id,e.row)}}},[t._v("Edit")])]}}])})],1),a("el-dialog",{attrs:{width:"600px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"el-icon-info"}),t._v(" Part Number: "+t._s(t.part_title)+" ")]),a("p",[a("span",[t._v(t._s(t.part_description)+" ")])]),a("el-transfer",{attrs:{props:{key:"id",label:"model"},titles:["Unit Type","Target"],data:t.unit_list},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:t.updatePartUnit}},[t._v("Confirm")])],1)],1),a("el-dialog",{attrs:{width:"600px",visible:t.dialogFormVisible2},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[t._l(t.units,function(e){return a("li",[t._v("\n    "+t._s(e)+"\n  ")])}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("Cancel")]),a("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("Confirm")])],1)],2),a("div",{attrs:{align:"center"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":50,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},u=[],m=(a("ac6a"),a("7f7f"),{data:function(){var t=this,e=function(e){var a="unit/all/",n=[],i=[];return t.$http.get(a).then(function(t){i=t.data;for(var e=i.length,a=1;a<=e;a++)n.push({id:i[a-1].id,model:i[a-1].model})}),n};return{cases:[],unit_list:e(),total:0,currentPage:1,filters:{name:"",type:1},value1:[],dialogFormVisible:!1,dialogFormVisible2:!1,part_title:"",part_id:"",part_description:"",units:[]}},methods:{fetchItems:function(){var t=this,e="parts/unlinked/?format=json";this.loading=!0,this.$http.get(e,{params:{page:this.currentPage,search:this.filters.name}}).then(function(e){t.cases=e.data.results,t.total=e.data.count,t.loading=!1})},fetchAllItems:function(){var t=this,e="parts";this.loading=!0,this.$http.get(e,{params:{page:this.currentPage,search:this.filters.name}}).then(function(e){t.cases=e.data.results,t.total=e.data.count,t.value1=e.data.results.unit_set,t.loading=!1})},editKey:function(t,e){this.dialogFormVisible=!0,this.part_title=e.number,this.part_id=e.id,this.part_description=e.name_eng,this.current_part_id=e.id,this.value1=e.unit_set},updatePartUnit:function(){var t=this,e="parts/"+this.part_id+"/";this.$http.patch(e,{unit_set:this.value1}).then(function(e){t.value1=[],t.fetchAllItems(),t.dialogFormVisible=!1})},fetchAppliedUnits:function(t,e){this.dialogFormVisible2=!0;for(var a=e.unit_set,n=[],i="unit/",l=0;l<a.length;l++)n.push(this.$http.get(i+a[l]));this.$http.all(n).then(this.$http.spread(function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];e.forEach(function(t){})}))},handleCurrentChange:function(t){this.currentPage=t,this.fetchAllItems()}},created:function(){this.fetchAllItems()}}),p=m,d=(a("491a"),a("2877")),f=Object(d["a"])(p,c,u,!1,null,null,null);f.options.__file="TableView.vue";var h=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"Search"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.fetchItems(e):null}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"submit"},on:{click:t.fetchItems}},[t._v("Search")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.cases}},[a("el-table-column",{attrs:{type:"index",width:"80"}}),a("el-table-column",{attrs:{prop:"name",sortable:"",label:"Tag"}}),a("el-table-column",{attrs:{prop:"name_chn",label:"中文描述"}}),a("el-table-column",{attrs:{prop:"model.length",sortable:"",label:"总计"}}),a("el-table-column",{attrs:{fixed:"right",label:"Operations",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("Detail")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.fetchTagInfo(e.$id,e.row)}}},[t._v("Edit")])]}}])})],1),a("el-dialog",{attrs:{title:"Tag Edit",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"Tag name","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"中文描述","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name_chn,callback:function(e){t.$set(t.form,"name_chn",e)},expression:"form.name_chn"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:t.updateTagInfo}},[t._v("Confirm")])],1)],1),a("div",{attrs:{align:"center"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":50,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},g=[],v={data:function(){return{cases:[],total:0,currentPage:1,filters:{name:"",type:1},dialogFormVisible:!1,form:{name:"",name_chn:"",id:""},formLabelWidth:"120px"}},methods:{fetchItems:function(){var t=this,e="tag/?format=json";this.loading=!0,this.$http.get(e,{params:{page:this.currentPage,search:this.filters.name}}).then(function(e){t.cases=e.data.results,t.total=e.data.count,t.loading=!1})},fetchTagInfo:function(t,e){this.dialogFormVisible=!0,this.form=e},updateTagInfo:function(){var t=this;this.$http.patch("tag/"+this.form.id+"/",{name:this.form.name,name_chn:this.form.name_chn}).then(function(e){t.dialogFormVisible=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchItems()}},created:function(){this.fetchItems()}},_=v,y=(a("3cc7"),Object(d["a"])(_,b,g,!1,null,null,null));y.options.__file="TagView.vue";var w=y.exports,x=[{name:"Tag",id:"tag",componentName:"TagView"},{name:"Inventory",id:"inventory",componentName:"TableView"},{name:"Unit",id:"unit",componentName:"UnitView"},{name:"Request",id:"request",componentName:"RequestView"}],k={name:"app",components:{TableView:h,TagView:w},data:function(){return{menu:x,total:0,list:[],totalCount:0,currentPage:1}}},F=k,C=(a("034f"),a("b0a0"),Object(d["a"])(F,r,s,!1,null,null,null));C.options.__file="App.vue";var P=C.exports,$=a("bc3a"),V=a.n($),D=a("1bdd"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{staticClass:"toolbar",attrs:{span:12}},[a("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"Search"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.fetchItems(e):null}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"submit"},on:{click:t.fetchItems}},[t._v("Search")])],1)],1)],1),a("el-col",{attrs:{span:6,offset:15}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("New")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.cases}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),a("el-table-column",{attrs:{prop:"model",sortable:"",label:"Model",width:"180"}}),a("el-table-column",{attrs:{prop:"name_eng",sortable:"",label:"Description"}}),a("el-table-column",{attrs:{prop:"name_chn",sortable:"",label:"中文名"}}),a("el-table-column",{attrs:{prop:"dimension",sortable:"",label:"Dimension"}}),a("el-table-column",{attrs:{prop:"spec",sortable:"",label:"Specification"}}),a("el-table-column",{attrs:{fixed:"right",label:"Operations",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.fetchUnitDetail(e.$id,e.row)}}},[t._v("Detail")]),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("Edit")])]}}])})],1),a("el-dialog",{attrs:{width:"600px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"el-icon-document"}),t._v(" New Unit Model ")]),a("unit-form",{on:{cancel:function(e){t.closeDialog()}}})],1),a("el-dialog",{attrs:{width:"600px",visible:t.partListForUnit},on:{"update:visible":function(e){t.partListForUnit=e}}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"el-icon-document"}),t._v(" Part List ")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.partLoading,expression:"partLoading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.parts}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),a("el-table-column",{attrs:{prop:"number",sortable:"",label:"Part Number",width:"180"}}),a("el-table-column",{attrs:{prop:"name_eng",sortable:"",label:"Description"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.partListForUnit=!1}}},[t._v("Cancel")]),a("el-button",{on:{click:function(e){t.partListForUnit=!1}}},[t._v("Confirm")])],1)],1),a("div",{attrs:{align:"center"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":50,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},I=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"unitForm",attrs:{"label-position":t.labelPosition,"label-width":"100px",model:t.unitForm}},[a("el-form-item",{attrs:{label:"Model"}},[a("el-input",{model:{value:t.unitForm.model,callback:function(e){t.$set(t.unitForm,"model",e)},expression:"unitForm.model"}})],1),a("el-form-item",{attrs:{label:"Name"}},[a("el-input",{model:{value:t.unitForm.name_eng,callback:function(e){t.$set(t.unitForm,"name_eng",e)},expression:"unitForm.name_eng"}})],1),a("el-form-item",{attrs:{label:"中文名称"}},[a("el-input",{model:{value:t.unitForm.name_chn,callback:function(e){t.$set(t.unitForm,"name_chn",e)},expression:"unitForm.name_chn"}})],1),a("el-form-item",{attrs:{label:"Dimension"}},[a("el-input",{model:{value:t.unitForm.dimension,callback:function(e){t.$set(t.unitForm,"dimension",e)},expression:"unitForm.dimension"}})],1),a("el-form-item",{attrs:{label:"Specification"}},[a("el-input",{model:{value:t.unitForm.spec,callback:function(e){t.$set(t.unitForm,"spec",e)},expression:"unitForm.spec"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.close()}}},[t._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("unitForm")}}},[t._v("Submit")])],1)},O=[],L={data:function(){return{labelPosition:"right",unitForm:{part:[""],model:"",name_eng:"",name_chn:"",dimension:"",spec:""}}},methods:{submitForm:function(t){var e=this,a="unit/",n=this.unitForm;this.$http.post(a,n).then(function(t){e.close()})},close:function(){this.$emit("cancel")}}},N=L,E=Object(d["a"])(N,j,O,!1,null,null,null);E.options.__file="UnitForm.vue";var T=E.exports,U={data:function(){return{cases:[],total:0,currentPage:1,dialogFormVisible:!1,filters:{name:"",type:1},json_data:[],fields:["sksid","","number","name","qty"],unitDetail:[],partList:[],parts:[],partsList:[],partListForUnit:!1}},components:{UnitForm:T},methods:{fetchItems:function(){var t=this,e="unit/";this.loading=!0,this.$http.get(e,{params:{page:this.currentPage,search:this.filters.name}}).then(function(e){t.cases=e.data.results,t.total=e.data.count,t.loading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchItems()},fetchUnitDetail:function(t,e){var a=this;this.partListForUnit=!0,this.partLoading=!0;var n="unit/"+e.id+"/";this.parts=[];var i=[];this.$http.get(n).then(function(t){a.unitDetail=t.data,a.partList=t.data.parts;for(var e=0;e<a.partList.length;e++)i.push(a.$http.get("parts/"+a.partList[e]));a.$http.all(i).then(a.$http.spread(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(t){a.parts.push(t.data),a.partLoading=!1})}))})},closeDialog:function(){this.dialogFormVisible=!1,this.fetchItems()}},created:function(){this.fetchItems()}},z=U,q=(a("4837"),Object(d["a"])(z,S,I,!1,null,null,null));q.options.__file="UnitView.vue";var A=q.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"Search"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.fetchItems(e):null}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"submit"},on:{click:t.fetchPageData}},[t._v("Search")])],1)],1)],1),a("el-col",{attrs:{span:6}},[a("vue-csv-downloader",{attrs:{data:t.json_data,fields:t.fields,downloadName:t.fileName}},[t._v(" Download\n      ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.data}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),a("el-table-column",{attrs:{prop:"number",sortable:"",label:"Part Number",width:"180"}}),a("el-table-column",{attrs:{prop:"name",sortable:"",label:"Description"}}),a("el-table-column",{attrs:{prop:"sksid",sortable:"",label:"SKSID"}}),a("el-table-column",{attrs:{prop:"sn",sortable:"",label:"Serial Number"}}),a("el-table-column",{attrs:{prop:"qty",sortable:"",label:"Quantity"}}),a("el-table-column",{attrs:{fixed:"right",label:"Operations",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("Detail")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.fetchRequestInfo(e.$id,e.row)}}},[t._v("Edit")])]}}])})],1),a("el-dialog",{attrs:{title:"Part Number Edit",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"Part number","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:t.updateRequestInfo}},[t._v("Confirm")])],1)],1),a("div",{attrs:{align:"center"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":50,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},M=[],W=a("fb50"),K=a.n(W),J={components:{VueCsvDownloader:K.a},data:function(){return{dialogFormVisible:!1,total:0,currentPage:1,filters:{name:"",type:1},json_data:[],data:[],fields:["sksid","","number","name","qty"],loading:!1,fileName:"Parts For Warranty.csv",form:{number:""},formLabelWidth:"120px"}},methods:{fetchPageData:function(){var t=this,e="part";this.loading=!0,this.$http.get(e,{params:{page:this.currentPage,search:this.filters.name}}).then(function(e){t.data=e.data.results,t.total=e.data.count,t.loading=!1})},updateRequestInfo:function(){var t=this;this.$http.patch("part/"+this.form.id+"/",{number:this.form.number}).then(function(e){console.log(e.status),t.dialogFormVisible=!1})},fetchRequestInfo:function(t,e){this.dialogFormVisible=!0,this.form=e},fetchData:function(){var t=this,e="part/warranty";this.$http.get(e).then(function(e){t.json_data=e.data})},handleCurrentChange:function(t){this.currentPage=t,this.fetchPageData()}},created:function(){this.fetchPageData(),this.fetchData()}},B=J,Q=(a("785e"),Object(d["a"])(B,R,M,!1,null,null,null));Q.options.__file="RequestView.vue";var G=Q.exports,H=[{path:"/tag",component:w},{path:"/inventory",component:h},{path:"/unit",component:A},{path:"/request",component:G}];n["default"].config.productionTip=!1,n["default"].use(o.a),n["default"].use(i["a"]),n["default"].component("downloadExcel",D["a"]),V.a.defaults.baseURL="http://192.168.5.130/api/",n["default"].prototype.$http=V.a;var X=new i["a"]({routes:H});new n["default"]({render:function(t){return t(P)},router:X}).$mount("#app")},"785e":function(t,e,a){"use strict";var n=a("4245"),i=a.n(n);i.a},b0a0:function(t,e,a){"use strict";var n=a("e03b"),i=a.n(n);i.a},c21b:function(t,e,a){},d197:function(t,e,a){},e03b:function(t,e,a){}});
//# sourceMappingURL=app.8e561f34.js.map