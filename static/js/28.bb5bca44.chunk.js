(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{199:function(e,t,a){"use strict";var r=a(19),n=a(1),s=a.n(n),c=(a(33),a(34)),o=a(208),l=a(209),i=c.a.create("page"),u=function(e){var t=e.breadcrumbs,a=e.tag,n=e.className,c=e.children,u=Object(r.a)(e,["breadcrumbs","tag","className","children"]),m=i.b("px-3",n);return s.a.createElement(a,Object.assign({className:m},u),s.a.createElement("div",{className:i.e("header")},t&&s.a.createElement(o.a,{className:i.e("breadcrumb")},s.a.createElement(l.a,null,"Home"),t.length&&t.map(function(e,t){var a=e.name,r=e.active;return s.a.createElement(l.a,{key:t,active:r},a)}))),c)};u.defaultProps={tag:"div",title:""},t.a=u},208:function(e,t,a){"use strict";var r=a(5),n=a(6),s=a(1),c=a.n(s),o=a(2),l=a.n(o),i=a(9),u=a.n(i),m=a(3),d={tag:m.q,listTag:m.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},f=function(e){var t=e.className,a=e.listClassName,s=e.cssModule,o=e.children,l=e.tag,i=e.listTag,d=e["aria-label"],f=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.m)(u()(t),s),p=Object(m.m)(u()("breadcrumb",a),s);return c.a.createElement(l,Object(r.a)({},f,{className:b,"aria-label":d}),c.a.createElement(i,{className:p},o))};f.propTypes=d,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=f},209:function(e,t,a){"use strict";var r=a(5),n=a(6),s=a(1),c=a.n(s),o=a(2),l=a.n(o),i=a(9),u=a.n(i),m=a(3),d={tag:m.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.active,o=e.tag,l=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(m.m)(u()(t,!!s&&"active","breadcrumb-item"),a);return c.a.createElement(o,Object(r.a)({},l,{className:i,"aria-current":s?"page":void 0}))};f.propTypes=d,f.defaultProps={tag:"li"},t.a=f},213:function(e,t,a){"use strict";var r=a(5),n=a(6),s=a(1),c=a.n(s),o=a(2),l=a.n(o),i=a(9),u=a.n(i),m=a(3),d={tag:m.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},f=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,o=e.tag,l=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.m)(u()(t,s?"no-gutters":null,l?"form-row":"row"),a);return c.a.createElement(o,Object(r.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},214:function(e,t,a){"use strict";var r=a(5),n=a(6),s=a(76),c=a.n(s),o=a(1),l=a.n(o),i=a(2),u=a.n(i),m=a(9),d=a.n(m),f=a(3),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(f.h)(b,'Please use the prop "order"'),pull:Object(f.h)(b,'Please use the prop "order"'),order:b,offset:b})]),g={tag:f.q,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,s=e.widths,o=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach(function(t,r){var n=e[t];if(delete i[t],n||""===n){var s=!r;if(c()(n)){var o,l=s?"-":"-"+t+"-",m=v(s,t,n.size);u.push(Object(f.m)(d()(((o={})[m]=n.size||""===n.size,o["order"+l+n.order]=n.order||0===n.order,o["offset"+l+n.offset]=n.offset||0===n.offset,o)),a))}else{var b=v(s,t,n);u.push(b)}}}),u.length||u.push("col");var m=Object(f.m)(d()(t,u),a);return l.a.createElement(o,Object(r.a)({},i,{className:m}))};j.propTypes=g,j.defaultProps=h,t.a=j},623:function(e,t,a){"use strict";a.r(t);var r=a(36),n=a(37),s=a(39),c=a(38),o=a(24),l=a(1),i=a.n(l),u=a(8),m=a(213),d=a(214),f=a(78),b=a(199);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(c.a)(this,a)}}var g=function(e){Object(s.a)(a,e);var t=p(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(b.a,{className:"DashboardPage",title:"Dashboard",breadcrumbs:[{name:"Dashboard",active:!0}]},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",xs:"12",className:"d-flex align-items-center justify-content-center mb-3"},i.a.createElement(u.b,{to:"/user/profile",style:{height:"fit-content",width:"100%",maxWidth:"500px",cursor:"pointer",textDecoration:"none",fontSize:"1.2rem"}},i.a.createElement(f.a,{color:"gradient-secondary",text:"View Profile",buttonProps:{children:"View"}}))),i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",xs:"12",className:"d-flex align-items-center justify-content-center mb-3"},i.a.createElement(u.b,{to:"/user/view-appointments",style:{height:"fit-content",width:"100%",maxWidth:"500px",cursor:"pointer",textDecoration:"none"}},i.a.createElement(f.a,{color:"gradient-secondary",text:"View Appointments",buttonProps:{children:"View"},style:{height:"fit-content",width:"100%",maxWidth:"500px",cursor:"pointer",fontSize:"1.2rem"}}))),i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",xs:"12",className:"d-flex align-items-center justify-content-center mb-3"},i.a.createElement(u.b,{to:"/user/documents",style:{height:"fit-content",width:"100%",maxWidth:"500px",cursor:"pointer",textDecoration:"none",fontSize:"1.2rem"}},i.a.createElement(f.a,{color:"gradient-secondary",text:"View Documents",buttonProps:{children:"View"}}))),i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",xs:"12",className:"d-flex align-items-center justify-content-center mb-3"},i.a.createElement(u.b,{to:"/user/requests",style:{height:"fit-content",width:"100%",maxWidth:"500px",cursor:"pointer",textDecoration:"none",fontSize:"1.2rem"}},i.a.createElement(f.a,{color:"gradient-secondary",text:"View Requests",buttonProps:{children:"View"}})))))}}]),a}(i.a.Component);t.default=g}}]);
//# sourceMappingURL=28.bb5bca44.chunk.js.map