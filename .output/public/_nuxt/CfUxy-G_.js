import{_ as S}from"./sy9W-aCu.js";import{u as k}from"./C6nEOAZn.js";import{_ as j,I as N,D as T,k as M,o as a,c as r,a as e,B as $,F as A,r as D,t as p,j as g,S as E,s as H,b as i,u as s,G as O,aB as R,p as V,e as G,f as B,l as z,aC as F,ae as P,C as q,L as K,w as U}from"./U2fQd9-U.js";import{I as y}from"./CJQxszXc.js";import{E as v}from"./DPlZ69ra.js";import{T as J}from"./DBv5igrG.js";const Q={"aria-label":"breadcrumb",class:"w-full px-2"},W={class:"flex space-x-2 w-full"},X={key:0,class:"px-2 py-1"},Y=["onClick"],Z={key:1,class:"font-bold px-2 py-1"},ee={key:2},te={__name:"Breadcrumb",setup(u){const n=N(),o=T(),t=M(()=>{const l=n.path.split("/").filter(f=>f);return l.map((f,d)=>({name:f,path:"/"+l.slice(0,d+1).join("/")}))}),c=l=>{o.push(l)},h=()=>{o.replace("/")};return(l,f)=>(a(),r("nav",Q,[e("ol",W,[e("li",null,[e("span",{onClick:h,class:"cursor-pointer text-rose-700 font-bold hover:text-rose-50 hover:bg-rose-700 px-2 py-1"}," Home "),t.value.length>0?(a(),r("span",X," / ")):$("",!0)]),(a(!0),r(A,null,D(t.value,(d,m)=>(a(),r("li",{key:m},[m<t.value.length-1?(a(),r("span",{key:0,onClick:C=>c(d.path),class:"cursor-pointer text-rose-700 font-bold hover:text-rose-50 hover:bg-rose-700 px-2 py-1"},p(d.name),9,Y)):(a(),r("span",Z,p(d.name),1)),m<t.value.length-1?(a(),r("span",ee," / ")):$("",!0)]))),128))])]))}},oe=j(te,[["__scopeId","data-v-0a445a8b"]]),I=u=>(V("data-v-91b927f7"),u=u(),G(),u),se={class:"shadow-lg form-wrapper bg-opacity-25 bg-white py-2 px-4 border-b border-black flex items-center justify-between w-full h-20"},ae={class:"flex items-center space-x-2"},re={class:"flex w-full"},ne={class:"flex items-center space-x-2 justify-end w-full"},le={class:""},ce={class:"text-lg font-bold block"},ie={class:"text-sm font-light block"},de={class:"relative"},ue=["src"],fe={class:"py-1",role:"none"},pe=I(()=>e("a",{href:"#",class:"block px-4 py-2 text-sm text-neutral-900 hover:bg-rose-100",role:"menuitem"},"Profile",-1)),he=I(()=>e("a",{href:"#",class:"block px-4 py-2 text-sm text-neutral-900 hover:bg-rose-100",role:"menuitem"},"Settings",-1)),_e={__name:"Header",setup(u){const{pb:n,user:o,isLoggedIn:t,logout:c}=k(),h=g(!1);g("");function l(){h.value=!h.value}const f=g(""),d=g(""),m=E(),C=()=>{m.back()};return H(o,async()=>{try{if(t&&o.value){v.emit("loading",{show:!0});const _=await n.collection(o==null?void 0:o.value.collectionName).getOne(o.value.id,{expand:"roles",requestKey:"header_watch_auth"});let x=n.files.getUrl(_,_.avatar);f.value=x;let b=[];for(let w of _.roles){const L=await n.collection("roles").getOne(w);b.push(L.name)}d.value=b.join(", ")}}catch(_){console.error(_)}finally{v.emit("loading",{show:!1})}}),(_,x)=>{var b;return a(),r("header",se,[e("div",ae,[e("button",{onClick:C,class:"p-2 h-full w-auto flex space-x-1 items-center justify-between border border-black hover:bg-rose-100"},[i(s(y),{icon:"carbon:caret-left",class:""})])]),e("div",re,[i(oe)]),e("div",ne,[e("div",le,[e("span",ce,p((b=s(o))==null?void 0:b.username),1),e("span",ie,p(s(d)),1)]),e("div",de,[e("img",{src:s(f),class:"w-16 h-16 rounded-full shadow-md border border-neutral-900 cursor-pointer",onClick:l},null,8,ue),O(e("div",{onClick:l,class:"origin-top-right absolute right-0 mt-0 w-48 shadow-lg bg-rose-100 ring-1 ring-black ring-opacity-5 divide-y divide-black border border-black",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"},[e("div",fe,[pe,he,e("a",{href:"#",onClick:x[0]||(x[0]=(...w)=>s(c)&&s(c)(...w)),class:"block px-4 py-2 text-sm text-neutral-900 hover:bg-rose-100",role:"menuitem"},"Logout")])],512),[[R,s(h)]])])])])}}},me=j(_e,[["__scopeId","data-v-91b927f7"]]),be={key:0,class:"absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"},ge=F('<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="#ffe4e6" stop-opacity="0" offset="0%"></stop><stop stop-color="#fecdd3" stop-opacity=".2" offset="20%"></stop><stop stop-color="#fda4af" stop-opacity=".4" offset="40%"></stop><stop stop-color="#fb7185" stop-opacity=".6" offset="60%"></stop><stop stop-color="#f43f5e" stop-opacity=".8" offset="80%"></stop><stop stop-color="#e11d48" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="#e11d48" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g></g></svg>',1),ve=[ge],xe=B({__name:"Loader",setup(u){const n=g(!1),o=t=>{n.value=t.show};return z(()=>{v.on("loading",t=>{o(t)})}),(t,c)=>(a(),r("div",null,[n.value?(a(),r("div",be,ve)):$("",!0)]))}}),ye={class:"relative flex flex-col no-scrollbar overflow-y-scroll h-screen w-screen text-sm bg-rose-200 text-neutral-900 font-sans subpixel-antialiased slashed-zero diagonal-fractions"},we={key:0,as:"div",class:"w-full h-full"},ke={key:1,as:"div",class:"w-full h-full"},$e={class:"w-full h-full flex"},Ce={class:"flex flex-col space-y-2 items-center justify-center w-full h-full px-16"},je=e("div",{class:"font-bold bg-opacity-25 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"}," ~ 401 Access Denied ~ ",-1),Be={to:"/contact",class:"bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"},Ie={to:"/about",class:"bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"},De=B({__name:"default",setup(u){const{isLoggedIn:n}=k(),{start:o}=k();P(async()=>{try{v.emit("loading",{show:!0}),await o()}catch(c){console.error("Error Loading Auth:",c)}finally{v.emit("loading",{show:!1})}});const{t}=q();return(c,h)=>{const l=S;return a(),r("main",ye,[i(J),i(xe),s(n)?(a(),r("section",we,[i(me,{class:"w-screen h-auto"}),K(c.$slots,"default")])):(a(),r("section",ke,[e("div",$e,[e("div",Ce,[je,i(l,{to:"/login",class:"bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"},{default:U(()=>[e("span",null,p(s(t)("Access")),1),i(s(y),{icon:"mdi:terminal"})]),_:1}),e("div",Be,[e("span",null,p(s(t)("Contact")),1),i(s(y),{icon:"mdi:send",class:""})]),e("div",Ie,[e("span",null,p(s(t)("About")),1),i(s(y),{icon:"mdi:about",class:""})])])])]))])}}});export{De as default};
