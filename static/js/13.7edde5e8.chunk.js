(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{204:function(e,t,a){"use strict";var n=a(15),s=a(0),o=a.n(s),r=(a(32),a(33)),i=a(208),c=a(209),l=r.a.create("page"),u=function(e){var t=e.breadcrumbs,a=e.tag,s=e.className,r=e.children,u=Object(n.a)(e,["breadcrumbs","tag","className","children"]),d=l.b("px-3",s);return o.a.createElement(a,Object.assign({className:d},u),o.a.createElement("div",{className:l.e("header")},t&&o.a.createElement(i.a,{className:l.e("breadcrumb")},o.a.createElement(c.a,null,"Home"),t.length&&t.map(function(e,t){var a=e.name,n=e.active;return o.a.createElement(c.a,{key:t,active:n},a)}))),r)};u.defaultProps={tag:"div",title:""},t.a=u},208:function(e,t,a){"use strict";var n=a(3),s=a(5),o=a(0),r=a.n(o),i=a(1),c=a.n(i),l=a(8),u=a.n(l),d=a(2),p={tag:d.q,listTag:d.q,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},m=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,i=e.children,c=e.tag,l=e.listTag,p=e["aria-label"],m=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(d.m)(u()(t),o),f=Object(d.m)(u()("breadcrumb",a),o);return r.a.createElement(c,Object(n.a)({},m,{className:h,"aria-label":p}),r.a.createElement(l,{className:f},i))};m.propTypes=p,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},209:function(e,t,a){"use strict";var n=a(3),s=a(5),o=a(0),r=a.n(o),i=a(1),c=a.n(i),l=a(8),u=a.n(l),d=a(2),p={tag:d.q,active:c.a.bool,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.active,i=e.tag,c=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(d.m)(u()(t,!!o&&"active","breadcrumb-item"),a);return r.a.createElement(i,Object(n.a)({},c,{className:l,"aria-current":o?"page":void 0}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},211:function(e,t,a){"use strict";var n=a(3),s=a(5),o=a(0),r=a.n(o),i=a(1),c=a.n(i),l=a(8),u=a.n(l),d=a(2),p={tag:d.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},m=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,i=e.tag,c=e.form,l=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(d.m)(u()(t,o?"no-gutters":null,c?"form-row":"row"),a);return r.a.createElement(i,Object(n.a)({},l,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},212:function(e,t,a){"use strict";var n=a(3),s=a(5),o=a(75),r=a.n(o),i=a(0),c=a.n(i),l=a(1),u=a.n(l),d=a(8),p=a.n(d),m=a(2),h=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(m.h)(h,'Please use the prop "order"'),pull:Object(m.h)(h,'Please use the prop "order"'),order:h,offset:h})]),b={tag:m.q,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.widths,i=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach(function(t,n){var s=e[t];if(delete l[t],s||""===s){var o=!n;if(r()(s)){var i,c=o?"-":"-"+t+"-",d=O(o,t,s.size);u.push(Object(m.m)(p()(((i={})[d]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i)),a))}else{var h=O(o,t,s);u.push(h)}}}),u.length||u.push("col");var d=Object(m.m)(p()(t,u),a);return c.a.createElement(i,Object(n.a)({},l,{className:d}))};v.propTypes=b,v.defaultProps=g,t.a=v},220:function(e,t,a){"use strict";var n=a(3),s=a(5),o=a(45),r=a(0),i=a.n(r),c=a(1),l=a.n(c),u=a(8),d=a.n(u),p=a(49),m=a(2),h=Object(o.a)({},p.Transition.propTypes,{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:m.q,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),f=Object(o.a)({},p.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:m.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var t=e.tag,a=e.baseClass,o=e.baseClassActive,r=e.className,c=e.cssModule,l=e.children,u=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(m.o)(h,m.c),b=Object(m.n)(h,m.c);return i.a.createElement(p.Transition,f,function(e){var s="entered"===e,p=Object(m.m)(d()(r,a,s&&o),c);return i.a.createElement(t,Object(n.a)({className:p},b,{ref:u}),l)})}b.propTypes=h,b.defaultProps=f,t.a=b},240:function(e,t,a){"use strict";a.d(t,"a",function(){return v});var n=a(35),s=a(36),o=a(38),r=a(37),i=a(22),c=a(241),l=a.n(c),u=a(0),d=a.n(u),p=a(245),m=a(194),h=a(195),f=a(196),b=a(181);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var s=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var O=function(e){Object(o.a)(a,e);var t=g(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).changeAuthState=function(t){return function(a){a.preventDefault(),e.props.onChangeAuthState(t)}},e.handleSubmit=function(e){e.preventDefault()},e}return Object(s.a)(a,[{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,s=e.passwordLabel,o=e.passwordInputProps,r=e.confirmPasswordLabel,i=e.confirmPasswordInputProps,c=e.children,u=e.onLogoClick;return d.a.createElement(p.a,{onSubmit:this.handleSubmit},t&&d.a.createElement("div",{className:"text-center pb-4"},d.a.createElement("img",{src:l.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:u})),d.a.createElement(m.a,null,d.a.createElement(h.a,{for:a},a),d.a.createElement(f.a,n)),d.a.createElement(m.a,null,d.a.createElement(h.a,{for:s},s),d.a.createElement(f.a,o)),this.isSignup&&d.a.createElement(m.a,null,d.a.createElement(h.a,{for:r},r),d.a.createElement(f.a,i)),d.a.createElement(m.a,{check:!0},d.a.createElement(h.a,{check:!0},d.a.createElement(f.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),d.a.createElement("hr",null),d.a.createElement(b.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),d.a.createElement("div",{className:"text-center pt-1"},d.a.createElement("h6",null,"or"),d.a.createElement("h6",null,this.isSignup?d.a.createElement("a",{href:"#login",onClick:this.changeAuthState(v)},"Login"):d.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(j)},"Signup"))),c)}},{key:"isLogin",get:function(){return this.props.authState===v}},{key:"isSignup",get:function(){return this.props.authState===j}}]),a}(d.a.Component),v="LOGIN",j="SIGNUP";O.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}},t.b=O},241:function(e,t,a){e.exports=a.p+"static/media/logo_200.b175e1c4.png"},245:function(e,t,a){"use strict";var n=a(3),s=a(5),o=a(14),r=a(10),i=a(0),c=a.n(i),l=a(1),u=a.n(l),d=a(8),p=a.n(d),m=a(2),h={children:u.a.node,inline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(Object(r.a)(a))),a.submit=a.submit.bind(Object(r.a)(Object(r.a)(a))),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,r=e.tag,i=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.m)(p()(t,!!o&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},l,{ref:i,className:u}))},t}(i.Component);f.propTypes=h,f.defaultProps={tag:"form"},t.a=f},269:function(e,t,a){"use strict";var n=a(3),s=a(5),o=a(0),r=a.n(o),i=a(1),c=a.n(i),l=a(8),u=a.n(l),d=a(2),p={tag:d.q,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),c=Object(d.m)(u()(t,"modal-body"),a);return r.a.createElement(o,Object(n.a)({},i,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},273:function(e,t,a){"use strict";var n=a(45),s=a(3),o=a(14),r=a(10),i=a(0),c=a.n(i),l=a(1),u=a.n(l),d=a(8),p=a.n(d),m=a(34),h=a.n(m),f=a(2),b={children:u.a.node.isRequired,node:u.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return f.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);g.propTypes=b;var O=g,v=a(220);function j(){}var y=u.a.shape(v.a.propTypes),E={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:y,modalTransition:y,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},N=Object.keys(E),C={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:j,onClosed:j,modalTransition:{timeout:f.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:f.e.Fade}},k=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(r.a)(Object(r.a)(a))),a.handleEscape=a.handleEscape.bind(Object(r.a)(Object(r.a)(a))),a.handleTab=a.handleTab.bind(Object(r.a)(Object(r.a)(a))),a.onOpened=a.onOpened.bind(Object(r.a)(Object(r.a)(a))),a.onClosed=a.onClosed.bind(Object(r.a)(Object(r.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||j)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||j)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(f.i.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,n=this.getFocusedChild(),s=0,o=0;o<a;o+=1)if(t[o]===n){s=o;break}e.shiftKey&&0===s?(e.preventDefault(),t[a-1].focus()):e.shiftKey||s!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(f.j)(),Object(f.g)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=p()(document.body.className,Object(f.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(f.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(f.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(f.n)(this.props,N);return c.a.createElement("div",Object(s.a)({},a,{className:Object(f.m)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(f.m)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,o=e.backdropClassName,r=e.cssModule,i=e.isOpen,l=e.backdrop,u=e.role,d=e.labelledBy,m=e.external,h=e.innerRef,b={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":d,role:u,tabIndex:"-1"},g=this.props.fade,j=Object(n.a)({},v.a.defaultProps,this.props.modalTransition,{baseClass:g?this.props.modalTransition.baseClass:"",timeout:g?this.props.modalTransition.timeout:0}),y=Object(n.a)({},v.a.defaultProps,this.props.backdropTransition,{baseClass:g?this.props.backdropTransition.baseClass:"",timeout:g?this.props.backdropTransition.timeout:0}),E=l&&(g?c.a.createElement(v.a,Object(s.a)({},y,{in:i&&!!l,cssModule:r,className:Object(f.m)(p()("modal-backdrop",o),r)})):c.a.createElement("div",{className:Object(f.m)(p()("modal-backdrop","show",o),r)}));return c.a.createElement(O,{node:this._element},c.a.createElement("div",{className:Object(f.m)(t)},c.a.createElement(v.a,Object(s.a)({},b,j,{in:i,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(f.m)(p()("modal",a),r),innerRef:h}),m,this.renderModalDialog()),E))}return null},t}(c.a.Component);k.propTypes=E,k.defaultProps=C,k.openCount=0;t.a=k},703:function(e,t,a){"use strict";a.r(t);var n=a(35),s=a(36),o=a(38),r=a(37),i=a(22),c=a(240),l=a(204),u=a(0),d=a.n(u),p=a(211),m=a(212),h=a(186),f=a(191),b=a(187),g=a(181),O=a(273),v=a(269);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var s=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var y=function(e){Object(o.a)(a,e);var t=j(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={show:!1,authState:c.a},e.toggle=function(){e.setState({show:!e.state.show})},e.handleAuthState=function(t){e.setState({authState:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=d.a.createElement("button",{className:"close",style:{position:"absolute",top:"15px",right:"20px",fontSize:"3rem"},onClick:this.toggle},"\xd7");return d.a.createElement(l.a,{title:"Login Modal",breadcrumbs:[{name:"login modal",active:!0}]},d.a.createElement(p.a,null,d.a.createElement(m.a,{md:"12",sm:"12",xs:"12"},d.a.createElement(h.a,null,d.a.createElement(f.a,null,"Login Modal Example"),d.a.createElement(b.a,null,d.a.createElement(g.a,{color:"danger",onClick:this.toggle},"Click to Login"),d.a.createElement(O.a,{isOpen:this.state.show,toggle:this.toggle,size:"sm",backdrop:"static",backdropClassName:"modal-backdrop-light",external:e,centered:!0},d.a.createElement(v.a,null,d.a.createElement(c.b,{authState:this.state.authState,onChangeAuthState:this.handleAuthState}))))))))}}]),a}(d.a.Component);t.default=y}}]);
//# sourceMappingURL=13.7edde5e8.chunk.js.map