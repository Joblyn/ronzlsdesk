(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{199:function(e,a,t){"use strict";var n=t(19),r=t(1),l=t.n(r),c=(t(33),t(34)),i=t(211),o=t(212),s=c.a.create("page"),u=function(e){var a=e.breadcrumbs,t=e.tag,r=e.className,c=e.children,u=Object(n.a)(e,["breadcrumbs","tag","className","children"]),m=s.b("px-3",r);return l.a.createElement(t,Object.assign({className:m},u),l.a.createElement("div",{className:s.e("header")},a&&l.a.createElement(i.a,{className:s.e("breadcrumb")},l.a.createElement(o.a,null,"Home"),a.length&&a.map(function(e,a){var t=e.name,n=e.active;return l.a.createElement(o.a,{key:a,active:n},t)}))),c)};u.defaultProps={tag:"div",title:""},a.a=u},206:function(e,a,t){"use strict";var n=t(7),r=t(23),l=t(1),c=t.n(l),i=t(591),o=t(207),s=t(607),u=t(609),m=t(611),d=t(597),p=t(608),f=t(610),b=t(596),g=t(648),h=t(663),E=t(612),y=t(646),v=t(661),w=t(598),k=t(606),C=t(590),N=t(599),x=t(600),j=t(601),S=t(602),W=t(603),O=t(604),A=t(605),I=t(589),_=function(e){var a=e.handleSearchChange;return c.a.createElement("div",{className:"search hidden sm:block",style:{marginBottom:30}},c.a.createElement("input",{type:"text",class:"search__input input placeholder-theme-13",placeholder:"Search",onChange:a}),c.a.createElement(I.a,{className:"search__icon"}))},z=t(662);t.d(a,"a",function(){return B});var T=function(e){return c.a.createElement(C.a,{className:e.className,style:{color:"white",paddingRight:5,paddingLeft:5}})},L=Object(i.a)(function(e){return{root:{width:"100%"},small:{width:e.spacing(3),height:e.spacing(3)},container:{maxHeight:900},paginationContainer:{marginTop:20,height:32},rowPageContainer:{height:"2px"}}}),P=Object(o.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}})(b.a),R=Object(o.a)(function(e){return{root:{"label + &":{marginTop:e.spacing(3)},height:"10px"},input:{borderRadius:4,position:"relative",backgroundColor:"#f50057",color:"#fff",border:"1px solid #ced4da",fontSize:"0.875rem",padding:"5px 26px 5px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Poppins"].join(","),"&:focus":{borderRadius:4,backgroundColor:"#f50057",color:"#fff"}}}})(v.a);function B(e){var a=e.pagination,t=e.search,i=e.pagerows,o=e.rows,v=e.columns,C=e.actions,I=e.handleLinkClick,B=e.handleActionClick,D=e.id,F=(e.withEmoji,Object(l.useRef)(0)),H=L(),J=c.a.useState(1),M=Object(r.a)(J,2),U=M[0],V=M[1],X=c.a.useState(5),Y=Object(r.a)(X,2),q=Y[0],G=Y[1],K=c.a.useState(o),Q=Object(r.a)(K,2),Z=Q[0],$=Q[1],ee=c.a.useState(Z.length/q),ae=Object(r.a)(ee,2),te=ae[0],ne=ae[1],re=c.a.useState("Name"),le=Object(r.a)(re,2),ce=le[0],ie=le[1];console.log(ce);console.log(function(e){ie(e.target.value)});var oe=function(e,a){switch(e){case"delete":return c.a.createElement(N.a,{key:a,color:"red"});case"edit":return c.a.createElement(x.a,{key:a,color:"black"});case"play":return c.a.createElement(j.a,{key:a,color:"black"});case"pause":return c.a.createElement(S.a,{key:a,color:"black"});case"attachment":return c.a.createElement(W.a,{key:a,color:"blue"});case"correct":return c.a.createElement(O.a,{key:a,color:"green"});case"close":return c.a.createElement(A.a,{key:a,color:"red"});default:return null}};return c.a.createElement(k.a,{container:!0,className:"w-full",style:{display:"flex",flexDirection:"column"}},c.a.createElement(k.a,{item:!0},c.a.createElement(k.a,{container:!0,justify:"space-between",alignItems:"flex-start"},c.a.createElement(k.a,{item:!0},t?c.a.createElement(_,{handleSearchChange:function(e){var a=e.target.value.toLowerCase();if(a){var t=o.filter(function(e){return e.name.toLowerCase().includes(a)});$(t),V(1),ne(Math.ceil(t.length/q))}else $(o),V(1),ne(Math.ceil(o.length/q))}}):""))),c.a.createElement(k.a,{item:!0},c.a.createElement(s.a,{elevation:1},c.a.createElement(p.a,{className:H.container},c.a.createElement(u.a,null,c.a.createElement(f.a,{className:H.table_head},function(){var e=null,a=null;console.log(null);var t=v.map(function(a){return e=a,c.a.createElement(d.a,{key:a.id+D,align:a.align,style:{minWidth:a.minWidth,fontSize:a.fontSize}},a.label)});return C&&(a=c.a.createElement(d.a,{key:e.id+D,align:e.align,style:{minWidth:e.minWidth,fontSize:e.fontSize}},"Actions")),c.a.createElement(b.a,null,t,a)}()),c.a.createElement(m.a,{ref:F},function(){var e=null;return Z.slice((U-1)*q,(U-1)*q+q).map(function(a){return c.a.createElement(P,{role:"checkbox",tabIndex:-1,key:a.id+"Row"},v.map(function(t){e=t;var n=a[t.id];return c.a.createElement(d.a,{key:t.id+"Cell"+D,align:t.align,className:H.cell,style:{color:t.color(n)}},t.type&&"link"===t.type?c.a.createElement("div",{color:"inherit",onClick:function(e){return I(e,a)},style:{cursor:"pointer"}},n):t.type&&"image"===t.type?c.a.createElement("span",{style:{display:"inline-flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement(z.a,{src:a.src&&a.src,className:"small"}),"",c.a.createElement("span",{className:"px-4"},n)):n)}),C?c.a.createElement(d.a,{key:e.id+"Cell",align:e.align},C.map(function(e,t){return c.a.createElement(w.a,{key:t+"Action"+D,"aria-label":"upload picture",component:"span",style:{paddingTop:0,paddingBottom:0},onClick:function(t){return B(t,Object(n.a)({type:e},a))}},oe(e,t))})):"")})}()))))),c.a.createElement(k.a,{item:!0},c.a.createElement(k.a,{container:!0,justify:"space-between",alignItems:"flex-start",className:H.paginationContainer},c.a.createElement(k.a,{item:!0},a?c.a.createElement(g.a,{color:"secondary",shape:"rounded",count:te,page:U,showFirstButton:!0,showLastButton:!0,onChange:function(e,a){V(a)}}):""),c.a.createElement(k.a,{item:!0},i?c.a.createElement(E.a,{className:H.rowPageContainer,style:{padding:15}},c.a.createElement(y.a,{labelId:"customized-select-label",id:"customized-select",value:q,IconComponent:T,onChange:function(e){V(1),G(+e.target.value)},input:c.a.createElement(R,null)},c.a.createElement(h.a,{value:5},"5"),c.a.createElement(h.a,{value:10},"10"),c.a.createElement(h.a,{value:20},"20"),c.a.createElement(h.a,{value:30},"30"))):""))))}},628:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return s});var n=t(1),r=t.n(n),l=t(199),c=t(50),i=t(206),o=t(8);function s(e){var a=e.location.state,t=a.adminId,n=a.clients;return null===n?r.a.createElement(c.a,null):r.a.createElement(l.a,{title:"Dropdowns",breadcrumbs:[{name:"Admin/Clients",active:!0}]},r.a.createElement("div",{style:{overflowX:"auto",overflowY:"hidden"}},r.a.createElement(i.a,{pagination:!0,pagerows:!0,columns:[{id:"id",align:"center",label:"ID",minWidth:20,color:function(e){return"blue"}},{id:"client",align:"center",label:"Client",minWidth:100,color:function(e){return"blue"}},{id:"accountType",align:"center",label:"Account Type",minWidth:50,color:function(e){return"blue"}},{id:"companyAddress",label:"Address",minWidth:150,align:"center",color:function(e){return"blue"}},{id:"phoneNumber",label:"Phone Number",minWidth:50,align:"center",color:function(e){return"blue"}},{id:"email",label:"Email",minWidth:100,align:"center",color:function(e){return"blue"}},{id:"website",label:"Website",minWidth:80,align:"center",color:function(e){return"blue"}},{id:"action",label:"Action",minWidth:150,align:"center",color:function(e){return"blue"}}],rows:function(e){var a=[];return e&&e.reverse().map(function(e,n){return a.push({id:n+1,client:e.companyName,accountType:e.accountType,companyAddress:e.companyAddress,phoneNumber:e.phoneNumber,email:e.email,website:e.websiteUrl,action:r.a.createElement(o.b,{onClick:function(){return a=e._id,void localStorage.setItem("client_id",a);var a},to:"/superadmin/".concat(t,"/clients/").concat(e._id),className:"button bg-green-700 text-white rounded-full px-2 py-2"},"View Details")})}),a}(n)})))}}}]);
//# sourceMappingURL=41.e6f885f6.chunk.js.map