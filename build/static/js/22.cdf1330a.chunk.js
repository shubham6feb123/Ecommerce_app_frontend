(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{592:function(e,r,t){},702:function(e,r,t){"use strict";t.r(r);var s=t(14),a=t(19),o=t(7),n=t(0),c=t(76),i=(t(592),t(60)),l=t(30),b=t(70),p=t(243),d=t(245),m=t(126),u=t(237),j=t(250),h=t(97),x=t(6),f=Object(x.jsx)(b.a,{style:{fontSize:24},spin:!0});r.default=function(){var e=Object(n.useState)(!1),r=Object(o.a)(e,2),t=r[0],b=r[1],g=Object(l.g)(),w=function(){var e=Object(a.a)(Object(s.a)().mark((function e(r){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.password,a=r.confirmpassword,e.prev=1,t&&a){e.next=7;break}return i.b.error("password daal madarchod hosiyaari mat kr",{position:"bottom-right"}),e.abrupt("return");case 7:if(t===a){e.next=12;break}return i.b.error("Password not matching",{position:"bottom-right"}),e.abrupt("return");case 12:if(!(t.length<6)){e.next=16;break}i.b.error("Password should be 6 character long",{position:"bottom-right"}),e.next=22;break;case 16:return b(!0),e.next=19,c.a.currentUser.updatePassword(t);case 19:b(!1),i.b.success("Password Updated",{position:"bottom-right"}),g.push("/");case 22:e.next=29;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),b(!1),i.b.error(e.t0.message,{position:"bottom-right"});case 29:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(r){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"password",children:[Object(x.jsx)("div",{className:"logo__wrapper",children:Object(x.jsx)("img",{src:h.a,alt:"logo"})}),Object(x.jsxs)(p.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:w,style:{textAlign:"center"},children:[Object(x.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please enter your Password"}],children:Object(x.jsx)(d.a,{prefix:Object(x.jsx)(j.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(x.jsx)(p.a.Item,{name:"confirmpassword",rules:[{required:!0,message:"Please enter your Password"}],children:Object(x.jsx)(d.a,{prefix:Object(x.jsx)(j.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Confirm Password"})}),Object(x.jsx)(p.a.Item,{children:Object(x.jsx)(m.a,{size:"large",type:"primary",htmlType:"submit",className:"login-form-button",style:{width:"100%"},children:t?Object(x.jsx)(u.a,{indicator:f}):"Reset"})})]})]})})}}}]);
//# sourceMappingURL=22.cdf1330a.chunk.js.map