(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aed75de"],{"0824":function(t,e,a){"use strict";a("28ae")},"16b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{attrs:{shadow:"always","body-style":{padding:"20px"}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("分类管理")])]),a("div",[a("h3",[t._v("乐居分类")]),a("div",{staticClass:"wrapper-card"},t._l(t.categoryList,(function(e,n){return a("el-card",{key:n,staticClass:"item",attrs:{shadow:"hover","body-style":{padding:"20px"}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(e.title))])]),a("img",{attrs:{src:e.url,alt:""}})])})),1)]),a("div",[a("h3",[t._v("全部分类")]),a("div",{staticClass:"wrapper-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.allCategoryList,"row-key":"id",border:"","tree-props":{children:"children"}}},[a("el-table-column",{attrs:{align:"left",fixed:"left",prop:"name",label:"菜单名称",width:"180"}}),a("el-table-column",{attrs:{align:"center",label:"图标",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.icon,alt:"",width:"100",height:"100"}})]}}])}),a("el-table-column",{attrs:{align:"center",prop:"name",label:"分类名称"}}),a("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序"}}),a("el-table-column",{attrs:{align:"center",label:"显示状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"info",effect:"light"}},[t._v(t._s(e.row.showStatus?"显示":"不显示"))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"导航栏展示"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"success",effect:"light"}},[t._v(t._s(e.row.navStatus?"展示":"不展示"))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"description",width:"120","show-overflow-tooltip":"",label:"描述"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160",align:"center"}}),a("el-table-column",{attrs:{prop:"modifyTime",label:"修改时间",width:"160",align:"center"}})],1)],1)])]),a("copyright")],1)},r=[],l=a("1da1"),i=(a("96cf"),a("159b"),a("d81d"),a("0c6d"));function s(t){return Object(i["a"])({url:"/lejuAdmin/category/getAllCategory"})}var c=a("2f08"),o={name:"goodsCategry",components:{copyright:c["a"]},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,n,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,s();case 3:if(a=e.sent,n=a.success,r=a.message,l=a.data,n){e.next=9;break}return e.abrupt("return",t.$message.error(r));case 9:t.loading=!1,l.items.forEach((function(t){t.category.children=t.children})),t.allCategoryList=l.items.map((function(t){return t.category}));case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1,allCategoryList:[],categoryList:[{title:"创意",url:"https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201118203732237creativity.png"},{title:"风格",url:"https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201113162204152fengge.png"},{title:"饰品",url:"https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201113162219971zhuangshipin.png"},{title:"灯具",url:"https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201118165103745dengju.png"}]}},methods:{}},u=o,d=(a("0824"),a("2877")),p=Object(d["a"])(u,n,r,!1,null,"3de12c66",null);e["default"]=p.exports},"28ae":function(t,e,a){},"2f08":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper-copyright"},[a("div",{staticClass:"row1"},[a("span",[t._v("Element")]),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"blank"}},[a("img",{attrs:{src:"https://img0.baidu.com/it/u=2078769130,3528906519&fm=26&fmt=auto&gp=0.jpg",alt:""}})]),a("span",[t._v("Element-admin")])]),a("div",{staticClass:"row2"},[a("span",[t._v("Copyright© 2017-2020 不凡学院 豫ICP备 17015347号")])])])}],l={name:"Copyright"},i=l,s=(a("97db"),a("2877")),c=Object(s["a"])(i,n,r,!1,null,"5e5f4c36",null);e["a"]=c.exports},"97db":function(t,e,a){"use strict";a("eb78")},eb78:function(t,e,a){}}]);