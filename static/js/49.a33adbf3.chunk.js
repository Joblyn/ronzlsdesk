(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{209:function(e,t,a){"use strict";a.d(t,"a",function(){return y}),a.d(t,"e",function(){return g}),a.d(t,"b",function(){return f}),a.d(t,"f",function(){return N}),a.d(t,"g",function(){return x}),a.d(t,"j",function(){return E}),a.d(t,"c",function(){return v}),a.d(t,"i",function(){return _}),a.d(t,"h",function(){return k}),a.d(t,"d",function(){return w});var n=a(4),l=a(21),r=function(e){return{type:n.o,payload:e}},o=function(e){return{type:n.m,payload:e}},m=function(e){return{type:n.z,payload:e}},i=function(e){return{type:n.g,payload:e}},c=function(e){return{type:n.q,payload:e}},u=function(e){return{type:n.p,payload:e}},b=function(e){return{type:n.h,payload:e}},s=function(e){return{type:n.k,payload:e}},d=function(e){return{type:n.i,payload:e}},p=function(e){return{type:n.b,payload:e}},y=function(e){return Object(l.a)(e,s)},g=function(e){return Object(l.a)(e,d)},f=function(e,t){return Object(l.c)(e,t,p)},N=function(e){return Object(l.a)(e,r)},x=function(e){return Object(l.a)(e,o)},E=function(e,t){return Object(l.c)(e,t,m)},v=function(e){return Object(l.a)(e,i)},_=function(e){return Object(l.a)(e,c)},k=function(e){return Object(l.a)(e,u)},w=function(e){return Object(l.a)(e,b)}},629:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var n=a(23),l=a(1),r=a.n(l),o=a(17),m=a(12),i=a(50),c=a(22),u=a(209);function b(){var e=Object(o.b)(),t=Object(o.c)(function(e){return e.adminGetAllClient.user}),a=Object(l.useState)({}),b=Object(n.a)(a,2),s=b[0],d=b[1];Object(l.useEffect)(function(){var t=localStorage.getItem("client_id"),a=c.p+t;e(Object(u.g)(a))},[]),Object(l.useEffect)(function(){d(t)},[t]);var p=function(e){e.currentTarget.type="date"},y=function(e){e.currentTarget.type="text",e.currentTarget.placeholder="Date of Birth"},g=function(e,t){return r.a.createElement("div",{key:"director"+(e+1)},r.a.createElement("label",{className:"font-semibold"},"Director ".concat(e+1)," "),r.a.createElement("label",{className:"font-semibold mt-2 block"},"Full Name:"),r.a.createElement(m.a,{type:"text",name:"fullName"+e,value:s.director[t].fullName,className:"intro-x login__input input mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Date of Birth:"),r.a.createElement(m.a,{type:"text",name:"dateOfBirth"+e,value:s.director[e].dateOfBirth,onFocus:p,onBlur:y,className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}))};return s?r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container sm:px-10"},r.a.createElement("div",{className:"intro-x"},r.a.createElement("div",{className:"block xl:grid grid-cols-2 gap-4 mt-3"},r.a.createElement("div",{className:"my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto "},s.director&&s.director.map(function(e,t){return g(t,t)}),r.a.createElement("label",{className:"font-semibold mt-2"},"Account Type:"),r.a.createElement(m.a,{value:s.accountType,name:"accountType",type:"text",className:"intro-x login__input input input--lg mb-2 border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Company Name:"),r.a.createElement(m.a,{type:"text",value:s.companyName||"",name:"Company Name",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Company Address:"),r.a.createElement(m.a,{type:"text",name:"companyAddress",value:s.companyAddress||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"City:"),r.a.createElement(m.a,{type:"text",name:"city",value:s.city||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Postal Code:"),r.a.createElement(m.a,{type:"text",name:"postalCode",value:s.postalCode||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Country:"),r.a.createElement(m.a,{type:"text",name:"country",value:s.country||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Phone Number:"),r.a.createElement(m.a,{type:"tel",name:"phoneNumber",value:s.phoneNumber||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Email:"),r.a.createElement(m.a,{type:"email",name:"email",value:s.email||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0})),r.a.createElement("div",{className:"xl:h-auto flex xl:py-0 xl:my-0 mb-5"},r.a.createElement("div",{className:"my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto "},r.a.createElement("label",{className:"font-semibold mt-2"},"Website:"),r.a.createElement(m.a,{type:"text",name:"websiteUrl",value:s.websiteUrl||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Company Begin:"),r.a.createElement(m.a,{type:"text",name:"companyBegin",value:s.companyBegin||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Company Reg No:"),r.a.createElement(m.a,{type:"text",name:"companyRegNo",value:s.companyRegNo||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"UTR Number:"),r.a.createElement(m.a,{type:"text",name:"utrNo",value:s.utrNo||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"VAT Submit Type:"),r.a.createElement(m.a,{type:"text",name:"vatSubmitType",value:s.vatSubmitType||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"VAT Scheme:"),r.a.createElement(m.a,{type:"text",name:"vatScheme",value:s.vatScheme||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"VAT Reg No:"),r.a.createElement(m.a,{type:"text",name:"vatRegNo",value:s.vatRegNo||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"VAT Reg Date:"),r.a.createElement(m.a,{type:"text",name:"vatRegDate",value:s.vatRegDate||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Insurance Number:"),r.a.createElement(m.a,{type:"text",name:"insuranceNumber",value:s.insuranceNumber||"",className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),r.a.createElement("label",{className:"font-semibold mt-2"},"Payee Ref No:"),r.a.createElement(m.a,{type:"text",name:"payeeRefNo",value:s.payeeRefNo||"",className:"intro-x login__input input  my-2 input--lg border border-gray-300 block",disabled:!0}))))))):r.a.createElement(i.a,null)}}}]);
//# sourceMappingURL=49.a33adbf3.chunk.js.map