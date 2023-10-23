import{r as u,W as j,j as r}from"./app-9a49305a.js";import{G as l}from"./Grid-a9570c98.js";import{a as w,T as n,B as _}from"./Button-e9e1d6cb.js";import{T as d}from"./TextField-8f6ddf9e.js";import{t as v}from"./transition-fb5b7b7a.js";import"./Menu-556ed813.js";import"./Paper-1bcbf15b.js";function E({className:b=""}){const i=u.useRef(),p=u.useRef(),{data:o,setData:a,errors:e,put:m,reset:t,processing:x,recentlySuccessful:f}=j({current_password:"",password:"",password_confirmation:""}),h=s=>{s.preventDefault(),m(route("password.update"),{preserveScroll:!0,onSuccess:()=>t(),onError:c=>{c.password&&(t("password","password_confirmation"),i.current.focus()),c.current_password&&(t("current_password"),p.current.focus())}})};return r.jsx(l,{container:!0,sx:{mb:3},children:r.jsxs(l,{item:!0,xs:12,md:6,children:[r.jsxs(w,{children:[r.jsx(n,{variant:"h5",sx:{mb:1},children:"Update Password"}),r.jsx(n,{sx:{mb:2},children:"Ensure your account is using a long, random password to stay secure."})]}),r.jsxs("form",{onSubmit:h,children:[r.jsx(d,{id:"current_password",ref:p,value:o.current_password,onChange:s=>a("current_password",s.target.value),type:"password",label:"Current password",error:!!e.current_password,helperText:e.current_password,sx:{width:"100%",mb:2}}),r.jsx(d,{id:"password",ref:i,value:o.password,onChange:s=>a("password",s.target.value),type:"password",label:"New Password",error:!!e.password,helperText:e.password,sx:{width:"100%",mb:2}}),r.jsx(d,{id:"password_confirmation",value:o.password_confirmation,onChange:s=>a("password_confirmation",s.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password",label:"Confirm Password",error:!!e.password_confirmation,helperText:e.password_confirmation,sx:{width:"100%",mb:2}}),r.jsxs(w,{className:"flex items-center gap-4",children:[r.jsx(_,{variant:"contained",disabled:x,type:"submit",children:"Save"}),r.jsx(v,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:r.jsx(n,{children:"Saved."})})]})]})]})})}export{E as default};