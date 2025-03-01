import{L as vs,p as fs,b as i,s as d,t as R,y as cs,B as s,w as a,M as _s,e as ts,N as ps,n as r,g as C,h as bs,q as h,O as es,x as l,m as ys,k as Ts,K as V,P as os}from"../chunks/jdX24A6w.js";import{E as xs}from"../chunks/OWgUB9v-.js";import{A as zs,S as qs,V as Ss}from"../chunks/B7HiuRcr.js";function ks(o,p){for(let t=0;t<10;t++)p.pop()}var ws=(o,p)=>p("scrollToIndex",Number(o.currentTarget.value)),As=(o,p)=>p("scrollToOffset",Number(o.currentTarget.value)),Ms=R("<div> </div>"),Os=R('<div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <div style="font-weight: bold"><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button> <button class="button">Randomize content</button> <button class="button">array size -10</button></div>',1);function Is(o,p){fs(p,!0);const t=i(new Array(1e4));let P=d(0),B=d(0),m=d(i(zs.AUTO)),v=d(i(qs.SMOOTH)),f=d(void 0),g;function rs(n){h(P,i(n.start)),h(B,i(n.end))}let c=i({});function N(n,u){n==="scrollToIndex"?(c.scrollToIndex=u,c.scrollToOffset=void 0):n==="scrollToOffset"&&(c.scrollToOffset=u,c.scrollToIndex=void 0)}function is(){g=new Array(t.length);for(let n=0;n<g.length;n++)g[n]=Math.round(Math.random()*65+30);h(f,(n,u)=>g[n])}function E(){h(f,()=>25)}function H(){for(let n=0;n<t.length;n++)t[n]={text:Math.floor(Math.random()*t.length)}}H(),E();var G=Os(),_=cs(G),b=a(_),U=a(b),y=s(a(U));es(y),y.__input=[ws,N],l(U),l(b);var T=s(b,2),K=a(T),x=s(a(K));es(x),x.__input=[As,N],l(K),l(T);var z=s(T,2),D=a(z),q=s(a(D)),S=a(q);S.value=(S.__value="auto")==null?"":"auto";var k=s(S);k.value=(k.__value="start")==null?"":"start";var w=s(k);w.value=(w.__value="center")==null?"":"center";var F=s(w);F.value=(F.__value="end")==null?"":"end",l(q),l(D),l(z);var J=s(z,2),Q=a(J),A=s(a(Q)),M=a(A);M.value=(M.__value="auto")==null?"":"auto";var O=s(M);O.value=(O.__value="smooth")==null?"":"smooth";var W=s(O);W.value=(W.__value="instant")==null?"":"instant",l(A),l(Q),l(J),l(_);var I=s(_,2),L=s(a(I),2),hs=a(L,!0);l(L);var X=s(L,4),us=a(X,!0);l(X),l(I);var Y=s(I,2);Ss(Y,_s({get items(){return t},style:"height:500px"},()=>c,{get scrollToAlignment(){return r(m)},get scrollToBehaviour(){return r(v)},get sizingCalculator(){return r(f)},onVisibleRangeUpdate:rs,vl_slot:(u,e)=>{let as=()=>e==null?void 0:e().index,ds=()=>e==null?void 0:e().item,gs=()=>e==null?void 0:e().size;var j=Ms();let ls;var ms=a(j);l(j),ts(()=>{ys(j,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${gs()??""}px;`),ls=Ts(j,1,"svelte-1bng65z",null,ls,{highlighted:as()===c.scrollToIndex}),V(ms,`#${as()??""}
      ${ds().text??""}`)}),C(u,j)},$$slots:{vl_slot:!0}}));var Z=s(Y,2),$=a(Z);$.__click=is;var ss=s($,2);ss.__click=E;var ns=s(ss,2);ns.__click=H;var js=s(ns,2);js.__click=[ks,t],l(Z),ts(()=>{os(y,c.scrollToIndex),os(x,c.scrollToOffset),V(hs,r(P)),V(us,r(B))}),ps(q,()=>r(m),n=>h(m,n)),ps(A,()=>r(v),n=>h(v,n)),C(o,G),bs()}vs(["input","click"]);const Ls=`<script lang="ts">
  import {
    ALIGNMENT,
    SCROLL_BEHAVIOR,
    type VariantScrollConfig,
    type VLRangeEvent,
    type VLSlotSignature
  } from '$lib';
  import { VirtualList } from 'svelte-virtuallists';

  const myModel = $state(new Array(10000));

  // used for the positioning pointers
  let start = $state(0);
  let end = $state(0);

  let scrollToAlignment: ALIGNMENT = $state(ALIGNMENT.AUTO);
  let scrollToBehaviour: SCROLL_BEHAVIOR = $state(SCROLL_BEHAVIOR.SMOOTH);

  let szCalculator: ((index: number, item: unknown) => number) | undefined = $state();

  // holds randomized sizes
  let randSizes: Array<number>;

  function handleVisualRangeChange(event: VLRangeEvent) {
    start = event.start;
    end = event.end;
  }

  let scrollToProps: VariantScrollConfig = $state({});

  function updateScrollToProps(key: 'scrollToIndex' | 'scrollToOffset', value: number | undefined) {
    if (key === 'scrollToIndex') {
      scrollToProps.scrollToIndex = value;
      scrollToProps.scrollToOffset = undefined;
    } else if (key === 'scrollToOffset') {
      scrollToProps.scrollToOffset = value;
      scrollToProps.scrollToIndex = undefined;
    }
  }

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
  sameSize();
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
        value={scrollToProps.scrollToIndex}
        oninput={e => updateScrollToProps('scrollToIndex', Number(e.currentTarget.value))} />
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
        value={scrollToProps.scrollToOffset}
        oninput={e => updateScrollToProps('scrollToOffset', Number(e.currentTarget.value))} />
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

<div style="font-weight: bold">
  <span>Visible Area: start</span>
  <span>{start}</span>
  -
  <span>end</span>
  <span>{end}</span>
</div>

<VirtualList
  items={myModel}
  style="height:500px"
  {...scrollToProps}
  {scrollToAlignment}
  {scrollToBehaviour}
  sizingCalculator={szCalculator}
  onVisibleRangeUpdate={handleVisualRangeChange}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature<(typeof myModel)[0]>)}
    <div
      style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;"
      class:highlighted={index === scrollToProps.scrollToIndex}>
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
`,Vs=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> {
    <span class="hljs-variable constant_">ALIGNMENT</span>,
    <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>,
    type <span class="hljs-title class_">VariantScrollConfig</span>,
    type <span class="hljs-title class_">VLRangeEvent</span>,
    type <span class="hljs-title class_">VLSlotSignature</span>
  } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$lib&#x27;</span>;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = $state(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>));

  <span class="hljs-comment">// used for the positioning pointers</span>
  <span class="hljs-keyword">let</span> start = $state(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">let</span> end = $state(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToAlignment</span>: <span class="hljs-variable constant_">ALIGNMENT</span> = $state(<span class="hljs-variable constant_">ALIGNMENT</span>.<span class="hljs-property">AUTO</span>);
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToBehaviour</span>: <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> = $state(<span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>.<span class="hljs-property">SMOOTH</span>);

  <span class="hljs-keyword">let</span> <span class="hljs-attr">szCalculator</span>: (<span class="hljs-function">(<span class="hljs-params">index: number, item: unknown</span>) =&gt;</span> number) | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// holds randomized sizes</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">randSizes</span>: <span class="hljs-title class_">Array</span>&lt;number&gt;;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleVisualRangeChange</span>(<span class="hljs-params">event: VLRangeEvent</span>) {
    start = event.<span class="hljs-property">start</span>;
    end = event.<span class="hljs-property">end</span>;
  }

  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToProps</span>: <span class="hljs-title class_">VariantScrollConfig</span> = $state({});

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">updateScrollToProps</span>(<span class="hljs-params">key: <span class="hljs-string">&#x27;scrollToIndex&#x27;</span> | <span class="hljs-string">&#x27;scrollToOffset&#x27;</span>, value: number | <span class="hljs-literal">undefined</span></span>) {
    <span class="hljs-keyword">if</span> (key === <span class="hljs-string">&#x27;scrollToIndex&#x27;</span>) {
      scrollToProps.<span class="hljs-property">scrollToIndex</span> = value;
      scrollToProps.<span class="hljs-property">scrollToOffset</span> = <span class="hljs-literal">undefined</span>;
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (key === <span class="hljs-string">&#x27;scrollToOffset&#x27;</span>) {
      scrollToProps.<span class="hljs-property">scrollToOffset</span> = value;
      scrollToProps.<span class="hljs-property">scrollToIndex</span> = <span class="hljs-literal">undefined</span>;
    }
  }

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
  <span class="hljs-title function_">sameSize</span>();
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
        <span class="hljs-attr">value</span>=<span class="hljs-string">{scrollToProps.scrollToIndex}</span>
        <span class="hljs-attr">oninput</span>=<span class="hljs-string">{e</span> =&gt;</span> updateScrollToProps(&#x27;scrollToIndex&#x27;, Number(e.currentTarget.value))} /&gt;
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
        <span class="hljs-attr">value</span>=<span class="hljs-string">{scrollToProps.scrollToOffset}</span>
        <span class="hljs-attr">oninput</span>=<span class="hljs-string">{e</span> =&gt;</span> updateScrollToProps(&#x27;scrollToOffset&#x27;, Number(e.currentTarget.value))} /&gt;
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

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-weight: bold&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Visible Area: start<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{start}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  -
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{end}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
  <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:500px&quot;</span>
  {<span class="hljs-attr">...scrollToProps</span>}
  {<span class="hljs-attr">scrollToAlignment</span>}
  {<span class="hljs-attr">scrollToBehaviour</span>}
  <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{szCalculator}</span>
  <span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleVisualRangeChange}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature&lt;(typeof myModel)[0]&gt;)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>
      <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToProps.scrollToIndex}</span>&gt;</span>
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
`,Cs={code:Ls,highlightedHTML:Vs,component:Is};var Rs=R("<h2>Positioning</h2> <p>The component provides properties to position the list either on an element, or at a pixel offset.</p> <!>",1);function Es(o){var p=Rs(),t=s(cs(p),4);xs(t,{example:Cs}),C(o,p)}export{Es as component};
