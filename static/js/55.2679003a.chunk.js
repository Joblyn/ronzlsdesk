(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{221:function(e,t,a){"use strict";a.d(t,"c",function(){return m}),a.d(t,"d",function(){return s}),a.d(t,"e",function(){return b}),a.d(t,"a",function(){return d}),a.d(t,"b",function(){return p});var n=a(7),l=a(40),r=function(e){return{type:n.k,payload:e}},o=function(e){return{type:n.i,payload:e}},c=function(e){return{type:n.t,payload:e}},u=function(e){return{type:n.e,payload:e}},i=function(e){return{type:n.f,payload:e}},m=function(e){return Object(l.a)(e,r)},s=function(e){return Object(l.a)(e,o)},b=function(e,t){return Object(l.c)(e,t,c)},d=function(e){return Object(l.a)(e,u)},p=function(e){return Object(l.a)(e,i)}},727:function(e,t,a){"use strict";a.r(t);var n=a(58),l=a(17),r=a(8),o=a(22),c=a(0),u=a.n(c),i=a(43),m=a(221),s=a(19),b=a(50),d=a(12),p=a(20),g=a(16),f=a(77);t.default=function(){var e=Object(c.useState)([1]),t=Object(o.a)(e,2),a=t[0],y=t[1],v=Object(c.useState)(!0),N=Object(o.a)(v,2),E=N[0],x=N[1],h=Object(c.useState)({}),O=Object(o.a)(h,2),_=O[0],C=O[1],j=Object(c.useState)(1),k=Object(o.a)(j,2),w=k[0],S=k[1],R={},T=Object(c.useState)(),B=Object(o.a)(T,2),A=B[0],D=B[1],U=Object(g.b)(),V=Object(g.c)(function(e){return e.adminGetAllClient.user});console.log(D);var J=Object(c.useState)({}),P=Object(o.a)(J,2),F=P[0],I=P[1],G=Object(c.useState)([{}]),W=Object(o.a)(G,2),q=W[0],z=W[1];Object(c.useEffect)(function(){I(V),z(V.director)},[V]);console.log(function(e,t){R[e.target.name]=e.target.value,C(Object(r.a)({},_,Object(l.a)({},e.target.name,e.target.value)))});console.log(function(e){var t=Object(n.a)(a);t.splice(e,1),y(t),S(w-1)});console.log(function(){y([].concat(Object(n.a)(a),[{firstName:"",dateOfBirth:""}])),S(w+1)});var H=function(e){e.currentTarget.type="date"},K=function(e){e.currentTarget.type="text",e.currentTarget.placeholder="Date of Birth"},L=function(e,t){return u.a.createElement("div",{key:"director"+(e+1)},u.a.createElement("label",{className:"font-semibold"},"Director ".concat(e+1)," "),u.a.createElement("label",{className:"font-semibold mt-2 block"},"Full Name:"),u.a.createElement(d.a,{type:"text",name:"fullName"+e,value:F.director[t].fullName,onChange:function(e){return z(e.target.value)},className:"intro-x login__input input mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Date of Birth:"),u.a.createElement(d.a,{type:"text",name:"dateOfBirth"+e,value:q[e].dateOfBirth,onFocus:H,onBlur:K,onChange:function(e){return z(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}))};console.log(function(e){e.preventDefault();var t=function(e){for(var t=[],a=Object.keys(e),n=0;n<a.length/2;n++){var l={fullName:e["fullName"+n],dateOfBirth:e["dateOfBirth"+n]};t.push(l)}return t}(_),a=Object(r.a)({director:t},A);console.log("Result: "+JSON.stringify(a)),U(Object(i.c)(s.m,a))});var M=[["Individual","individual"],["Company","company"]].map(function(e,t){return u.a.createElement("option",{value:e[1],key:t},e[0])}),Q=Object(c.useState)("2020-11-03"),X=Object(o.a)(Q,2),Y=X[0],Z=X[1],$=Object(c.useState)("2021-11-03"),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=Object(g.c)(function(e){return e.adminUpdateSubscription});Object(c.useEffect)(function(){if(ne.isSuccesful){var e=ne.result;console.log(e)}},ne);return null===F?u.a.createElement(b.a,null):u.a.createElement("div",{className:"login"},u.a.createElement("div",{className:"container sm:px-10"},u.a.createElement("div",{className:"intro-x"},u.a.createElement("div",{className:"block xl:grid grid-cols-2 gap-4 mt-3"},u.a.createElement("div",{className:"my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto "},u.a.createElement("div",{className:"mb-3"},u.a.createElement("header",{className:"font-semibold"},"Subscription"),u.a.createElement("div",{className:"mb-2 d-flex",style:{justifyContent:"space-between"}},u.a.createElement("div",null,"Start:"),u.a.createElement("div",null,u.a.createElement("input",{type:"date",name:"subscriptionBegin",value:Y,onChange:function(e){var t=e.target;return Z(t.value)},disabled:E,style:{backgroundColor:"inherit"}}))),u.a.createElement("div",{className:"mb-2 d-flex",style:{justifyContent:"space-between"}},u.a.createElement("div",null,"End:"),u.a.createElement("div",null,u.a.createElement("input",{type:"date",name:"subscriptionEnd",value:te,onChange:function(e){var t=e.target;return ae(t.value)},disabled:E,style:{backgroundColor:"inherit"}}))),E?u.a.createElement(p.a,{type:"button",onClick:function(){return x(!E)},className:"button button--md text-white bg-theme-1 xl:mr-3",value:"Set Subscription"}):u.a.createElement(p.a,{type:"button",onClick:function(e){e.preventDefault();var t={subscriptionBegin:Y,subscriptionEnd:te},a=s.f+F._id;U(Object(m.e)(a,t))},className:"button button--md text-white bg-theme-1 xl:mr-3",value:"Update"})),F.director&&F.director.map(function(e,t){return L(t,t)}),u.a.createElement("label",{className:"font-semibold mt-2"},"Account Type:"),u.a.createElement(f.a,{value:F.accountType,onChange:function(e){return I(e.target.value)},name:"accountType",className:"intro-x login__input input input--lg mb-2 border border-gray-300 block",dropdownElements:M,disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Company Name:"),u.a.createElement(d.a,{type:"text",value:F.companyName,name:"Company Name",onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Company Address:"),u.a.createElement(d.a,{type:"text",name:"companyAddress",value:F.companyAddress,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"City:"),u.a.createElement(d.a,{type:"text",name:"city",value:F.city,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Postal Code:"),u.a.createElement(d.a,{type:"text",name:"postalCode",value:F.postalCode,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Country:"),u.a.createElement(d.a,{type:"text",name:"country",value:F.country,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Phone Number:"),u.a.createElement(d.a,{type:"tel",name:"phoneNumber",value:F.phoneNumber,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Email:"),u.a.createElement(d.a,{type:"email",name:"email",value:F.email,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0})),u.a.createElement("div",{className:"xl:h-auto flex xl:py-0 xl:my-0 mb-5"},u.a.createElement("div",{className:"my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto "},u.a.createElement("label",{className:"font-semibold mt-2"},"Website:"),u.a.createElement(d.a,{type:"text",name:"websiteUrl",value:F.websiteUrl,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Company Begin:"),u.a.createElement(d.a,{type:"text",name:"companyBegin",value:F.companyBegin,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Company Reg No:"),u.a.createElement(d.a,{type:"text",name:"companyRegNo",value:F.companyRegNo,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"UTR Number:"),u.a.createElement(d.a,{type:"text",name:"utrNo",value:F.utrNo,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"VAT Submit Type:"),u.a.createElement(d.a,{type:"text",name:"vatSubmitType",value:F.vatSubmitType,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"VAT Scheme:"),u.a.createElement(d.a,{type:"text",name:"vatScheme",value:F.vatScheme,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"VAT Reg No:"),u.a.createElement(d.a,{type:"text",name:"vatRegNo",value:F.vatRegNo,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"VAT Reg Date:"),u.a.createElement(d.a,{type:"text",name:"vatRegDate",value:F.vatRegDate,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Insurance Number:"),u.a.createElement(d.a,{type:"text",name:"insuranceNumber",value:F.insuranceNumber,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  mb-2 input--lg border border-gray-300 block",disabled:!0}),u.a.createElement("label",{className:"font-semibold mt-2"},"Payee Ref No:"),u.a.createElement(d.a,{type:"text",name:"payeeRefNo",value:F.payeeRefNo,onChange:function(e){return I(e.target.value)},className:"intro-x login__input input  my-2 input--lg border border-gray-300 block",disabled:!0})))))))}}}]);
//# sourceMappingURL=55.2679003a.chunk.js.map