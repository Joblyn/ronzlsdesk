(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{204:function(e,t,a){"use strict";var n=a(15),r=a(0),l=a.n(r),c=(a(32),a(33)),o=a(208),i=a(209),u=c.a.create("page"),s=function(e){var t=e.breadcrumbs,a=e.tag,r=e.className,c=e.children,s=Object(n.a)(e,["breadcrumbs","tag","className","children"]),m=u.b("px-3",r);return l.a.createElement(a,Object.assign({className:m},s),l.a.createElement("div",{className:u.e("header")},t&&l.a.createElement(o.a,{className:u.e("breadcrumb")},l.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,t){var a=e.name,n=e.active;return l.a.createElement(i.a,{key:t,active:n},a)}))),c)};s.defaultProps={tag:"div",title:""},t.a=s},238:function(e,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return m}),a.d(t,"a",function(){return d});var n=a(9),r=a(40),l=function(e){return{type:n.j,payload:e}},c=function(e){return{type:n.h,payload:e}},o=function(e){return{type:n.s,payload:e}},i=function(e){return{type:n.e,payload:e}},u=function(e){return Object(r.a)(e,l)},s=function(e){return Object(r.a)(e,c)},m=function(e,t){return Object(r.c)(e,t,o)},d=function(e){return Object(r.a)(e,i)}},249:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(19),r=a(0),l=a.n(r);function c(e){var t=e.action,a=l.a.useState(!1),r=Object(n.a)(a,2),c=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"text-green-600 border-none font-semibold capitalize m-4 underline text-base",type:"button",style:{transition:"all .15s ease"},onClick:function(){return o(!0)}},t),c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return o(!1)}},l.a.createElement("div",{className:"relative w-auto my-6 mx-auto max-w-3xl"},l.a.createElement("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},l.a.createElement("div",{className:"flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t"},l.a.createElement("h3",{className:"text-2xl font-semibold"},"Select file to upload")),l.a.createElement("div",{className:"relative p-6 flex-auto"},l.a.createElement("p",{className:"my-4 text-gray-600 text-lg leading-relaxed"},"I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything.")),l.a.createElement("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b"},l.a.createElement("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:function(){return o(!1)}},"Close"),l.a.createElement("button",{className:"bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:function(){return o(!1)}},"Save Changes"))))),l.a.createElement("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})):null)}},272:function(e,t,a){"use strict";var n=a(6),r=a(19),l=a(0),c=a.n(l),o=a(659),i=a(217),u=a(675),s=a(677),m=a(679),d=a(665),p=a(676),f=a(678),b=a(664),g=a(745),h=a(750),y=a(680),E=a(743),v=a(749),w=a(666),x=a(674),k=a(658),N=a(667),C=a(668),j=a(669),O=a(670),S=a(671),I=a(672),W=a(673),A=a(657),T=function(e){var t=e.handleSearchChange;return c.a.createElement("div",{className:"search hidden sm:block",style:{marginBottom:30}},c.a.createElement("input",{type:"text",class:"search__input input placeholder-theme-13",placeholder:"Search",onChange:t}),c.a.createElement(A.a,{className:"search__icon"}))},_=a(751);a.d(t,"a",function(){return R});var z=function(e){return c.a.createElement(k.a,{className:e.className,style:{color:"white",paddingRight:5,paddingLeft:5}})},L=Object(o.a)(function(e){return{root:{width:"100%"},small:{width:e.spacing(3),height:e.spacing(3)},container:{maxHeight:900},paginationContainer:{marginTop:20,height:32},rowPageContainer:{height:"2px"}}}),P=Object(i.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}})(b.a),D=Object(i.a)(function(e){return{root:{"label + &":{marginTop:e.spacing(3)},height:"10px"},input:{borderRadius:4,position:"relative",backgroundColor:"#f50057",color:"#fff",border:"1px solid #ced4da",fontSize:"0.875rem",padding:"5px 26px 5px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Poppins"].join(","),"&:focus":{borderRadius:4,backgroundColor:"#f50057",color:"#fff"}}}})(v.a);function R(e){var t=e.pagination,a=e.search,o=e.pagerows,i=e.rows,v=e.columns,k=e.actions,A=e.handleLinkClick,R=e.handleActionClick,B=e.id,F=(e.withEmoji,Object(l.useRef)(0)),J=L(),U=c.a.useState(1),H=Object(r.a)(U,2),M=H[0],G=H[1],V=c.a.useState(5),q=Object(r.a)(V,2),K=q[0],Q=q[1],X=c.a.useState(i),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=c.a.useState(Z.length/K),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],re=c.a.useState("Name"),le=Object(r.a)(re,2),ce=le[0],oe=le[1];console.log(ce);console.log(function(e){oe(e.target.value)});var ie=function(e,t){switch(e){case"delete":return c.a.createElement(N.a,{key:t,color:"red"});case"edit":return c.a.createElement(C.a,{key:t,color:"black"});case"play":return c.a.createElement(j.a,{key:t,color:"black"});case"pause":return c.a.createElement(O.a,{key:t,color:"black"});case"attachment":return c.a.createElement(S.a,{key:t,color:"blue"});case"correct":return c.a.createElement(I.a,{key:t,color:"green"});case"close":return c.a.createElement(W.a,{key:t,color:"red"});default:return null}};return c.a.createElement(x.a,{conatiner:!0,className:"w-full"},c.a.createElement(x.a,{item:!0},c.a.createElement(x.a,{container:!0,justify:"space-between",alignItems:"flex-start"},c.a.createElement(x.a,{item:!0},a?c.a.createElement(T,{handleSearchChange:function(e){var t=e.target.value.toLowerCase();if(t){var a=i.filter(function(e){return e.name.toLowerCase().includes(t)});$(a),G(1),ne(Math.ceil(a.length/K))}else $(i),G(1),ne(Math.ceil(i.length/K))}}):""))),c.a.createElement(x.a,{item:!0},c.a.createElement(u.a,{elevation:1},c.a.createElement(p.a,{className:J.container},c.a.createElement(s.a,null,c.a.createElement(f.a,{className:J.table_head},function(){var e=null,t=null;console.log(null);var a=v.map(function(t){return e=t,c.a.createElement(d.a,{key:t.id+B,align:t.align,style:{minWidth:t.minWidth}},t.label)});return k&&(t=c.a.createElement(d.a,{key:e.id+B,align:e.align,style:{minWidth:e.minWidth}},"Actions")),c.a.createElement(b.a,null,a,t)}()),c.a.createElement(m.a,{ref:F},function(){var e=null;return Z.slice((M-1)*K,(M-1)*K+K).map(function(t){return c.a.createElement(P,{role:"checkbox",tabIndex:-1,key:t.id+"Row"},v.map(function(a){e=a;var n=t[a.id];return c.a.createElement(d.a,{key:a.id+"Cell"+B,align:a.align,className:J.cell,style:{color:a.color(n)}},a.type&&"link"===a.type?c.a.createElement("div",{color:"inherit",onClick:function(e){return A(e,t)},style:{cursor:"pointer"}},n):a.type&&"image"===a.type?c.a.createElement("span",{style:{display:"inline-flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement(_.a,{src:t.src&&t.src,className:"small"})," ",c.a.createElement("span",{className:"px-4"},n)):n)}),k?c.a.createElement(d.a,{key:e.id+"Cell",align:e.align},k.map(function(e,a){return c.a.createElement(w.a,{key:a+"Action"+B,"aria-label":"upload picture",component:"span",style:{paddingTop:0,paddingBottom:0},onClick:function(a){return R(a,Object(n.a)({type:e},t))}},ie(e,a))})):"")})}()))))),c.a.createElement(x.a,{item:!0},c.a.createElement(x.a,{container:!0,justify:"space-between",alignItems:"flex-start",className:J.paginationContainer},c.a.createElement(x.a,{item:!0},t?c.a.createElement(g.a,{color:"secondary",shape:"rounded",count:ae,page:M,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){G(t)}}):""),c.a.createElement(x.a,{item:!0},o?c.a.createElement(y.a,{className:J.rowPageContainer,style:{padding:15}},c.a.createElement(E.a,{labelId:"customized-select-label",id:"customized-select",value:K,IconComponent:z,onChange:function(e){G(1),Q(+e.target.value)},input:c.a.createElement(D,null)},c.a.createElement(h.a,{value:5},"5"),c.a.createElement(h.a,{value:10},"10"),c.a.createElement(h.a,{value:20},"20"),c.a.createElement(h.a,{value:30},"30"))):""))))}},727:function(e,t,a){"use strict";a.r(t);var n=a(204),r=a(0),l=a.n(r),c=a(7),o=a(51),i=a(272),u=a(238),s=a(20),m=a(17),d=a(249);t.default=function(){var e=Object(m.b)(),t=Object(m.c)(function(e){return e.adminGetAllClient});console.log("Payload:"+t.users);Object(r.useEffect)(function(){e(Object(u.b)(s.g))},[]),!0===t.isSuccessful&&console.log("Check: "+t.users);return 0===t.users.length?l.a.createElement(o.a,null):l.a.createElement(n.a,{title:"Dropdowns",breadcrumbs:[{name:"All Clients",active:!0}]},l.a.createElement(d.a,{action:"Upload Document"}),l.a.createElement(i.a,{pagination:!0,pagerows:!0,columns:[{id:"id",label:"ID",minWidth:20,color:function(e){return"blue"}},{id:"user",label:"User",minWidth:100,color:function(e){return"blue"}},{id:"accountType",label:"Account Type",minWidth:50,color:function(e){return"blue"}},{id:"companyAddress",label:"Address",minWidth:150,align:"center",color:function(e){return"blue"}},{id:"phoneNumber",label:"Phone Number",minWidth:50,align:"center",color:function(e){return"blue"}},{id:"email",label:"Email",minWidth:100,align:"center",color:function(e){return"blue"}},{id:"website",label:"Website",minWidth:80,align:"center",color:function(e){return"blue"}},{id:"view",label:"Actions",minWidth:150,align:"center",color:function(e){return"blue"},type:"link"}],rows:function(t){var a=[];return console.log("Data: "+JSON.stringify(t)),t&&t.map(function(t,n){return a.push({id:n+1,user:t.companyName,accountType:t.accountType,companyAddress:t.companyAddress,phoneNumber:t.phoneNumber,email:t.email,website:t.websiteUrl,view:l.a.createElement(c.b,{onClick:function(){return function(t){var a=s.h+t;e(Object(u.c)(a))}(t._id)},to:"/superadmin/client/details/userId=".concat(t._id),className:"bg-green-700 text-white rounded-full px-2 py-2"},"View Details")}),null}),a}(t.users),handleActionClick:function(e,t){alert(JSON.stringify(t))},handleLinkClick:function(e,t){}}))}}}]);
//# sourceMappingURL=52.9d7502d2.chunk.js.map