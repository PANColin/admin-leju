(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3315f4c0"],{"2f08":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper-copyright"},[r("div",{staticClass:"row1"},[r("span",[e._v("Element")]),r("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"blank"}},[r("img",{attrs:{src:"https://img0.baidu.com/it/u=2078769130,3528906519&fm=26&fmt=auto&gp=0.jpg",alt:""}})]),r("span",[e._v("Element-admin")])]),r("div",{staticClass:"row2"},[r("span",[e._v("Copyright© 2017-2020 不凡学院 豫ICP备 17015347号")])])])}],o={name:"Copyright"},l=o,s=(r("97db"),r("2877")),u=Object(s["a"])(l,n,a,!1,null,"5e5f4c36",null);t["a"]=u.exports},"8b17":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.orderReturnApply.id?r("el-card",{attrs:{shadow:"hover","body-style":{padding:"20px"}}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("h2",[e._v("退单详情")])]),r("div",{staticClass:"row1"},[r("h3",[e._v(" 订单信息:"),r("el-tag",[e._v(e._s(e._f("statusText")(e.orderReturnApply.status)))])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[e._v("退单人姓名:"),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(e.orderReturnApply.returnName))])]),r("el-col",{attrs:{span:8,offset:0}},[e._v("申请时间:"),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(e.orderReturnApply.createTime))])])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[e._v("订单编号:"+e._s(e.orderReturnApply.orderSn)+" "),r("el-button",{attrs:{type:"text",size:"default"},on:{click:e.orderDetail}},[e._v("查看订单详情")])],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[e._v("退单理由:"+e._s(e.orderReturnApply.reason))])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[e._v("退单描述:"+e._s(e.orderReturnApply.description))])],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:0}},[r("div",[e._v("退单图片:")]),r("img",{staticStyle:{border:"1px solid #999"},attrs:{src:e.orderReturnApply.proofPics,alt:"",width:"200",height:"150"}})])],1)],1),r("div",{staticClass:"row2"},[r("h3",[e._v(" 用户信息 ")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[e._v("联系人:"),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(e.orderReturnApply.memberUsername))])]),r("el-col",{attrs:{span:6,offset:0}},[e._v("联系电话:"+e._s(e.orderReturnApply.returnPhone))])],1)],1),r("div",{staticClass:"row3"},[r("h3",[e._v("商品信息")]),r("el-table",{attrs:{data:e.returnItems,border:"",stripe:""}},[r("el-table-column",{attrs:{align:"center",prop:"productName",label:"商品名称",fixed:"left","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{align:"center",label:"商品图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{src:e.row.productPic,alt:"",width:"120",height:"120"}})]}}],null,!1,2086435023)}),r("el-table-column",{attrs:{align:"center",label:"商品属性"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.productAttr,(function(t,n){return r("el-tag",{key:n},[e._v(e._s(t.key)+":"+e._s(t.value))])}))}}],null,!1,329584775)}),r("el-table-column",{attrs:{align:"center",prop:"productBrand",label:"品牌"}}),r("el-table-column",{attrs:{align:"center",prop:"productPrice",label:"价格"}}),r("el-table-column",{attrs:{align:"center",prop:"productCount",label:"商品数量"}}),r("el-table-column",{attrs:{align:"center",prop:"productRealPrice",label:"小计",fixed:"right"}})],1)],1),r("div",{staticClass:"row4"},[r("h3",[e._v("费用信息")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[e._v("运费总金额:"),r("span",{staticStyle:{color:"#f00"}},[e._v("0")])]),r("el-col",{attrs:{span:6,offset:0}},[e._v("退单金额:"),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(e.orderReturnApply.returnAmount))])])],1),0===e.orderReturnApply.status?r("el-form",{ref:"form",attrs:{model:e.handleForm,rules:e.rules,"label-width":"80px",inline:!1,size:"normal"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"退款金额",prop:"returnAmount"}},[r("el-input",{model:{value:e.handleForm.returnAmount,callback:function(t){e.$set(e.handleForm,"returnAmount",e._n(t))},expression:"handleForm.returnAmount"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"处理人",prop:"handleMan"}},[r("el-input",{model:{value:e.handleForm.handleMan,callback:function(t){e.$set(e.handleForm,"handleMan",e._n(t))},expression:"handleForm.handleMan"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"处理备注",prop:"handleNote"}},[r("el-input",{model:{value:e.handleForm.handleNote,callback:function(t){e.$set(e.handleForm,"handleNote",e._n(t))},expression:"handleForm.handleNote"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:0}},[r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onReturn("agree")}}},[e._v("同意退款")]),r("el-popconfirm",{attrs:{title:"亲,您确定要拒绝退款吗？"},on:{onConfirm:function(t){return e.onReturn("reject")}}},[r("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("拒绝退款")])],1),r("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1),r("el-col",{attrs:{span:12,offset:0}})],1)],1):e._e()],1),e.orderReturnApply.status>=1?r("div",{staticClass:"row6"},[r("h3",[e._v("处理结果")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[e._v("处理人:"),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(e.orderReturnApply.handleMan))])]),r("el-col",{attrs:{span:6,offset:0}},[e._v("处理备注:"+e._s(e.orderReturnApply.handleNote))]),r("el-col",{attrs:{span:6,offset:0}},[e._v("处理时间:"+e._s(e.orderReturnApply.handleTime))])],1),1===e.orderReturnApply.status?r("el-form",{ref:"form",attrs:{model:e.handleForm,rules:e.rules,"label-width":"80px",inline:!1,size:"normal"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"收货人",prop:"receiveMan"}},[r("el-input",{model:{value:e.handleForm.receiveMan,callback:function(t){e.$set(e.handleForm,"receiveMan",e._n(t))},expression:"handleForm.receiveMan"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"收货备注",prop:"receiveNote"}},[r("el-input",{model:{value:e.handleForm.receiveNote,callback:function(t){e.$set(e.handleForm,"receiveNote",t)},expression:"handleForm.receiveNote"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:0}},[r("el-form-item",[r("el-popconfirm",{attrs:{title:"亲,您确定收到货物了吗？"},on:{onConfirm:function(t){return e.onReturn("recive")}}},[r("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v("确认收货")])],1),r("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1),r("el-col",{attrs:{span:12,offset:0}})],1)],1):e._e()],1):e._e(),2===e.orderReturnApply.status?r("div",{staticClass:"row5"},[r("h3",[e._v("收货信息")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[e._v("退单收货人:"),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(e.orderReturnApply.receiveMan))])]),r("el-col",{attrs:{span:6,offset:0}},[e._v("退单收货备注:"+e._s(e.orderReturnApply.receiveNote))]),r("el-col",{attrs:{span:6,offset:0}},[e._v("退单收货时间:"+e._s(e.orderReturnApply.receiveTime))])],1)],1):e._e()]):e._e(),r("copyright")],1)},a=[],o=r("1da1"),l=(r("96cf"),r("2f08")),s=r("fdab"),u={name:"orderReturnDetail",components:{copyright:l["a"]},filters:{statusText:function(e){return 0==e?"待处理":1==e?"退货中":2==e?"已完成":3==e?"已拒绝":"无效订单"}},computed:{},data:function(){return{returnItems:[],rules:{handleMan:[{required:!0,message:"请输入处理人姓名",trigger:"blur"}],handleNote:[{required:!0,message:"请输入备注",trigger:"blur"}],receiveMan:[{required:!0,message:"请输入收货人",trigger:"blur"}],receiveNote:[{required:!0,message:"请输入备注",trigger:"blur"}],returnAmount:[{required:!0,message:"请输入退款金额",trigger:"blur"},{type:"number",message:"必须是数字类型",trigger:"blur"}]},orderReturnApply:{},handleForm:{}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.next=3,Object(s["c"])(r);case 3:if(n=t.sent,a=n.success,o=n.data,l=n.message,a){t.next=9;break}return t.abrupt("return",e.$message.error(l));case 9:e.orderReturnApply=o.orderReturnApply,u={productId:e.orderReturnApply.productId,productName:e.orderReturnApply.productName,productPic:e.orderReturnApply.productPic,productBrand:e.orderReturnApply.productBrand,productPrice:e.orderReturnApply.productPrice,productAttr:JSON.parse(e.orderReturnApply.productAttr),productCount:e.orderReturnApply.productCount,productRealPrice:e.orderReturnApply.productRealPrice},e.returnItems.push(u);case 12:case"end":return t.stop()}}),t)})))()},methods:{orderDetail:function(){this.$router.push({name:"orderDetail",params:{id:this.orderReturnApply.orderId}})},reset:function(){this.$refs.form.resetFields()},onReturn:function(e){var t,r=this;t="agree"===e?s["a"]:"reject"===e?s["e"]:s["d"],this.$refs.form.validate(function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(a){var o,l,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!a){n.next=13;break}return r.handleForm.id=r.orderReturnApply.id,n.next=4,t(r.orderReturnApply.id,r.handleForm);case 4:if(o=n.sent,l=o.success,s=o.message,l){n.next=9;break}return n.abrupt("return",r.$message.error(s));case 9:"agree"===e?r.$message.success("同意退款成功"):"reject"===e?r.$message.success("拒绝退款成功"):r.$message.success("确认收货成功"),r.$router.go(0),n.next=15;break;case 13:return r.$message.warning("请注意输入的内容是否有误!"),n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}}},c=u,i=r("2877"),p=Object(i["a"])(c,n,a,!1,null,"048c6064",null);t["default"]=p.exports},"97db":function(e,t,r){"use strict";r("eb78")},eb78:function(e,t,r){},fdab:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return u}));r("99af");var n=r("0c6d");function a(e,t,r){return Object(n["a"])({url:"/lejuAdmin/orderReturn/findReturnApply/".concat(e,"/").concat(t),method:"post",data:r})}function o(e,t){return Object(n["a"])({url:"/lejuAdmin/orderReturn/agreeApply/".concat(e),method:"post",data:t})}function l(e,t){return Object(n["a"])({url:"/lejuAdmin/orderReturn/receiveProduct/".concat(e),method:"post",data:t})}function s(e,t){return Object(n["a"])({url:"/lejuAdmin/orderReturn/rejectApply/".concat(e),method:"post",data:t})}function u(e){return Object(n["a"])({url:"/lejuAdmin/orderReturn/".concat(e)})}}}]);