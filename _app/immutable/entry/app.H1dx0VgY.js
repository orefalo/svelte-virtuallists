const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/immutable/nodes/0.qIg9il22.js","_app/immutable/chunks/external.XVS9OJZd.js","_app/immutable/assets/0.BR721seb.css","_app/immutable/nodes/1.r-P4_u0b.js","_app/immutable/nodes/2.C4KUa1i_.js","_app/immutable/nodes/3.BxwdkrPh.js","_app/immutable/chunks/ExampleArea.HLz-Ok4E.js","_app/immutable/chunks/svelte-virtuallists.CHV1n25C.js","_app/immutable/assets/3.DDWW01F8.css","_app/immutable/nodes/4.L0Fxjbxl.js","_app/immutable/chunks/sushi.BIpvo6ML.js","_app/immutable/nodes/5.Cj15aKZo.js","_app/immutable/nodes/6.D_aZ8Y-v.js","_app/immutable/assets/6.CFA8oXRR.css","_app/immutable/nodes/7.BAtFGRWL.js","_app/immutable/nodes/8.B8zseTS9.js","_app/immutable/assets/8.Jl1EEAEf.css","_app/immutable/nodes/9.CT3xEwBr.js"])))=>i.map(i=>d[i]);
import{p as U,a as R,Q as j,u as B,o as K,g as u,k as A,l as Q,b as W,v as y,i as L,r as T,R as O,f,q as F,h as G,j as S,s as w,d as D,y as H,S as J,t as X,A as Y,x as I,K as Z,T as N}from"../chunks/external.XVS9OJZd.js";const M="modulepreload",$=function(d){return"/svelte-virtuallists/"+d},k={},l=function(e,o,p){let h=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));h=Promise.allSettled(o.map(s=>{if(s=$(s),s in k)return;k[s]=!0;const _=s.endsWith(".css"),P=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${P}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":M,_||(i.as="script"),i.crossOrigin="",i.href=s,r&&i.setAttribute("nonce",r),document.head.appendChild(i),_)return new Promise((c,n)=>{i.addEventListener("load",c),i.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${s}`)))})}))}function m(t){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t}return h.then(t=>{for(const r of t||[])r.status==="rejected"&&m(r.reason);return e().catch(m)})},ae={};var ee=S('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),te=S("<!> <!>",1);function re(d,e){U(e,!0);let o=R(e,"components",23,()=>[]),p=R(e,"data_0",3,null),h=R(e,"data_1",3,null);j(()=>e.stores.page.set(e.page)),B(()=>{e.stores,e.page,e.constructors,o(),e.form,p(),h(),e.stores.page.notify()});let m=w(!1),t=w(!1),r=w(null);K(()=>{const c=e.stores.page.subscribe(()=>{u(m)&&(A(t,!0),Q().then(()=>{A(r,W(document.title||"untitled page"))}))});return A(m,!0),c});const s=I(()=>e.constructors[1]);var _=te(),P=y(_);L(P,()=>e.constructors[1],c=>{var n=T();const E=I(()=>e.constructors[0]);var g=y(n);O(g,()=>u(E),(v,x)=>{D(x(v,{get data(){return p()},get form(){return e.form},children:(a,oe)=>{var V=T(),C=y(V);O(C,()=>u(s),(q,z)=>{D(z(q,{get data(){return h()},get form(){return e.form}}),b=>o()[1]=b,()=>{var b;return(b=o())==null?void 0:b[1]})}),f(a,V)},$$slots:{default:!0}}),a=>o()[0]=a,()=>{var a;return(a=o())==null?void 0:a[0]})}),f(c,n)},c=>{var n=T();const E=I(()=>e.constructors[0]);var g=y(n);O(g,()=>u(E),(v,x)=>{D(x(v,{get data(){return p()},get form(){return e.form}}),a=>o()[0]=a,()=>{var a;return(a=o())==null?void 0:a[0]})}),f(c,n)});var i=F(P,2);L(i,()=>u(m),c=>{var n=ee(),E=H(n);L(E,()=>u(t),g=>{var v=J();X(()=>Z(v,u(r))),f(g,v)}),Y(n),f(c,n)}),f(d,_),G()}const se=N(re),ie=[()=>l(()=>import("../nodes/0.qIg9il22.js"),__vite__mapDeps([0,1,2])),()=>l(()=>import("../nodes/1.r-P4_u0b.js"),__vite__mapDeps([3,1])),()=>l(()=>import("../nodes/2.C4KUa1i_.js"),__vite__mapDeps([4,1])),()=>l(()=>import("../nodes/3.BxwdkrPh.js"),__vite__mapDeps([5,1,6,7,8])),()=>l(()=>import("../nodes/4.L0Fxjbxl.js"),__vite__mapDeps([9,1,6,7,10])),()=>l(()=>import("../nodes/5.Cj15aKZo.js"),__vite__mapDeps([11,1,6,7,8])),()=>l(()=>import("../nodes/6.D_aZ8Y-v.js"),__vite__mapDeps([12,1,6,7,10,13])),()=>l(()=>import("../nodes/7.BAtFGRWL.js"),__vite__mapDeps([14,1,6,7,10])),()=>l(()=>import("../nodes/8.B8zseTS9.js"),__vite__mapDeps([15,1,6,7,10,16])),()=>l(()=>import("../nodes/9.CT3xEwBr.js"),__vite__mapDeps([17,1]))],le=[],ce={"/":[2],"/examples/events":[3],"/examples/horizontal":[4],"/examples/positioning":[5],"/examples/table":[6],"/examples/variablesizing":[7],"/examples/vertical":[8],"/minified-size":[9]},_e={handleError:({error:d})=>{console.error(d)},reroute:()=>{}};export{ce as dictionary,_e as hooks,ae as matchers,ie as nodes,se as root,le as server_loads};