(this["webpackJsonpget-figma-stat"]=this["webpackJsonpget-figma-stat"]||[]).push([[0],{107:function(e,t,a){e.exports={wrap:"styles_wrap__2_wVy",chart:"styles_chart__30Ibu"}},110:function(e,t,a){e.exports={wrap:"styles_wrap__JVLAe",primary:"styles_primary__3HQ5-",secondary:"styles_secondary__2pJ5d"}},165:function(e,t,a){e.exports={wrap:"styles_wrap__1AutR"}},176:function(e,t,a){},19:function(e,t,a){e.exports={wrap:"styles_wrap__2N57w",pluginThumb:"styles_pluginThumb__2Zjga",content:"styles_content__3WiOH",title:"styles_title__1u3jB",textitem:"styles_textitem__1487S",counters:"styles_counters__zujYh",counter:"styles_counter__2IHYS",counterIcon:"styles_counterIcon__3m2SF"}},315:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(60),r=a.n(c),o=(a(176),a(52)),l=a.n(o),i=a(68),u=a(148),j=a(13),m=a(317),p=a(318),b=a(322),h=a(163),d=a(164),f=a(71),x=a(167),g=a(107),O=a.n(g),_=a(2),v=function(e){return Object(_.jsx)("section",{className:O.a.wrap,children:Object(_.jsx)(m.a,{width:"100%",height:260,children:Object(_.jsxs)(p.a,{data:e.data,className:O.a.chart,children:[Object(_.jsx)(b.a,{}),Object(_.jsx)(h.a,{dataKey:"date",tick:{fontSize:12,fontFamily:"Inter"}}),Object(_.jsx)(d.a,{mirror:!0,tick:{fontSize:12,fontFamily:"Inter"}}),Object(_.jsx)(f.a,{}),Object(_.jsx)(x.a,{dataKey:"views",fill:"var(--chart-1-clr)",stroke:"var(--chart-1-clr)",dot:!1,strokeWidth:2}),Object(_.jsx)(x.a,{dataKey:"plugins"===e.category?"installs":"duplicates",fill:"var(--chart-2-clr)",stroke:"var(--chart-2-clr)",dot:!1,strokeWidth:2}),Object(_.jsx)(x.a,{dataKey:"likes",fill:"var(--chart-3-clr)",stroke:"var(--chart-3-clr)",dot:!1,strokeWidth:2}),Object(_.jsx)(x.a,{dataKey:"comments",fill:"var(--chart-4-clr)",stroke:"var(--chart-4-clr)",dot:!1,strokeWidth:2})]})})})};v.defaultProps={lineChart:!1};var w=v,y=a(110),C=a.n(y),N=function(e){return Object(_.jsx)("button",{className:"".concat(C.a.wrap," ").concat(e.className," ").concat(C.a["".concat(e.mode)]),onClick:function(){return e.onClick(e.text)},children:Object(_.jsx)("span",{children:e.text})})};N.defaultProps={text:"Text",className:"",mode:"primary"};var k=N,S=a(57),H=a.n(S),L=function(e){var t=n.useState(e.value),a=Object(j.a)(t,2),s=a[0],c=a[1],r=function(t){var a=t.toLowerCase().replace(/\s+/g,"_");c(a),e.onClick(a)};return Object(_.jsxs)("div",{className:"".concat(H.a.wrap," ").concat(e.className),children:[Object(_.jsx)(k,{text:"Plugins",onClick:r,mode:"plugins"===s?"secondary":"primary",className:"".concat(H.a.button," ").concat("plugins"!==s?H.a.skewLeft:"")}),Object(_.jsx)(k,{text:"Hub files",onClick:r,mode:"plugins"!==s?"secondary":"primary",className:"".concat(H.a.button," ").concat("plugins"===s?H.a.skewRight:"")})]})};L.defaultProps={className:""};var V=L,I=a(40),M=a.n(I),Z=a(165),P=a.n(Z),B={arrow:"M12.9142 1.30006L23.4001 12L12.9142 22.6999L11.4858 21.3001L19.6199 13H1V11H19.6199L11.4858 2.69992L12.9142 1.30006Z",views:"M3 12C7.09091 2.66666 16.9091 2.66667 21 12C16.9091 21.3333 7.09091 21.3333 3 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",installs:"M20 4H4V20H20V4ZM11 8V11.8127H7.30164L12 16.3972L16.6984 11.8127H13V8H11Z",likes:"M4.34285 5.40442C2.55239 7.27699 2.55238 10.313 4.34284 12.1856L12 20L19.6572 12.1856C21.4476 10.313 21.4476 7.27699 19.6572 5.40442C17.8667 3.53186 14.9638 3.53186 13.1733 5.40442L12 6.63155L10.8267 5.40442C9.03622 3.53186 6.13331 3.53186 4.34285 5.40442Z",comments:"M4 4H20V20L14.7619 17.1429H4V4ZM17 7H7V9H17V7ZM12 11H7V13H12V11Z",duplicates:"M16 4H4V16H8V20H20V8H16V4ZM16 10V16H10V18H18V10H16Z",gh:"M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"},D=function(e){return Object(_.jsx)("i",{className:"".concat(P.a.wrap," ").concat(e.className),children:Object(_.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(_.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:e.name?B[e.name]:null})})})};D.defaultProps={name:"arrow",className:""};var E=D,F=function(e){var t=n.useState(0),a=Object(j.a)(t,2),s=a[0],c=a[1],r=n.useState(e.value||""),o=Object(j.a)(r,2),l=o[0],i=o[1];return Object(_.jsxs)("section",{className:M.a.wrap,children:[Object(_.jsxs)("form",{className:"".concat(M.a.form," ").concat(e.className," ").concat(e.isError?M.a.errorInput:""),children:[Object(_.jsx)("input",{type:"text",value:l,onChange:function(t){i(t.target.value),e.onChange(l)},placeholder:e.placeholder,className:M.a.input}),Object(_.jsx)("button",{className:M.a.button,disabled:""===l,onClick:function(t){t.preventDefault(),e.isError&&(console.log("error"),c(s+1)),e.onSubmit(l)},children:Object(_.jsx)(E,{className:M.a.arrow,name:"arrow"})})]}),e.isError?Object(_.jsx)("div",{className:M.a.errorMessage,children:"Oops! Can't find it. Check the ID or category."}):null]},s)};F.defaultProps={placeholder:"Plugin ID",className:""};var R=F,T=function(e){var t=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(t){return e>=t.value}));return t?(e/t.value).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t.symbol:"0"},K=a(86),W=a.n(K),A=function(e){return Object(_.jsxs)("div",{className:W.a.countItem,children:[Object(_.jsx)("span",{children:e.label}),Object(_.jsx)("p",{children:e.value})]})},z=function(e){var t=n.useState({}),a=Object(j.a)(t,2),s=a[0],c=a[1];return n.useEffect((function(){var t=!0;return fetch("https://pavellaptev.github.io/figma-stat/".concat(e.category,"/total.json")).then((function(e){return e.json()})).then((function(e){t&&(console.log(e),c(e))})),function(){t=!1}}),[e.category]),Object(_.jsx)(_.Fragment,{children:"plugins"===e.category?Object(_.jsxs)("section",{className:"".concat(W.a.wrap," ").concat(e.className),children:[Object(_.jsx)(A,{label:"Total:",value:T(s.plugins)}),Object(_.jsx)(A,{label:"Installs:",value:T(s.installCount)}),Object(_.jsx)(A,{label:"Likes:",value:T(s.likeCount)}),Object(_.jsx)(A,{label:"Views:",value:T(s.viewCount)}),Object(_.jsx)(A,{label:"Comments:",value:T(s.commentCount)})]}):Object(_.jsxs)("section",{className:"".concat(W.a.wrap," ").concat(e.className),children:[Object(_.jsx)(A,{label:"Total:",value:T(s.files)}),Object(_.jsx)(A,{label:"Duplicates:",value:T(s.duplicateCount)}),Object(_.jsx)(A,{label:"Likes:",value:T(s.likeCount)}),Object(_.jsx)(A,{label:"Views:",value:T(s.viewCount)}),Object(_.jsx)(A,{label:"Comments:",value:T(s.commentCount)})]})})};z.defaultProps={className:""};var J=z,U=a(19),Y=a.n(U),$=function(e){return Object(_.jsxs)("section",{className:Y.a.wrap,children:["plugins"===e.category?Object(_.jsx)("img",{src:e.info.iconUrl,alt:"preview",className:Y.a.pluginThumb}):null,Object(_.jsxs)("div",{className:Y.a.content,children:[Object(_.jsx)("a",{href:"https://www.figma.com/community/".concat("plugins"===e.category?"plugin":"file","/").concat(e.info.id),target:"_blank",rel:"noreferrer",className:"".concat(Y.a.title," ").concat(Y.a.link),children:e.info.name}),Object(_.jsxs)("div",{className:Y.a.textitem,children:[Object(_.jsx)("span",{children:"by "}),Object(_.jsxs)("a",{href:"https://www.figma.com/@".concat(e.info.publisherHandle),target:"_blank",rel:"noreferrer",className:"".concat(Y.a.link),children:["@",e.info.publisherHandle]})]}),Object(_.jsxs)("div",{className:Y.a.counters,children:[Object(_.jsxs)("div",{className:Y.a.counter,children:[Object(_.jsx)(E,{className:Y.a.counterIcon,name:"views"}),Object(_.jsx)("span",{children:e.counters.viewCount.toLocaleString()})]}),"plugins"===e.category?Object(_.jsxs)("div",{className:Y.a.counter,children:[Object(_.jsx)(E,{className:Y.a.counterIcon,name:"installs"}),Object(_.jsx)("span",{children:e.counters.installCount.toLocaleString()})]}):Object(_.jsxs)("div",{className:Y.a.counter,children:[Object(_.jsx)(E,{className:Y.a.counterIcon,name:"duplicates"}),Object(_.jsx)("span",{children:e.counters.duplicateCount.toLocaleString()})]}),Object(_.jsxs)("div",{className:Y.a.counter,children:[Object(_.jsx)(E,{className:Y.a.counterIcon,name:"likes"}),Object(_.jsx)("span",{children:e.counters.likeCount.toLocaleString()})]}),Object(_.jsxs)("div",{className:Y.a.counter,children:[Object(_.jsx)(E,{className:Y.a.counterIcon,name:"comments"}),Object(_.jsx)("span",{children:e.counters.commentCount.toLocaleString()})]})]})]})]})};$.defaultProps={className:""};var q=$,G=a(87),Q=a.n(G),X=function(e){return new URLSearchParams(window.location.search).get(e)||""},ee=function(e,t){var a=new URLSearchParams(window.location.search);a.set(e,t),window.history.pushState(null,"","?".concat(a.toString()))},te=function(){var e=s.a.useState(""!==X("id")?X("id"):""),t=Object(j.a)(e,2),a=t[0],n=t[1],c=s.a.useState(""!==X("category")?X("category"):"plugins"),r=Object(j.a)(c,2),o=r[0],m=r[1],p=s.a.useState(null),b=Object(j.a)(p,2),h=b[0],d=b[1],f=s.a.useState(null),x=Object(j.a)(f,2),g=x[0],O=x[1],v=s.a.useState(null),y=Object(j.a)(v,2),C=y[0],N=y[1],k=s.a.useState(!1),S=Object(j.a)(k,2),H=S[0],L=S[1],I=s.a.useState(!1),M=Object(j.a)(I,2),Z=M[0],P=M[1],B=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={info:"https://pavellaptev.github.io/figma-stat/".concat(a,"/").concat(t,"/info.json"),counters:"https://pavellaptev.github.io/figma-stat/".concat(a,"/").concat(t,"/counters.json"),latest:"https://pavellaptev.github.io/figma-stat/".concat(a,"/").concat(t,"/latest.json"),change:"https://pavellaptev.github.io/figma-stat/".concat(a,"/").concat(t,"/change.json")},e.prev=1,e.next=4,fetch(n.counters).then((function(e){return e.json()})).then((function(e){P(!1);d(e.slice(-1)[0]),O(e.map((function(t,n){var s;return e[n-1]?(s={date:t.date},Object(i.a)(s,"plugins"===a?"installs":"duplicates","plugins"===a?t.installCount-e[n-1].installCount:t.duplicateCount-e[n-1].duplicateCount),Object(i.a)(s,"views",t.viewCount-e[n-1].viewCount),Object(i.a)(s,"likes",t.likeCount-e[n-1].likeCount),Object(i.a)(s,"comments",t.commentCount-e[n-1].commentCount),s):null})).splice(1))}));case 4:return e.next=6,fetch(n.info).then((function(e){return e.json()})).then((function(e){N(e)}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),P(!0),console.error("Oops! Seems like there is no file with this ID yet");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}();return s.a.useEffect((function(){ee("id",a),ee("category",o),""!==X("id")&&""!==X("category")&&(console.log("fetching data \u2026"),B(a,o))}),[a,o,H]),Object(_.jsxs)("main",{className:"".concat(Q.a.main," lightTheme"),children:[Object(_.jsx)("a",{className:Q.a.ghButton,href:"https://github.com/PavelLaptev/figma-stat",rel:"noreferrer",target:"_blank",children:Object(_.jsx)(E,{name:"gh"})}),Object(_.jsxs)("section",{className:Q.a.wrap,children:[Object(_.jsx)("h1",{children:"Figma Statistics"}),Object(_.jsx)(V,{value:o,onClick:function(e){O(""),m(e)}}),Object(_.jsx)(R,{value:a,isError:Z,placeholder:"plugins"===o?"Plugin ID":"File ID",onSubmit:function(e){n(e),L(!H)},onChange:function(){}}),g?null:Object(_.jsx)(J,{category:o}),function(){if(g&&C)return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(q,{counters:h,info:C,category:o}),Object(_.jsx)(w,{data:g,category:o})]})}()]})]})};r.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(te,{})}),document.getElementById("root"))},40:function(e,t,a){e.exports={wrap:"styles_wrap__124Wx",form:"styles_form__2pyLC",input:"styles_input__2MZ3o",button:"styles_button__3uOo8",arrow:"styles_arrow__2-urN",errorMessage:"styles_errorMessage__C0V9x",errorInput:"styles_errorInput__3jBCm",errorAnimation:"styles_errorAnimation__1j2eq"}},57:function(e,t,a){e.exports={wrap:"styles_wrap__31Bip",button:"styles_button__2C1yK",skewLeft:"styles_skewLeft__1HWA6",skewRight:"styles_skewRight__1zYX3"}},86:function(e,t,a){e.exports={wrap:"styles_wrap__24UtH",countItem:"styles_countItem__iwDg2"}},87:function(e,t,a){e.exports={main:"app_main__1NOZK",wrap:"app_wrap__2GHul",ghButton:"app_ghButton__1qao1"}}},[[315,1,2]]]);
//# sourceMappingURL=main.697e4ab5.chunk.js.map