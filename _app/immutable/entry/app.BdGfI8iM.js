const __vite__fileDeps=["_app/immutable/nodes/0.CoVLiuRI.js","_app/immutable/chunks/external.snEXkSWD.js","_app/immutable/assets/0.COOXtoJP.css","_app/immutable/nodes/1.B7gIVMiy.js","_app/immutable/nodes/2.BaCVVVxp.js","_app/immutable/nodes/3.Bzx3ZZQq.js","_app/immutable/chunks/ExampleArea.BZmIF7EF.js","_app/immutable/chunks/svelte-virtuallists.CjbgwzFk.js","_app/immutable/assets/svelte-virtuallists.BdpoP9H2.css","_app/immutable/assets/3.C1sNBl_Y.css","_app/immutable/nodes/4.D8MO8TjS.js","_app/immutable/assets/4.ErBVmrg2.css","_app/immutable/nodes/5.BMzoL23w.js","_app/immutable/assets/5.zxNvYrgn.css","_app/immutable/nodes/6.7GGBlz0T.js","_app/immutable/assets/6.DNiHh9X2.css","_app/immutable/nodes/7.BBkV8tfi.js","_app/immutable/assets/7.s3PY7FKF.css","_app/immutable/nodes/8.BDbNWCix.js","_app/immutable/assets/8.Cfreoc33.css","_app/immutable/nodes/9.DpTkR8ww.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{p as S,a as b,b as O,B as q,u as U,o as z,g as p,d as x,C as B,i as y,q as A,A as L,h as m,j,k as V,s as R,w as P,e as w,v as T,t as F,y as W,n as G,D as H,F as J}from"../chunks/external.snEXkSWD.js";const K="modulepreload",Q=function(u){return"/svelte-virtuallists/"+u},I={},i=function(e,o,h){let v=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));v=Promise.all(o.map(n=>{if(n=Q(n),n in I)return;I[n]=!0;const _=n.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${E}`))return;const s=document.createElement("link");if(s.rel=_?"stylesheet":K,_||(s.as="script",s.crossOrigin=""),s.href=n,l&&s.setAttribute("nonce",l),document.head.appendChild(s),_)return new Promise((c,a)=>{s.addEventListener("load",c),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})}))}return v.then(()=>e()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})},$={};var X=V('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Y=V("<!> <!>",1);function Z(u,e){S(e,!0);let o=b(e,"components",11,()=>O([])),h=b(e,"data_0",3,null),v=b(e,"data_1",3,null);q(()=>e.stores.page.set(e.page)),U(()=>{e.stores,e.page,e.constructors,o(),e.form,h(),v(),e.stores.page.notify()});let r=R(!1),l=R(!1),n=R(null);z(()=>{const c=e.stores.page.subscribe(()=>{p(r)&&(x(l,!0),B().then(()=>{x(n,O(document.title||"untitled page"))}))});return x(r,!0),c});var _=Y(),E=P(_);y(E,()=>e.constructors[1],c=>{var a=A(),f=P(a);L(()=>e.constructors[0],d=>{w(d(f,{get data(){return h()},children:(t,N)=>{var D=A(),k=P(D);L(()=>e.constructors[1],C=>{w(C(k,{get data(){return v()},get form(){return e.form}}),g=>o()[1]=g,()=>{var g;return(g=o())==null?void 0:g[1]})}),m(t,D)},$$slots:{default:!0}}),t=>o()[0]=t,()=>{var t;return(t=o())==null?void 0:t[0]})}),m(c,a)},c=>{var a=A(),f=P(a);L(()=>e.constructors[0],d=>{w(d(f,{get data(){return h()},get form(){return e.form}}),t=>o()[0]=t,()=>{var t;return(t=o())==null?void 0:t[0]})}),m(c,a)});var s=T(T(E,!0));y(s,()=>p(r),c=>{var a=X(),f=G(a);y(f,()=>p(l),d=>{var t=H(d);F(()=>W(t,p(n))),m(d,t)}),m(c,a)}),m(u,_),j()}const ee=J(Z),te=[()=>i(()=>import("../nodes/0.CoVLiuRI.js"),__vite__mapDeps([0,1,2])),()=>i(()=>import("../nodes/1.B7gIVMiy.js"),__vite__mapDeps([3,1])),()=>i(()=>import("../nodes/2.BaCVVVxp.js"),__vite__mapDeps([4,1])),()=>i(()=>import("../nodes/3.Bzx3ZZQq.js"),__vite__mapDeps([5,1,6,7,8,9])),()=>i(()=>import("../nodes/4.D8MO8TjS.js"),__vite__mapDeps([10,1,6,7,8,11])),()=>i(()=>import("../nodes/5.BMzoL23w.js"),__vite__mapDeps([12,1,6,7,8,13])),()=>i(()=>import("../nodes/6.7GGBlz0T.js"),__vite__mapDeps([14,1,7,8,15])),()=>i(()=>import("../nodes/7.BBkV8tfi.js"),__vite__mapDeps([16,1,6,7,8,17])),()=>i(()=>import("../nodes/8.BDbNWCix.js"),__vite__mapDeps([18,1,6,7,8,19])),()=>i(()=>import("../nodes/9.DpTkR8ww.js"),__vite__mapDeps([20,1]))],re=[],oe={"/":[2],"/examples/events":[3],"/examples/horizontal":[4],"/examples/positioning":[5],"/examples/styles":[6],"/examples/variableheight":[7],"/examples/vertical":[8],"/minified-size":[9]},ne={handleError:({error:u})=>{console.error(u)},reroute:()=>{}};export{oe as dictionary,ne as hooks,$ as matchers,te as nodes,ee as root,re as server_loads};
