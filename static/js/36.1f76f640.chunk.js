(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{199:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n.n(r),l=(n(33),n(34)),o=n(208),i=n(209),u=l.a.create("page"),s=function(e){var t=e.breadcrumbs,n=e.tag,r=e.className,l=e.children,s=Object(a.a)(e,["breadcrumbs","tag","className","children"]),m=u.b("px-3",r);return c.a.createElement(n,Object.assign({className:m},s),c.a.createElement("div",{className:u.e("header")},t&&c.a.createElement(o.a,{className:u.e("breadcrumb")},c.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,t){var n=e.name,a=e.active;return c.a.createElement(i.a,{key:t,active:a},n)}))),l)};s.defaultProps={tag:"div",title:""},t.a=s},210:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"e",function(){return y}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return E}),n.d(t,"g",function(){return v}),n.d(t,"j",function(){return w}),n.d(t,"c",function(){return x}),n.d(t,"i",function(){return N}),n.d(t,"h",function(){return j}),n.d(t,"d",function(){return k}),n.d(t,"k",function(){return O});var a=n(4),r=n(21),c=function(e){return{type:a.o,payload:e}},l=function(e){return{type:a.m,payload:e}},o=function(e){return{type:a.z,payload:e}},i=function(e){return{type:a.g,payload:e}},u=function(e){return{type:a.q,payload:e}},s=function(e){return{type:a.p,payload:e}},m=function(e){return{type:a.h,payload:e}},d=function(e){return{type:a.k,payload:e}},f=function(e){return{type:a.A,payload:e}},p=function(e){return{type:a.i,payload:e}},b=function(e){return{type:a.b,payload:e}},g=function(e){return Object(r.a)(e,d)},y=function(e){return Object(r.a)(e,p)},h=function(e,t){return Object(r.c)(e,t,b)},E=function(e){return Object(r.a)(e,c)},v=function(e){return Object(r.a)(e,l)},w=function(e,t){return Object(r.c)(e,t,o)},x=function(e){return Object(r.a)(e,i)},N=function(e){return Object(r.a)(e,u)},j=function(e){return Object(r.a)(e,s)},k=function(e){return Object(r.a)(e,m)},O=function(e,t){return Object(r.c)(e,t,f)}},212:function(e,t,n){"use strict";var a=n(7),r=n(23),c=n(1),l=n.n(c),o=n(597),i=n(205),u=n(613),s=n(615),m=n(617),d=n(603),f=n(614),p=n(616),b=n(602),g=n(651),y=n(665),h=n(618),E=n(649),v=n(663),w=n(604),x=n(612),N=n(596),j=n(605),k=n(606),O=n(607),C=n(608),A=n(609),W=n(610),S=n(611),_=n(595),I=function(e){var t=e.handleSearchChange;return l.a.createElement("div",{className:"search hidden sm:block",style:{marginBottom:30}},l.a.createElement("input",{type:"text",class:"search__input input placeholder-theme-13",placeholder:"Search",onChange:t}),l.a.createElement(_.a,{className:"search__icon"}))},z=n(664);n.d(t,"a",function(){return B});var T=function(e){return l.a.createElement(N.a,{className:e.className,style:{color:"white",paddingRight:5,paddingLeft:5}})},P=Object(o.a)(function(e){return{root:{width:"100%"},small:{width:e.spacing(3),height:e.spacing(3)},container:{maxHeight:900},paginationContainer:{marginTop:20,height:32},rowPageContainer:{height:"2px"}}}),L=Object(i.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}})(b.a),R=Object(i.a)(function(e){return{root:{"label + &":{marginTop:e.spacing(3)},height:"10px"},input:{borderRadius:4,position:"relative",backgroundColor:"#f50057",color:"#fff",border:"1px solid #ced4da",fontSize:"0.875rem",padding:"5px 26px 5px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Poppins"].join(","),"&:focus":{borderRadius:4,backgroundColor:"#f50057",color:"#fff"}}}})(v.a);function B(e){var t=e.pagination,n=e.search,o=e.pagerows,i=e.rows,v=e.columns,N=e.actions,_=e.handleLinkClick,B=e.handleActionClick,D=e.id,F=(e.withEmoji,Object(c.useRef)(0)),H=P(),G=l.a.useState(1),J=Object(r.a)(G,2),M=J[0],q=J[1],U=l.a.useState(5),V=Object(r.a)(U,2),X=V[0],Y=V[1],K=l.a.useState(i),Q=Object(r.a)(K,2),Z=Q[0],$=Q[1],ee=l.a.useState(Z.length/X),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],re=l.a.useState("Name"),ce=Object(r.a)(re,2),le=ce[0],oe=ce[1];console.log(le);console.log(function(e){oe(e.target.value)});var ie=function(e,t){switch(e){case"delete":return l.a.createElement(j.a,{key:t,color:"red"});case"edit":return l.a.createElement(k.a,{key:t,color:"black"});case"play":return l.a.createElement(O.a,{key:t,color:"black"});case"pause":return l.a.createElement(C.a,{key:t,color:"black"});case"attachment":return l.a.createElement(A.a,{key:t,color:"blue"});case"correct":return l.a.createElement(W.a,{key:t,color:"green"});case"close":return l.a.createElement(S.a,{key:t,color:"red"});default:return null}};return l.a.createElement(x.a,{container:!0,className:"w-full",style:{display:"flex",flexDirection:"column"}},l.a.createElement(x.a,{item:!0},l.a.createElement(x.a,{container:!0,justify:"space-between",alignItems:"flex-start"},l.a.createElement(x.a,{item:!0},n?l.a.createElement(I,{handleSearchChange:function(e){var t=e.target.value.toLowerCase();if(t){var n=i.filter(function(e){return e.name.toLowerCase().includes(t)});$(n),q(1),ae(Math.ceil(n.length/X))}else $(i),q(1),ae(Math.ceil(i.length/X))}}):""))),l.a.createElement(x.a,{item:!0},l.a.createElement(u.a,{elevation:1},l.a.createElement(f.a,{className:H.container},l.a.createElement(s.a,null,l.a.createElement(p.a,{className:H.table_head},function(){var e=null,t=null;console.log(null);var n=v.map(function(t){return e=t,l.a.createElement(d.a,{key:t.id+D,align:t.align,style:{minWidth:t.minWidth}},t.label)});return N&&(t=l.a.createElement(d.a,{key:e.id+D,align:e.align,style:{minWidth:e.minWidth}},"Actions")),l.a.createElement(b.a,null,n,t)}()),l.a.createElement(m.a,{ref:F},function(){var e=null;return Z.slice((M-1)*X,(M-1)*X+X).map(function(t){return l.a.createElement(L,{role:"checkbox",tabIndex:-1,key:t.id+"Row"},v.map(function(n){e=n;var a=t[n.id];return l.a.createElement(d.a,{key:n.id+"Cell"+D,align:n.align,className:H.cell,style:{color:n.color(a)}},n.type&&"link"===n.type?l.a.createElement("div",{color:"inherit",onClick:function(e){return _(e,t)},style:{cursor:"pointer"}},a):n.type&&"image"===n.type?l.a.createElement("span",{style:{display:"inline-flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(z.a,{src:t.src&&t.src,className:"small"}),"",l.a.createElement("span",{className:"px-4"},a)):a)}),N?l.a.createElement(d.a,{key:e.id+"Cell",align:e.align},N.map(function(e,n){return l.a.createElement(w.a,{key:n+"Action"+D,"aria-label":"upload picture",component:"span",style:{paddingTop:0,paddingBottom:0},onClick:function(n){return B(n,Object(a.a)({type:e},t))}},ie(e,n))})):"")})}()))))),l.a.createElement(x.a,{item:!0},l.a.createElement(x.a,{container:!0,justify:"space-between",alignItems:"flex-start",className:H.paginationContainer},l.a.createElement(x.a,{item:!0},t?l.a.createElement(g.a,{color:"secondary",shape:"rounded",count:ne,page:M,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){q(t)}}):""),l.a.createElement(x.a,{item:!0},o?l.a.createElement(h.a,{className:H.rowPageContainer,style:{padding:15}},l.a.createElement(E.a,{labelId:"customized-select-label",id:"customized-select",value:X,IconComponent:T,onChange:function(e){q(1),Y(+e.target.value)},input:l.a.createElement(R,null)},l.a.createElement(y.a,{value:5},"5"),l.a.createElement(y.a,{value:10},"10"),l.a.createElement(y.a,{value:20},"20"),l.a.createElement(y.a,{value:30},"30"))):""))))}},637:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n(408),c=n(1),l=n.n(c),o=n(17),i=n(8),u=n(199),s=n(50),m=n(212),d=n(210),f=n(22),p=n(177),b=n(237),g=n(191),y=n(12),h=n(25),E=r.a.div.withConfig({displayName:"clientPage__Select",componentId:"xtho8d-0"})([""]);t.default=function(){var e=Object(o.b)(),t=Object(o.c)(function(e){return e.adminGetAllClient}),n=Object(c.useState)(!1),r=Object(a.a)(n,2),v=r[0],w=r[1],x=Object(c.useState)(),N=Object(a.a)(x,2),j=N[0],k=N[1],O=Object(o.c)(function(e){return e.superAdminGetAllAdmins.admins});Object(c.useEffect)(function(){e(Object(d.f)(f.n))},[]);return 0===t.users.length?l.a.createElement(s.a,null):l.a.createElement(u.a,{title:"Dropdowns",breadcrumbs:[{name:"Clients",active:!0}]},l.a.createElement("div",{style:{overflowX:"auto",overflowY:"hidden"}},l.a.createElement(m.a,{pagination:!0,pagerows:!0,columns:[{id:"id",align:"center",label:"ID",minWidth:20,color:function(e){return"blue"}},{id:"user",align:"center",label:"Client",minWidth:100,color:function(e){return"blue"}},{id:"accountType",align:"center",label:"Account Type",minWidth:50,color:function(e){return"blue"}},{id:"companyAddress",label:"Address",minWidth:150,align:"center",color:function(e){return"blue"}},{id:"phoneNumber",label:"Phone Number",minWidth:50,align:"center",color:function(e){return"blue"}},{id:"email",label:"Email",minWidth:100,align:"center",color:function(e){return"blue"}},{id:"website",label:"Website",minWidth:80,align:"center",color:function(e){return"blue"}},{id:"admin",label:"Admin",minWidth:100,align:"center",color:function(e){return"black"}},{id:"actions",label:"Actions",minWidth:"fit-content",align:"center",color:function(e){return"blue"}}],rows:function(t){var n=[];return t&&t.map(function(t,a){return n.push({id:a+1,user:t.companyName,accountType:t.accountType,admin:t.admin||"- -",companyAddress:t.companyAddress,phoneNumber:t.phoneNumber,email:t.email,website:t.websiteUrl,actions:l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement(i.b,{onClick:function(){return e=t._id,void localStorage.setItem("client_id",e);var e},to:"/superadmin/client/details/userId=".concat(t._id),className:"button bg-green-700 text-white rounded-full px-2 py-2",style:{minWidth:"110px"}},"View Details"),l.a.createElement(p.a,{color:"secondary",size:"sm",className:"p-1",style:{fontSize:".9rem",minWidth:"110px"},onClick:function(){return t._id,w(!0),void e(Object(h.c)(f.s))}},"Assign Admin"))})}),n}(t.users)}),v&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"},l.a.createElement("div",{className:"relative w-auto my-6 mx-auto max-w-3xl"},l.a.createElement("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},l.a.createElement("div",{className:"flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t"},l.a.createElement("h3",{className:"text-2xl font-semibold",style:{color:"rgba(0,0,0,.7)"}},"Select Admin to assign")),l.a.createElement("div",{className:"relative p-0 flex-auto",style:{color:"black"}},0!==O.length&&l.a.createElement(b.a,{className:"p-0 overflow-y-auto",style:{maxHeight:"300px"}},O.map(function(e,t){return l.a.createElement(E,{className:"border-b border-solid border-gray-300 cursor-pointer",key:"admin-".concat(t+1),onClick:function(){return k(!0)}},l.a.createElement(y.a,{className:"m-3",type:"radio",id:e.fullName+t+1,name:"admins",value:e.fullName,checked:j}),l.a.createElement(g.a,{className:"cursor-pointer",for:e.fullName+t+1},e.fullName))}))),l.a.createElement("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b"},j&&l.a.createElement("button",{className:"bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 assign",type:"button",style:{transition:"all .15s ease"}},"Assign"),l.a.createElement("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:function(){return w(!1)}},"Close"))))),l.a.createElement("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"}))))}}}]);
//# sourceMappingURL=36.1f76f640.chunk.js.map