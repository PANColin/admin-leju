(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c95a097"],{"5f44":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticStyle:{width:"95%",margin:"20px auto"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{fixed:"left",align:"center",type:"index",label:"序号"}}),a("el-table-column",{attrs:{align:"center",prop:"username",label:"用户名",width:"160"}}),a("el-table-column",{attrs:{align:"center",label:"头像",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.icon,width:"100",height:"110"},on:{error:function(a){return t.handleError(e.row)}}})]}}])}),a("el-table-column",{attrs:{align:"center",prop:"nickname",label:"昵称",width:"100"}}),a("el-table-column",{attrs:{align:"center",prop:"realname",label:"真实姓名",width:"100"}}),a("el-table-column",{attrs:{align:"center",prop:"sex",label:"性别",width:"60"}}),a("el-table-column",{attrs:{align:"center",prop:"phone",label:"电话",width:"160"}}),a("el-table-column",{attrs:{align:"center",prop:"email",label:"邮箱",width:"160"}}),a("el-table-column",{attrs:{align:"center",prop:"birthday",label:"生日",width:"160"}}),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"注册日期",width:"180"}})],1),a("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":t.pageInfo.start,"page-sizes":[5,10,15,20],"page-size":t.pageInfo.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.SizeChange,"current-change":t.CurrentChange}})],1),a("copyright")],1)},r=[],i=a("1da1"),l=(a("159b"),a("96cf"),a("fab2")),o={name:"Account",components:{},data:function(){return{loading:!1,list:[],pageInfo:{start:1,limit:10},total:0}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.init();case 1:case"end":return e.stop()}}),e)})))()},methods:{handleError:function(t){t.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg"},init:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(l["a"])(t.pageInfo.start,t.pageInfo.limit);case 3:if(a=e.sent,a.success){e.next=6;break}return e.abrupt("return",t.$message.error(a.message));case 6:t.loading=!1,t.total=a.data.total,t.list=a.data.rows,a.data.rows.forEach((function(t){t.sex=t.sex?"女":"男",t.icon||(t.icon="https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg")}));case 10:case"end":return e.stop()}}),e)})))()},SizeChange:function(t){this.pageInfo.limit=t,this.init()},CurrentChange:function(t){this.pageInfo.start=t,this.init()}}},c=o,s=(a("fbcb"),a("2877")),u=Object(s["a"])(c,n,r,!1,null,"25e96e36",null);e["default"]=u.exports},"6d5a":function(t,e,a){},fbcb:function(t,e,a){"use strict";a("6d5a")}}]);