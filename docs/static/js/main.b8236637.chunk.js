(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),i=n.n(r),a=n(2),s=n(9),u=n(0),o=function(e){var t=e.setcategories,n=e.categories,r=Object(c.useState)(""),i=Object(a.a)(r,2),o=i[0],j=i[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==o&&(t([o].concat(Object(s.a)(n))),j(""))},children:Object(u.jsx)("input",{type:"text",value:o,onChange:function(e){j(e.target.value)}})})},j=n(6),l=n.n(j),d=n(8),m=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,r,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=20&api_key=dChCeBsVt77qmQCwdSm55Gi9crmDDJOT"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,i=r.data,a=i.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.img;return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("img",{src:t.url,alt:"imagen"}),Object(u.jsx)("p",{children:t.title})]})},p=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({images:[],loading:!0}),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){m(e).then((function(e){setTimeout((function(){i({images:e,loading:!1})}),1e3)}))}),[e]),r}(t),r=n.images,i=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),i&&"loading...",Object(u.jsx)("div",{className:"contenedor-items",children:r.map((function(e){return Object(u.jsx)(b,{img:e},e.id)}))})]})},f=function(){var e=Object(c.useState)(["One Punch"]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{className:"titulo",children:["Buscador De Gifs",Object(u.jsx)("span",{children:"Nicolas Aparicio"})," "]}),Object(u.jsx)(o,{setcategories:r,categories:n}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})};n(16);i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b8236637.chunk.js.map