(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{285:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return j}));var n=a(14),c=a(19),r=a(43),s=a.n(r),i=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/category"),{name:a},{headers:{email:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,a,c){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/category/").concat(t),{category:c},{headers:{email:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("slug",t,"email",a),e.next=3,s.a.delete("".concat("https://ecommerce-app-backend-2zh4.onrender.com/api","/category/").concat(t),{headers:{email:a}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},683:function(e,t,a){},684:function(e,t,a){},726:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a(19),r=a(3),s=a(7),i=a(0),o=a(34),u=a(75),j=a(122),l=a(144),b=a(734),d=(a(683),a(684),a(285)),p=a(713),O=a(245),h=a(248),f=a(696),x=a(423),m=a(361),g=a(6);var _=function(e){var t=e.price,a=e.setPrice,r=e.products,o=e.setProducts,u=(e.loading,e.setLoading),l=Object(i.useState)([]),b=Object(s.a)(l,2),_=b[0],v=b[1],y=Object(i.useState)([]),k=Object(s.a)(y,2),w=k[0],N=k[1],S=Object(i.useState)(!0),C=Object(s.a)(S,2),L=C[0],I=C[1],P=Object(i.useState)(!0),z=Object(s.a)(P,2),V=z[0],F=z[1],B=Object(i.useState)(""),E=Object(s.a)(B,2),J=E[0],q=E[1],A=Object(i.useState)(!0),D=Object(s.a)(A,2),G=D[0],H=D[1];Object(i.useEffect)((function(){M(),Y()}),[]);var K=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.c)(t);case 3:if(0===(a=e.sent).data.length){e.next=9;break}o(a.data),u(!1),e.next=10;break;case 9:throw new Error("Products not found");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),u(!1);case 15:return e.prev=15,r||u(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)();case 2:t=e.sent,v(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(e){e.target.checked&&W({category:e.target.name})},R=function(e){e.target.checked&&X({brand:e.target.name})},T=function(e){e.target.checked&&U({stars:e.target.name})},U=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(t);case 2:0!==(a=e.sent).data.length&&o(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(t);case 2:0!==(a=e.sent).data.length&&o(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(t);case 2:0!==(a=e.sent).data.length&&o(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t,a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)();case 2:for(t=e.sent,a=[],c=0;c<t.data.length;c++)a.includes(t.data[c].brand)||a.push(t.data[c].brand);N(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"search__filters",children:[Object(g.jsx)("div",{className:"heading",children:Object(g.jsx)("span",{children:"Filters"})}),Object(g.jsxs)("div",{className:"price",children:[Object(g.jsx)("div",{className:"price__heading",children:Object(g.jsx)("span",{children:"Price"})}),Object(g.jsx)(p.a,{tipFormatter:function(e){return"\u20b9".concat(e)},range:!0,step:10,max:"200000",value:t,onChange:function(e){a(e)},onAfterChange:function(e){K({price:t})}})]}),Object(g.jsxs)("div",{className:"price",children:[Object(g.jsxs)("div",{className:"category__heading",onClick:function(){I(!L)},children:[Object(g.jsx)("span",{className:"category__span",children:"Category"}),L?Object(g.jsx)(x.a,{}):Object(g.jsx)(m.a,{})]}),Object(g.jsxs)("ul",{className:"category__list",style:L?{display:"block"}:{display:"none"},children:[Object(g.jsx)(O.a.Search,{placeholder:"search category",enterButton:!0,size:"small",onSearch:function(e){q(e)}}),null===_||void 0===_?void 0:_.filter((function(e){return""!==J?e.name.toLowerCase()===J:e})).map((function(e){return Object(g.jsxs)("li",{className:"category__list__Item",children:[Object(g.jsx)(h.a,{name:e._id,onChange:Q}),Object(g.jsx)("span",{style:{marginLeft:"3%"},children:e.name})]},e._id)}))]})]}),Object(g.jsxs)("div",{className:"price",children:[Object(g.jsxs)("div",{className:"brand__heading",onClick:function(){F(!V)},children:[Object(g.jsx)("span",{className:"category__span",children:"Brand"}),V?Object(g.jsx)(x.a,{}):Object(g.jsx)(m.a,{})]}),Object(g.jsxs)("ul",{className:"category__list",style:V?{display:"block"}:{display:"none"},children:[Object(g.jsx)(O.a.Search,{placeholder:"search brand",enterButton:!0,size:"small",onSearch:function(e){q(e)}}),null===w||void 0===w?void 0:w.filter((function(e){return""!==J?e.name.toLowerCase()===J:e})).map((function(e,t){return Object(g.jsxs)("li",{className:"category__list__Item",children:[Object(g.jsx)(h.a,{name:e,onChange:R}),Object(g.jsx)("span",{style:{marginLeft:"3%"},children:e})]},t)}))]})]}),Object(g.jsxs)("div",{className:"price",children:[Object(g.jsxs)("div",{className:"star__heading",onClick:function(){H(!G)},children:[Object(g.jsx)("span",{className:"category__span",children:"Star"}),G?Object(g.jsx)(x.a,{}):Object(g.jsx)(m.a,{})]}),Object(g.jsx)("ul",{className:"category__list",style:G?{display:"block"}:{display:"none"},children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("li",{className:"category__list__Item",children:[Object(g.jsx)(h.a,{name:5,onChange:T}),Object(g.jsx)("span",{style:{marginLeft:"3%"},children:Object(g.jsx)(f.a,{disabled:!0,defaultValue:5})})]}),Object(g.jsxs)("li",{className:"category__list__Item",children:[Object(g.jsx)(h.a,{name:4,onChange:T}),Object(g.jsx)("span",{style:{marginLeft:"3%"},children:Object(g.jsx)(f.a,{disabled:!0,defaultValue:4})})]}),Object(g.jsxs)("li",{className:"category__list__Item",children:[Object(g.jsx)(h.a,{name:3,onChange:T}),Object(g.jsx)("span",{style:{marginLeft:"3%"},children:Object(g.jsx)(f.a,{disabled:!0,defaultValue:3})})]}),Object(g.jsxs)("li",{className:"category__list__Item",children:[Object(g.jsx)(h.a,{name:2,onChange:T}),Object(g.jsx)("span",{style:{marginLeft:"3%"},children:Object(g.jsx)(f.a,{disabled:!0,defaultValue:2})})]}),Object(g.jsxs)("li",{className:"category__list__Item",children:[Object(g.jsx)(h.a,{name:1,onChange:T}),Object(g.jsx)("span",{style:{marginLeft:"3%"},children:Object(g.jsx)(f.a,{disabled:!0,defaultValue:1})})]})]})})]})]})},v=a(30),y=a(121);t.default=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),a=t[0],d=t[1],p=Object(i.useState)([0,6e4]),O=Object(s.a)(p,2),h=O[0],f=O[1],x=Object(i.useState)(!0),m=Object(s.a)(x,2),k=m[0],w=m[1],N=Object(i.useState)(!1),S=Object(s.a)(N,2),C=S[0],L=S[1],I=Object(o.c)((function(e){return Object(r.a)({},e)})).search,P=Object(v.g)();Object(i.useEffect)((function(){return z({query:I.text}),function(){return k}}),[I.text]);var z=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.c)(t);case 3:a=e.sent,d(a.data),w(!1),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),y.b.error({content:"Product not found!",style:{position:"fixed",bottom:"0px",right:"35%"}}),P.push("/"),w(!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"search",children:!k&&(null===a||void 0===a?void 0:a.length)>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:C?"search__filters__container hide":"search__filters__container display",children:Object(g.jsx)(_,{loading:k,setLoading:w,products:a,setProducts:d,price:h,setPrice:f})}),Object(g.jsxs)("div",{className:"show__search__container",children:[Object(g.jsxs)("p",{children:['Showing search result for "',I.text,'"']}),Object(g.jsx)("div",{className:"show__search",children:a.map((function(e){return Object(g.jsx)(l.a,{rate:e.rating,rating:!0,product:e},e._id)}))})]}),Object(g.jsx)("div",{className:"display__search__filters",children:Object(g.jsx)(b.a,{onClick:function(){L(!C)}})})]}):Object(g.jsx)(u.a,{text:"Searching..."})})}}}]);
//# sourceMappingURL=16.e367e249.chunk.js.map