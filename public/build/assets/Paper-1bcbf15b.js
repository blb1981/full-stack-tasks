import{b as s,c as l,r as g,u as x,_ as b,j as P}from"./app-9a49305a.js";import{g as $,b as y,s as M,c as R,d as m}from"./Button-e9e1d6cb.js";const C=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)},v=C;function k(e){return $("MuiPaper",e)}y("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const q=["className","component","elevation","square","variant"],_=e=>{const{square:a,elevation:o,variant:t,classes:n}=e,r={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return m(r,k,n)},j=M("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(a.elevation))}, ${l("#fff",v(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),U=g.forwardRef(function(a,o){const t=x({props:a,name:"MuiPaper"}),{className:n,component:r="div",elevation:d=1,square:u=!1,variant:c="elevation"}=t,p=b(t,q),i=s({},t,{component:r,elevation:d,square:u,variant:c}),f=_(i);return P.jsx(j,s({as:r,ownerState:i,className:R(f.root,n),ref:o},p))}),E=U;export{E as M};
