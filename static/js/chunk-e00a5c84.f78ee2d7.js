(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e00a5c84"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var a=r("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(a["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a["a"])(t,e):void 0}}},"4c01":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return n})),r.d(e,"f",(function(){return c}));r("99af");var a=r("0c6d");function o(t){return Object(a["a"])({url:"/lejuAdmin/brand/addBrand",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/lejuAdmin/brand/delBrand/".concat(t),method:"delete"})}function l(){return Object(a["a"])({url:"/lejuAdmin/brand/findAllBrand"})}function i(t,e){return Object(a["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(t,"/").concat(e)})}function n(t){return Object(a["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/lejuAdmin/brand/updateBrand",method:"post",data:t})}},"64e2":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[r("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[r("el-step",{attrs:{title:"商品基本信息"}}),r("el-step",{attrs:{title:"添加库存信息"}}),r("el-step",{attrs:{title:"添加移动端详情"}})],1)],1),r("el-card",{attrs:{shadow:"hover","body-style":{paddingTop:"20px",paddingBottom:"0"}}},[r("el-form",{ref:"ruleForm",attrs:{model:t.product,rules:t.rules,"label-width":"120px",inline:!1,size:"normal"}},[1==t.active?r("div",{staticClass:"row1"},[r("div",{staticClass:"header"},[t._v(" 基本信息 ")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name","string"===typeof e?e.trim():e)},expression:"product.name"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品编码",prop:"productSn"}},[r("el-input",{attrs:{placeholder:"请输入商品编码"},model:{value:t.product.productSn,callback:function(e){t.$set(t.product,"productSn","string"===typeof e?e.trim():e)},expression:"product.productSn"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"品牌",prop:"brandId"}},[r("el-select",{attrs:{name:"brandId",clearable:"",placeholder:"品牌"},model:{value:t.product.brandId,callback:function(e){t.$set(t.product,"brandId",e)},expression:"product.brandId"}},t._l(t.brandList,(function(t){return r("el-option",{key:t.brandId,attrs:{label:t.brandName,value:t.value}})})),1)],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"上架状态",prop:"publishStatus"}},[r("el-select",{attrs:{name:"publishStatus",clearable:"",placeholder:"上架状态"},model:{value:t.product.publishStatus,callback:function(e){t.$set(t.product,"publishStatus",e)},expression:"product.publishStatus"}},t._l(t.publishStatusList,(function(t,e){return r("el-option",{key:e,attrs:{label:t.lable,value:t.value}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"审核状态",prop:"verifyStatus"}},[r("el-select",{attrs:{name:"verifyStatus",clearable:"",placeholder:"审核状态"},model:{value:t.product.verifyStatus,callback:function(e){t.$set(t.product,"verifyStatus",e)},expression:"product.verifyStatus"}},t._l(t.verifyStatusList,(function(t,e){return r("el-option",{key:e,attrs:{label:t.lable,value:t.value}})})),1)],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品分类",prop:"productCategoryName"}},[r("el-select",{attrs:{name:"productCategoryName",clearable:"",placeholder:"商品分类"},model:{value:t.product.productCategoryName,callback:function(e){t.$set(t.product,"productCategoryName",e)},expression:"product.productCategoryName"}},t._l(t.categoryList,(function(t,e){return r("el-option",{key:e,attrs:{label:t.lable,value:t.value}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:0}},[r("el-form-item",{attrs:{label:"商品描述"}},[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入商品描述"},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}})],1)],1)],1)],1):t._e(),1==t.active?r("div",{staticClass:"row2"},[r("div",{staticClass:"header"},[t._v(" 商品属性 ")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品原价",prop:"originalPrice"}},[r("el-input",{attrs:{placeholder:"请输入商品原价"},model:{value:t.product.originalPrice,callback:function(e){t.$set(t.product,"originalPrice",t._n(e))},expression:"product.originalPrice"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品现价",prop:"price"}},[r("el-input",{attrs:{placeholder:"请输入商品现价"},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",t._n(e))},expression:"product.price"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"商品重量",prop:"weight"}},[r("el-input",{attrs:{placeholder:"请输入商品重量"},model:{value:t.product.weight,callback:function(e){t.$set(t.product,"weight",t._n(e))},expression:"product.weight"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"促销类型"}},[r("el-select",{attrs:{placeholder:"没有促销，使用原价",clearable:"",filterable:"",disabled:""},model:{value:t.product.promotionType,callback:function(e){t.$set(t.product,"promotionType",e)},expression:"product.promotionType"}},[r("el-option",{attrs:{value:""}})],1)],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"活动价格"}},[r("el-input",{attrs:{disabled:"",value:"0",placeholder:"请输入活动价格"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:0}},[r("el-form-item",{attrs:{label:"缩略图"}},[r("upload-img",{attrs:{imgSrcStr:t.showPic,isFlex:!0,isShowImg:!0,listType:"picture-card"},on:{reciveImgSrc:function(e){return t.handleImgSrc(e)}}})],1)],1)],1)],1):t._e(),1==t.active?r("div",{staticClass:"row3"},[r("div",{staticClass:"header"},[t._v("其他信息")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"推荐状态",size:"normal"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-value":1,"inactive-value":0},model:{value:t.product.recommendStatus,callback:function(e){t.$set(t.product,"recommendStatus",e)},expression:"product.recommendStatus"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"新品状态",size:"normal"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-value":1,"inactive-value":0},model:{value:t.product.newStatus,callback:function(e){t.$set(t.product,"newStatus",e)},expression:"product.newStatus"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"预告商品",size:"normal"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999","active-value":1,"inactive-value":0},model:{value:t.product.previewStatus,callback:function(e){t.$set(t.product,"previewStatus",e)},expression:"product.previewStatus"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"搜索关键词",size:"normal"}},[r("el-input",{attrs:{placeholder:"搜索关键词",size:"normal",clearable:""},model:{value:t.product.keywords,callback:function(e){t.$set(t.product,"keywords",e)},expression:"product.keywords"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"库存预警",size:"normal",prop:"lowStock"}},[r("el-input",{attrs:{placeholder:"库存预警",size:"normal",clearable:""},model:{value:t.product.lowStock,callback:function(e){t.$set(t.product,"lowStock",t._n(e))},expression:"product.lowStock"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"商品排序",size:"normal",prop:"sort"}},[r("el-input",{attrs:{placeholder:"商品排序",size:"normal",clearable:""},model:{value:t.product.sort,callback:function(e){t.$set(t.product,"sort",t._n(e))},expression:"product.sort"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:0}},[r("el-form-item",{attrs:{label:"产品服务",size:"normal"}},[r("el-checkbox-group",{model:{value:t.product.serviceIds,callback:function(e){t.$set(t.product,"serviceIds",e)},expression:"product.serviceIds"}},[r("el-checkbox",{attrs:{label:"1"}},[t._v("无忧退货")]),r("el-checkbox",{attrs:{label:"2"}},[t._v("快速退款")]),r("el-checkbox",{attrs:{label:"3"}},[t._v("免费包邮")])],1)],1)],1)],1)],1):t._e(),2==t.active?r("div",{staticClass:"row4"},[r("div",{staticClass:"header"},[t._v("商品sku信息")]),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.product.title,callback:function(e){t.$set(t.product,"title","string"===typeof e?e.trim():e)},expression:"product.title"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"副标题",prop:"subTitle "}},[r("el-input",{attrs:{placeholder:"请输入副标题"},model:{value:t.product.subTitle,callback:function(e){t.$set(t.product,"subTitle","string"===typeof e?e.trim():e)},expression:"product.subTitle"}})],1)],1),r("el-col",{attrs:{span:8,offset:0}},[r("span",{staticStyle:{color:"#f00","font-size":"18px"}},[t._v("*")]),r("el-button",{attrs:{type:"text",size:"medium"},on:{click:t.addSku}},[t._v("sku设置")])],1)],1),r("sku-detail",{ref:"sku",attrs:{showSkuList:t.pmsSkuStockList},on:{getskuList:t.getpmsSkuStockList}}),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24,offset:0}},[r("el-form-item",{attrs:{label:"画册图片"}},[r("upload-img",{attrs:{imgSrcList:t.showPicList,isMultiple:!0,limitNumber:5,isFlex:!0,isShowImg:!0,listType:"picture-card"},on:{reciveImgSrcList:t.handleImgSrcList}})],1)],1)],1)],1):t._e(),3==t.active?r("div",{staticClass:"row5"},[r("el-form-item",{attrs:{label:"详情描述"}},[r("Tinymce",{attrs:{height:400},model:{value:t.tinContent,callback:function(e){t.tinContent=e},expression:"tinContent"}})],1),r("el-form-item",{attrs:{label:"备注",size:"normal"}},[r("el-input",{attrs:{placeholder:"请输入备注",size:"normal",clearable:""},model:{value:t.product.note,callback:function(e){t.$set(t.product,"note",e)},expression:"product.note"}})],1)],1):t._e()]),r("div",{staticClass:"footer"},[t.active>1?r("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.pre}},[t._v("返回上一步")]):t._e(),1==t.active?r("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步,填写库存信息")]):t._e(),2==t.active?r("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步,填写移动端详情")]):t._e(),3==t.active?r("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:t.doSave}},[t._v("提交保存")]):t._e()],1)],1),r("copyright")],1)},o=[],s=r("1da1"),l=(r("96cf"),r("ac1f"),r("1276"),r("159b"),r("d81d"),r("b0c0"),r("a15b"),r("7db0"),r("8256")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dialog-detail"},[r("el-dialog",{attrs:{title:"编辑sku",visible:t.dialogVisible,"custom-class":"dialog"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.addSku}},[t._v("新增")]),r("el-table",{attrs:{data:t.addSkuList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center",fixed:"left"}}),r("el-table-column",{attrs:{label:"图片",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("upload-img",{attrs:{listType:"text"},on:{reciveImgSrc:function(r){return t.handleImgSrc(r,e.row)}}}),e.row.pic?r("img",{attrs:{src:e.row.pic,alt:"",width:"100",height:"100"}}):t._e()]}}])}),r("el-table-column",{attrs:{label:"颜色",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"颜色",size:"normal",clearable:""},model:{value:e.row.spData[0].value,callback:function(r){t.$set(e.row.spData[0],"value",r)},expression:"scope.row.spData[0].value"}})]}}])}),r("el-table-column",{attrs:{label:"规格",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"规格",size:"normal",clearable:""},model:{value:e.row.spData[1].value,callback:function(r){t.$set(e.row.spData[1],"value",r)},expression:"scope.row.spData[1].value"}})]}}])}),r("el-table-column",{attrs:{label:"库存",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"库存",size:"normal",clearable:""},model:{value:e.row.stock,callback:function(r){t.$set(e.row,"stock",r)},expression:"scope.row.stock"}})]}}])}),r("el-table-column",{attrs:{label:"预警库存",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"预警库存",size:"normal",clearable:""},model:{value:e.row.lowStock,callback:function(r){t.$set(e.row,"lowStock",r)},expression:"scope.row.lowStock"}})]}}])}),r("el-table-column",{attrs:{label:"锁定库存",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"锁定库存",size:"normal",clearable:""},model:{value:e.row.lockStock,callback:function(r){t.$set(e.row,"lockStock",r)},expression:"scope.row.lockStock"}})]}}])}),r("el-table-column",{attrs:{label:"sku编码",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"sku编码",size:"normal",clearable:""},model:{value:e.row.skuCode,callback:function(r){t.$set(e.row,"skuCode",r)},expression:"scope.row.skuCode"}})]}}])}),r("el-table-column",{attrs:{label:"价格",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"价格",size:"normal",clearable:""},model:{value:e.row.price,callback:function(r){t.$set(e.row,"price",r)},expression:"scope.row.price"}})]}}])}),r("el-table-column",{attrs:{label:"销量",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{attrs:{placeholder:"销量",size:"normal",clearable:""},model:{value:e.row.sale,callback:function(r){t.$set(e.row,"sale",r)},expression:"scope.row.sale"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"160",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[r("el-popconfirm",{attrs:{title:"亲,您确定要删除吗？"},on:{onConfirm:function(r){return t.delSkuLocle(e.$index,e.row)}}},[r("el-button",{staticStyle:{color:"#f00"},attrs:{slot:"reference",type:"text",size:"default"},slot:"reference"},[t._v("删除")])],1)],1)]}}])})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.addSkuList.length>0?r("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.getskuList}},[t._v("获取skuList")]):t._e(),r("el-button",{on:{click:t.handleClose}},[t._v("取 消")])],1)],1)],1)},n=[],c=(r("a434"),r("caad"),r("b64b"),r("1f91")),u={components:{UploadImg:c["a"]},props:{showSkuList:{type:Array,default:function(){return[]}}},computed:{},created:function(){},mounted:function(){this.addSkuList=this.showSkuList},data:function(){return{addSkuList:[],dialogVisible:!1}},methods:{delSkuLocle:function(t,e){this.addSkuList.splice(t,1)},getskuList:function(){var t=this,e=["spData","createTime","id","productId","promotionPrice","modifyTime"],r=this.addSkuList.every((function(r){var a=0;for(var o in r)if(!e.includes(o))if(r[o]&&a++,t.$route.meta.isEdit){if(a==Object.keys(r).length-6)return!0}else if(a==Object.keys(r).length-1)return!0}));if(!r)return this.$message.warning("请注意是否还有未输入的内容");this.addSkuList.forEach((function(t){t.spData=JSON.stringify(t.spData)})),this.$message.success("获取skuList成功"),this.$emit("getskuList",this.addSkuList),this.handleClose()},addSku:function(){this.addSkuList.push({lockStock:"",lowStock:"",pic:"",price:"",sale:"",skuCode:"",spData:[{key:"颜色",value:""},{key:"规格",value:""}],stock:""})},handleImgSrc:function(t,e){e.pic=t.url},handleClose:function(){this.dialogVisible=!1},openDialog:function(){this.addSkuList.forEach((function(t){Array.isArray(t.spData)||(t.spData=JSON.parse(t.spData))})),this.dialogVisible=!0}}},d=u,p=(r("ec9c"),r("2877")),f=Object(p["a"])(d,i,n,!1,null,"21e1557e",null),m=f.exports,b=r("4c01"),v=r("90dc"),h={name:"productDetail",components:{UploadImg:c["a"],skuDetail:m,Tinymce:l["a"]},data:function(){return{showPic:"",showPicList:[],tinContent:"",checkList:[],active:1,id:"",activeName:1,loading:!1,list:[],verifyStatusList:[{id:1,lable:"未审核",value:"0"},{id:1,lable:"已审核",value:"1"}],publishStatusList:[{id:1,lable:"未上架",value:"0"},{id:1,lable:"已上架",value:"1"}],categoryList:[{id:1,lable:"创意",value:"创意"},{id:1,lable:"风格",value:"风格"},{id:1,lable:"饰品",value:"饰品"},{id:1,lable:"灯具",value:"灯具"}],brandList:[],skuList:[],pmsSkuStockList:[],product:{name:"",pic:"",serviceIds:[],brandId:"",productSn:"",publishStatus:"",verifyStatus:"",detailHtml:"",detailDesc:""},rules:{name:[{required:!0,message:"商品名不能为空",trigger:"blur"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}],originalPrice:[{required:!0,message:"商品原价不能为空",trigger:"blur"},{type:"number",message:"必须是数字类型",trigger:"blur"}],price:[{required:!0,message:"商品现价不能为空",trigger:"blur"},{type:"number",message:"必须是数字类型",trigger:"blur"}],weight:[{type:"number",message:"必须是数字类型",trigger:"blur"}],lowStock:[{type:"number",message:"必须是数字类型",trigger:"blur"}],sort:[{type:"number",message:"必须是数字类型",trigger:"blur"}],productCategoryName:[{required:!0,message:"请选择分类商品",trigger:"change"}],publishStatus:[{required:!0,message:"请选择上架状态",trigger:"change"}],verifyStatus:[{required:!0,message:"请选择审核状态",trigger:"change"}]},total:0}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a,o,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$route.meta.isEdit){e.next=18;break}return r=t.$route.params.id,e.next=4,Object(v["c"])(r);case 4:if(a=e.sent,o=a.success,s=a.data,l=a.message,o){e.next=10;break}return e.abrupt("return",t.$message.error(l));case 10:t.product=s.product,t.pmsSkuStockList=s.skus,t.tinContent=t.product.detailDesc,t.product.albumPics=t.product.albumPics.split(","),t.product.serviceIds=t.product.serviceIds.split(","),t.showPic=t.product.pic,t.showPicList=t.product.albumPics,t.pmsSkuStockList.forEach((function(t){t.spData=JSON.parse(t.spData)}));case 18:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["c"])();case 2:if(r=e.sent,a=r.success,o=r.data,s=r.message,a){e.next=8;break}return e.abrupt("return",t.$message.error(s));case 8:t.brandList=o.items.map((function(t){return{brandId:t.id,brandName:t.name,value:t.id}}));case 9:case"end":return e.stop()}}),e)})))()},methods:{doSave:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a,o,s,l,i,n,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.product.detailDesc=t.tinContent,t.product.detailHtml=t.tinContent,!(t.pmsSkuStockList.length<=0)){e.next=4;break}return e.abrupt("return",t.$message.warning("请检查sku列表是否填写"));case 4:return t.$route.meta.isEdit?(a=v["i"],Array.isArray(t.product.albumPics)&&Array.isArray(t.product.serviceIds)&&(t.product.albumPics=null===(s=t.product)||void 0===s||null===(l=s.albumPics)||void 0===l?void 0:l.join(","),t.product.serviceIds=null===(i=t.product)||void 0===i?void 0:i.serviceIds.join(",")),t.pmsSkuStockList.forEach((function(t){t.spData=JSON.stringify(t.spData)})),o="修改成功",r={pmsSkuStockList:t.pmsSkuStockList,product:t.product}):(a=v["a"],o="添加成功",r={pmsSkuStockList:t.pmsSkuStockList,product:t.product}),e.next=7,a(r);case 7:if(n=e.sent,c=n.success,u=n.message,c){e.next=12;break}return e.abrupt("return",t.$message.error(u));case 12:t.$message.success(o),t.$router.push({name:"productsList"});case 14:case"end":return e.stop()}}),e)})))()},getpmsSkuStockList:function(t){this.pmsSkuStockList=t},addSku:function(){this.$refs.sku.openDialog()},handleImgSrc:function(t){this.product.pic=t.url},handleImgSrcList:function(t){this.product.albumPics=t.join(",")},next:function(){var t=this,e=this.brandList.find((function(e){return e.value==t.product.brandId}));if(!e)return this.$message.warning("请注意选择品牌分类");this.product.brandName=e.brandName,this.product.serviceIds.length>0&&2==this.active&&(this.$route.meta.isEdit||(this.product.serviceIds=this.product.serviceIds.join(","))),this.$refs.ruleForm.validate((function(e){return e?t.active++>2?t.active=3:void 0:(t.$message.warning("请注意表单验证"),!1)}))},pre:function(){if(this.active--<=1)return this.active=1}}},g=h,k=(r("ea95"),Object(p["a"])(g,a,o,!1,null,"1a1eee9d",null));e["default"]=k.exports},"6b75":function(t,e,r){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}r.d(e,"a",(function(){return a}))},"7db0":function(t,e,r){"use strict";var a=r("23e7"),o=r("b727").find,s=r("44d2"),l=r("ae40"),i="find",n=!0,c=l(i);i in[]&&Array(1)[i]((function(){n=!1})),a({target:"Array",proto:!0,forced:n||!c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s(i)},"90dc":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return n})),r.d(e,"f",(function(){return c})),r.d(e,"g",(function(){return u})),r.d(e,"h",(function(){return d})),r.d(e,"i",(function(){return p}));r("99af");var a=r("0c6d");function o(t){return Object(a["a"])({url:"/lejuAdmin/product/addProductAndSkus",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/lejuAdmin/product/del/".concat(t),method:"delete"})}function l(t){return Object(a["a"])({url:"/lejuAdmin/product/productSkusDetail/".concat(t)})}function i(t,e,r){return Object(a["a"])({url:"/lejuAdmin/product/productsByPage/".concat(t,"/").concat(e),method:"post",data:r})}function n(t){return Object(a["a"])({url:"/lejuAdmin/product/switchNewStatus",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/lejuAdmin/product/switchPublishStatus",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/lejuAdmin/product/switchRecommandStatus",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/lejuAdmin/product/switchVerifyStatus",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/lejuAdmin/product/updateProductAndSkus",method:"post",data:t})}},a15b:function(t,e,r){"use strict";var a=r("23e7"),o=r("44ad"),s=r("fc6a"),l=r("a640"),i=[].join,n=o!=Object,c=l("join",",");a({target:"Array",proto:!0,forced:n||!c},{join:function(t){return i.call(s(this),void 0===t?",":t)}})},a9e3:function(t,e,r){"use strict";var a=r("83ab"),o=r("da84"),s=r("94ca"),l=r("6eeb"),i=r("5135"),n=r("c6b6"),c=r("7156"),u=r("c04e"),d=r("d039"),p=r("7c73"),f=r("241c").f,m=r("06cf").f,b=r("9bf2").f,v=r("58a8").trim,h="Number",g=o[h],k=g.prototype,S=n(p(k))==h,w=function(t){var e,r,a,o,s,l,i,n,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+c}for(s=c.slice(2),l=s.length,i=0;i<l;i++)if(n=s.charCodeAt(i),n<48||n>o)return NaN;return parseInt(s,a)}return+c};if(s(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(S?d((function(){k.valueOf.call(r)})):n(r)!=h)?c(new g(w(e)),r,x):w(e)},_=a?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;_.length>L;L++)i(g,y=_[L])&&!i(x,y)&&b(x,y,m(g,y));x.prototype=k,k.constructor=x,l(o,h,x)}},cc8e:function(t,e,r){},ea95:function(t,e,r){"use strict";r("cc8e")},eb4d:function(t,e,r){},ec9c:function(t,e,r){"use strict";r("eb4d")}}]);