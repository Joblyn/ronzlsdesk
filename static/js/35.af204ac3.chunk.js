(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{199:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n.n(r),l=(n(33),n(34)),i=n(208),o=n(209),u=l.a.create("page"),s=function(e){var t=e.breadcrumbs,n=e.tag,r=e.className,l=e.children,s=Object(a.a)(e,["breadcrumbs","tag","className","children"]),d=u.b("px-3",r);return c.a.createElement(n,Object.assign({className:d},s),c.a.createElement("div",{className:u.e("header")},t&&c.a.createElement(i.a,{className:u.e("breadcrumb")},c.a.createElement(o.a,null,"Home"),t.length&&t.map(function(e,t){var n=e.name,a=e.active;return c.a.createElement(o.a,{key:t,active:a},n)}))),l)};s.defaultProps={tag:"div",title:""},t.a=s},210:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"e",function(){return h}),n.d(t,"b",function(){return y}),n.d(t,"f",function(){return E}),n.d(t,"g",function(){return v}),n.d(t,"j",function(){return k}),n.d(t,"c",function(){return j}),n.d(t,"i",function(){return w}),n.d(t,"h",function(){return O}),n.d(t,"d",function(){return C}),n.d(t,"k",function(){return x});var a=n(4),r=n(21),c=function(e){return{type:a.o,payload:e}},l=function(e){return{type:a.m,payload:e}},i=function(e){return{type:a.z,payload:e}},o=function(e){return{type:a.g,payload:e}},u=function(e){return{type:a.q,payload:e}},s=function(e){return{type:a.p,payload:e}},d=function(e){return{type:a.h,payload:e}},m=function(e){return{type:a.k,payload:e}},f=function(e){return{type:a.A,payload:e}},p=function(e){return{type:a.i,payload:e}},b=function(e){return{type:a.b,payload:e}},g=function(e){return Object(r.a)(e,m)},h=function(e){return Object(r.a)(e,p)},y=function(e,t){return Object(r.c)(e,t,b)},E=function(e){return Object(r.a)(e,c)},v=function(e){return Object(r.a)(e,l)},k=function(e,t){return Object(r.c)(e,t,i)},j=function(e){return Object(r.a)(e,o)},w=function(e){return Object(r.a)(e,u)},O=function(e){return Object(r.a)(e,s)},C=function(e){return Object(r.a)(e,d)},x=function(e,t){return Object(r.c)(e,t,f)}},212:function(e,t,n){"use strict";var a=n(7),r=n(23),c=n(1),l=n.n(c),i=n(597),o=n(205),u=n(613),s=n(615),d=n(617),m=n(603),f=n(614),p=n(616),b=n(602),g=n(651),h=n(665),y=n(618),E=n(649),v=n(663),k=n(604),j=n(612),w=n(596),O=n(605),C=n(606),x=n(607),N=n(608),W=n(609),S=n(610),R=n(611),q=n(595),D=function(e){var t=e.handleSearchChange;return l.a.createElement("div",{className:"search hidden sm:block",style:{marginBottom:30}},l.a.createElement("input",{type:"text",class:"search__input input placeholder-theme-13",placeholder:"Search",onChange:t}),l.a.createElement(q.a,{className:"search__icon"}))},I=n(664);n.d(t,"a",function(){return z});var A=function(e){return l.a.createElement(w.a,{className:e.className,style:{color:"white",paddingRight:5,paddingLeft:5}})},L=Object(i.a)(function(e){return{root:{width:"100%"},small:{width:e.spacing(3),height:e.spacing(3)},container:{maxHeight:900},paginationContainer:{marginTop:20,height:32},rowPageContainer:{height:"2px"}}}),T=Object(o.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}})(b.a),_=Object(o.a)(function(e){return{root:{"label + &":{marginTop:e.spacing(3)},height:"10px"},input:{borderRadius:4,position:"relative",backgroundColor:"#f50057",color:"#fff",border:"1px solid #ced4da",fontSize:"0.875rem",padding:"5px 26px 5px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Poppins"].join(","),"&:focus":{borderRadius:4,backgroundColor:"#f50057",color:"#fff"}}}})(v.a);function z(e){var t=e.pagination,n=e.search,i=e.pagerows,o=e.rows,v=e.columns,w=e.actions,q=e.handleLinkClick,z=e.handleActionClick,B=e.id,P=(e.withEmoji,Object(c.useRef)(0)),F=L(),H=l.a.useState(1),J=Object(r.a)(H,2),M=J[0],U=J[1],V=l.a.useState(5),X=Object(r.a)(V,2),G=X[0],K=X[1],Q=l.a.useState(o),Y=Object(r.a)(Q,2),Z=Y[0],$=Y[1],ee=l.a.useState(Z.length/G),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],re=l.a.useState("Name"),ce=Object(r.a)(re,2),le=ce[0],ie=ce[1];console.log(le);console.log(function(e){ie(e.target.value)});var oe=function(e,t){switch(e){case"delete":return l.a.createElement(O.a,{key:t,color:"red"});case"edit":return l.a.createElement(C.a,{key:t,color:"black"});case"play":return l.a.createElement(x.a,{key:t,color:"black"});case"pause":return l.a.createElement(N.a,{key:t,color:"black"});case"attachment":return l.a.createElement(W.a,{key:t,color:"blue"});case"correct":return l.a.createElement(S.a,{key:t,color:"green"});case"close":return l.a.createElement(R.a,{key:t,color:"red"});default:return null}};return l.a.createElement(j.a,{container:!0,className:"w-full",style:{display:"flex",flexDirection:"column"}},l.a.createElement(j.a,{item:!0},l.a.createElement(j.a,{container:!0,justify:"space-between",alignItems:"flex-start"},l.a.createElement(j.a,{item:!0},n?l.a.createElement(D,{handleSearchChange:function(e){var t=e.target.value.toLowerCase();if(t){var n=o.filter(function(e){return e.name.toLowerCase().includes(t)});$(n),U(1),ae(Math.ceil(n.length/G))}else $(o),U(1),ae(Math.ceil(o.length/G))}}):""))),l.a.createElement(j.a,{item:!0},l.a.createElement(u.a,{elevation:1},l.a.createElement(f.a,{className:F.container},l.a.createElement(s.a,null,l.a.createElement(p.a,{className:F.table_head},function(){var e=null,t=null;console.log(null);var n=v.map(function(t){return e=t,l.a.createElement(m.a,{key:t.id+B,align:t.align,style:{minWidth:t.minWidth}},t.label)});return w&&(t=l.a.createElement(m.a,{key:e.id+B,align:e.align,style:{minWidth:e.minWidth}},"Actions")),l.a.createElement(b.a,null,n,t)}()),l.a.createElement(d.a,{ref:P},function(){var e=null;return Z.slice((M-1)*G,(M-1)*G+G).map(function(t){return l.a.createElement(T,{role:"checkbox",tabIndex:-1,key:t.id+"Row"},v.map(function(n){e=n;var a=t[n.id];return l.a.createElement(m.a,{key:n.id+"Cell"+B,align:n.align,className:F.cell,style:{color:n.color(a)}},n.type&&"link"===n.type?l.a.createElement("div",{color:"inherit",onClick:function(e){return q(e,t)},style:{cursor:"pointer"}},a):n.type&&"image"===n.type?l.a.createElement("span",{style:{display:"inline-flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(I.a,{src:t.src&&t.src,className:"small"}),"",l.a.createElement("span",{className:"px-4"},a)):a)}),w?l.a.createElement(m.a,{key:e.id+"Cell",align:e.align},w.map(function(e,n){return l.a.createElement(k.a,{key:n+"Action"+B,"aria-label":"upload picture",component:"span",style:{paddingTop:0,paddingBottom:0},onClick:function(n){return z(n,Object(a.a)({type:e},t))}},oe(e,n))})):"")})}()))))),l.a.createElement(j.a,{item:!0},l.a.createElement(j.a,{container:!0,justify:"space-between",alignItems:"flex-start",className:F.paginationContainer},l.a.createElement(j.a,{item:!0},t?l.a.createElement(g.a,{color:"secondary",shape:"rounded",count:ne,page:M,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){U(t)}}):""),l.a.createElement(j.a,{item:!0},i?l.a.createElement(y.a,{className:F.rowPageContainer,style:{padding:15}},l.a.createElement(E.a,{labelId:"customized-select-label",id:"customized-select",value:G,IconComponent:A,onChange:function(e){U(1),K(+e.target.value)},input:l.a.createElement(_,null)},l.a.createElement(h.a,{value:5},"5"),l.a.createElement(h.a,{value:10},"10"),l.a.createElement(h.a,{value:20},"20"),l.a.createElement(h.a,{value:30},"30"))):""))))}},620:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(1),r=n.n(a),c=n(17),l=n(177),i=n(199),o=n(50),u=n(212),s=n(210),d=n(22);function m(){var e=Object(c.b)(),t=Object(c.c)(function(e){return e.getAllRequests});Object(a.useEffect)(function(){e(Object(s.d)(d.f))},[]);return t.isSuccessful?r.a.createElement(i.a,{title:"Dropdowns",breadcrumbs:[{name:"Requests",active:!0}]},r.a.createElement("div",{style:{overflowX:"auto"}},r.a.createElement(u.a,{pagination:!0,pagerows:!0,columns:[{id:"id",align:"center",label:"ID",minWidth:20,color:function(e){return"blue"}},{id:"client",align:"center",label:"Client",minWidth:100,color:function(e){return"blue"}},{id:"requestTitle",align:"center",label:"Request Title",minWidth:100,color:function(e){return"blue"}},{id:"requestDescription",align:"center",label:"Request Description",minWidth:150,color:function(e){return"blue"}},{id:"documentUploaded",align:"center",label:"Document Uploaded",minWidth:100,color:function(e){return"blue"}},{id:"date",align:"center",label:"Date Created",minWidth:100,color:function(e){return"black"}},{id:"view",align:"center",label:"Action",minWidth:150,type:"link"}],rows:function(e){var t=[];return e&&e.map(function(e,n){return t.push({id:n+1,view:r.a.createElement(l.a,{className:"bg-green-700 text-white rounded-full px-2 py-2"},"View Document")})}),t}(t.requests),handleLinkClick:function(e,t){}}))):r.a.createElement(o.a,null)}}}]);
//# sourceMappingURL=35.af204ac3.chunk.js.map