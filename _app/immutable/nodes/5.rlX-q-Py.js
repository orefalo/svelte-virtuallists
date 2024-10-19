import{L as vs,p as bs,b as r,s as c,u as es,m as rs,g as t,t as ps,R as os,S as cs,f as V,h as _s,k as e,j as C,q as n,w as a,T as is,y as l,z as ys,U as xs,K as R}from"../chunks/external.DepRz0zj.js";import{E as zs}from"../chunks/ExampleArea.CqFsZ60u.js";import{A as Ts,S as Ss,V as qs}from"../chunks/svelte-virtuallists.CXsgq9DL.js";const ws=!0,Hs=Object.freeze(Object.defineProperty({__proto__:null,prerender:ws},Symbol.toStringTag,{value:"Module"}));function ks(h,i){e(i,()=>25)}function Os(h,i){for(let p=0;p<10;(p+=1)-1)i.pop()}var Is=C('<div class="svelte-1bng65z"> </div>'),As=C('<div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <div><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button> <button class="button">Randomize content</button> <button class="button">array size -10</button></div>',1);function Ms(h,i){bs(i,!0);const p=r(new Array(1e4));let B=c(0),E=c(0),g=c(void 0),m=c(void 0),j=c(void 0),f=c(void 0),v=c(r(Ts.AUTO)),b=c(r(Ss.SMOOTH)),_=c(void 0),d;function hs(s){e(B,r(s.start)),e(E,r(s.end))}es(()=>{e(j,void 0),e(f,r(t(m)))}),es(()=>{e(f,void 0),e(j,r(t(g)))});function N(){d=new Array(p.length);for(let s=0;s<d.length;(s+=1)-1)d[s]=Math.round(Math.random()*65+30);e(_,(s,ls)=>d[s])}function H(){for(let s=0;s<p.length;(s+=1)-1)p[s]={text:Math.floor(Math.random()*p.length)}}H(),N();var U=As(),y=rs(U),x=a(y),G=a(x),$=n(a(G));is($),l(G),l(x);var z=n(x,2),P=a(z),K=n(a(P));is(K),l(P),l(z);var T=n(z,2),D=a(T),S=n(a(D)),q=a(S);q.value=(q.__value="auto")==null?"":"auto";var w=n(q);w.value=(w.__value="start")==null?"":"start";var k=n(w);k.value=(k.__value="center")==null?"":"center";var F=n(k);F.value=(F.__value="end")==null?"":"end",l(S),l(D),l(T);var J=n(T,2),Q=a(J),O=n(a(Q)),I=a(O);I.value=(I.__value="auto")==null?"":"auto";var A=n(I);A.value=(A.__value="smooth")==null?"":"smooth";var W=n(A);W.value=(W.__value="instant")==null?"":"instant",l(O),l(Q),l(J),l(y);var M=n(y,2),L=n(a(M),2),us=a(L);l(L);var X=n(L,4),js=a(X);l(X),l(M);var Y=n(M,2);qs(Y,{get items(){return p},style:"height:500px",get scrollToIndex(){return t(j)},get scrollToOffset(){return t(f)},get scrollToAlignment(){return t(v)},get scrollToBehaviour(){return t(b)},get sizingCalculator(){return t(_)},onVisibleRangeUpdate:hs,vl_slot:(ls,o)=>{let ts=()=>o==null?void 0:o().index,gs=()=>o==null?void 0:o().item,ms=()=>o==null?void 0:o().size;var u=Is(),fs=a(u);l(u),ps(()=>{ys(u,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${ms()??""}px;`),xs(u,"highlighted",ts()===t(j)),R(fs,`#${ts()??""}
      ${gs().text??""}`)}),V(ls,u)},$$slots:{vl_slot:!0}});var Z=n(Y,2),ss=a(Z);ss.__click=N;var ns=n(ss,2);ns.__click=[ks,_];var as=n(ns,2);as.__click=H;var ds=n(as,2);ds.__click=[Os,p],l(Z),ps(()=>{R(us,t(B)),R(js,t(E))}),os($,()=>t(g),s=>e(g,s)),os(K,()=>t(m),s=>e(m,s)),cs(S,()=>t(v),s=>e(v,s)),cs(O,()=>t(b),s=>e(b,s)),V(h,U),_s()}vs(["click"]);const Ls=`<script lang="ts">
  import { ALIGNMENT, SCROLL_BEHAVIOR, type VLRange, type VLSlotSignature } from '$lib';
  import { VirtualList } from 'svelte-virtuallists';

  const myModel = $state(new Array(10000));

  // used for the positioning pointers
  let start = $state(0);
  let end = $state(0);

  // on the UI
  let theScrollToIndex: number | undefined = $state();
  let theScrollOffet: number | undefined = $state();

  // on the component
  let scrollToIndex: number | undefined = $state();
  let scrollToOffet: number | undefined = $state();

  let scrollToAlignment: ALIGNMENT = $state(ALIGNMENT.AUTO);
  let scrollToBehaviour: SCROLL_BEHAVIOR = $state(SCROLL_BEHAVIOR.SMOOTH);

  let szCalculator: ((index: number, item: unknown) => number) | undefined = $state();

  // holds randomized sizes
  let randSizes: Array<number>;

  function handleVisualRangeChange(event: VLRange) {
    start = event.start;
    end = event.end;
  }

  // The two effects below are an elegant way to ensure only one fo the value is defined
  $effect(() => {
    // scrollToIndex and scrollOffset shall not be used together.
    scrollToIndex = undefined;
    scrollToOffet = theScrollOffet;
  });

  $effect(() => {
    // scrollToIndex and scrollOffset shall not be used together.
    scrollToOffet = undefined;
    scrollToIndex = theScrollToIndex;
  });

  function randomizeSize() {
    randSizes = new Array(myModel.length);
    for (let i = 0; i < randSizes.length; i++) {
      randSizes[i] = Math.round(Math.random() * 65 + 30);
    }

    szCalculator = (_index: number, _item: any) => randSizes[_index];
  }

  function sameSize() {
    szCalculator = () => 25;
  }

  function randomizeContent() {
    for (let i = 0; i < myModel.length; i++) {
      myModel[i] = { text: Math.floor(Math.random() * myModel.length) }; // Random number between 0 and 9999
    }
  }

  function stripItemsBy10() {
    for (let i = 0; i < 10; i++) myModel.pop();
  }

  randomizeContent();
  randomizeSize();
<\/script>

<div class="actions">
  <div class="select">
    <span>
      Scroll to row index
      <input
        id="index"
        type="number"
        placeholder="pick an index..."
        class="input"
        bind:value={theScrollToIndex} />
    </span>
  </div>
  <div class="select">
    <span>
      Scroll to pixel offset
      <input
        id="offset"
        type="number"
        placeholder="pick an offset..."
        class="input"
        bind:value={theScrollOffet} />
    </span>
  </div>
  <div class="select">
    <span>
      Alignment
      <select id="alignment" bind:value={scrollToAlignment}>
        <option value="auto">auto</option>
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
      </select>
    </span>
  </div>
  <div class="select">
    <span>
      Behaviour
      <select id="behaviour" bind:value={scrollToBehaviour}>
        <option value="auto">auto</option>
        <option value="smooth">smooth</option>
        <option value="instant">instant</option>
      </select>
    </span>
  </div>
</div>

<div>
  <span>Visible Area: start</span>
  <span>{start}</span>
  -
  <span>end</span>
  <span>{end}</span>
</div>

<VirtualList
  items={myModel}
  style="height:500px"
  {scrollToIndex}
  scrollToOffset={scrollToOffet}
  {scrollToAlignment}
  {scrollToBehaviour}
  sizingCalculator={szCalculator}
  onVisibleRangeUpdate={handleVisualRangeChange}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div
      style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;"
      class:highlighted={index === scrollToIndex}>
      #{index}
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomizeSize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
  <button onclick={randomizeContent} class="button">Randomize content</button>
  <button onclick={stripItemsBy10} class="button">array size -10</button>
</div>

<style>
  .highlighted {
    background: #efefef;
  }
</style>
`,Rs=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ALIGNMENT</span>, <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>, type <span class="hljs-title class_">VLRange</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$lib&#x27;</span>;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = $state(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>));

  <span class="hljs-comment">// used for the positioning pointers</span>
  <span class="hljs-keyword">let</span> start = $state(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">let</span> end = $state(<span class="hljs-number">0</span>);

  <span class="hljs-comment">// on the UI</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// on the component</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToAlignment</span>: <span class="hljs-variable constant_">ALIGNMENT</span> = $state(<span class="hljs-variable constant_">ALIGNMENT</span>.<span class="hljs-property">AUTO</span>);
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToBehaviour</span>: <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> = $state(<span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>.<span class="hljs-property">SMOOTH</span>);

  <span class="hljs-keyword">let</span> <span class="hljs-attr">szCalculator</span>: (<span class="hljs-function">(<span class="hljs-params">index: number, item: unknown</span>) =&gt;</span> number) | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// holds randomized sizes</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">randSizes</span>: <span class="hljs-title class_">Array</span>&lt;number&gt;;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleVisualRangeChange</span>(<span class="hljs-params">event: VLRange</span>) {
    start = event.<span class="hljs-property">start</span>;
    end = event.<span class="hljs-property">end</span>;
  }

  <span class="hljs-comment">// The two effects below are an elegant way to ensure only one fo the value is defined</span>
  $effect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
    scrollToIndex = <span class="hljs-literal">undefined</span>;
    scrollToOffet = theScrollOffet;
  });

  $effect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
    scrollToOffet = <span class="hljs-literal">undefined</span>;
    scrollToIndex = theScrollToIndex;
  });

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomizeSize</span>(<span class="hljs-params"></span>) {
    randSizes = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(myModel.<span class="hljs-property">length</span>);
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; randSizes.<span class="hljs-property">length</span>; i++) {
      randSizes[i] = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">65</span> + <span class="hljs-number">30</span>);
    }

    szCalculator = <span class="hljs-function">(<span class="hljs-params">_index: number, _item: any</span>) =&gt;</span> randSizes[_index];
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    szCalculator = <span class="hljs-function">() =&gt;</span> <span class="hljs-number">25</span>;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomizeContent</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; myModel.<span class="hljs-property">length</span>; i++) {
      myModel[i] = { <span class="hljs-attr">text</span>: <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">floor</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * myModel.<span class="hljs-property">length</span>) }; <span class="hljs-comment">// Random number between 0 and 9999</span>
    }
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">stripItemsBy10</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) myModel.<span class="hljs-title function_">pop</span>();
  }

  <span class="hljs-title function_">randomizeContent</span>();
  <span class="hljs-title function_">randomizeSize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      Scroll to row index
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
        <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;index&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;pick an index...&quot;</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input&quot;</span>
        <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{theScrollToIndex}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      Scroll to pixel offset
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
        <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;offset&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;pick an offset...&quot;</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input&quot;</span>
        <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{theScrollOffet}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      Alignment
      <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;alignment&quot;</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{scrollToAlignment}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>auto<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;start&quot;</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      Behaviour
      <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;behaviour&quot;</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{scrollToBehaviour}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>auto<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;smooth&quot;</span>&gt;</span>smooth<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;instant&quot;</span>&gt;</span>instant<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Visible Area: start<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{start}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  -
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{end}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
  <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:500px&quot;</span>
  {<span class="hljs-attr">scrollToIndex</span>}
  <span class="hljs-attr">scrollToOffset</span>=<span class="hljs-string">{scrollToOffet}</span>
  {<span class="hljs-attr">scrollToAlignment</span>}
  {<span class="hljs-attr">scrollToBehaviour</span>}
  <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{szCalculator}</span>
  <span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleVisualRangeChange}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>
      <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToIndex}</span>&gt;</span>
      #{index}
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomizeSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomizeContent}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize content<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{stripItemsBy10}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>array size -10<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.highlighted</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#efefef</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,Vs={code:Ls,highlightedHTML:Rs,component:Ms};var Cs=C("<h2>Positioning</h2> <p>The component provides properties to position the list either on an element, or at a pixel offset.</p> <!>",1);function Us(h){var i=Cs(),p=n(rs(i),4);zs(p,{example:Vs}),V(h,i)}export{Us as component,Hs as universal};
