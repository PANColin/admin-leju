(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de4cfa0"],{"1f91":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.isFlex?"wrapper-upload":""},[r("el-upload",{ref:"uploadCoverImg",staticClass:"upload-demo",attrs:{"list-type":e.listType,headers:{token:e.token},"on-success":e.handleSuccess,"before-upload":e.beforeUpload,multiple:e.isMultiple,limit:e.limitNumber,"show-file-list":!1,action:e.baseUrl+e.uploadUrl,"on-change":e.changeUpload}},["text"==e.listType?r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]):e._e(),"picture-card"==e.listType||"picture"==e.listType?r("el-button",{staticStyle:{border:"none"},attrs:{icon:"el-icon-plus",size:"small",plain:""}}):e._e(),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传图片格式文件，且不超过1.5M "),e.isMultiple?r("span",[e._v("文件不能超过"+e._s(e.limitNumber)+"个")]):e._e()])],1),e.isShowImg&&!e.isMultiple?r("div",{staticClass:"icon-wrapper"},[e.imgSrcStr||e.imgSrc?r("img",{staticClass:"cover-img",attrs:{src:e.imgSrc||e.imgSrcStr,alt:""}}):e._e(),e.imgSrc?r("i",{staticClass:"el-icon-circle-close",attrs:{slot:"reference"},on:{click:e.removeCoverImg},slot:"reference"}):e._e()]):e._e(),e.isShowImg&&e.isMultiple?r("div",{staticClass:"icon-wrapper",class:e.isFlex?"wrapper-img":""},e._l(e.picList.length>0?e.picList:e.imgSrcList,(function(t,a){return r("div",{key:a,staticClass:"multImg"},[r("img",{staticClass:"cover-img",attrs:{src:t,alt:""}}),e.picList.length>0?r("i",{staticClass:"el-icon-circle-close",on:{click:function(t){return e.removeCoverImg(a)}}}):e._e()])})),0):e._e()],1)},n=[],i=(r("a9e3"),r("a434"),r("5f87")),l={name:"UploadImg",props:{isShowImg:{type:Boolean,default:!1},uploadUrl:{type:String,default:"/lejuAdmin/material/uploadFileOss"},listType:{type:String,default:"text"},isWho:{type:String,default:""},isFlex:{type:Boolean,default:!0},isMultiple:{type:Boolean,default:!1},limitNumber:{type:Number,default:5},imgSrcStr:{type:String,default:""},imgSrcList:{type:Array,default:function(){return[]}}},mounted:function(){},data:function(){return{baseUrl:"https://leju.bufan.cloud",picList:[],imgSrc:""}},computed:{token:function(){return Object(i["b"])()}},methods:{changeUpload:function(e,t){},handleSuccess:function(e,t,r){var a=e.success,n=e.data,i=e.message;if(a){var l=n.fileUrl;this.picList.push(l),this.$message.success("上传成功!");var s={url:l,isWho:this.isWho};this.$emit("reciveImgSrc",s),this.imgSrc=l,this.isMultiple&&this.$emit("reciveImgSrcList",this.picList)}else this.$message.error(i)},beforeUpload:function(e){var t=/image\/(jpeg|png|jpg)/g,r=t.test(e.type),a=e.size/1024/1024<1.5;return r||this.$message.error("只能上传图片格式"),a||this.$message.error("上传头像图片大小不能超过1.5MB!"),r&&a},removeCoverImg:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功!"}),t.imgSrc="",t.isMultiple&&t.picList.splice(e,1)})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},s=l,o=(r("f2a8"),r("2877")),c=Object(o["a"])(s,a,n,!1,null,"0edec22a",null);t["a"]=c.exports},"79ae":function(e,t,r){"use strict";r("b112")},"90d1":function(e,t,r){},"97a6":function(e,t,r){},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),i=r("a691"),l=r("50c4"),s=r("7b0b"),o=r("65f0"),c=r("8418"),d=r("1dde"),u=r("ae40"),m=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,b=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m||!f},{splice:function(e,t){var r,a,d,u,m,f,v=s(this),y=l(v.length),w=n(e,y),_=arguments.length;if(0===_?r=a=0:1===_?(r=0,a=y-w):(r=_-2,a=b(p(i(t),0),y-w)),y+r-a>g)throw TypeError(h);for(d=o(v,a),u=0;u<a;u++)m=w+u,m in v&&c(d,u,v[m]);if(d.length=a,r<a){for(u=w;u<y-a;u++)m=u+a,f=u+r,m in v?v[f]=v[m]:delete v[f];for(u=y;u>y-a+r;u--)delete v[u-1]}else if(r>a)for(u=y-a;u>w;u--)m=u+a-1,f=u+r-1,m in v?v[f]=v[m]:delete v[f];for(u=0;u<r;u++)v[u+w]=arguments[u+2];return v.length=y-a+r,d}})},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),l=r("6eeb"),s=r("5135"),o=r("c6b6"),c=r("7156"),d=r("c04e"),u=r("d039"),m=r("7c73"),f=r("241c").f,p=r("06cf").f,b=r("9bf2").f,g=r("58a8").trim,h="Number",v=n[h],y=v.prototype,w=o(m(y))==h,_=function(e){var t,r,a,n,i,l,s,o,c=d(e,!1);if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(i=c.slice(2),l=i.length,s=0;s<l;s++)if(o=i.charCodeAt(s),o<48||o>n)return NaN;return parseInt(i,a)}return+c};if(i(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var S,k=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof k&&(w?u((function(){y.valueOf.call(r)})):o(r)!=h)?c(new v(_(t)),r,k):_(t)},B=a?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;B.length>F;F++)s(v,S=B[F])&&!s(k,S)&&b(k,S,p(v,S));k.prototype=y,y.constructor=k,l(n,h,k)}},b112:function(e,t,r){},b8a4:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("add-b",{ref:"addB"}),r("el-card",{staticStyle:{width:"95%",margin:"20px auto"}},[r("el-button",{attrs:{type:"primary",size:"default"},on:{click:e.add}},[e._v("新增")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:e.list}},[r("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50",fixed:"left"}}),r("el-table-column",{attrs:{align:"center",label:"商品图片",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("img",{attrs:{src:t.row.pic,width:"100",height:"110"},on:{error:function(r){return e.handleError(t.row)}}})]}}])}),r("el-table-column",{attrs:{align:"center",label:"活动时间",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:"success"}},[e._v(" 开始时间:"+e._s(t.row.startTime)+" ")]),r("el-tag",{attrs:{type:"warning"}},[e._v(" 结束时间:"+e._s(t.row.endTime)+" ")])]}}])}),r("el-table-column",{attrs:{resizable:"",align:"center",prop:"name",label:"广告名称",width:"160"}}),r("el-table-column",{attrs:{resizable:"",align:"center",prop:"clickCount",label:"点击数",width:"100"}}),r("el-table-column",{attrs:{resizable:"",align:"center",prop:"orderCount",label:"下单数",width:"100"}}),r("el-table-column",{attrs:{resizable:"",align:"center",label:"轮播位置",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:"info"}},[e._v(e._s(t.row.type>=0?"首页轮播":""))])]}}])}),r("el-table-column",{attrs:{align:"center",label:"链接地址",width:"180","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{attrs:{href:t.row.url?t.row.url:"#",disabled:!t.row.url,target:"_blank"}},[e._v(" "+e._s(t.row.url||"无链接")+" ")])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"note",label:"备注",width:"180"}}),r("el-table-column",{attrs:{resizable:"",align:"center",label:"上下线状态",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:"info"}},[e._v(e._s(t.row.status?"上线":"下线"))])]}}])}),r("el-table-column",{attrs:{label:"操作",width:"160px",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.edit(t.row)}}},[e._v("编辑")]),r("el-popconfirm",{attrs:{title:"亲,您确定要删除吗？"},on:{onConfirm:function(r){return e.del(t.row)}}},[r("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[e._v("删除")])],1)]}}])})],1)],1),r("copyright")],1)},n=[],i=r("1da1"),l=(r("159b"),r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dialog-detail"},[r("el-dialog",{attrs:{title:"广告详情",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"addBrandForm",attrs:{model:e.addBrandForm,rules:e.rules}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"广告名称","label-width":e.formLabelWidth,prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入广告名称",autocomplete:"off"},model:{value:e.addBrandForm.name,callback:function(t){e.$set(e.addBrandForm,"name",t)},expression:"addBrandForm.name"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth,prop:"note"}},[r("el-input",{attrs:{placeholder:"请输入备注",autocomplete:"off"},model:{value:e.addBrandForm.note,callback:function(t){e.$set(e.addBrandForm,"note",t)},expression:"addBrandForm.note"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"轮播位置","label-width":e.formLabelWidth,prop:"type "}},[r("el-select",{attrs:{placeholder:"轮播位置",clearable:"",filterable:""},model:{value:e.addBrandForm.type,callback:function(t){e.$set(e.addBrandForm,"type",t)},expression:"addBrandForm.type"}},e._l(e.options,(function(e){return r("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth,prop:"sort"}},[r("el-input",{attrs:{placeholder:"请输入排序大小(数字越大越靠前)",autocomplete:"off"},model:{value:e.addBrandForm.sort,callback:function(t){e.$set(e.addBrandForm,"sort",e._n(t))},expression:"addBrandForm.sort"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"产品数量","label-width":e.formLabelWidth,prop:"orderCount"}},[r("el-input",{attrs:{placeholder:"请输入产品数量",autocomplete:"off"},model:{value:e.addBrandForm.orderCount,callback:function(t){e.$set(e.addBrandForm,"orderCount",e._n(t))},expression:"addBrandForm.orderCount"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"链接","label-width":e.formLabelWidth,prop:"url"}},[r("el-input",{attrs:{type:"url",placeholder:"请输入链接",autocomplete:"off"},model:{value:e.addBrandForm.url,callback:function(t){e.$set(e.addBrandForm,"url",e._n(t))},expression:"addBrandForm.url"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"开始时间","label-width":e.formLabelWidth}},[r("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:e.addBrandForm.startTime,callback:function(t){e.$set(e.addBrandForm,"startTime",t)},expression:"addBrandForm.startTime"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"结束时间","label-width":e.formLabelWidth}},[r("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:e.addBrandForm.endTime,callback:function(t){e.$set(e.addBrandForm,"endTime",t)},expression:"addBrandForm.endTime"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"上下线状态",size:"normal","label-width":e.formLabelWidth}},[r("el-switch",{attrs:{"active-value":0,"inactive-value":1},model:{value:e.addBrandForm.status,callback:function(t){e.$set(e.addBrandForm,"status",t)},expression:"addBrandForm.status"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-form-item",{attrs:{label:"商品图片",size:"normal","label-width":e.formLabelWidth}},[r("upload-img",{attrs:{isFlex:!0,isShowImg:!0,imgSrcStr:e.brand.pic,listType:"picture-card"},on:{reciveImgSrc:e.handleRecivePic}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.doSave}},[e._v("确 定")])],1)],1)],1)}),s=[],o=r("0c6d");function c(e){return Object(o["a"])({url:"/lejuAdmin/advertise/addAds",method:"post",data:e})}function d(e){return Object(o["a"])({url:"/lejuAdmin/advertise/delAds/".concat(e),method:"delete"})}function u(){return Object(o["a"])({url:"/lejuAdmin/advertise/adsList"})}function m(e){return Object(o["a"])({url:"/lejuAdmin/advertise/updateAds",method:"post",data:e})}var f=r("1f91"),p={components:{UploadImg:f["a"]},computed:{},created:function(){},mounted:function(){},data:function(){return{addBrandForm:{},options:[{id:1,label:"app首页轮播",value:0},{id:2,label:"其他",value:1}],brand:{},dialogVisible:!1,formLabelWidth:"140px",rules:{name:[{required:!0,message:"广告名不能为空",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],sort:[{type:"number",message:"类型必须是数字类型",trigger:"blur"}],orderCount:[{type:"number",message:"类型必须是数字类型",trigger:"blur"}]}}},methods:{handleRecivePic:function(e){this.addBrandForm.pic=e.url},handleClose:function(){this.dialogVisible=!1},doSave:function(){var e,t,r=this;this.brand.id?(e=m,t="修改成功"):(e=c,t="添加成功"),this.$refs.addBrandForm.validate(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(n){var i,l,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n){a.next=12;break}return a.next=3,e(r.addBrandForm);case 3:if(i=a.sent,l=i.success,s=i.message,l){a.next=8;break}return a.abrupt("return",r.$message.error(s));case 8:r.$message.success(t),r.$router.go(0),a.next=14;break;case 12:return r.$message.warning("请检查是否输入有误"),a.abrupt("return",!1);case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},openDialog:function(e){var t=this;this.$nextTick((function(){null!==e&&void 0!==e&&e.id?(t.brand=e,t.addBrandForm=JSON.parse(JSON.stringify(e))):(t.addBrandForm={},t.brand={})})),this.dialogVisible=!0}}},b=p,g=(r("79ae"),r("2877")),h=Object(g["a"])(b,l,s,!1,null,"6e5e25dc",null),v=h.exports,y={name:"BannerList",components:{addB:v},data:function(){return{loading:!1,list:[],pageInfo:{start:1,limit:10},total:0}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.adsList();case 1:case"end":return t.stop()}}),t)})))()},methods:{add:function(){this.$refs.addB.openDialog({name:"add"})},edit:function(e){this.$refs.addB.openDialog(e)},del:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,d(e.id);case 2:if(a=r.sent,n=a.success,i=a.message,n){r.next=7;break}return r.abrupt("return",t.$message.error(i));case 7:t.$message.success("删除成功"),t.adsList();case 9:case"end":return r.stop()}}),r)})))()},handleError:function(e){e.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg"},adsList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,u();case 3:if(r=t.sent,a=r.success,n=r.data,i=r.message,a){t.next=9;break}return t.abrupt("return",e.$message.error(i));case 9:e.loading=!1,e.list=n.items,n.items.forEach((function(e){e.icon||(e.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg")}));case 12:case"end":return t.stop()}}),t)})))()}}},w=y,_=(r("d808"),Object(g["a"])(w,a,n,!1,null,"063e79ac",null));t["default"]=_.exports},d808:function(e,t,r){"use strict";r("90d1")},f2a8:function(e,t,r){"use strict";r("97a6")}}]);