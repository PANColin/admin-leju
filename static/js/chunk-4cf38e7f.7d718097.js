(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cf38e7f"],{"3a65":function(t,a,s){"use strict";s("5f87d")},"5f87d":function(t,a,s){},a9e3:function(t,a,s){"use strict";var e=s("83ab"),i=s("da84"),c=s("94ca"),l=s("6eeb"),r=s("5135"),n=s("c6b6"),o=s("7156"),v=s("c04e"),u=s("d039"),d=s("7c73"),f=s("241c").f,p=s("06cf").f,b=s("9bf2").f,C=s("58a8").trim,_="Number",h=i[_],m=h.prototype,w=n(d(m))==_,g=function(t){var a,s,e,i,c,l,r,n,o=v(t,!1);if("string"==typeof o&&o.length>2)if(o=C(o),a=o.charCodeAt(0),43===a||45===a){if(s=o.charCodeAt(2),88===s||120===s)return NaN}else if(48===a){switch(o.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+o}for(c=o.slice(2),l=c.length,r=0;r<l;r++)if(n=c.charCodeAt(r),n<48||n>i)return NaN;return parseInt(c,e)}return+o};if(c(_,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,I=function(t){var a=arguments.length<1?0:t,s=this;return s instanceof I&&(w?u((function(){m.valueOf.call(s)})):n(s)!=_)?o(new h(g(a)),s,I):g(a)},V=e?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;V.length>k;k++)r(h,N=V[k])&&!r(I,N)&&b(I,N,p(h,N));I.prototype=m,m.constructor=I,l(i,_,I)}},b989:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"wrapper",class:t.isLowTab?"active":""},[s("el-tabs",{attrs:{stretch:"","tab-position":"left"},on:{"tab-click":t.handleClick}},[s("el-tab-pane",{attrs:{label:"安全设置"}},[s("h2",[t._v("安全设置")]),s("div",[s("div",{staticClass:"row1 item"},[s("div",{staticClass:"left"},[s("p",[t._v("账号密码")]),s("p",{staticClass:"btm"},[t._v("当前密码强度: 强")])]),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"text"}},[t._v("编辑")])],1)]),s("div",{staticClass:"row2 item"},[s("div",{staticClass:"left"},[s("p",[t._v("密保手机")]),s("p",{staticClass:"btm"},[t._v("已绑定手机：185****0152")])]),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"text"}},[t._v("编辑")])],1)]),s("div",{staticClass:"row3 item"},[s("div",{staticClass:"left"},[s("p",[t._v("密保问题")]),s("p",{staticClass:"btm"},[t._v("未设置密保问题，密保问题可有效保护账户安全")])]),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"text"}},[t._v("编辑")])],1)]),s("div",{staticClass:"row4 item"},[s("div",{staticClass:"left"},[s("p",[t._v("备用邮箱")]),s("p",{staticClass:"btm"},[t._v("已绑定邮箱：245***381@qq.com")])]),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"text"}},[t._v("编辑")])],1)]),s("div",{staticClass:"row5 item"},[s("div",{staticClass:"left"},[s("p",[t._v("MFA 设备")]),s("p",{staticClass:"btm"},[t._v("未绑定 MFA 设备，绑定后，可以进行二次确认")])]),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"text"}},[t._v("编辑")])],1)])])]),s("el-tab-pane",{attrs:{label:"新消息通知"}},[s("h2",[t._v("新消息通知")]),s("div",{staticClass:"row1 item"},[s("div",{staticClass:"left"},[s("p",[t._v("账号密码")]),s("p",{staticClass:"btm"},[t._v("其他用户的消息将以站内信的形式通知")])]),s("div",{staticClass:"right"},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999"},model:{value:t.accountValue,callback:function(a){t.accountValue=a},expression:"accountValue"}})],1)]),s("div",{staticClass:"row2 item"},[s("div",{staticClass:"left"},[s("p",[t._v("系统消息")]),s("p",{staticClass:"btm"},[t._v("系统消息将以站内信的形式通知")])]),s("div",{staticClass:"right"},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999"},model:{value:t.messageValue,callback:function(a){t.messageValue=a},expression:"messageValue"}})],1)]),s("div",{staticClass:"row3 item"},[s("div",{staticClass:"left"},[s("p",[t._v("待办任务")]),s("p",{staticClass:"btm"},[t._v("待办任务将以站内信的形式通知")])]),s("div",{staticClass:"right"},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999"},model:{value:t.taskValue,callback:function(a){t.taskValue=a},expression:"taskValue"}})],1)])])],1)],1),s("copyright")],1)},i=[],c=(s("a9e3"),{name:"Set",components:{},data:function(){return{isLowTab:!1,accountValue:!1,messageValue:!1,taskValue:!1}},methods:{handleClick:function(t,a){this.isLowTab=Boolean(Number(t.index))}}}),l=c,r=(s("3a65"),s("2877")),n=Object(r["a"])(l,e,i,!1,null,"a3bbc08c",null);a["default"]=n.exports}}]);