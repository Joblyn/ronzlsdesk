(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{204:function(e,a,t){"use strict";var r=t(15),s=t(0),l=t.n(s),n=(t(32),t(33)),c=t(208),o=t(209),i=n.a.create("page"),u=function(e){var a=e.breadcrumbs,t=e.tag,s=e.className,n=e.children,u=Object(r.a)(e,["breadcrumbs","tag","className","children"]),m=i.b("px-3",s);return l.a.createElement(t,Object.assign({className:m},u),l.a.createElement("div",{className:i.e("header")},a&&l.a.createElement(c.a,{className:i.e("breadcrumb")},l.a.createElement(o.a,null,"Home"),a.length&&a.map(function(e,a){var t=e.name,r=e.active;return l.a.createElement(o.a,{key:a,active:r},t)}))),n)};u.defaultProps={tag:"div",title:""},a.a=u},208:function(e,a,t){"use strict";var r=t(3),s=t(5),l=t(0),n=t.n(l),c=t(1),o=t.n(c),i=t(8),u=t.n(i),m=t(2),b={tag:m.q,listTag:m.q,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},d=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,o=e.tag,i=e.listTag,b=e["aria-label"],d=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(m.m)(u()(a),l),p=Object(m.m)(u()("breadcrumb",t),l);return n.a.createElement(o,Object(r.a)({},d,{className:g,"aria-label":b}),n.a.createElement(i,{className:p},c))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=d},209:function(e,a,t){"use strict";var r=t(3),s=t(5),l=t(0),n=t.n(l),c=t(1),o=t.n(c),i=t(8),u=t.n(i),m=t(2),b={tag:m.q,active:o.a.bool,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,o=Object(s.a)(e,["className","cssModule","active","tag"]),i=Object(m.m)(u()(a,!!l&&"active","breadcrumb-item"),t);return n.a.createElement(c,Object(r.a)({},o,{className:i,"aria-current":l?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"},a.a=d},211:function(e,a,t){"use strict";var r=t(3),s=t(5),l=t(0),n=t.n(l),c=t(1),o=t.n(c),i=t(8),u=t.n(i),m=t(2),b={tag:m.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},d=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,c=e.tag,o=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),b=Object(m.m)(u()(a,l?"no-gutters":null,o?"form-row":"row"),t);return n.a.createElement(c,Object(r.a)({},i,{className:b}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},212:function(e,a,t){"use strict";var r=t(3),s=t(5),l=t(75),n=t.n(l),c=t(0),o=t.n(c),i=t(1),u=t.n(i),m=t(8),b=t.n(m),d=t(2),g=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(d.h)(g,'Please use the prop "order"'),pull:Object(d.h)(g,'Please use the prop "order"'),order:g,offset:g})]),f={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},N=function(e){var a=e.className,t=e.cssModule,l=e.widths,c=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];l.forEach(function(a,r){var s=e[a];if(delete i[a],s||""===s){var l=!r;if(n()(s)){var c,o=l?"-":"-"+a+"-",m=h(l,a,s.size);u.push(Object(d.m)(b()(((c={})[m]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c)),t))}else{var g=h(l,a,s);u.push(g)}}}),u.length||u.push("col");var m=Object(d.m)(b()(a,u),t);return o.a.createElement(c,Object(r.a)({},i,{className:m}))};N.propTypes=f,N.defaultProps=v,a.a=N},219:function(e,a,t){"use strict";var r=t(18),s=t(15),l=t(30),n=t.n(l),c=t(0),o=t.n(c),i=(t(32),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,l=e.className,c=e.type,u=Object(s.a)(e,["tag","className","type"]),m=n()(Object(r.a)({},c,!!c),l);return a=t||(!t&&i[c]?i[c]:"p"),o.a.createElement(a,Object.assign({},u,{className:m}))};u.defaultProps={type:"p"},a.a=u},222:function(e,a){var t=NaN,r="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,c=/^0o[0-7]+$/i,o=parseInt,i=Object.prototype.toString;function u(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&i.call(e)==r}(e))return t;if(u(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=u(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var m=n.test(e);return m||c.test(e)?o(e.slice(2),m?2:8):l.test(e)?t:+e}},233:function(e,a,t){"use strict";var r=t(15),s=t(0),l=t.n(s),n=(t(32),t(186)),c=t(190),o=t(188),i=t(242),u=t(219),m=function(e){var a=e.title,t=e.subtitle,s=e.number,m=e.color,b=e.progress,d=b.value,g=b.label,p=Object(r.a)(e,["title","subtitle","number","color","progress"]);return l.a.createElement(n.a,Object.assign({body:!0},p),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(c.a,{tag:"div"},l.a.createElement(u.a,{className:"mb-0"},l.a.createElement("strong",null,a)),l.a.createElement(u.a,{className:"mb-0 text-muted small"},t)),l.a.createElement(o.a,{className:"text-".concat(m)},s)),l.a.createElement(i.a,{value:d,color:m,style:{height:"8px"}}),l.a.createElement(c.a,{tag:"div",className:"d-flex justify-content-between"},l.a.createElement(u.a,{tag:"span",className:"text-left text-muted small"},g),l.a.createElement(u.a,{tag:"span",className:"text-right text-muted small"},d,"%")))};m.defaultProps={title:"",subtitle:"",number:0,color:"primary",progress:{value:0,label:""}};var b=m,d=t(18),g=t(30),p=t.n(g),f=t(187),v=t(189),h=function(e){var a=e.bgColor,t=e.icon,s=e.iconProps,c=e.title,i=e.subtitle,u=e.className,m=Object(r.a)(e,["bgColor","icon","iconProps","title","subtitle","className"]),b=p()("cr-widget",u,Object(d.a)({},"bg-".concat(a),a));return l.a.createElement(n.a,Object.assign({inverse:!0,className:b},m),l.a.createElement(f.a,{className:"cr-widget__icon"},l.a.createElement(t,Object.assign({size:50},s))),l.a.createElement(f.a,null,l.a.createElement(o.a,null,c),l.a.createElement(v.a,null,i)))};h.defaultProps={bgColor:"primary",icon:"span",iconProps:{size:50}};var N=h;t.d(a,"b",function(){return b}),t.d(a,"a",function(){return N})},242:function(e,a,t){"use strict";var r=t(3),s=t(5),l=t(0),n=t.n(l),c=t(1),o=t.n(c),i=t(8),u=t.n(i),m=t(222),b=t.n(m),d=t(2),g={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:d.q,value:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object},p=function(e){var a=e.children,t=e.className,l=e.barClassName,c=e.cssModule,o=e.value,i=e.max,m=e.animated,g=e.striped,p=e.color,f=e.bar,v=e.multi,h=e.tag,N=Object(s.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),j=b()(o)/b()(i)*100,y=Object(d.m)(u()(t,"progress"),c),O=Object(d.m)(u()("progress-bar",f&&t||l,m?"progress-bar-animated":null,p?"bg-"+p:null,g||m?"progress-bar-striped":null),c),E=v?a:n.a.createElement("div",{className:O,style:{width:j+"%"},role:"progressbar","aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":i,children:a});return f?E:n.a.createElement(h,Object(r.a)({},N,{className:y,children:E}))};p.propTypes=g,p.defaultProps={tag:"div",value:0,max:100},a.a=p},270:function(e,a,t){"use strict";t.d(a,"a",function(){return s}),t.d(a,"b",function(){return l});var r=t(4),s=[{bgColor:"primary",icon:r.K,title:"Primary",subtitle:"widget subtitle"},{bgColor:"secondary",icon:r.L,title:"Secondary",subtitle:"widget subtitle"},{bgColor:"success",icon:r.p,title:"Success",subtitle:"widget subtitle"},{bgColor:"danger",icon:r.q,title:"Danger",subtitle:"widget subtitle"},{bgColor:"warning",icon:r.y,title:"Warning",subtitle:"widget subtitle"},{bgColor:"info",icon:r.z,title:"Info",subtitle:"widget subtitle"},{bgColor:"light",icon:r.H,title:"Light",subtitle:"widget subtitle",inverse:!1},{bgColor:"dark",icon:r.r,title:"Dark",subtitle:"widget subtitle"}],l=[{color:"primary"},{color:"secondary"},{color:"success"},{color:"info"},{color:"warning"},{color:"danger"},{color:"light"},{color:"dark"}]},701:function(e,a,t){"use strict";t.r(a);var r=t(15),s=t(0),l=t.n(s),n=t(211),c=t(212),o=t(204),i=t(233),u=t(270);a.default=function(){return l.a.createElement(o.a,{className:"WidgetPage",title:"Widgets",breadcrumbs:[{name:"widgets",active:!0}]},l.a.createElement(n.a,null,u.b.map(function(e,a){var t=e.color;return l.a.createElement(c.a,{key:a,lg:4,md:6,sm:6,xs:12,className:"mb-3"},l.a.createElement(i.b,{title:"Total Profit",subtitle:"This month",number:"$17,800",color:t,progress:{value:75,label:"Last month"}}))})),l.a.createElement(n.a,null,u.a.map(function(e,a){var t=e.bgColor,s=e.icon,n=e.title,o=e.subtitle,u=Object(r.a)(e,["bgColor","icon","title","subtitle"]);return l.a.createElement(c.a,{key:a,lg:4,md:6,sm:6,xs:12,className:"mb-3"},l.a.createElement(i.a,Object.assign({bgColor:t,icon:s,title:n,subtitle:o},u)))})))}}}]);
//# sourceMappingURL=17.1a7111bb.chunk.js.map