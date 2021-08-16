(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03baaaa8"],{"258f":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("detail",{ref:"editAddress",attrs:{editAddress:e.editAddress},on:{refrush:e.getList}}),r("el-card",{staticStyle:{width:"95%",margin:"20px auto"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("新增")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{fit:"",border:"",data:e.list}},[r("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50",fixed:"left"}}),r("el-table-column",{attrs:{align:"center",prop:"addressName",label:"地址名称",width:"180","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{align:"center",label:"默认发货地址",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-text":"是","inactive-text":"否","active-value":1,"inactive-value":0},on:{change:function(r){return e.changeSendDefault(r,t.row)}},model:{value:t.row.sendStatus,callback:function(r){e.$set(t.row,"sendStatus",r)},expression:"scope.row.sendStatus"}})]}}])}),r("el-table-column",{attrs:{align:"center",prop:"name",label:"收货人姓名",width:"160"}}),r("el-table-column",{attrs:{align:"center",prop:"phone",label:"收货人电话",width:"180"}}),r("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序",width:"100"}}),r("el-table-column",{attrs:{align:"center",label:"收货人地址","show-overflow-tooltip":"",width:"210"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:"info"}},[e._v(" "+e._s(t.row.city+t.row.province+t.row.region+t.row.detailAddress)+" ")])]}}])}),r("el-table-column",{attrs:{align:"center",label:"默认收货地址",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-text":"是","inactive-text":"否","active-value":1,"inactive-value":0},on:{change:function(r){return e.changeReciveDefault(r,t.row)}},model:{value:t.row.receiveStatus,callback:function(r){e.$set(t.row,"receiveStatus",r)},expression:"scope.row.receiveStatus"}})]}}])}),r("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间",width:"180"}}),r("el-table-column",{attrs:{align:"center",prop:"modifyTime",label:"修改日期",width:"180"}}),r("el-table-column",{attrs:{label:"操作",width:"160px",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.edit(t.row)}}},[e._v("编辑")]),r("el-popconfirm",{attrs:{title:"亲,您确定要删除吗？"},on:{onConfirm:function(r){return e.del(t.row)}}},[r("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[e._v("删除")])],1)]}}])})],1)],1),r("copyright")],1)},a=[],n=r("1da1"),i=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dialog-detail"},[r("el-dialog",{attrs:{title:"编辑地址",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"editAddressForm",attrs:{model:e.editAddressForm,rules:e.rules}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-form-item",{attrs:{label:"地址名称","label-width":e.formLabelWidth,prop:"addressName"}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-input",{attrs:{placeholder:"请输入地址名称",autocomplete:"off"},model:{value:e.editAddressForm.addressName,callback:function(t){e.$set(e.editAddressForm,"addressName",e._n(t))},expression:"editAddressForm.addressName"}})],1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-form-item",{attrs:{label:"发货人姓名","label-width":e.formLabelWidth,prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入发货人姓名",autocomplete:"off"},model:{value:e.editAddressForm.name,callback:function(t){e.$set(e.editAddressForm,"name",e._n(t))},expression:"editAddressForm.name"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-form-item",{attrs:{label:"发货人手机号","label-width":e.formLabelWidth,prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入发货人手机号",autocomplete:"off"},model:{value:e.editAddressForm.phone,callback:function(t){e.$set(e.editAddressForm,"phone",e._n(t))},expression:"editAddressForm.phone"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-form-item",{attrs:{label:"邮政编码","label-width":e.formLabelWidth,prop:"postCode "}},[r("el-input",{attrs:{placeholder:"请输入邮政编码",autocomplete:"off"},model:{value:e.editAddressForm.postCode,callback:function(t){e.$set(e.editAddressForm,"postCode",e._n(t))},expression:"editAddressForm.postCode"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-form-item",{attrs:{label:"收货地址","label-width":e.formLabelWidth,prop:"selectedRecive"}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-cascader",{attrs:{size:"large",options:e.reciveOptions},on:{change:e.handleReciveChange},model:{value:e.selectedRecive,callback:function(t){e.selectedRecive=t},expression:"selectedRecive"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-form-item",{attrs:{label:"详细地址","label-width":e.formLabelWidth}},[r("el-input",{attrs:{placeholder:"请输入详细地址",autocomplete:"off"},model:{value:e.editAddressForm.detailAddress,callback:function(t){e.$set(e.editAddressForm,"detailAddress",e._n(t))},expression:"editAddressForm.detailAddress"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.doSave}},[e._v("确 定")])],1)],1)],1)}),o=[],d=(r("a15b"),r("ac1f"),r("1276"),r("2e3f")),l={components:{},props:{editAddress:{type:Object,default:function(){return{}}}},computed:{},created:function(){},mounted:function(){},data:function(){var e=this,t=function(t,r,s){""==r?s(new Error("请输入手机号")):e.isCellPhone(r)?s():s(new Error("请输入正确的手机号!"))};return{rules:{addressName:[{required:!0,message:"地址名不能为空",trigger:"blur"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}],name:[{required:!0,message:"发货人不能为空",trigger:"blur"},{min:2,max:8,message:"长度在 2 到 8 个字符",trigger:"blur"}],phone:[{required:!0,validator:t,trigger:"blur"}],postCode:[{type:"number",message:"邮政编码必须是数字类型",trigger:"blur"}]},reciveOptions:d["regionData"],selectedRecive:[],editAddressForm:{},dialogVisible:!1,formLabelWidth:"130px"}},methods:{isCellPhone:function(e){return!!/^1(3|4|5|6|7|8)\d{9}$/.test(e)},handleReciveChange:function(e){this.editAddressForm.province=d["CodeToText"][e[0]],this.editAddressForm.city=d["CodeToText"][e[1]],this.editAddressForm.region=d["CodeToText"][e[2]],this.editAddressForm.cityCode=e.join(",")},handleSendChange:function(e){this.editAddressForm.addressName=d["CodeToText"][e[0]]+d["CodeToText"][e[1]]+d["CodeToText"][e[2]]},handleClose:function(){this.dialogVisible=!1},doSave:function(){var e=this;this.$refs.editAddressForm.validate((function(t){if(!t)return e.$message.warning("请检查是否输入有误"),!1;e.dialogVisible=!1,e.$emit("refrush",e.editAddressForm)}))},openDialog:function(){var e=this;this.$nextTick((function(){var t,r;e.editAddress.id?(e.selectedRecive=null===(t=e.editAddress)||void 0===t||null===(r=t.cityCode)||void 0===r?void 0:r.split(","),e.editAddressForm=JSON.parse(JSON.stringify(e.editAddress))):(e.editAddressForm={},e.selectedRecive=[])})),this.dialogVisible=!0}}},c=l,u=(r("b5ee"),r("2877")),m=Object(u["a"])(c,i,o,!1,null,"18f163c6",null),f=m.exports,p=r("0c6d");function h(){return Object(p["a"])({url:"/lejuAdmin/companyAddress/addressList"})}function b(e){return Object(p["a"])({url:"/lejuAdmin/companyAddress/save",method:"post",data:e})}function g(e){return Object(p["a"])({url:"/lejuAdmin/companyAddress/setReceiveOne",method:"post",data:e})}function v(e){return Object(p["a"])({url:"/lejuAdmin/companyAddress/setSendOne",method:"post",data:e})}function w(e){return Object(p["a"])({url:"/lejuAdmin/companyAddress/update",method:"post",data:e})}function A(e){return Object(p["a"])({url:"/lejuAdmin/companyAddress/".concat(e),method:"delete"})}var x={name:"Address",components:{Detail:f},data:function(){return{editAddress:{},loading:!1,list:[]}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.addressList();case 1:case"end":return t.stop()}}),t)})))()},methods:{changeSendDefault:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,n,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,v({id:t.id,status:e});case 2:if(a=s.sent,n=a.success,i=a.message,n){s.next=7;break}return s.abrupt("return",r.$message.error(i));case 7:r.addressList(),r.$message.success("切换状态成功");case 9:case"end":return s.stop()}}),s)})))()},changeReciveDefault:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,n,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,g({id:t.id,status:e});case 2:if(a=s.sent,n=a.success,i=a.message,n){s.next=7;break}return s.abrupt("return",r.$message.error(i));case 7:r.addressList(),r.$message.success("切换状态成功");case 9:case"end":return s.stop()}}),s)})))()},add:function(){this.editAddress={},this.$refs.editAddress.openDialog()},getList:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.id?w:b,r.next=3,s(e);case 3:if(a=r.sent,n=a.success,i=a.message,n){r.next=8;break}return r.abrupt("return",t.$message.error(i));case 8:t.$message.success("保存成功"),t.addressList();case 10:case"end":return r.stop()}}),r)})))()},edit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.editAddress=e,t.$refs.editAddress.openDialog();case 2:case"end":return r.stop()}}),r)})))()},del:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,A(e.id);case 2:if(s=r.sent,a=s.success,n=s.message,a){r.next=7;break}return r.abrupt("return",t.$message.error(n));case 7:t.$message.success("删除成功"),t.addressList();case 9:case"end":return r.stop()}}),r)})))()},addressList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,h();case 3:if(r=t.sent,r.success){t.next=6;break}return t.abrupt("return",e.$message.error(r.message));case 6:e.loading=!1,e.list=r.data.items;case 8:case"end":return t.stop()}}),t)})))()}}},k=x,y=(r("d53d"),Object(u["a"])(k,s,a,!1,null,"59ae6994",null));t["default"]=y.exports},"32d8":function(e,t,r){},b5ee:function(e,t,r){"use strict";r("32d8")},b8d7:function(e,t,r){},d53d:function(e,t,r){"use strict";r("b8d7")}}]);