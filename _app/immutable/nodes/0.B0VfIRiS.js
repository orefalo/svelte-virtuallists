import{G as S,p as K,X as M,a as C,f as E,h,j as U,k as g,m as t,n as H,r as a,l as o,g as e,t as f,v as q,K as z,Y as W,Z as X,L as ae,H as Y,b as A,_ as te,z as se,i as B,y as le,I as ne,$ as ie,a0 as re,d as oe,s as ve,C as O,U as w}from"../chunks/external.DZ8ltDyt.js";const de=!0,je=Object.freeze(Object.defineProperty({__proto__:null,prerender:de},Symbol.toStringTag,{value:"Module"})),F=l=>l.endsWith("/")?l.slice(0,-1):l,Z=(l,s)=>F(S+l)===F(s.url.pathname);var ce=g('<li class="svelte-1bjdx71"><a data-sveltekit-preload-data="" class="page svelte-1bjdx71"> </a></li>'),pe=g('<li class="svelte-1bjdx71"><span class="section svelte-1bjdx71"> </span> <ul class="svelte-1bjdx71"></ul></li>'),he=g('<nav aria-label="Docs" class="svelte-1bjdx71"><ul class="sidebar svelte-1bjdx71"></ul></nav>');function ge(l,s){K(s,!0);const c=M(),n=()=>W(X,"$page",c);let v=C(s,"contents",19,()=>[]);var d=he(),u=t(d);E(u,21,v,H,(p,T)=>{var _=pe(),b=t(_),L=t(b);a(b);var x=o(b,2);E(x,21,()=>e(T).pages,H,(I,$)=>{let j=()=>e($).title,k=()=>e($).path;var R=ce(),m=t(R);f(()=>q(m,"aria-current",Z(k(),n())?"page":void 0));var P=t(m);a(m),a(R),f(()=>{q(m,"href",S+k()),z(P,j())}),h(I,R)}),a(x),a(_),f(()=>z(L,e(T).title)),h(p,_)}),a(u),a(d),h(l,d),U()}var ue=(l,s)=>s(!s()),_e=g('<button class="svelte-1bsnqe6"><span style="display: none;"> </span></button>');function be(l,s){let c=C(s,"pressed",15);var n=_e();n.__click=[ue,c];var v=t(n),d=t(v);a(v),a(n),f(()=>{q(n,"aria-pressed",c()?"true":"false"),z(d,s.label)}),h(l,n)}ae(["click"]);var fe=g('<div class="input-output-toggle svelte-1keqb9b">Direction: <span aria-hidden="true">LTR</span> <!> <span aria-hidden="true">RTL</span></div>');function xe(l,s){let c=C(s,"isRTL",15);var n=fe(),v=o(t(n),3);be(v,{get pressed(){return c()},set pressed(d){c(d)},label:"RTL direction"}),Y(2),a(n),h(l,n)}var me=g('<meta name="description" content="A Fantastic virtual list for Svelte 5 and above"> <!>',1),qe=g('<a data-sveltekit-preload-data="" class="svelte-113h04q"> </a>'),Te=g('<a data-sveltekit-preload-data="" class="svelte-113h04q"> </a>'),Le=g('<div class="page-container svelte-113h04q"><div role="presentation" class="toc-container-space svelte-113h04q"></div> <main class="svelte-113h04q"><!> <div class="controls svelte-113h04q"><div class="svelte-113h04q"><span class="svelte-113h04q">previous</span> <!></div> <div class="svelte-113h04q"><span class="svelte-113h04q">next</span> <!></div></div></main> <div class="toc-container svelte-113h04q"><div role="presentation" class="toc-contents-wrap svelte-113h04q"><h1 class="toc-head svelte-113h04q"><img alt="Icon" width="30" height="30"> Svelte-Virtuallists</h1> <!></div> <!></div></div>');function ke(l,s){K(s,!0);const c=M(),n=()=>W(X,"$page",c);let v=ve(!1);const d=[{title:"Getting started",pages:[{title:"Introduction",path:"/"}]},{title:"General Examples",pages:[{title:"Vertical",path:"/examples/vertical"},{title:"Horizontal",path:"/examples/horizontal"},{title:"Table",path:"/examples/table"},{title:"Variable Sizing",path:"/examples/variablesizing"},{title:"Positioning",path:"/examples/positioning"},{title:"OLDPositioning",path:"/examples/positioningOLD"},{title:"Events",path:"/examples/events"}]}],u=A(d.map(r=>r.pages).flat()),p=O(()=>u.findIndex(({path:r})=>Z(r,n()))),T=O(()=>e(p)>=0?u[e(p)]:void 0),_=O(()=>e(p)>=1?u[e(p)-1]:void 0),b=O(()=>e(p)>=0&&e(p)<u.length-1?u[e(p)+1]:void 0);var L=Le();te(r=>{var i=me(),y=o(le(i),2);ne(y,()=>ie,!1,!1),f(()=>re.title=`Svelte-Virtuallists${(e(T)?` - ${e(T).title}`:"")??""}`),h(r,i)});var x=o(t(L),2),I=t(x);se(I,()=>s.children);var $=o(I,2),j=t($),k=t(j),R=o(k,2);B(R,()=>e(_),r=>{var i=qe(),y=t(i);a(i),f(()=>{q(i,"href",S+e(_).path),z(y,e(_).title)}),h(r,i)}),a(j);var m=o(j,2),P=t(m),J=o(P,2);B(J,()=>e(b),r=>{var i=Te(),y=t(i);a(i),f(()=>{q(i,"href",S+e(b).path),z(y,e(b).title)}),h(r,i)}),a(m),a($),a(x);var G=o(x,2),D=t(G),V=t(D),N=t(V);q(N,"src",`${S??""}/favicon.svg`),Y(),a(V);var Q=o(V,2);ge(Q,{contents:d}),a(D);var ee=o(D,2);xe(ee,{get isRTL(){return e(v)},set isRTL(r){oe(v,A(r))}}),a(G),a(L),f(()=>{w(x,"rtl-containers",e(v)),w(k,"faded",!e(_)),w(P,"faded",!e(b))}),h(l,L),U()}export{ke as component,je as universal};