(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[17],{287:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d}));var n=a(14),r=a(19),i=a(43),c=a.n(i),o=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/coupon/create"),t,{headers:{email:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),s=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.delete("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/coupon/remove/").concat(t),{headers:{email:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/coupon/list"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/coupon/verify"),{verify:t},{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/user/order"),{stripeResponse:t},{headers:{authtoken:a,message:"order create kr rhe h"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},357:function(e,t,a){"use strict";var n=a(14),r=a(19),i=a(43),c=a.n(i),o=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/user/cart/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=o},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(14),r=a(19),i=a(43),c=a.n(i),o=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/payment/user/verify"),{user:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},686:function(e,t,a){},722:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(19),i=a(3),c=a(7),o=a(0),s=a(4),l=a(43),u=a.n(l),d=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/user/delivery/details"),{details:t},{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=d,b=a(121),v=a(6);var m=function(e){var t=e.details,a=e.setDetails,c=e.authtoken,o=function(e){a(Object(i.a)(Object(i.a)({},t),{},Object(s.a)({},e.target.name,e.target.value)))},l=function(){var e=Object(r.a)(Object(n.a)().mark((function e(a){var r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),e.next=4,p(t,c);case 4:r=e.sent,console.log("save details",r),b.b.success({content:"Delivery address saved!",style:{position:"fixed",bottom:"10px",left:"25px",right:"20px"}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("failed to save details",e.t0),b.b.error({content:"Failed to save details!",style:{position:"fixed",bottom:"10px",left:"25px",right:"20px"}});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{style:{background:"#ffffff",paddingBottom:"12px",width:"100%"},className:"px-2",onSubmit:l,children:[Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsxs)("div",{className:"form-group col-md-6 py-2",children:[Object(v.jsx)("label",{htmlFor:"inputName",children:"Name"}),Object(v.jsx)("input",{name:"name",type:"text",className:"form-control",id:"inputName",placeholder:"Name",value:null===t||void 0===t?void 0:t.name,onChange:o})]}),Object(v.jsxs)("div",{className:"form-group col-md-6 py-2",children:[Object(v.jsx)("label",{htmlFor:"inputMobile",children:"Mobile Number"}),Object(v.jsx)("input",{name:"mobileNumber",type:"number",className:"form-control",id:"inputMobile",placeholder:"10-digit mobile number",value:null===t||void 0===t?void 0:t.mobileNumber,onChange:o})]})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsxs)("div",{className:"form-group col-md-6 py-2",children:[Object(v.jsx)("label",{htmlFor:"inputPincode",children:"Pincode"}),Object(v.jsx)("input",{name:"pincode",type:"number",className:"form-control",id:"inputPincode",placeholder:"Pincode",value:null===t||void 0===t?void 0:t.pincode,onChange:o})]}),Object(v.jsxs)("div",{className:"form-group col-md-6 py-2",children:[Object(v.jsx)("label",{htmlFor:"inputCity",children:"City"}),Object(v.jsx)("input",{name:"city",type:"text",className:"form-control",id:"inputCity",placeholder:"City",value:null===t||void 0===t?void 0:t.city,onChange:o})]})]}),Object(v.jsxs)("div",{className:"form-group py-2",children:[Object(v.jsx)("label",{htmlFor:"inputAddress",children:"Address"}),Object(v.jsx)("input",{name:"address",type:"text",className:"form-control",id:"inputAddress",placeholder:"1234 Main St",value:null===t||void 0===t?void 0:t.address,onChange:o})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsxs)("div",{className:"form-group col-md-6 py-2",children:[Object(v.jsx)("label",{htmlFor:"inputState",children:"State"}),Object(v.jsx)("select",{id:"inputState",className:"form-control",value:null===t||void 0===t?void 0:t.state,name:"state",onChange:o,children:[{abbreviation:"AN",name:"Andaman and Nicobar Islands"},{abbreviation:"AP",name:"Andhra Pradesh"},{abbreviation:"AR",name:"Arunachal Pradesh"},{abbreviation:"AS",name:"Assam"},{abbreviation:"BR",name:"Bihar"},{abbreviation:"CG",name:"Chandigarh"},{abbreviation:"CH",name:"Chhattisgarh"},{abbreviation:"DH",name:"Dadra and Nagar Haveli"},{abbreviation:"DD",name:"Daman and Diu"},{abbreviation:"DL",name:"Delhi"},{abbreviation:"GA",name:"Goa"},{abbreviation:"GJ",name:"Gujarat"},{abbreviation:"HR",name:"Haryana"},{abbreviation:"HP",name:"Himachal Pradesh"},{abbreviation:"JK",name:"Jammu and Kashmir"},{abbreviation:"JH",name:"Jharkhand"},{abbreviation:"KA",name:"Karnataka"},{abbreviation:"KL",name:"Kerala"},{abbreviation:"LD",name:"Lakshadweep"},{abbreviation:"MP",name:"Madhya Pradesh"},{abbreviation:"MH",name:"Maharashtra"},{abbreviation:"MN",name:"Manipur"},{abbreviation:"ML",name:"Meghalaya"},{abbreviation:"MZ",name:"Mizoram"},{abbreviation:"NL",name:"Nagaland"},{abbreviation:"OR",name:"Odisha"},{abbreviation:"PY",name:"Puducherry"},{abbreviation:"PB",name:"Punjab"},{abbreviation:"RJ",name:"Rajasthan"},{abbreviation:"SK",name:"Sikkim"},{abbreviation:"TN",name:"Tamil Nadu"},{abbreviation:"TS",name:"Telangana"},{abbreviation:"TR",name:"Tripura"},{abbreviation:"UP",name:"Uttar Pradesh"},{abbreviation:"UK",name:"Uttarakhand"},{abbreviation:"WB",name:"West Bengal"}].map((function(e,t){return Object(v.jsx)("option",{defaultValue:e.abbreviation,children:e.name},t)}))})]}),Object(v.jsxs)("div",{className:"form-group col-md-6 py-2",children:[Object(v.jsx)("label",{htmlFor:"inputZip",children:"Zip"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"inputZip",value:null===t||void 0===t?void 0:t.zip,name:"zip",onChange:o})]})]}),Object(v.jsx)("button",{style:{background:"#f46326",color:"#ffffff",padding:"8px 28px"},type:"submit",className:"btn bolt",children:"Delivery here"})]})},j=a(357),h=a(34),f=a(30),O=a(114),x=a.n(O),y=a(237),_=a(70),k=(a(686),a(127)),g=a(287),N=a(358),w=a(75),P=Object(v.jsx)(_.a,{});t.default=function(){var e,t=Object(o.useState)({name:"",mobileNumber:"",pincode:"",city:"",address:"",state:"",zip:""}),a=Object(c.a)(t,2),s=a[0],l=a[1],u=Object(o.useState)(!1),d=Object(c.a)(u,2),p=d[0],b=d[1],O=Object(o.useState)(""),_=Object(c.a)(O,2),S=_[0],C=_[1],D=Object(o.useState)(""),A=Object(c.a)(D,2),z=A[0],M=A[1],H=Object(o.useState)(!1),T=Object(c.a)(H,2),F=T[0],J=T[1],K=Object(o.useState)(!1),L=Object(c.a)(K,2),R=L[0],B=L[1],U=Object(o.useState)(0),G=Object(c.a)(U,2),E=G[0],W=G[1],Z=Object(h.c)((function(e){return Object(i.a)({},e)})).user,I=Object(o.useState)(null),V=Object(c.a)(I,2),Y=V[0],q=V[1],Q=Object(h.b)(),X=Object(f.g)();Object(o.useEffect)((function(){Z&&ee(),$()}),[Z,E]);var $=function(){var e=Object(r.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)(null===Z||void 0===Z?void 0:Z.email);case 3:"Your cart is empty"===(t=e.sent).data?X.push("/"):q(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),X.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(r.a)(Object(n.a)().mark((function e(){var t,a,r,i,c,o,s,u,d,p,b,v,m;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.b)(null===Z||void 0===Z?void 0:Z.email);case 2:null!==(m=e.sent)&&void 0!==m&&m.data&&l({name:null===m||void 0===m?void 0:m.data.name,mobileNumber:null===m||void 0===m||null===(t=m.data)||void 0===t||null===(a=t.details)||void 0===a?void 0:a.mobileNumber,pincode:null===m||void 0===m||null===(r=m.data)||void 0===r||null===(i=r.details)||void 0===i?void 0:i.pincode,city:null===m||void 0===m||null===(c=m.data)||void 0===c||null===(o=c.details)||void 0===o?void 0:o.city,address:null===m||void 0===m||null===(s=m.data)||void 0===s||null===(u=s.details)||void 0===u?void 0:u.address,state:null===m||void 0===m||null===(d=m.data)||void 0===d||null===(p=d.details)||void 0===p?void 0:p.state,zip:null===m||void 0===m||null===(b=m.data)||void 0===b||null===(v=b.details)||void 0===v?void 0:v.zip});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){var a,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!S||null===Z||void 0===Z||!Z.token){e.next=10;break}return J(!0),e.next=5,Object(g.e)(S,null===Z||void 0===Z?void 0:Z.token);case 5:r=e.sent,W(Number(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.totalAfterDiscount)),J(!1),M("Hurrey coupon applied !"),Q({type:"COUPON_APPLIED",payload:!0});case 10:e.next=18;break;case 12:e.prev=12,e.t0=e.catch(0),M("code invalid!"),J(!1),t.target.previousSibling.style.color="red",Q({type:"COUPON_APPLIED",payload:!1});case 18:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(Object(n.a)().mark((function e(){var t,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(N.a)(null===Z||void 0===Z?void 0:Z._id);case 3:a=e.sent,console.log("verified",a),(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.status)&&X.push("/payment/".concat(null===Z||void 0===Z?void 0:Z._id)),B(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),B(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return null!==Y&&void 0!==Y&&Y.products?Object(v.jsxs)("div",{className:"checkout",children:[Object(v.jsxs)("div",{className:"checkout__details__container",children:[Object(v.jsxs)("div",{className:"checkout__delivery__address",children:[Object(v.jsx)("p",{className:"heading",children:"Delivery Details"}),Object(v.jsx)(m,{details:s,setDetails:l,authtoken:null===Z||void 0===Z?void 0:Z.token})]}),Object(v.jsxs)("div",{className:"checkout__coupon__container",children:[Object(v.jsx)("div",{className:"apply__coupon__heading",onClick:function(e){b(!p),e.target.nextSibling.style.display="block"},children:"Apply Coupon"}),Object(v.jsxs)("div",{className:"apply__coupon__container",style:p?{display:"block"}:{display:"none"},children:[Object(v.jsx)("input",{type:"text",placeholder:"Enter Coupon",value:S,onChange:function(e){C(e.target.value),e.target.style.color="inherit",M("")}}),Object(v.jsx)("button",{onClick:te,children:F?"Verifying...":"Apply"}),"code invalid!"===z&&Object(v.jsx)("div",{children:Object(v.jsx)("small",{style:{color:"red",letterSpacing:"1px",fontWeight:"bold"},children:"code invalid !"})}),"Hurrey coupon applied !"===z&&Object(v.jsx)("div",{children:Object(v.jsx)("small",{style:{color:"#2774f0",letterSpacing:"1px",fontWeight:"bold"},children:"Hurrey coupon applied !"})})]})]})]}),Object(v.jsxs)("div",{className:"checkout__order__summary cart__fill__price__details__container",children:[Object(v.jsx)("div",{style:{textTransform:"uppercase",letterSpacing:"1px"},className:"cart__fill__price__details__heading",children:"Order Summary"}),Object(v.jsxs)("div",{className:"cart__fill__price__details__calculation",children:[null===Y||void 0===Y||null===(e=Y.products)||void 0===e?void 0:e.map((function(e,t){return Object(v.jsxs)("div",{className:"cart__fill__price__details",children:[Object(v.jsxs)("div",{children:[null===e||void 0===e?void 0:e.product.title.slice(0,20)," (",e.color,") x"," ",null===e||void 0===e?void 0:e.count]})," ",Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{value:(null===e||void 0===e?void 0:e.product.price)*(null===e||void 0===e?void 0:e.count),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"})})]},null===e||void 0===e?void 0:e._id)})),Object(v.jsxs)("div",{className:"cart__fill__price__details__total",children:[Object(v.jsx)("div",{children:"Total Payable"}),Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{value:null!==Y&&void 0!==Y&&Y.totalAfterDiscount?Y.totalAfterDiscount:null===Y||void 0===Y?void 0:Y.cartTotal,displayType:"text",thousandSeparator:!0,prefix:"\u20b9"})})]})]})]}),Object(v.jsx)("div",{className:"proceed__to__checkout",children:Object(v.jsx)("button",{disabled:!!R,onClick:function(){B(!0),s.address&&s.city&&s.mobileNumber&&s.name&&s.pincode&&s.state&&s.zip&&ae()},children:R?Object(v.jsx)(y.a,{size:"large",indicator:P,tip:"Placeing order"}):"Place order"})})]}):Object(v.jsx)(w.a,{})}}}]);
//# sourceMappingURL=17.8cc80de5.chunk.js.map