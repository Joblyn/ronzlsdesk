(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{204:function(e,a,t){"use strict";var s=t(15),l=t(0),n=t.n(l),r=(t(32),t(33)),c=t(208),i=t(209),o=r.a.create("page"),m=function(e){var a=e.breadcrumbs,t=e.tag,l=e.className,r=e.children,m=Object(s.a)(e,["breadcrumbs","tag","className","children"]),u=o.b("px-3",l);return n.a.createElement(t,Object.assign({className:u},m),n.a.createElement("div",{className:o.e("header")},a&&n.a.createElement(c.a,{className:o.e("breadcrumb")},n.a.createElement(i.a,null,"Home"),a.length&&a.map(function(e,a){var t=e.name,s=e.active;return n.a.createElement(i.a,{key:a,active:s},t)}))),r)};m.defaultProps={tag:"div",title:""},a.a=m},208:function(e,a,t){"use strict";var s=t(3),l=t(5),n=t(0),r=t.n(n),c=t(1),i=t.n(c),o=t(8),m=t.n(o),u=t(2),d={tag:u.q,listTag:u.q,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},b=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,c=e.children,i=e.tag,o=e.listTag,d=e["aria-label"],b=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(u.m)(m()(a),n),p=Object(u.m)(m()("breadcrumb",t),n);return r.a.createElement(i,Object(s.a)({},b,{className:f,"aria-label":d}),r.a.createElement(o,{className:p},c))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},209:function(e,a,t){"use strict";var s=t(3),l=t(5),n=t(0),r=t.n(n),c=t(1),i=t.n(c),o=t(8),m=t.n(o),u=t(2),d={tag:u.q,active:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.active,c=e.tag,i=Object(l.a)(e,["className","cssModule","active","tag"]),o=Object(u.m)(m()(a,!!n&&"active","breadcrumb-item"),t);return r.a.createElement(c,Object(s.a)({},i,{className:o,"aria-current":n?"page":void 0}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b},211:function(e,a,t){"use strict";var s=t(3),l=t(5),n=t(0),r=t.n(n),c=t(1),i=t.n(c),o=t(8),m=t.n(o),u=t(2),d={tag:u.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},b=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,c=e.tag,i=e.form,o=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.m)(m()(a,n?"no-gutters":null,i?"form-row":"row"),t);return r.a.createElement(c,Object(s.a)({},o,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},212:function(e,a,t){"use strict";var s=t(3),l=t(5),n=t(75),r=t.n(n),c=t(0),i=t.n(c),o=t(1),m=t.n(o),u=t(8),d=t.n(u),b=t(2),f=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),push:Object(b.h)(f,'Please use the prop "order"'),pull:Object(b.h)(f,'Please use the prop "order"'),order:f,offset:f})]),g={tag:b.q,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,n=e.widths,c=e.tag,o=Object(l.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach(function(a,s){var l=e[a];if(delete o[a],l||""===l){var n=!s;if(r()(l)){var c,i=n?"-":"-"+a+"-",u=E(n,a,l.size);m.push(Object(b.m)(d()(((c={})[u]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c)),t))}else{var f=E(n,a,l);m.push(f)}}}),m.length||m.push("col");var u=Object(b.m)(d()(a,m),t);return i.a.createElement(c,Object(s.a)({},o,{className:u}))};v.propTypes=g,v.defaultProps=h,a.a=v},219:function(e,a,t){"use strict";var s=t(18),l=t(15),n=t(30),r=t.n(n),c=t(0),i=t.n(c),o=(t(32),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,n=e.className,c=e.type,m=Object(l.a)(e,["tag","className","type"]),u=r()(Object(s.a)({},c,!!c),n);return a=t||(!t&&o[c]?o[c]:"p"),i.a.createElement(a,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},a.a=m},220:function(e,a,t){"use strict";var s=t(3),l=t(5),n=t(45),r=t(0),c=t.n(r),i=t(1),o=t.n(i),m=t(8),u=t.n(m),d=t(49),b=t(2),f=Object(n.a)({},d.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:b.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(n.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,i=e.cssModule,o=e.children,m=e.innerRef,f=Object(l.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(b.o)(f,b.c),g=Object(b.n)(f,b.c);return c.a.createElement(d.Transition,p,function(e){var l="entered"===e,d=Object(b.m)(u()(r,t,l&&n),i);return c.a.createElement(a,Object(s.a)({className:d},g,{ref:m}),o)})}g.propTypes=f,g.defaultProps=p,a.a=g},256:function(e,a,t){"use strict";var s=t(3),l=t(5),n=t(45),r=t(0),c=t.n(r),i=t(1),o=t.n(i),m=t(8),u=t.n(m),d=t(2),b=t(220),f={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:d.q,transition:o.a.shape(b.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},b.a.defaultProps,{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,i=e.cssModule,o=e.tag,m=e.color,f=e.isOpen,p=e.toggle,g=e.children,h=e.transition,E=e.fade,v=e.innerRef,O=Object(l.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(d.m)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),i),j=Object(d.m)(u()("close",t),i),y=Object(n.a)({},b.a.defaultProps,h,{baseClass:E?h.baseClass:"",timeout:E?h.timeout:0});return c.a.createElement(b.a,Object(s.a)({},O,y,{tag:o,className:N,in:f,role:"alert",innerRef:v}),p?c.a.createElement("button",{type:"button",className:j,"aria-label":r,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=f,g.defaultProps=p,a.a=g},380:function(e,a,t){"use strict";var s=t(3),l=t(14),n=t(10),r=t(0),c=t.n(r),i=t(256),o=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:!0},t.toggle=t.toggle.bind(Object(n.a)(Object(n.a)(t))),t}Object(l.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return c.a.createElement(i.a,Object(s.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},a}(r.Component);a.a=o},684:function(e,a,t){"use strict";t.r(a);var s=t(204),l=t(219),n=t(0),r=t.n(n),c=t(211),i=t(212),o=t(186),m=t(191),u=t(187),d=t(256),b=t(380);a.default=function(){return r.a.createElement(s.a,{title:"Alerts",breadcrumbs:[{name:"alerts",active:!0}]},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,null,"Alerts"),r.a.createElement(u.a,null,r.a.createElement(d.a,{color:"primary"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),r.a.createElement(d.a,{color:"secondary"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),r.a.createElement(d.a,{color:"success"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),r.a.createElement(d.a,{color:"danger"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),r.a.createElement(d.a,{color:"warning"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),r.a.createElement(d.a,{color:"info"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),r.a.createElement(d.a,{color:"light"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),r.a.createElement(d.a,{color:"dark"},"Give it a"," ",r.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like.")))),r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,null,"Dismiss"),r.a.createElement(u.a,null,r.a.createElement(b.a,{color:"primary"},"I am an alert and I can be dismissed!"),r.a.createElement(b.a,{color:"secondary"},"I am an alert and I can be dismissed!"),r.a.createElement(b.a,{color:"success"},"I am an alert and I can be dismissed!"),r.a.createElement(b.a,{color:"danger"},"I am an alert and I can be dismissed!"),r.a.createElement(b.a,{color:"warning"},"I am an alert and I can be dismissed!"),r.a.createElement(b.a,{color:"info"},"I am an alert and I can be dismissed!"),r.a.createElement(b.a,{color:"light"},"I am an alert and I can be dismissed!"),r.a.createElement(b.a,{color:"dark"},"I am an alert and I can be dismissed!"))))),r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,null,"Additional Content"),r.a.createElement(u.a,null,r.a.createElement(d.a,{color:"success"},r.a.createElement(l.a,{type:"h4",className:"alert-heading"},"Well done!"),r.a.createElement(l.a,null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),r.a.createElement("hr",null),r.a.createElement(l.a,{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")))))))}}}]);
//# sourceMappingURL=23.b583a3fb.chunk.js.map