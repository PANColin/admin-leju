(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d37bd2aa"],{"1f91":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.isFlex?"wrapper-upload":""},[r("el-upload",{ref:"uploadCoverImg",staticClass:"upload-demo",attrs:{"list-type":e.listType,headers:{token:e.token},"on-success":e.handleSuccess,"before-upload":e.beforeUpload,multiple:e.isMultiple,limit:e.limitNumber,"on-exceed":e.handleExceed,"show-file-list":!1,action:e.baseUrl+e.uploadUrl,"on-change":e.changeUpload}},["text"==e.listType?r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]):e._e(),"picture-card"==e.listType||"picture"==e.listType?r("el-button",{staticStyle:{border:"none"},attrs:{icon:"el-icon-plus",size:"small",plain:""}}):e._e(),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传图片格式文件，且不超过1.5M "),e.isMultiple?r("span",[e._v("文件不能超过"+e._s(e.limitNumber)+"个")]):e._e()])],1),e.isShowImg&&!e.isMultiple?r("div",{staticClass:"icon-wrapper"},[e.imgSrcStr||e.imgSrc?r("img",{staticClass:"cover-img",attrs:{src:e.imgSrc||e.imgSrcStr,alt:""}}):e._e(),e.imgSrc?r("i",{staticClass:"el-icon-circle-close",attrs:{slot:"reference"},on:{click:e.removeCoverImg},slot:"reference"}):e._e()]):e._e(),e.isShowImg&&e.isMultiple?r("div",{staticClass:"icon-wrapper",class:e.isFlex?"wrapper-img":""},e._l(e.picList.length>0?e.picList:e.imgSrcList,(function(t,a){return r("div",{key:a,staticClass:"multImg"},[r("img",{staticClass:"cover-img",attrs:{src:t,alt:""}}),e.picList.length>0?r("i",{staticClass:"el-icon-circle-close",on:{click:function(t){return e.removeCoverImg(a)}}}):e._e()])})),0):e._e()],1)},n=[],s=(r("a9e3"),r("99af"),r("a434"),r("5f87")),o={name:"UploadImg",props:{isShowImg:{type:Boolean,default:!1},uploadUrl:{type:String,default:"/lejuAdmin/material/uploadFileOss"},listType:{type:String,default:"text"},isWho:{type:String,default:""},isFlex:{type:Boolean,default:!0},isMultiple:{type:Boolean,default:!1},limitNumber:{type:Number,default:5},imgSrcStr:{type:String,default:""},imgSrcList:{type:Array,default:function(){return[]}}},mounted:function(){},data:function(){return{baseUrl:"https://leju.bufan.cloud",picList:[],imgSrc:""}},computed:{token:function(){return Object(s["b"])()}},methods:{changeUpload:function(e,t){},handleSuccess:function(e,t,r){var a=e.success,n=e.data,s=e.message;if(a){var o=n.fileUrl;this.picList.push(o),this.$message.success("上传成功!");var i={url:o,isWho:this.isWho};this.$emit("reciveImgSrc",i),this.imgSrc=o,this.isMultiple&&this.$emit("reciveImgSrcList",this.picList)}else this.$message.error(s)},beforeUpload:function(e){var t=/image\/(jpeg|png|jpg)/g,r=t.test(e.type),a=e.size/1024/1024<1.5;return r||this.$message.error("只能上传图片格式"),a||this.$message.error("上传头像图片大小不能超过1.5MB!"),r&&a},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(this.limitNumber," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件,请重新选择"))},removeCoverImg:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功!"}),t.imgSrc="",t.isMultiple&&t.picList.splice(e,1)})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},i=o,c=(r("b7de"),r("2877")),l=Object(c["a"])(i,a,n,!1,null,"1a79f9bc",null);t["a"]=l.exports},"2d36":function(e,t,r){},4297:function(e,t,r){"use strict";r("e6fd")},"4c01":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return l}));r("99af");var a=r("0c6d");function n(e){return Object(a["a"])({url:"/lejuAdmin/brand/addBrand",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/lejuAdmin/brand/delBrand/".concat(e),method:"delete"})}function o(){return Object(a["a"])({url:"/lejuAdmin/brand/findAllBrand"})}function i(e,t){return Object(a["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(e,"/").concat(t)})}function c(e){return Object(a["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/lejuAdmin/brand/updateBrand",method:"post",data:e})}},5642:function(e,t,r){},"90dc":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return p}));r("99af");var a=r("0c6d");function n(e){return Object(a["a"])({url:"/lejuAdmin/product/addProductAndSkus",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/lejuAdmin/product/del/".concat(e),method:"delete"})}function o(e){return Object(a["a"])({url:"/lejuAdmin/product/productSkusDetail/".concat(e)})}function i(e,t,r){return Object(a["a"])({url:"/lejuAdmin/product/productsByPage/".concat(e,"/").concat(t),method:"post",data:r})}function c(e){return Object(a["a"])({url:"/lejuAdmin/product/switchNewStatus",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/lejuAdmin/product/switchPublishStatus",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/lejuAdmin/product/switchRecommandStatus",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/lejuAdmin/product/switchVerifyStatus",method:"post",data:e})}function p(e){return Object(a["a"])({url:"/lejuAdmin/product/updateProductAndSkus",method:"post",data:e})}},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),s=r("a691"),o=r("50c4"),i=r("7b0b"),c=r("65f0"),l=r("8418"),u=r("1dde"),d=r("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var r,a,u,d,p,f,v=i(this),w=o(v.length),k=n(e,w),S=arguments.length;if(0===S?r=a=0:1===S?(r=0,a=w-k):(r=S-2,a=h(m(s(t),0),w-k)),w+r-a>b)throw TypeError(g);for(u=c(v,a),d=0;d<a;d++)p=k+d,p in v&&l(u,d,v[p]);if(u.length=a,r<a){for(d=k;d<w-a;d++)p=d+a,f=d+r,p in v?v[f]=v[p]:delete v[f];for(d=w;d>w-a+r;d--)delete v[d-1]}else if(r>a)for(d=w-a;d>k;d--)p=d+a-1,f=d+r-1,p in v?v[f]=v[p]:delete v[f];for(d=0;d<r;d++)v[d+k]=arguments[d+2];return v.length=w-a+r,u}})},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),s=r("94ca"),o=r("6eeb"),i=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),d=r("d039"),p=r("7c73"),f=r("241c").f,m=r("06cf").f,h=r("9bf2").f,b=r("58a8").trim,g="Number",v=n[g],w=v.prototype,k=c(p(w))==g,S=function(e){var t,r,a,n,s,o,i,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=b(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(s=l.slice(2),o=s.length,i=0;i<o;i++)if(c=s.charCodeAt(i),c<48||c>n)return NaN;return parseInt(s,a)}return+l};if(s(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var y,x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(k?d((function(){w.valueOf.call(r)})):c(r)!=g)?l(new v(S(t)),r,x):S(t)},_=a?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;_.length>j;j++)i(v,y=_[j])&&!i(x,y)&&h(x,y,m(v,y));x.prototype=w,w.constructor=x,o(n,g,x)}},b7de:function(e,t,r){"use strict";r("2d36")},c223:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("sku-detail",{ref:"sku",attrs:{editSku:e.skuList},on:{reload:e.reloadSku}}),r("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-collapse-item",{attrs:{title:"商品管理介绍",name:"1"}},[r("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[r("p",{staticStyle:{padding:"20px"}},[e._v(" 商品管理模块可以对客户端的商品进行增删改查等相关操作,来控制客户端商品的列表展示和商品详情 ")])])],1),r("el-collapse-item",{attrs:{title:"条件查询",name:"2"}},[r("el-card",{attrs:{shadow:"hover","body-style":{paddingTop:"20px",paddingBottom:"0"}}},[r("div",{staticStyle:{cursor:"pointer"},attrs:{slot:"header"},slot:"header"}),r("el-form",{ref:"ruleForm",attrs:{model:e.searchForm,"label-width":"80px",inline:!1,size:"normal"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name","string"===typeof t?t.trim():t)},expression:"searchForm.name"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品货号",prop:"productSn"}},[r("el-input",{attrs:{placeholder:"请输入商品货号"},model:{value:e.searchForm.productSn,callback:function(t){e.$set(e.searchForm,"productSn","string"===typeof t?t.trim():t)},expression:"searchForm.productSn"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"品牌",prop:"brandId"}},[r("el-select",{attrs:{name:"brandId",clearable:"",placeholder:"品牌"},model:{value:e.searchForm.brandId,callback:function(t){e.$set(e.searchForm,"brandId",t)},expression:"searchForm.brandId"}},e._l(e.brandList,(function(e){return r("el-option",{key:e.brandId,attrs:{label:e.brandName,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"上架状态",prop:"publishStatus"}},[r("el-select",{attrs:{name:"publishStatus",clearable:"",placeholder:"上架状态"},model:{value:e.searchForm.publishStatus,callback:function(t){e.$set(e.searchForm,"publishStatus",t)},expression:"searchForm.publishStatus"}},e._l(e.publishStatusList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.lable,value:e.value}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"审核状态",prop:"verifyStatus"}},[r("el-select",{attrs:{name:"verifyStatus",clearable:"",placeholder:"审核状态"},model:{value:e.searchForm.verifyStatus,callback:function(t){e.$set(e.searchForm,"verifyStatus",t)},expression:"searchForm.verifyStatus"}},e._l(e.verifyStatusList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.lable,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:8,offset:10}},[r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSearch("ruleForm")}}},[e._v("查询")]),r("el-button",{on:{click:function(t){return e.onCancle("ruleForm")}}},[e._v("取消")])],1)],1)],1)],1)],1)],1)],1),r("el-card",[r("el-button",{attrs:{type:"primary",size:"default"},on:{click:e.addProduct}},[e._v("新增")]),r("el-button",{attrs:{type:"primary",size:"default",loading:e.downloadLoading},on:{click:e.exportExcel}},[e._v("导出excel列表")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",border:"",data:e.list}},[r("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50",fixed:"left"}}),r("el-table-column",{attrs:{align:"center",label:"商品图片",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("img",{attrs:{src:t.row.pic,width:"100",height:"110"},on:{error:function(r){return e.handleError(t.row)}}})]}}])}),r("el-table-column",{attrs:{align:"center",prop:"name",label:"商品名称","show-overflow-tooltip":"",width:"160"}}),r("el-table-column",{attrs:{align:"center",prop:"brandName",label:"品牌名称",width:"160"}}),r("el-table-column",{attrs:{align:"center",prop:"description","show-overflow-tooltip":"",label:"商品描述",width:"160"}}),r("el-table-column",{attrs:{align:"center",label:"商品价格",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" 原价: "+e._s(t.row.originalPrice)+" ")]),r("el-tag",{attrs:{type:"danger",effect:"dark"}},[e._v(" 现价: "+e._s(t.row.price)+" ")])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"productCategoryName",label:"商品类别",width:"100"}}),r("el-table-column",{attrs:{align:"center",label:"标签",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-text":"最新","inactive-text":"过时","active-value":1,"inactive-value":0},on:{change:function(r){return e.newStatusChange(r,t.row)}},model:{value:t.row.newStatus,callback:function(r){e.$set(t.row,"newStatus",r)},expression:"scope.row.newStatus"}}),r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-text":"推荐","inactive-text":"不推荐","active-value":1,"inactive-value":0},on:{change:function(r){return e.recommendStatusChange(r,t.row)}},model:{value:t.row.recommendStatus,callback:function(r){e.$set(t.row,"recommendStatus",r)},expression:"scope.row.recommendStatus"}}),r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-text":"发布","inactive-text":"未发布","active-value":1,"inactive-value":0},on:{change:function(r){return e.publishStatusChange(r,t.row)}},model:{value:t.row.publishStatus,callback:function(r){e.$set(t.row,"publishStatus",r)},expression:"scope.row.publishStatus"}}),r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-text":"审核","inactive-text":"未审核","active-value":1,"inactive-value":0},on:{change:function(r){return e.verifyStatusChange(r,t.row)}},model:{value:t.row.verifyStatus,callback:function(r){e.$set(t.row,"verifyStatus",r)},expression:"scope.row.verifyStatus"}})]}}])}),r("el-table-column",{attrs:{align:"center",label:"sku",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.editSku(t.row.id)}}},[e._v("编辑sku")])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"createTime",label:"添加时间",width:"100"}}),r("el-table-column",{attrs:{align:"center",label:"是否展示",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-value":1,"inactive-value":0},model:{value:t.row.isShow,callback:function(r){e.$set(t.row,"isShow",r)},expression:"scope.row.isShow"}})]}}])}),r("el-table-column",{attrs:{align:"center",label:"浏览量/点赞量/收藏量",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:"info",hit:"",effect:"dark"}},[e._v(" 浏览数量:"+e._s(t.row.viewCount)+" ")]),r("el-tag",{attrs:{type:"danger",effect:"light"}},[e._v(" 点赞数量:"+e._s(t.row.zanCount)+" ")]),r("el-tag",{attrs:{type:"success",effect:"plain"}},[e._v(" 收藏数量:"+e._s(t.row.collectCount)+" ")])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"weight",label:"重量",width:"100"}}),r("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序",width:"100"}}),r("el-table-column",{attrs:{label:"操作",width:"180",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.edit(t.row)}}},[e._v("编辑")]),r("el-popconfirm",{attrs:{title:"亲,您确定要删除吗？"},on:{onConfirm:function(r){return e.del(t.row)}}},[r("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),r("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":e.pageInfo.start,"page-sizes":[5,10,15,20],"page-size":e.pageInfo.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.SizeChange,"current-change":e.CurrentChange}})],1),r("copyright")],1)},n=[],s=r("1da1"),o=(r("96cf"),r("d81d"),r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("159b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dialog-detail"},[r("el-dialog",{attrs:{title:"编辑sku",visible:e.dialogVisible,"custom-class":"dialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-button",{attrs:{type:"primary",size:"default"},on:{click:e.addSku}},[e._v("新增")]),r("el-table",{attrs:{data:e.editSku,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center",fixed:"left"}}),r("el-table-column",{attrs:{label:"图片",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("upload-img",{attrs:{listType:"text"},on:{reciveImgSrc:function(r){return e.handleImgSrc(r,t.row)}}}),t.row.pic?r("img",{attrs:{src:t.row.pic,alt:"",width:"100",height:"100"}}):e._e()]}}])}),r("el-table-column",{attrs:{label:"颜色",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"颜色",size:"normal",clearable:""},model:{value:t.row.spData[0].value,callback:function(r){e.$set(t.row.spData[0],"value",r)},expression:"scope.row.spData[0].value"}})]}}])}),r("el-table-column",{attrs:{label:"规格",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"规格",size:"normal",clearable:""},model:{value:t.row.spData[1].value,callback:function(r){e.$set(t.row.spData[1],"value",r)},expression:"scope.row.spData[1].value"}})]}}])}),r("el-table-column",{attrs:{label:"库存",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"库存",size:"normal",clearable:""},model:{value:t.row.stock,callback:function(r){e.$set(t.row,"stock",r)},expression:"scope.row.stock"}})]}}])}),r("el-table-column",{attrs:{label:"预警库存",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"预警库存",size:"normal",clearable:""},model:{value:t.row.lowStock,callback:function(r){e.$set(t.row,"lowStock",r)},expression:"scope.row.lowStock"}})]}}])}),r("el-table-column",{attrs:{label:"锁定库存",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"锁定库存",size:"normal",clearable:""},model:{value:t.row.lockStock,callback:function(r){e.$set(t.row,"lockStock",r)},expression:"scope.row.lockStock"}})]}}])}),r("el-table-column",{attrs:{label:"sku编码",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"sku编码",size:"normal",clearable:""},model:{value:t.row.skuCode,callback:function(r){e.$set(t.row,"skuCode",r)},expression:"scope.row.skuCode"}})]}}])}),r("el-table-column",{attrs:{label:"价格",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"价格",size:"normal",clearable:""},model:{value:t.row.price,callback:function(r){e.$set(t.row,"price",r)},expression:"scope.row.price"}})]}}])}),r("el-table-column",{attrs:{label:"销量",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"销量",size:"normal",clearable:""},model:{value:t.row.sale,callback:function(r){e.$set(t.row,"sale",r)},expression:"scope.row.sale"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"160",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.id?r("div",[r("el-button",{attrs:{type:"text",size:"default"},on:{click:function(r){return e.editSkuFun(t.row)}}},[e._v("修改编辑")]),r("el-popconfirm",{attrs:{title:"亲,您确定要删除吗？"},on:{onConfirm:function(r){return e.delSku(t.row)}}},[r("el-button",{staticStyle:{color:"#f00"},attrs:{slot:"reference",type:"text",size:"default"},slot:"reference"},[e._v("删除")])],1)],1):r("div",[r("el-button",{attrs:{type:"text",size:"default"},on:{click:function(r){return e.saveSkuFun(t.row)}}},[e._v("保存")]),r("el-popconfirm",{attrs:{title:"亲,您确定要删除吗？"},on:{onConfirm:function(r){return e.delSkuLocle(t.$index,t.row)}}},[r("el-button",{staticStyle:{color:"#f00"},attrs:{slot:"reference",type:"text",size:"default"},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取 消")])],1)],1)],1)}),i=[],c=(r("a434"),r("0c6d"));function l(e){return Object(c["a"])({url:"/lejuAdmin/sku/addProductSkus",method:"POST",data:e})}function u(e){return Object(c["a"])({url:"/lejuAdmin/sku/delSku/".concat(e),method:"delete"})}function d(e){return Object(c["a"])({url:"/lejuAdmin/sku/updateSkuInfo",method:"post",data:e})}var p=r("1f91"),f={components:{UploadImg:p["a"]},props:{editSku:{type:Array,default:function(){return[]}}},computed:{},created:function(){},mounted:function(){},data:function(){return{productId:"",rules:{},dialogVisible:!1}},methods:{saveSkuFun:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.spData=JSON.stringify(e.spData),r.next=3,l(e);case 3:if(a=r.sent,n=a.success,s=a.message,n){r.next=8;break}return r.abrupt("return",t.$message.error(s));case 8:t.$message.success("保存成功"),t.$emit("reload",n);case 10:case"end":return r.stop()}}),r)})))()},delSkuLocle:function(e,t){this.editSku.splice(e,1)},addSku:function(){this.editSku.push({lockStock:"",lowStock:"",pic:"",price:"",productId:this.productId,promotionPrice:"",sale:"",skuCode:"",spData:[{key:"颜色",value:""},{key:"规格",value:""}],stock:""})},delSku:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u(e.id);case 2:a=r.sent,n=a.success,s=a.message,n||t.$message.error(s),t.$message.success("删除成功"),t.$emit("reload",n);case 8:case"end":return r.stop()}}),r)})))()},editSkuFun:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.spData=JSON.stringify(e.spData),r.next=3,d(e);case 3:a=r.sent,n=a.success,s=a.message,n||t.$message.error(s),t.$message.success("修改成功"),t.$emit("reload",n);case 9:case"end":return r.stop()}}),r)})))()},handleImgSrc:function(e,t){t.pic=e.url},handleClose:function(){this.dialogVisible=!1},openDialog:function(e){this.productId=e,this.dialogVisible=!0}}},m=f,h=(r("4297"),r("2877")),b=Object(h["a"])(m,o,i,!1,null,"7b5546ce",null),g=b.exports,v=r("90dc"),w=r("4c01"),k={name:"goodsList",components:{skuDetail:g},data:function(){return{downloadLoading:!1,id:"",activeName:1,loading:!1,list:[],pageInfo:{start:1,limit:10},verifyStatusList:[{id:1,lable:"未审核",value:"0"},{id:1,lable:"已审核",value:"1"}],publishStatusList:[{id:1,lable:"未上架",value:"0"},{id:1,lable:"已上架",value:"1"}],brandList:[],skuList:[],searchForm:{name:"",brandId:"",productSn:"",publishStatus:"",verifyStatus:""},total:0}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.productsByPage(),t.next=3,Object(w["c"])();case 3:if(r=t.sent,a=r.success,n=r.data,s=r.message,a){t.next=9;break}return t.abrupt("return",e.$message.error(s));case 9:e.brandList=n.items.map((function(e){return{brandId:e.id,brandName:e.name,value:e.id}}));case 10:case"end":return t.stop()}}),t)})))()},methods:{addProduct:function(){this.$router.push({name:"productsListAdd"})},exportExcel:function(){var e=this;this.downloadLoading=!0,Promise.all([r.e("chunk-401baa9e"),r.e("chunk-4d1a1f11"),r.e("chunk-2133cd4f")]).then(r.bind(null,"4bf8")).then((function(t){var r=["商品名称","商品品牌","商品价格"],a=["name","brandName","price"],n=e.list,s=e.formatJson(a,n);t.export_json_to_excel({header:r,data:s,filename:e.filename,autoWidth:e.autoWidth,bookType:e.bookType}),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},newStatusChange:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={productId:t.id,status:e},a.next=3,Object(v["e"])(n);case 3:if(s=a.sent,o=s.success,i=s.message,o){a.next=8;break}return a.abrupt("return",r.$message.error(i));case 8:r.$message.success("修改状态成功");case 9:case"end":return a.stop()}}),a)})))()},recommendStatusChange:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={productId:t.id,status:e},a.next=3,Object(v["g"])(n);case 3:if(s=a.sent,o=s.success,i=s.message,o){a.next=8;break}return a.abrupt("return",r.$message.error(i));case 8:r.$message.success("修改状态成功");case 9:case"end":return a.stop()}}),a)})))()},publishStatusChange:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={productId:t.id,status:e},a.next=3,Object(v["f"])(n);case 3:if(s=a.sent,o=s.success,i=s.message,o){a.next=8;break}return a.abrupt("return",r.$message.error(i));case 8:r.$message.success("修改状态成功");case 9:case"end":return a.stop()}}),a)})))()},verifyStatusChange:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={productId:t.id,status:e},a.next=3,Object(v["h"])(n);case 3:if(s=a.sent,o=s.success,i=s.message,o){a.next=8;break}return a.abrupt("return",r.$message.error(i));case 8:r.$message.success("修改状态成功");case 9:case"end":return a.stop()}}),a)})))()},reloadSku:function(e){e&&this.editSku(this.id)},editSku:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.id=e,r.next=3,Object(v["c"])(e);case 3:if(a=r.sent,n=a.success,s=a.data,o=a.message,n){r.next=9;break}return r.abrupt("return",t.$message.error(o));case 9:s.skus.forEach((function(e){e.spData=JSON.parse(e.spData)})),t.skuList=s.skus,t.$refs.sku.openDialog(s.product.id);case 12:case"end":return r.stop()}}),r)})))()},edit:function(e){this.$router.push({name:"productsListEdit",params:{id:e.id}})},del:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(v["b"])(e.id);case 2:if(a=r.sent,n=a.success,s=a.message,n){r.next=7;break}return r.abrupt("return",t.$message.error(s));case 7:t.$message.success("删除成功"),t.productsByPage();case 9:case"end":return r.stop()}}),r)})))()},onCancle:function(e){this.$refs[e].resetFields(),this.productsByPage()},onSearch:function(){var e=!0;for(var t in this.searchForm)this.searchForm[t]&&(e=!1);if(e)return this.$message.warning("请至少输入一项进行查询");this.productsByPage(),this.pageInfo.start=1,this.pageInfo.limit=10},handleError:function(e){e.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg"},productsByPage:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(v["d"])(e.pageInfo.start,e.pageInfo.limit,e.searchForm);case 3:if(r=t.sent,r.success){t.next=6;break}return t.abrupt("return",e.$message.error(r.message));case 6:e.loading=!1,e.total=r.data.total,e.list=r.data.rows,r.data.rows.forEach((function(e){e.icon||(e.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg")}));case 10:case"end":return t.stop()}}),t)})))()},SizeChange:function(e){this.pageInfo.limit=e,this.productsByPage()},CurrentChange:function(e){this.pageInfo.start=e,this.productsByPage()}}},S=k,y=(r("dc64"),Object(h["a"])(S,a,n,!1,null,"4f06f1ca",null));t["default"]=y.exports},dc64:function(e,t,r){"use strict";r("5642")},e6fd:function(e,t,r){}}]);