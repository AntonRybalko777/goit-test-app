"use strict";(self.webpackChunkgoit_test_app=self.webpackChunkgoit_test_app||[]).push([[147],{4147:function(e,n,i){i.r(n),i.d(n,{default:function(){return b}});var r=i(9439),t=i(209),a=i(4420),l=JSON.parse('["All","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land Rover","Renault","Volkswagen"]'),s=JSON.parse('["All",10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300]'),o=i(6895),c=i(5705),u=i(8007),h=i(184),d=u.Ry().shape({brand:u.Z_(),price:u.Z_(),mileageFrom:u.Rx(),mileageTo:u.Rx()}),m=function(){var e=(0,a.I0)();return(0,h.jsx)(c.J9,{initialValues:{brand:"All",price:"All",mileageFrom:"",mileageTo:""},validationSchema:d,onSubmit:function(n,i){e((0,o.MA)(n.brand)),e((0,o.Wj)(n.price)),e((0,o.h2)(n.mileageFrom)),e((0,o.gC)(n.mileageTo))},children:(0,h.jsxs)(c.l0,{children:[(0,h.jsx)(c.gN,{as:"select",name:"brand",children:l.map((function(e,n){return(0,h.jsx)("option",{value:e,children:e},n)}))}),(0,h.jsx)(c.gN,{as:"select",name:"price",children:s.map((function(e,n){return(0,h.jsx)("option",{value:e,children:e},n)}))}),(0,h.jsx)(c.gN,{name:"mileageFrom",type:"number"}),(0,h.jsx)(c.gN,{name:"mileageTo",type:"number"}),(0,h.jsx)("button",{type:"submit",children:"Search"})]})})},p=i(6351),g=i(4226),x=i(2791),j=i(7234),f=function(){var e=(0,x.useState)(1),n=(0,r.Z)(e,2),i=n[0],l=n[1],s=(0,a.v9)(p.dB),o=(0,a.v9)(p.yo),c=(0,a.v9)(p.E1),u=(0,a.I0)(p.yo);(0,x.useEffect)((function(){i>1&&u((0,j.r)(i))}),[u,i]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{}),s.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.a,{children:s.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(t._,{car:e})},e.id)}))}),!c&&"All"===o&&(0,h.jsx)(g.z,{onClick:function(){l((function(e){return e+1}))},children:"Load more"})]})]})},v=i(4137);function b(){var e=(0,a.v9)(p.zh),n=(0,a.v9)(p.xU);return(0,h.jsxs)("div",{children:[n&&(0,h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,h.jsx)(v.s5,{visible:!0,height:"66",width:"66",strokeColor:"#3470ff",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""})}),e&&(0,h.jsx)("p",{children:"Whoops... Something went wrong. Please try to reload the page."}),!e&&(0,h.jsx)(f,{})]})}}}]);
//# sourceMappingURL=147.b18fcd4e.chunk.js.map