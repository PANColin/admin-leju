(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39c42f54"],{"02b56":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-card",{attrs:{shadow:"hover","body-style":{paddingTop:"20px",paddingBottom:"0"}}},[r("div",{staticStyle:{cursor:"pointer"},attrs:{slot:"header"},on:{click:function(e){t.isShow=!t.isShow}},slot:"header"},[r("span",[t._v("条件查询")])]),r("el-form",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"ruleForm",attrs:{model:t.searchForm,"label-width":"80px",inline:!1,size:"normal"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"订单编号",prop:"orderSn"}},[r("el-input",{attrs:{placeholder:"请输入订单编号"},model:{value:t.searchForm.orderSn,callback:function(e){t.$set(t.searchForm,"orderSn","string"===typeof e?e.trim():e)},expression:"searchForm.orderSn"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"订单状态",prop:"status"}},[r("el-select",{attrs:{name:"status",clearable:"",placeholder:"订单状态"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},t._l(t.statusList,(function(t,e){return r("el-option",{key:e,attrs:{label:t.lable,value:t.value}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:18}},[r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSearch("ruleForm")}}},[t._v("查询")]),r("el-button",{on:{click:function(e){return t.onCancle("ruleForm")}}},[t._v("取消")])],1)],1)],1)],1)],1),r("el-card",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",border:"",data:t.list}},[r("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50",fixed:"left"}}),r("el-table-column",{attrs:{align:"center",prop:"orderSn",label:"订单编号","show-overflow-tooltip":"",width:"180"}}),r("el-table-column",{attrs:{align:"center",label:"退单状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?r("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v(" 待处理 ")]):t._e(),1==e.row.status?r("el-tag",{attrs:{type:"warning",effect:"light"}},[t._v(" 退货中 ")]):t._e(),2==e.row.status?r("el-tag",{attrs:{type:"success",effect:"dark"}},[t._v(" 已完成 ")]):t._e(),3==e.row.status?r("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v(" 已拒绝 ")]):t._e()]}}])}),r("el-table-column",{attrs:{align:"center",prop:"description","show-overflow-tooltip":"",label:"描述",width:"160"}}),r("el-table-column",{attrs:{align:"center",prop:"reason","show-overflow-tooltip":"",label:"退货原因",width:"160"}}),r("el-table-column",{attrs:{align:"center",prop:"productName","show-overflow-tooltip":"",label:"商品名称",width:"160"}}),r("el-table-column",{attrs:{align:"center",label:"商品属性",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.productAttr,(function(e,n){return r("el-tag",{key:n,attrs:{type:0==n?"success":"warning"}},[t._v(" "+t._s(e.key)+":"+t._s(e.value)+" ")])}))}}])}),r("el-table-column",{attrs:{align:"center",prop:"handleMan",label:"处理人",width:"160"}}),r("el-table-column",{attrs:{align:"center",prop:"handleNote",label:"商家备注",width:"160"}}),r("el-table-column",{attrs:{align:"center",prop:"handleTime",label:"处理时间",width:"160"}}),r("el-table-column",{attrs:{label:"操作",width:"160px",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(r){return t.checkOrder(e.row)}}},[t._v("查看订单")])]}}])})],1),r("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":t.pageInfo.start,"page-sizes":[5,10,15,20],"page-size":t.pageInfo.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.SizeChange,"current-change":t.CurrentChange}})],1),r("copyright")],1)},a=[],o=r("1da1"),l=(r("159b"),r("96cf"),r("2f08")),i=r("fdab"),s={name:"returnsList",components:{copyright:l["a"]},data:function(){return{loading:!1,isShowDec:!1,isShow:!1,list:[],pageInfo:{start:1,limit:10},statusList:[{id:1,lable:"待处理",value:"0"},{id:2,lable:"退货中",value:"1"},{id:3,lable:"已完成",value:"2"},{id:4,lable:"已拒绝",value:"3"}],searchForm:{orderSn:"",status:""},total:0}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.findReturnApply();case 1:case"end":return e.stop()}}),e)})))()},methods:{checkOrder:function(t){this.$router.push({name:"orderReturnDetail",params:{id:t.id}})},onCancle:function(t){this.$refs[t].resetFields(),this.findReturnApply()},onSearch:function(t){this.findReturnApply(),this.pageInfo.start=1,this.pageInfo.limit=10},handleError:function(t){t.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg"},findReturnApply:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(i["b"])(t.pageInfo.start,t.pageInfo.limit,t.searchForm);case 3:if(r=e.sent,r.success){e.next=6;break}return e.abrupt("return",t.$message.error(r.message));case 6:t.loading=!1,t.total=r.data.total,t.list=r.data.rows,r.data.rows.forEach((function(t){t.productAttr=JSON.parse(t.productAttr),t.icon||(t.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg")}));case 10:case"end":return e.stop()}}),e)})))()},SizeChange:function(t){this.pageInfo.limit=t,this.findReturnApply()},CurrentChange:function(t){this.pageInfo.start=t,this.findReturnApply()}}},c=s,u=(r("5bac"),r("2877")),d=Object(u["a"])(c,n,a,!1,null,"43e6e12c",null);e["default"]=d.exports},"2f08":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-copyright"},[r("div",{staticClass:"row1"},[r("span",[t._v("Element")]),r("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"blank"}},[r("img",{attrs:{src:"https://img0.baidu.com/it/u=2078769130,3528906519&fm=26&fmt=auto&gp=0.jpg",alt:""}})]),r("span",[t._v("Element-admin")])]),r("div",{staticClass:"row2"},[r("span",[t._v("Copyright© 2017-2020 不凡学院 豫ICP备 17015347号")])])])}],o={name:"Copyright"},l=o,i=(r("97db"),r("2877")),s=Object(i["a"])(l,n,a,!1,null,"5e5f4c36",null);e["a"]=s.exports},"5bac":function(t,e,r){"use strict";r("f37a")},"97db":function(t,e,r){"use strict";r("eb78")},eb78:function(t,e,r){},f37a:function(t,e,r){},fdab:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return l})),r.d(e,"e",(function(){return i})),r.d(e,"c",(function(){return s}));r("99af");var n=r("0c6d");function a(t,e,r){return Object(n["a"])({url:"/lejuAdmin/orderReturn/findReturnApply/".concat(t,"/").concat(e),method:"post",data:r})}function o(t,e){return Object(n["a"])({url:"/lejuAdmin/orderReturn/agreeApply/".concat(t),method:"post",data:e})}function l(t,e){return Object(n["a"])({url:"/lejuAdmin/orderReturn/receiveProduct/".concat(t),method:"post",data:e})}function i(t,e){return Object(n["a"])({url:"/lejuAdmin/orderReturn/rejectApply/".concat(t),method:"post",data:e})}function s(t){return Object(n["a"])({url:"/lejuAdmin/orderReturn/".concat(t)})}}}]);