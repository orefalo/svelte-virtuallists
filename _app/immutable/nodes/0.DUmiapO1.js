import{C as z,p as O,T as X,a as F,r as W,f as h,h as G,j as g,w as a,x as A,y as t,q as c,g as e,t as b,z as q,H as I,U as J,V as K,I as te,D as N,b as B,W as ae,n as se,i as M,m as le,F as ne,X as ie,$ as re,k as oe,s as ve,v as w,R as E}from"../chunks/external.BPYV-2In.js";const ce=!0,Re=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"})),U=l=>l.endsWith("/")?l.slice(0,-1):l,Q=(l,s)=>U(z+l)===U(s.url.pathname);var de=g('<li class="svelte-1bjdx71"><a data-sveltekit-preload-data="" class="page svelte-1bjdx71"> </a></li>'),pe=g('<li class="svelte-1bjdx71"><span class="section svelte-1bjdx71"> </span> <ul class="svelte-1bjdx71"></ul></li>'),ue=g('<nav aria-label="Docs" class="svelte-1bjdx71"><ul class="sidebar svelte-1bjdx71"></ul></nav>');function he(l,s){O(s,!0);const n=X(),i=()=>J(K,"$page",n);let r=F(s,"contents",19,()=>[]);var d=ue(),p=a(d);W(p,21,r,A,(u,T)=>{var _=pe(),f=a(_),k=a(f);t(f);var m=c(f,2);W(m,21,()=>e(T).pages,A,(P,j)=>{let R=()=>e(j).title,L=()=>e(j).path;var y=de(),x=a(y);b(()=>q(x,"aria-current",Q(L(),i())?"page":void 0));var V=a(x);t(x),t(y),b(()=>{q(x,"href",z+L()),I(V,R())}),h(P,y)}),t(m),t(_),b(()=>I(k,e(T).title)),h(u,_)}),t(p),t(d),h(l,d),G()}function ge(l,s,n){var i;s(!s()),(i=n.onclick)==null||i.call(n)}var _e=g('<button class="svelte-1bsnqe6"><span style="display: none;"> </span></button>');function fe(l,s){O(s,!0);let n=F(s,"pressed",15);var i=_e();i.__click=[ge,n,s];var r=a(i),d=a(r);t(r),t(i),b(()=>{q(i,"aria-pressed",n()?"true":"false"),I(d,s.label)}),h(l,i),G()}te(["click"]);var be=g('<div class="input-output-toggle svelte-1keqb9b">Direction: <span aria-hidden="true">LTR</span> <!> <span aria-hidden="true">RTL</span></div>');function me(l,s){let n=F(s,"isRTL",15);function i(){document.documentElement.dir=n()?"rtl":"ltr"}var r=be(),d=c(a(r),3);fe(d,{get pressed(){return n()},set pressed(p){n(p)},label:"RTL direction",onclick:i}),N(2),t(r),h(l,r)}var xe=g('<meta name="description" content="A Fantastic virtual list for Svelte 5 and above"> <!>',1),qe=g('<a data-sveltekit-preload-data="" class="svelte-113h04q"> </a>'),Te=g('<a data-sveltekit-preload-data="" class="svelte-113h04q"> </a>'),ke=g('<div class="page-container svelte-113h04q"><div role="presentation" class="toc-container-space svelte-113h04q"></div> <main class="svelte-113h04q"><!> <div class="controls svelte-113h04q"><div class="svelte-113h04q"><span class="svelte-113h04q">previous</span> <!></div> <div class="svelte-113h04q"><span class="svelte-113h04q">next</span> <!></div></div></main> <div class="toc-container svelte-113h04q"><div role="presentation" class="toc-contents-wrap svelte-113h04q"><h1 class="toc-head svelte-113h04q"><img alt="Icon" width="30" height="30"> Svelte-Virtuallists</h1> <!></div> <!></div></div>');function Le(l,s){O(s,!0);const n=X(),i=()=>J(K,"$page",n);let r=ve(!1);const d=[{title:"Getting started",pages:[{title:"Introduction",path:"/"}]},{title:"General Examples",pages:[{title:"Vertical",path:"/examples/vertical"},{title:"Horizontal",path:"/examples/horizontal"},{title:"Table",path:"/examples/table"},{title:"Variable Sizing",path:"/examples/variablesizing"},{title:"Positioning",path:"/examples/positioning"},{title:"Events",path:"/examples/events"}]}],p=B(d.map(v=>v.pages).flat()),u=w(()=>p.findIndex(({path:v})=>Q(v,i()))),T=w(()=>e(u)>=0?p[e(u)]:void 0),_=w(()=>e(u)>=1?p[e(u)-1]:void 0),f=w(()=>e(u)>=0&&e(u)<p.length-1?p[e(u)+1]:void 0);var k=ke();ae(v=>{var o=xe(),S=c(le(o),2);ne(S,()=>ie,!1,!1),b(()=>re.title=`Svelte-Virtuallists${(e(T)?` - ${e(T).title}`:"")??""}`),h(v,o)});var m=c(a(k),2),P=a(m);se(P,()=>s.children);var j=c(P,2),R=a(j),L=a(R),y=c(L,2);M(y,()=>e(_),v=>{var o=qe(),S=a(o);t(o),b(()=>{q(o,"href",z+e(_).path),I(S,e(_).title)}),h(v,o)}),t(R);var x=c(R,2),V=a(x),Y=c(V,2);M(Y,()=>e(f),v=>{var o=Te(),S=a(o);t(o),b(()=>{q(o,"href",z+e(f).path),I(S,e(f).title)}),h(v,o)}),t(x),t(j),t(m);var H=c(m,2),C=a(H),D=a(C),Z=a(D);q(Z,"src",`${z??""}/favicon.svg`),N(),t(D);var $=c(D,2);he($,{contents:d}),t(C);var ee=c(C,2);me(ee,{get isRTL(){return e(r)},set isRTL(v){oe(r,B(v))}}),t(H),t(k),b(()=>{E(m,"rtl-containers",e(r)),E(L,"faded",!e(_)),E(V,"faded",!e(f))}),h(l,k),G()}export{Le as component,Re as universal};
