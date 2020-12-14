(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{199:function(e,a,t){"use strict";var r=t(19),n=t(1),c=t.n(n),s=(t(33),t(34)),l=t(211),i=t(212),o=s.a.create("page"),u=function(e){var a=e.breadcrumbs,t=e.tag,n=e.className,s=e.children,u=Object(r.a)(e,["breadcrumbs","tag","className","children"]),m=o.b("px-3",n);return c.a.createElement(t,Object.assign({className:m},u),c.a.createElement("div",{className:o.e("header")},a&&c.a.createElement(l.a,{className:o.e("breadcrumb")},c.a.createElement(i.a,null,"Home"),a.length&&a.map(function(e,a){var t=e.name,r=e.active;return c.a.createElement(i.a,{key:a,active:r},t)}))),s)};u.defaultProps={tag:"div",title:""},a.a=u},211:function(e,a,t){"use strict";var r=t(5),n=t(6),c=t(1),s=t.n(c),l=t(2),i=t.n(l),o=t(9),u=t.n(o),m=t(3),d={tag:m.q,listTag:m.q,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},b=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,l=e.children,i=e.tag,o=e.listTag,d=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(m.m)(u()(a),c),f=Object(m.m)(u()("breadcrumb",t),c);return s.a.createElement(i,Object(r.a)({},b,{className:p,"aria-label":d}),s.a.createElement(o,{className:f},l))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},212:function(e,a,t){"use strict";var r=t(5),n=t(6),c=t(1),s=t.n(c),l=t(2),i=t.n(l),o=t(9),u=t.n(o),m=t(3),d={tag:m.q,active:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.active,l=e.tag,i=Object(n.a)(e,["className","cssModule","active","tag"]),o=Object(m.m)(u()(a,!!c&&"active","breadcrumb-item"),t);return s.a.createElement(l,Object(r.a)({},i,{className:o,"aria-current":c?"page":void 0}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b},241:function(e,a,t){"use strict";var r=t(5),n=t(6),c=t(15),s=t(10),l=t(1),i=t.n(l),o=t(2),u=t.n(o),m=t(9),d=t.n(m),b=t(3),p={children:u.a.node,inline:u.a.bool,tag:b.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(Object(s.a)(t))),t.submit=t.submit.bind(Object(s.a)(Object(s.a)(t))),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,s=e.tag,l=e.innerRef,o=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.m)(d()(a,!!c&&"form-inline"),t);return i.a.createElement(s,Object(r.a)({},o,{ref:l,className:u}))},a}(l.Component);f.propTypes=p,f.defaultProps={tag:"form"},a.a=f},619:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return g});var r=t(20),n=t(7),c=t(23),s=t(1),l=t.n(s),i=t(241),o=t(190),u=t(177),m=t(13),d=t(18),b=t(22),p=t(12),f=t(199);function g(){var e=Object(s.useState)(""),a=Object(c.a)(e,2),t=a[0],g=a[1],h=Object(s.useState)(),v=Object(c.a)(h,2),N=v[0],j=v[1],E=Object(d.g)(),O=function(e){g(function(a){return Object(n.a)({},a,Object(r.a)({},e.name,e.value))})};return l.a.createElement(f.a,{className:"DashboardPage",title:"Dashboard",breadcrumbs:[{name:"Create Request",active:!0}]},l.a.createElement("main",{className:"formbase"},l.a.createElement("h3",{className:"mb-4"},"Create a new request"),l.a.createElement(i.a,{className:"form",onSubmit:function(e){e.preventDefault();var a=t.requestDescription,r=t.requestTitle,n=t.attachedFileName;if(a&&r){j(!0);var c=new FormData,s=document.getElementById("requestFile");c.append("requestTitle",r),c.append("requestDescription",a),c.append("attachedFileUrl",s.files[0]),c.append("attachedFileName",n);var l="https://node.codecradle.co/api/v1/"+b.v,i=localStorage.getItem("jwtToken");fetch(l,{method:"POST",body:c,credentials:"same-origin",headers:new Headers({Authorization:"Bearer "+i})}).then(function(e){return e.json()}).then(E.push("/user/requests")).catch(function(e){alert("Opps, An error occurred, please try again!"),console.error()})}else j(!1)},id:"create-request"},!1===N?l.a.createElement("p",{style:{color:"red"}},"Please fill in all details"):"",l.a.createElement(o.a,null,l.a.createElement(p.a,{required:!0,placeholder:"Request Title",type:"text",name:"requestTitle",onChange:function(e){var a=e.target;return O(a)}})),l.a.createElement(o.a,null,l.a.createElement(p.a,{required:!0,placeholder:"Request Description",type:"text",name:"requestDescription",onChange:function(e){var a=e.target;return O(a)}})),l.a.createElement(o.a,{className:"form-group"},l.a.createElement(m.c,{className:"atch",size:40}),l.a.createElement(p.a,{required:!0,placeholder:"Attach Document",type:"file",id:"requestFile"})),l.a.createElement(o.a,null,l.a.createElement(p.a,{required:!0,placeholder:"File Name",type:"text",name:"attachedFileName",onChange:function(e){var a=e.target;return O(a)}})),l.a.createElement(u.a,{type:"submit",className:"form-button",form:"create-request"},"CREATE REQUEST"))))}}}]);
//# sourceMappingURL=30.dd83412e.chunk.js.map