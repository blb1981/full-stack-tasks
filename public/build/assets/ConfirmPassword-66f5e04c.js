import{W as d,r as m,j as r,a as u}from"./app-9a49305a.js";import{G as l}from"./GuestLayout-1fcc4b5d.js";import{T as f,B as c}from"./Button-e9e1d6cb.js";import{T as w}from"./TextField-8f6ddf9e.js";import{C as x}from"./CircularProgress-98604457.js";import"./Grid-a9570c98.js";import"./Paper-1bcbf15b.js";import"./Menu-556ed813.js";function v(){const{data:a,setData:t,post:i,processing:o,errors:e,reset:p}=d({password:""});m.useEffect(()=>()=>{p("password")},[]);const n=s=>{s.preventDefault(),i(route("password.confirm"))};return r.jsxs(l,{displayTitle:"Confirm Password",children:[r.jsx(u,{title:"Confirm Password"}),r.jsx(f,{children:"This is a secure area of the application. Please confirm your password before continuing."}),r.jsxs("form",{onSubmit:n,children:[r.jsx(w,{id:"password",type:"password",name:"password",value:a.password,required:!0,onChange:s=>t("password",s.target.value),label:"Password",error:!!e.password,helperText:e.password,sx:{width:"100%",mb:2}}),r.jsx(c,{disabled:o,type:"submit",children:o?r.jsx(x,{size:"1.5rem"}):"Confirm"})]})]})}export{v as default};