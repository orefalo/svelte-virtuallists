import{L as ds,p as gs,u as ss,s as c,b as r,y as ps,g as t,t as ns,R as as,S as ls,h as R,j as ms,d as p,k as C,l as s,m as n,T as ts,r as a,v as vs,U as fs,K as V}from"../chunks/external.DZ8ltDyt.js";import{E as _s}from"../chunks/ExampleArea.BJhje2p9.js";import{A as bs,S as xs,V as ys}from"../chunks/svelte-virtuallists.BtcFkJbB.js";const qs=!0,Rs=Object.freeze(Object.defineProperty({__proto__:null,prerender:qs},Symbol.toStringTag,{value:"Module"}));function Ts(u,o){p(o,(j,d)=>25)}var Os=C('<div class="svelte-1bng65z"> </div>'),ws=C('<div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <div><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function Ss(u,o){gs(o,!0);const j=new Array(1e4).fill(1).map((l,i)=>({text:"Item "+i+" item "+i,lineHeight:20+i%30+"px"}));let d=c(void 0),m=c(void 0),g=c(void 0),v=c(void 0),B=c(0),N=c(0);function es(l){l.type==="range.update"&&(p(B,r(l.start)),p(N,r(l.end)))}ss(()=>{p(g,void 0),p(v,r(t(m)))}),ss(()=>{p(v,void 0),p(g,r(t(d)))});let f=c(r(bs.AUTO)),_=c(r(xs.SMOOTH)),b=c(void 0);function E(){p(b,(l,i)=>Math.round(Math.random()*125+30))}E();var H=ws(),x=ps(H),y=n(x),U=n(y),G=s(n(U));ts(G),a(U),a(y);var q=s(y,2),P=n(q),K=s(n(P));ts(K),a(P),a(q);var T=s(q,2),$=n(T),O=s(n($)),w=n(O);w.value=(w.__value="auto")==null?"":"auto";var S=s(w);S.value=(S.__value="start")==null?"":"start";var I=s(S);I.value=(I.__value="center")==null?"":"center";var D=s(I);D.value=(D.__value="end")==null?"":"end",a(O),a($),a(T);var F=s(T,2),J=n(F),A=s(n(J)),k=n(A);k.value=(k.__value="auto")==null?"":"auto";var L=s(k);L.value=(L.__value="smooth")==null?"":"smooth";var Q=s(L);Q.value=(Q.__value="instant")==null?"":"instant",a(A),a(J),a(F),a(x);var z=s(x,2),M=s(n(z),2),cs=n(M);a(M);var W=s(M,4),os=n(W);a(W),a(z);var X=s(z,2);ys(X,{items:j,style:"height:500px",get scrollToIndex(){return t(g)},get scrollOffset(){return t(v)},get scrollToAlignment(){return t(f)},get scrollToBehaviour(){return t(_)},get sizingCalculator(){return t(b)},onVisibleRangeUpdate:es,vl_slot:(i,e)=>{let rs=()=>e==null?void 0:e().item,hs=()=>e==null?void 0:e().index,us=()=>e==null?void 0:e().size;var h=Os(),js=n(h);a(h),ns(()=>{vs(h,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${us()??""}px;`),fs(h,"highlighted",hs()===t(g)),V(js,rs().text)}),R(i,h)},$$slots:{vl_slot:!0}});var Y=s(X,2),Z=n(Y);Z.__click=E;var is=s(Z,2);is.__click=[Ts,b],a(Y),ns(()=>{V(cs,t(B)),V(os,t(N))}),as(G,()=>t(d),l=>p(d,l)),as(K,()=>t(m),l=>p(m,l)),ls(O,()=>t(f),l=>p(f,l)),ls(A,()=>t(_),l=>p(_,l)),R(u,H),ms()}ds(["click"]);const Is=`<script lang="ts">
  import { ALIGNMENT, SCROLL_BEHAVIOR, type VLSlotSignature } from '$lib';
  import VirtualList from 'svelte-virtuallists/new/VirtualListNew.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: 'Item ' + i + ' item ' + i, lineHeight: 20 + (i % 30) + 'px' };
  });

  let virtualList;

  // on the UI
  let theScrollToIndex: number | undefined = $state();
  let theScrollOffet: number | undefined = $state();

  // on the component
  let scrollToIndex: number | undefined = $state();
  let scrollOffet: number | undefined = $state();

  let start = $state(0);
  let end = $state(0);

  function handleMessage(event: any) {
    if (event.type === 'range.update') {
      start = event.start;
      end = event.end;
    }
  }

  // that's the model, which we don't use for this example
  // const myModel: Array<number> = new Array(10000).fill(1).map((v, i) => i);

  $effect(() => {
    // scrollToIndex and scrollOffset shall not be used together.
    scrollToIndex = undefined;
    scrollOffet = theScrollOffet;
  });

  $effect(() => {
    // scrollToIndex and scrollOffset shall not be used together.
    scrollOffet = undefined;
    scrollToIndex = theScrollToIndex;
  });

  let scrollToAlignment: ALIGNMENT = $state(ALIGNMENT.AUTO);
  let scrollToBehaviour: SCROLL_BEHAVIOR = $state(SCROLL_BEHAVIOR.SMOOTH);

  let szCalculator: ((index: number, item: unknown) => number) | undefined = $state();

  function randomize() {
    szCalculator = (_index: number, _item: any) => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    szCalculator = (_index: number, _item: any) => 25;
  }

  randomize();
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
  scrollOffset={scrollOffet}
  {scrollToAlignment}
  {scrollToBehaviour}
  sizingCalculator={szCalculator}
  onVisibleRangeUpdate={handleMessage}>
  {#snippet vl_slot({ item, index, size })}
    <div
      style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;"
      class:highlighted={index === scrollToIndex}>
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>

<style>
  .highlighted {
    background: #efefef;
  }
</style>
`,As=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ALIGNMENT</span>, <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$lib&#x27;</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">VirtualList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists/new/VirtualListNew.svelte&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i + <span class="hljs-string">&#x27; item &#x27;</span> + i, <span class="hljs-attr">lineHeight</span>: <span class="hljs-number">20</span> + (i % <span class="hljs-number">30</span>) + <span class="hljs-string">&#x27;px&#x27;</span> };
  });

  <span class="hljs-keyword">let</span> virtualList;

  <span class="hljs-comment">// on the UI</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// on the component</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-keyword">let</span> start = $state(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">let</span> end = $state(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">event: any</span>) {
    <span class="hljs-keyword">if</span> (event.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;range.update&#x27;</span>) {
      start = event.<span class="hljs-property">start</span>;
      end = event.<span class="hljs-property">end</span>;
    }
  }

  <span class="hljs-comment">// that&#x27;s the model, which we don&#x27;t use for this example</span>
  <span class="hljs-comment">// const myModel: Array&lt;number&gt; = new Array(10000).fill(1).map((v, i) =&gt; i);</span>

  $effect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
    scrollToIndex = <span class="hljs-literal">undefined</span>;
    scrollOffet = theScrollOffet;
  });

  $effect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
    scrollOffet = <span class="hljs-literal">undefined</span>;
    scrollToIndex = theScrollToIndex;
  });

  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToAlignment</span>: <span class="hljs-variable constant_">ALIGNMENT</span> = $state(<span class="hljs-variable constant_">ALIGNMENT</span>.<span class="hljs-property">AUTO</span>);
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToBehaviour</span>: <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> = $state(<span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>.<span class="hljs-property">SMOOTH</span>);

  <span class="hljs-keyword">let</span> <span class="hljs-attr">szCalculator</span>: (<span class="hljs-function">(<span class="hljs-params">index: number, item: unknown</span>) =&gt;</span> number) | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
    szCalculator = <span class="hljs-function">(<span class="hljs-params">_index: number, _item: any</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">30</span>) + <span class="hljs-number">30</span>);
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    szCalculator = <span class="hljs-function">(<span class="hljs-params">_index: number, _item: any</span>) =&gt;</span> <span class="hljs-number">25</span>;
  }

  <span class="hljs-title function_">randomize</span>();
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
  <span class="hljs-attr">scrollOffset</span>=<span class="hljs-string">{scrollOffet}</span>
  {<span class="hljs-attr">scrollToAlignment</span>}
  {<span class="hljs-attr">scrollToBehaviour</span>}
  <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{szCalculator}</span>
  <span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleMessage}</span>&gt;</span>
  {#snippet vl_slot({ item, index, size })}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>
      <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToIndex}</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.highlighted</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#efefef</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,ks={code:Is,highlightedHTML:As,component:Ss};var Ls=C("<h2>Positioning</h2> <p>The component provides properties to position the list either on an element, or on a pixel offset.</p> <!>",1);function Cs(u){var o=Ls(),j=s(ps(o),4);_s(j,{example:ks}),R(u,o)}export{Cs as component,Rs as universal};
