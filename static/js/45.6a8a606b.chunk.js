(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{197:function(e,t,n){"use strict";var a=n(18),r=n(0),l=n.n(r),c=(n(31),n(32)),o=n(201),i=n(202),u=c.a.create("page"),s=function(e){var t=e.breadcrumbs,n=e.tag,r=e.className,c=e.children,s=Object(a.a)(e,["breadcrumbs","tag","className","children"]),m=u.b("px-3",r);return l.a.createElement(n,Object.assign({className:m},s),l.a.createElement("div",{className:u.e("header")},t&&l.a.createElement(o.a,{className:u.e("breadcrumb")},l.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,t){var n=e.name,a=e.active;return l.a.createElement(i.a,{key:t,active:a},n)}))),c)};s.defaultProps={tag:"div",title:""},t.a=s},205:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},r=function(){return["primary","secondary","success","info","warning","danger"]}},221:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return d}),n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p});var a=n(7),r=n(40),l=function(e){return{type:a.k,payload:e}},c=function(e){return{type:a.i,payload:e}},o=function(e){return{type:a.t,payload:e}},i=function(e){return{type:a.e,payload:e}},u=function(e){return{type:a.f,payload:e}},s=function(e){return Object(r.a)(e,l)},m=function(e){return Object(r.a)(e,c)},d=function(e,t){return Object(r.c)(e,t,o)},f=function(e){return Object(r.a)(e,i)},p=function(e){return Object(r.a)(e,u)}},233:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(22),r=n(0),l=n.n(r);function c(e){var t=e.action,n=l.a.useState(!1),r=Object(a.a)(n,2),c=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"text-green-600 border-none font-semibold capitalize m-4 underline text-base",type:"button",style:{transition:"all .15s ease"},onClick:function(){return o(!0)}},t),c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return o(!1)}},l.a.createElement("div",{className:"relative w-auto my-6 mx-auto max-w-3xl"},l.a.createElement("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},l.a.createElement("div",{className:"flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t"},l.a.createElement("h3",{className:"text-2xl font-semibold"},"Select file to upload")),l.a.createElement("div",{className:"relative p-6 flex-auto"},l.a.createElement("p",{className:"my-4 text-gray-600 text-lg leading-relaxed"},"I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything.")),l.a.createElement("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b"},l.a.createElement("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:function(){return o(!1)}},"Close"),l.a.createElement("button",{className:"bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:function(){return o(!1)}},"Save Changes"))))),l.a.createElement("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})):null)}},238:function(e,t,n){"use strict";var a=n(8),r=n(22),l=n(0),c=n.n(l),o=n(657),i=n(210),u=n(673),s=n(675),m=n(677),d=n(663),f=n(674),p=n(676),b=n(662),g=n(744),h=n(749),y=n(678),E=n(742),v=n(748),w=n(664),k=n(672),x=n(656),N=n(665),j=n(666),C=n(667),O=n(668),S=n(669),I=n(670),W=n(671),A=n(655),T=function(e){var t=e.handleSearchChange;return c.a.createElement("div",{className:"search hidden sm:block",style:{marginBottom:30}},c.a.createElement("input",{type:"text",class:"search__input input placeholder-theme-13",placeholder:"Search",onChange:t}),c.a.createElement(A.a,{className:"search__icon"}))},P=n(750);n.d(t,"a",function(){return B});var _=function(e){return c.a.createElement(x.a,{className:e.className,style:{color:"white",paddingRight:5,paddingLeft:5}})},z=Object(o.a)(function(e){return{root:{width:"100%"},small:{width:e.spacing(3),height:e.spacing(3)},container:{maxHeight:900},paginationContainer:{marginTop:20,height:32},rowPageContainer:{height:"2px"}}}),L=Object(i.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}})(b.a),R=Object(i.a)(function(e){return{root:{"label + &":{marginTop:e.spacing(3)},height:"10px"},input:{borderRadius:4,position:"relative",backgroundColor:"#f50057",color:"#fff",border:"1px solid #ced4da",fontSize:"0.875rem",padding:"5px 26px 5px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Poppins"].join(","),"&:focus":{borderRadius:4,backgroundColor:"#f50057",color:"#fff"}}}})(v.a);function B(e){var t=e.pagination,n=e.search,o=e.pagerows,i=e.rows,v=e.columns,x=e.actions,A=e.handleLinkClick,B=e.handleActionClick,D=e.id,F=(e.withEmoji,Object(l.useRef)(0)),J=z(),H=c.a.useState(1),M=Object(r.a)(H,2),U=M[0],V=M[1],G=c.a.useState(5),q=Object(r.a)(G,2),K=q[0],Q=q[1],X=c.a.useState(i),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=c.a.useState(Z.length/K),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],re=c.a.useState("Name"),le=Object(r.a)(re,2),ce=le[0],oe=le[1];console.log(ce);console.log(function(e){oe(e.target.value)});var ie=function(e,t){switch(e){case"delete":return c.a.createElement(N.a,{key:t,color:"red"});case"edit":return c.a.createElement(j.a,{key:t,color:"black"});case"play":return c.a.createElement(C.a,{key:t,color:"black"});case"pause":return c.a.createElement(O.a,{key:t,color:"black"});case"attachment":return c.a.createElement(S.a,{key:t,color:"blue"});case"correct":return c.a.createElement(I.a,{key:t,color:"green"});case"close":return c.a.createElement(W.a,{key:t,color:"red"});default:return null}};return c.a.createElement(k.a,{conatiner:!0,className:"w-full"},c.a.createElement(k.a,{item:!0},c.a.createElement(k.a,{container:!0,justify:"space-between",alignItems:"flex-start"},c.a.createElement(k.a,{item:!0},n?c.a.createElement(T,{handleSearchChange:function(e){var t=e.target.value.toLowerCase();if(t){var n=i.filter(function(e){return e.name.toLowerCase().includes(t)});$(n),V(1),ae(Math.ceil(n.length/K))}else $(i),V(1),ae(Math.ceil(i.length/K))}}):""))),c.a.createElement(k.a,{item:!0},c.a.createElement(u.a,{elevation:1},c.a.createElement(f.a,{className:J.container},c.a.createElement(s.a,null,c.a.createElement(p.a,{className:J.table_head},function(){var e=null,t=null;console.log(null);var n=v.map(function(t){return e=t,c.a.createElement(d.a,{key:t.id+D,align:t.align,style:{minWidth:t.minWidth}},t.label)});return x&&(t=c.a.createElement(d.a,{key:e.id+D,align:e.align,style:{minWidth:e.minWidth}},"Actions")),c.a.createElement(b.a,null,n,t)}()),c.a.createElement(m.a,{ref:F},function(){var e=null;return Z.slice((U-1)*K,(U-1)*K+K).map(function(t){return c.a.createElement(L,{role:"checkbox",tabIndex:-1,key:t.id+"Row"},v.map(function(n){e=n;var a=t[n.id];return c.a.createElement(d.a,{key:n.id+"Cell"+D,align:n.align,className:J.cell,style:{color:n.color(a)}},n.type&&"link"===n.type?c.a.createElement("div",{color:"inherit",onClick:function(e){return A(e,t)},style:{cursor:"pointer"}},a):n.type&&"image"===n.type?c.a.createElement("span",{style:{display:"inline-flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement(P.a,{src:t.src&&t.src,className:"small"})," ",c.a.createElement("span",{className:"px-4"},a)):a)}),x?c.a.createElement(d.a,{key:e.id+"Cell",align:e.align},x.map(function(e,n){return c.a.createElement(w.a,{key:n+"Action"+D,"aria-label":"upload picture",component:"span",style:{paddingTop:0,paddingBottom:0},onClick:function(n){return B(n,Object(a.a)({type:e},t))}},ie(e,n))})):"")})}()))))),c.a.createElement(k.a,{item:!0},c.a.createElement(k.a,{container:!0,justify:"space-between",alignItems:"flex-start",className:J.paginationContainer},c.a.createElement(k.a,{item:!0},t?c.a.createElement(g.a,{color:"secondary",shape:"rounded",count:ne,page:U,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){V(t)}}):""),c.a.createElement(k.a,{item:!0},o?c.a.createElement(y.a,{className:J.rowPageContainer,style:{padding:15}},c.a.createElement(E.a,{labelId:"customized-select-label",id:"customized-select",value:K,IconComponent:_,onChange:function(e){V(1),Q(+e.target.value)},input:c.a.createElement(R,null)},c.a.createElement(h.a,{value:5},"5"),c.a.createElement(h.a,{value:10},"10"),c.a.createElement(h.a,{value:20},"20"),c.a.createElement(h.a,{value:30},"30"))):""))))}},654:function(e,t,n){"use strict";n.r(t);var a=n(197),r=n(0),l=n.n(r),c=n(15),o=n(6),i=n(50),u=n(205),s=n(238),m=n(221),d=n(19),f=n(16),p=n(233),b=Object(u.b)();console.log(b);t.default=function(){var e=Object(c.g)();console.log(e);var t=Object(f.b)(),n=Object(f.c)(function(e){return e.adminGetAllClient}),u=Object(c.h)().params;console.log(u),console.log("Payload:"+n.users);Object(r.useEffect)(function(){t(Object(m.c)(d.i))},[]),!0===n.isSuccessful&&console.log("Check: "+n.users);return 0===n.users.length?l.a.createElement(i.a,null):l.a.createElement(a.a,{title:"Dropdowns",breadcrumbs:[{name:"All Clients",active:!0}]},l.a.createElement(p.a,null),l.a.createElement(s.a,{pagination:!0,pagerows:!0,columns:[{id:"id",label:"ID",minWidth:20,color:function(e){return"blue"}},{id:"user",label:"User",minWidth:100,color:function(e){return"blue"}},{id:"accountType",label:"Account Type",minWidth:50,color:function(e){return"blue"}},{id:"companyAddress",label:"Address",minWidth:150,align:"center",color:function(e){return"blue"}},{id:"phoneNumber",label:"Phone Number",minWidth:50,align:"center",color:function(e){return"blue"}},{id:"email",label:"Email",minWidth:100,align:"center",color:function(e){return"blue"}},{id:"website",label:"Website",minWidth:80,align:"center",color:function(e){return"blue"}},{id:"view",label:"Actions",minWidth:150,align:"center",color:function(e){return"blue"},type:"link"}],rows:function(e){var n=[];return console.log("Data: "+JSON.stringify(e)),e&&e.map(function(e,a){return n.push({id:a+1,user:e.companyName,accountType:e.accountType,companyAddress:e.companyAddress,phoneNumber:e.phoneNumber,email:e.email,website:e.websiteUrl,view:l.a.createElement(o.b,{onClick:function(){return function(e){var n=d.j+e;t(Object(m.d)(n))}(e._id)},to:"/admin/client/details/userId=".concat(e._id),className:"bg-green-700 text-white rounded-full px-2 py-2"},"View Details")}),null}),n}(n.users),handleActionClick:function(e,t){alert(JSON.stringify(t))},handleLinkClick:function(e,t){}}))}}}]);
//# sourceMappingURL=45.6a8a606b.chunk.js.map