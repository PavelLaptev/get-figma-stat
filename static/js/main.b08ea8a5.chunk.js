(this["webpackJsonpfigma-charts"]=this["webpackJsonpfigma-charts"]||[]).push([[0],{111:function(e,t,a){e.exports={wrap:"styles_wrap__2_wVy",chart:"styles_chart__30Ibu"}},114:function(e,t,a){e.exports={wrap:"styles_wrap__3Bh0q",title:"styles_title__1DYic"}},169:function(e,t,a){e.exports={wrap:"styles_wrap__1AutR"}},18:function(e,t,a){e.exports={wrap:"styles_wrap__yi_w6",total:"styles_total__3dKgy",commonList:"styles_commonList__3_Lun",showMore:"styles_showMore__2ApsH"}},180:function(e,t,a){},20:function(e,t,a){e.exports={wrap:"styles_wrap__2N57w",pluginThumb:"styles_pluginThumb__2Zjga",content:"styles_content__3WiOH",title:"styles_title__1u3jB",textitem:"styles_textitem__1487S",counters:"styles_counters__zujYh",counter:"styles_counter__2IHYS",counterIcon:"styles_counterIcon__3m2SF"}},319:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(65),l=a.n(c),i=(a(180),a(56)),o=a.n(i),r=a(49),u=a(152),m=a(12),j=a(321),b=a(322),d=a(326),p=a(167),h=a(168),f=a(77),x=a(171),O=a(111),_=a.n(O),g=a(2),w=function(e){return Object(g.jsx)("section",{className:_.a.wrap,children:Object(g.jsx)(j.a,{width:"100%",height:240,children:Object(g.jsxs)(b.a,{data:e.data,className:_.a.chart,children:[Object(g.jsx)(d.a,{}),Object(g.jsx)(p.a,{dataKey:"date",tick:{fontSize:12,fontFamily:"Inter"}}),Object(g.jsx)(h.a,{mirror:!0,tick:{fontSize:12,fontFamily:"Inter"}}),Object(g.jsx)(f.a,{itemStyle:{padding:"4px",fontWeight:600,fontSize:16},labelStyle:{fontSize:16,fontWeight:700,padding:"4px"}}),Object(g.jsx)(x.a,{dataKey:"views",fill:"var(--chart-1-clr)",stroke:"var(--chart-1-clr)",dot:!1,strokeWidth:2}),Object(g.jsx)(x.a,{dataKey:"plugins"===e.category?"installs":"duplicates",fill:"var(--chart-2-clr)",stroke:"var(--chart-2-clr)",dot:!1,strokeWidth:2}),Object(g.jsx)(x.a,{dataKey:"likes",fill:"var(--chart-3-clr)",stroke:"var(--chart-3-clr)",dot:!1,strokeWidth:2}),Object(g.jsx)(x.a,{dataKey:"comments",fill:"var(--chart-4-clr)",stroke:"var(--chart-4-clr)",dot:!1,strokeWidth:2})]})})})};w.defaultProps={lineChart:!1};var v=w,y=a(75),k=a.n(y),N=function(e){return Object(g.jsxs)("button",{disabled:e.disabled,className:"".concat(k.a.wrap," ").concat(e.className," ").concat(k.a["".concat(e.mode)]),onClick:function(){return e.onClick(e.label)},children:[Object(g.jsx)("span",{className:k.a.label,children:e.label}),""!==e.sublabel?Object(g.jsx)("span",{className:k.a.sublabel,children:e.sublabel}):null]})};N.defaultProps={label:"label",sublabel:"",className:"",mode:"primary",disabled:!1};var C=N,L=a(61),S=a.n(L),H=function(e){var t=s.useState(e.value),a=Object(m.a)(t,2),n=a[0],c=a[1],l=function(t){var a=t.toLowerCase().replace(/\s+/g,"_");c(a),e.onClick(a)};return Object(g.jsxs)("div",{className:"".concat(S.a.wrap," ").concat(e.className),children:[Object(g.jsx)(C,{label:"Plugins",onClick:l,mode:"plugins"!==n?"ghost":"secondary",className:"".concat(S.a.button," ").concat("plugins"===n?S.a.inactive:"")}),Object(g.jsx)(C,{label:"Hub Files",onClick:l,mode:"plugins"!==n?"secondary":"ghost",className:"".concat(S.a.button," ").concat("plugins"!==n?S.a.inactive:"")})]})};H.defaultProps={className:""};var M=H,V=a(33),I=a.n(V),P=a(169),Z=a.n(P),A={arrow:"M12.9142 1.30006L23.4001 12L12.9142 22.6999L11.4858 21.3001L19.6199 13H1V11H19.6199L11.4858 2.69992L12.9142 1.30006Z",views:"M3 12C7.09091 2.66666 16.9091 2.66667 21 12C16.9091 21.3333 7.09091 21.3333 3 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",installs:"M20 4H4V20H20V4ZM11 8V11.8127H7.30164L12 16.3972L16.6984 11.8127H13V8H11Z",likes:"M4.34285 5.40442C2.55239 7.27699 2.55238 10.313 4.34284 12.1856L12 20L19.6572 12.1856C21.4476 10.313 21.4476 7.27699 19.6572 5.40442C17.8667 3.53186 14.9638 3.53186 13.1733 5.40442L12 6.63155L10.8267 5.40442C9.03622 3.53186 6.13331 3.53186 4.34285 5.40442Z",comments:"M4 4H20V20L14.7619 17.1429H4V4ZM17 7H7V9H17V7ZM12 11H7V13H12V11Z",duplicates:"M16 4H4V16H8V20H20V8H16V4ZM16 10V16H10V18H18V10H16Z",gh:"M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z",user:"M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z M5 14H19V20H5V14Z",enter:"M20 1.5V17H7V13L0 18L7 23V19H22V1.5H20Z",cross:"M10.5859 12L3.29297 4.70711L4.70718 3.29289L12.0001 10.5858L19.293 3.29289L20.7072 4.70711L13.4143 12L20.7072 19.2929L19.293 20.7071L12.0001 13.4142L4.70718 20.7071L3.29297 19.2929L10.5859 12Z"},T=function(e){return Object(g.jsx)("i",{className:"".concat(Z.a.wrap," ").concat(e.className),children:Object(g.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:e.name?A[e.name]:null})})})};T.defaultProps={name:"arrow",className:""};var B=T,W=function(e){var t=s.useState(0),a=Object(m.a)(t,2),n=a[0],c=a[1],l=s.useState(e.value||""),i=Object(m.a)(l,2),o=i[0],r=i[1];return Object(g.jsxs)("section",{className:I.a.wrap,children:[Object(g.jsxs)("form",{className:"".concat(I.a.form," ").concat(e.className," ").concat(e.isError?I.a.errorInput:""),children:[Object(g.jsx)("input",{type:"text",value:o,onChange:function(t){r(t.target.value),e.onChange(o)},placeholder:e.placeholder,className:I.a.input}),Object(g.jsx)("button",{className:"".concat(I.a.button," ").concat(I.a.cross," ").concat(""!==o?"":I.a.hidden),disabled:""===o,onClick:function(t){t.preventDefault(),e.onClear(),r("")},children:Object(g.jsx)(B,{name:"cross"})}),Object(g.jsx)("button",{className:"".concat(I.a.button),disabled:""===o,onClick:function(t){t.preventDefault(),e.isError&&(console.log("error"),c(n+1)),e.onSubmit(o)},children:Object(g.jsx)(B,{name:"enter"})})]}),e.isError?Object(g.jsx)("div",{className:I.a.errorMessage,children:"Oops! Can't find it. Check the ID or the category."}):null]},n)};W.defaultProps={placeholder:"Plugin ID",className:""};var D=W,F=a(20),K=a.n(F),R=function(e){return Object(g.jsxs)("section",{className:K.a.wrap,children:["plugins"===e.category?Object(g.jsx)("img",{src:e.info.iconUrl,alt:"preview",className:K.a.pluginThumb}):null,Object(g.jsxs)("div",{className:K.a.content,children:[Object(g.jsx)("a",{href:"https://www.figma.com/community/".concat("plugins"===e.category?"plugin":"file","/").concat(e.info.id),target:"_blank",rel:"noreferrer",className:"".concat(K.a.title," ").concat(K.a.link),children:e.info.name}),Object(g.jsxs)("div",{className:K.a.textitem,children:[Object(g.jsx)("span",{children:"by "}),Object(g.jsx)("a",{href:"https://www.figma.com/@".concat(e.info.publisherHandle),target:"_blank",rel:"noreferrer",className:"".concat(K.a.link),children:e.info.publisherName})]}),Object(g.jsxs)("div",{className:K.a.counters,children:[Object(g.jsxs)("div",{className:K.a.counter,children:[Object(g.jsx)(B,{className:K.a.counterIcon,name:"views"}),Object(g.jsx)("span",{children:e.counters.viewCount.toLocaleString()})]}),"plugins"===e.category?Object(g.jsxs)("div",{className:K.a.counter,children:[Object(g.jsx)(B,{className:K.a.counterIcon,name:"installs"}),Object(g.jsx)("span",{children:e.counters.installCount.toLocaleString()})]}):Object(g.jsxs)("div",{className:K.a.counter,children:[Object(g.jsx)(B,{className:K.a.counterIcon,name:"duplicates"}),Object(g.jsx)("span",{children:e.counters.duplicateCount.toLocaleString()})]}),Object(g.jsxs)("div",{className:K.a.counter,children:[Object(g.jsx)(B,{className:K.a.counterIcon,name:"likes"}),Object(g.jsx)("span",{children:e.counters.likeCount.toLocaleString()})]}),Object(g.jsxs)("div",{className:K.a.counter,children:[Object(g.jsx)(B,{className:K.a.counterIcon,name:"comments"}),Object(g.jsx)("span",{children:e.counters.commentCount.toLocaleString()})]})]})]})]})};R.defaultProps={className:""};var z=R,E=a(22),q=a(114),Y=a.n(q),U=function(e){return Object(g.jsxs)("section",{className:Y.a.wrap,children:[""!==e.title?Object(g.jsx)("h2",{className:Y.a.title,children:e.title}):null,e.children]})};U.defaultProps={className:"",title:""};var J=U,G=a(62),Q=a.n(G),X=function(e){return Object(g.jsxs)("div",{className:"".concat(Q.a.wrap," ").concat(e.className),children:[Object(g.jsxs)("span",{className:Q.a.label,children:[e.label,":"]}),Object(g.jsxs)("div",{className:Q.a.valueWrap,children:[Object(g.jsx)(B,{name:e.icon,className:Q.a.icon}),Object(g.jsx)("span",{className:Q.a.value,children:e.value})]})]})};X.defaultProps={label:"label",value:"value",className:""};var $=X,ee=a(34),te=a.n(ee),ae=function(e){var t,a,s,n,c;return Object(g.jsxs)("div",{className:"".concat(te.a.wrap," ").concat(e.className),children:[Object(g.jsxs)("div",{className:te.a.wrapLeft,children:[Object(g.jsxs)("span",{className:te.a.indexNum,children:[e.index,"."]}),""!==e.imgLink?Object(g.jsx)("img",{src:e.imgLink,alt:"preview",className:te.a.image}):null,Object(g.jsxs)("div",{className:te.a.leftText,children:[Object(g.jsx)("a",{className:te.a.label,href:null===(t=e.label)||void 0===t?void 0:t.link,target:"_blank",rel:"noreferrer",children:null===(a=e.label)||void 0===a?void 0:a.name}),""!==(null===(s=e.caption)||void 0===s?void 0:s.name)?Object(g.jsxs)("div",{className:te.a.caption,children:[Object(g.jsx)("span",{children:"by "}),Object(g.jsx)("a",{href:null===(n=e.caption)||void 0===n?void 0:n.link,target:"_blank",rel:"noreferrer",children:null===(c=e.caption)||void 0===c?void 0:c.name})]}):null]})]}),Object(g.jsxs)("div",{className:te.a.wrapRight,children:[Object(g.jsx)("span",{className:te.a.count,children:e.count}),Object(g.jsx)(B,{name:e.icon})]})]})};ae.defaultProps={caption:{name:"",link:"#"},label:{name:"label",link:"#"},index:0,imgLink:"",className:""};var se=ae,ne=a(18),ce=a.n(ne),le=function(e){var t=50,a=s.useState(),n=Object(m.a)(a,2),c=n[0],l=n[1],i=s.useState({installs:5,views:5,likes:5,comments:5,users:5}),o=Object(m.a)(i,2),r=o[0],u=o[1],j=s.useState(),b=Object(m.a)(j,2),d=b[0],p=b[1],h=s.useState({duplicates:5,views:5,likes:5,comments:5,users:5}),f=Object(m.a)(h,2),x=f[0],O=f[1];s.useEffect((function(){try{fetch("https://pavellaptev.github.io/figma-stat/plugins/common.json").then((function(e){return e.json()})).then((function(e){console.log(e),l(e)})),fetch("https://pavellaptev.github.io/figma-stat/hub_files/common.json").then((function(e){return e.json()})).then((function(e){console.log(e),p(e)}))}catch(e){console.error("Oops! Can't fetch plugins")}}),[]);var _=function(){return Object(g.jsx)("div",{className:ce.a.loading,children:Object(g.jsx)("div",{className:ce.a.loading__text,children:"Loading..."})})},w=function(){return c&&d?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(J,{title:"".concat(c.totalAmount.plugins.toLocaleString()," plugins"),children:Object(g.jsxs)("div",{className:ce.a.total,children:[Object(g.jsx)($,{label:"Installs",icon:"installs",value:c.totalAmount.installs.toLocaleString()}),Object(g.jsx)($,{label:"Views",icon:"views",value:c.totalAmount.views.toLocaleString()}),Object(g.jsx)($,{label:"Likes",icon:"likes",value:c.totalAmount.likes.toLocaleString()}),Object(g.jsx)($,{label:"Comments",icon:"comments",value:c.totalAmount.comments.toLocaleString()})]})}),Object(g.jsxs)(J,{title:"Top by installs",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:c.topInstalls.slice(0,r.installs).map((function(e,t){return Object(g.jsx)(se,{index:t+1,imgLink:e.icon,icon:"installs",label:{name:e.name,link:"https://www.figma.com/community/plugin/".concat(e.id)},caption:{name:e.publisherName,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.installs.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:r.installs===t,onClick:function(){return u((function(e){return Object(E.a)(Object(E.a)({},e),{},{installs:r.installs+5})}))}})]}),Object(g.jsxs)(J,{title:"Top by likes",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:c.topLikes.slice(0,r.likes).map((function(e,t){return Object(g.jsx)(se,{index:t+1,imgLink:e.icon,icon:"likes",label:{name:e.name,link:"https://www.figma.com/community/plugin/".concat(e.id)},caption:{name:e.publisherName,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.likes.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:r.likes>=t,onClick:function(){return u((function(e){return Object(E.a)(Object(E.a)({},e),{},{likes:r.likes+5})}))}})]}),Object(g.jsxs)(J,{title:"Top by comments",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:c.topComments.slice(0,r.comments).map((function(e,t){return Object(g.jsx)(se,{index:t+1,imgLink:e.icon,icon:"comments",label:{name:e.name,link:"https://www.figma.com/community/plugin/".concat(e.id)},caption:{name:e.publisherName,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.comments.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:r.comments>=t,onClick:function(){return u((function(e){return Object(E.a)(Object(E.a)({},e),{},{comments:r.comments+5})}))}})]}),Object(g.jsxs)(J,{title:"Popular plugin makers",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:c.topPopularUsers.slice(0,r.users).map((function(e,t){return Object(g.jsx)(se,{index:t+1,imgLink:e.publisherIcon,icon:"user",label:{name:e.name,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.followers.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:r.users>=t,onClick:function(){return u((function(e){return Object(E.a)(Object(E.a)({},e),{},{users:r.users+5})}))}})]})]}):Object(g.jsx)(_,{})},v=function(){return c&&d?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(J,{title:"".concat(d.totalAmount.files.toLocaleString()," files"),children:Object(g.jsxs)("div",{className:ce.a.total,children:[Object(g.jsx)($,{label:"duplicates",icon:"duplicates",value:d.totalAmount.duplicates.toLocaleString()}),Object(g.jsx)($,{label:"Views",icon:"views",value:d.totalAmount.views.toLocaleString()}),Object(g.jsx)($,{label:"Likes",icon:"likes",value:d.totalAmount.likes.toLocaleString()}),Object(g.jsx)($,{label:"Comments",icon:"comments",value:d.totalAmount.comments.toLocaleString()})]})}),Object(g.jsxs)(J,{title:"Top by duplicates",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:d.topDuplicates.slice(0,x.duplicates).map((function(e,t){return Object(g.jsx)(se,{index:t+1,icon:"duplicates",label:{name:e.name,link:"https://www.figma.com/community/file/".concat(e.id)},caption:{name:e.publisherName,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.duplicates.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:x.duplicates>=t,onClick:function(){return O((function(e){return Object(E.a)(Object(E.a)({},e),{},{duplicates:x.duplicates+5})}))}})]}),Object(g.jsxs)(J,{title:"Top by likes",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:d.topLikes.slice(0,x.likes).map((function(e,t){return Object(g.jsx)(se,{index:t+1,icon:"likes",label:{name:e.name,link:"https://www.figma.com/community/file/".concat(e.id)},caption:{name:e.publisherName,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.likes.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:x.likes>=t,onClick:function(){return O((function(e){return Object(E.a)(Object(E.a)({},e),{},{likes:x.likes+5})}))}})]}),Object(g.jsxs)(J,{title:"Top by comments",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:d.topComments.slice(0,x.comments).map((function(e,t){return Object(g.jsx)(se,{index:t+1,icon:"comments",label:{name:e.name,link:"https://www.figma.com/community/file/".concat(e.id)},caption:{name:e.publisherName,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.comments.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:x.comments>=t,onClick:function(){return O((function(e){return Object(E.a)(Object(E.a)({},e),{},{comments:x.comments+5})}))}})]}),Object(g.jsxs)(J,{title:"Popular file makers",children:[Object(g.jsx)("div",{className:ce.a.commonList,children:d.topPopularUsers.slice(0,x.users).map((function(e,t){return Object(g.jsx)(se,{index:t+1,imgLink:e.publisherIcon,icon:"user",label:{name:e.name,link:"https://www.figma.com/@".concat(e.publisherHandle)},count:e.followers.toLocaleString()},t)}))}),Object(g.jsx)(C,{label:"Show more",mode:"primary",className:ce.a.showMore,disabled:x.users>=t,onClick:function(){return O((function(e){return Object(E.a)(Object(E.a)({},e),{},{users:x.users+5})}))}})]})]}):Object(g.jsx)(_,{})};return Object(g.jsx)("section",{className:"".concat(ce.a.wrap," ").concat(e.className),children:"plugins"===e.category?Object(g.jsx)(w,{}):Object(g.jsx)(v,{})})};le.defaultProps={className:""};var ie=le,oe=a(76),re=a.n(oe),ue=function(e){return new URLSearchParams(window.location.search).get(e)||""},me=function(e,t){var a=new URLSearchParams(window.location.search);a.set(e,t),window.history.pushState(null,"","?".concat(a.toString()))},je=function(){var e=n.a.useState(""!==ue("id")?ue("id"):""),t=Object(m.a)(e,2),a=t[0],s=t[1],c=n.a.useState(""!==ue("category")?ue("category"):"plugins"),l=Object(m.a)(c,2),i=l[0],j=l[1],b=n.a.useState(null),d=Object(m.a)(b,2),p=d[0],h=d[1],f=n.a.useState(null),x=Object(m.a)(f,2),O=x[0],_=x[1],w=n.a.useState(null),y=Object(m.a)(w,2),k=y[0],N=y[1],C=n.a.useState(!1),L=Object(m.a)(C,2),S=L[0],H=L[1],V=n.a.useState(!1),I=Object(m.a)(V,2),P=I[0],Z=I[1],A=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={info:"https://pavellaptev.github.io/figma-stat/".concat(a,"/").concat(t,"/info.json"),counters:"https://pavellaptev.github.io/figma-stat/".concat(a,"/").concat(t,"/counters.json")},e.prev=1,e.next=4,fetch(s.counters).then((function(e){return e.json()})).then((function(e){Z(!1);var t=function(){return e.map((function(t,s){var n;return e[s-1]?(n={date:t.date.split("-").reverse().join(".")},Object(r.a)(n,"plugins"===a?"installs":"duplicates","plugins"===a?t.installCount-e[s-1].installCount:t.duplicateCount-e[s-1].duplicateCount),Object(r.a)(n,"views",t.viewCount-e[s-1].viewCount),Object(r.a)(n,"likes",t.likeCount-e[s-1].likeCount),Object(r.a)(n,"comments",t.commentCount-e[s-1].commentCount),n):null})).splice(1)};h(e.slice(-1)[0]),_(t()),console.log(t())}));case 4:return e.next=6,fetch(s.info).then((function(e){return e.json()})).then((function(e){N(e)}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),Z(!0),console.error("Oops! Seems like there is no file with this ID yet");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}();return n.a.useEffect((function(){me("id",a),me("category",i),""!==ue("id")&&""!==ue("category")&&(console.log("fetching data \u2026"),A(a,i))}),[a,i,S]),Object(g.jsxs)("main",{className:"".concat(re.a.main," lightTheme"),children:[Object(g.jsx)("a",{className:re.a.ghButton,href:"https://github.com/PavelLaptev/figma-stat",rel:"noreferrer",target:"_blank",children:Object(g.jsx)(B,{name:"gh"})}),Object(g.jsxs)("section",{className:re.a.wrap,children:[Object(g.jsx)("h1",{children:"Figma Charts"}),Object(g.jsx)(M,{value:i,onClick:function(e){_(""),j(e)}}),Object(g.jsx)(D,{value:a,isError:P,placeholder:"plugins"===i?"Find by plugin ID":"Find by file ID",onSubmit:function(e){s(e),H(!S)},onChange:function(){},onClear:function(){_(""),s("")}}),O&&k?Object(g.jsxs)("section",{className:re.a.statBlock,children:[Object(g.jsx)(z,{counters:p,info:k,category:i}),Object(g.jsx)(v,{data:O,category:i})]}):Object(g.jsx)(ie,{category:i})]})]})};l.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(je,{})}),document.getElementById("root"))},33:function(e,t,a){e.exports={wrap:"styles_wrap__124Wx",form:"styles_form__2pyLC",input:"styles_input__2MZ3o",button:"styles_button__3uOo8",cross:"styles_cross__y-q8d",errorMessage:"styles_errorMessage__C0V9x",errorInput:"styles_errorInput__3jBCm",errorAnimation:"styles_errorAnimation__1j2eq",hidden:"styles_hidden__H_h7h"}},34:function(e,t,a){e.exports={wrap:"styles_wrap__1HgTC",wrapLeft:"styles_wrapLeft__3jTzh",leftText:"styles_leftText__D4eIe",wrapRight:"styles_wrapRight__XCZWI",image:"styles_image__qqce_",label:"styles_label__2nB3v",caption:"styles_caption__2nrML",count:"styles_count__l3vg-",indexNum:"styles_indexNum__1LomY"}},61:function(e,t,a){e.exports={wrap:"styles_wrap__31Bip",button:"styles_button__2C1yK",back:"styles_back__1MPGf",inactive:"styles_inactive__Cc7Nk"}},62:function(e,t,a){e.exports={wrap:"styles_wrap__1bmiT",icon:"styles_icon__1c7wN",label:"styles_label__1-YNe",valueWrap:"styles_valueWrap__2wtP2",value:"styles_value__38wXd"}},75:function(e,t,a){e.exports={wrap:"styles_wrap__JVLAe",label:"styles_label__3C0AY",sublabel:"styles_sublabel__1jx_7",primary:"styles_primary__3HQ5-",secondary:"styles_secondary__2pJ5d",ghost:"styles_ghost__31QWH"}},76:function(e,t,a){e.exports={main:"app_main__1NOZK",wrap:"app_wrap__2GHul",ghButton:"app_ghButton__1qao1",statBlock:"app_statBlock__2z9Fj"}}},[[319,1,2]]]);
//# sourceMappingURL=main.b08ea8a5.chunk.js.map