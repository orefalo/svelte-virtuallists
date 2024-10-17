import{L as gs,p as ms,s as e,b as c,u as ns,y as os,e as vs,g as t,t as ls,R as ts,S as ps,h as B,j as fs,d as p,k as V,l as s,m as a,T as es,r as n,v as bs,U as _s,K as z}from"../chunks/external.DeOy8gQN.js";import{E as ws}from"../chunks/ExampleArea.DLkOYkA1.js";import{A as ys,S as xs,a as qs}from"../chunks/svelte-virtuallists.CZuiDlAW.js";const Ts=!0,Vs=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ts},Symbol.toStringTag,{value:"Module"}));function ks(j,i){p(i,50)}var Os=V('<div class="row svelte-ufwu3t"> </div>'),Ss=V('<div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <div style="float: right;font-weight: bold"><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <div class="list"><!></div> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function As(j,i){ms(i,!0);let u,g=e(void 0),m=e(void 0),v=e(c([])),d=e(void 0),f=e(void 0),E=e(0),N=e(0);function cs(l){l.type==="range.update"&&(p(E,c(l.start)),p(N,c(l.end)))}const C=new Array(1e4).fill(1).map((l,o)=>o);ns(()=>{p(d,void 0),p(f,c(t(m)))}),ns(()=>{p(f,void 0),p(d,c(t(g)))});let b=e(c(ys.AUTO)),_=e(c(xs.SMOOTH));function U(){let l=[];for(let o=0;o<1e4;(o+=1)-1)l.push(Math.random()*105+50);p(v,c(l))}U();var $=Ss(),w=os($),y=a(w),G=a(y),F=s(a(G));es(F),n(G),n(y);var x=s(y,2),P=a(x),K=s(a(P));es(K),n(P),n(x);var q=s(x,2),D=a(q),T=s(a(D)),k=a(T);k.value=(k.__value="auto")==null?"":"auto";var O=s(k);O.value=(O.__value="start")==null?"":"start";var S=s(O);S.value=(S.__value="center")==null?"":"center";var J=s(S);J.value=(J.__value="end")==null?"":"end",n(T),n(D),n(q);var Q=s(q,2),W=a(Q),A=s(a(W)),I=a(A);I.value=(I.__value="auto")==null?"":"auto";var L=s(I);L.value=(L.__value="smooth")==null?"":"smooth";var X=s(L);X.value=(X.__value="instant")==null?"":"instant",n(A),n(W),n(Q),n(w);var H=s(w,2),M=s(a(H),2),is=a(M);n(M);var Y=s(M,4),rs=a(Y);n(Y),n(H);var R=s(H,2),hs=a(R);vs(qs(hs,{height:500,width:"auto",model:C,get modelCount(){return C.length},get itemSize(){return t(v)},get scrollToIndex(){return t(d)},get scrollOffset(){return t(f)},get scrollToAlignment(){return t(b)},get scrollToBehaviour(){return t(_)},onVisibleRangeUpdate:cs,slot:(o,r)=>{let us=()=>r==null?void 0:r().style,as=()=>r==null?void 0:r().index;var h=Os(),ds=a(h);n(h),ls(()=>{bs(h,"style",us()),_s(h,"highlighted",as()===t(d)),z(ds,`Item #${as()??""}`)}),B(o,h)},$$slots:{slot:!0}}),o=>u=o,()=>u),n(R);var Z=s(R,2),ss=a(Z);ss.__click=U;var js=s(ss,2);js.__click=[ks,v],n(Z),ls(()=>{z(is,t(E)),z(rs,t(N))}),ts(F,()=>t(g),l=>p(g,l)),ts(K,()=>t(m),l=>p(m,l)),ps(T,()=>t(b),l=>p(b,l)),ps(A,()=>t(_),l=>p(_,l)),B(j,$),fs()}gs(["click"]);const Is=`<script lang="ts">
  import { VirtualList, ALIGNMENT, SCROLL_BEHAVIOR } from 'svelte-virtuallists';

  let virtualList;

  // on the UI
  let theScrollToIndex: number | undefined = $state();
  let theScrollOffet: number | undefined = $state();

  // on the component
  let rowHeights: Array<number> | number = $state([]);
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
  const myModel: Array<number> = new Array(10000).fill(1).map((v, i) => i);

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

  function randomize() {
    let newRowHeights = [];
    for (let i = 0; i < 10000; i++) {
      newRowHeights.push(Math.random() * (155 - 50) + 50);
    }
    rowHeights = newRowHeights;
  }

  function sameSize() {
    rowHeights = 50;
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
<div style="float: right;font-weight: bold">
  <span>Visible Area: start</span>
  <span>{start}</span>
  -
  <span>end</span>
  <span>{end}</span>
</div>
<div class="list">
  <VirtualList
    bind:this={virtualList}
    height={500}
    width="auto"
    model={myModel}
    modelCount={myModel.length}
    itemSize={rowHeights}
    {scrollToIndex}
    scrollOffset={scrollOffet}
    {scrollToAlignment}
    {scrollToBehaviour}
    onVisibleRangeUpdate={handleMessage}>
    {#snippet slot({ item: _item, style, index })}
      <div class="row" {style} class:highlighted={index === scrollToIndex}>
        Item #{index}
      </div>
    {/snippet}
  </VirtualList>
</div>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>

<style>
  :global(body),
  :global(html) {
    height: 100%;
    margin: 0;
    background-color: rgb(249, 249, 249);
    display: block;
  }

  :global(.virtual-list-wrapper) {
    margin: 20px;
    background: #fff;
    border-radius: 2px;
    background: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  .row {
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    line-height: 50px;
    font-weight: 500;
    background: #fff;
  }

  .row.highlighted {
    background: #efefef;
  }
</style>
`,Ls=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, <span class="hljs-variable constant_">ALIGNMENT</span>, <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">let</span> virtualList;

  <span class="hljs-comment">// on the UI</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// on the component</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">rowHeights</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; | number = $state([]);
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
  <span class="hljs-keyword">const</span> <span class="hljs-attr">myModel</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> i);

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

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> newRowHeights = [];
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10000</span>; i++) {
      newRowHeights.<span class="hljs-title function_">push</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">50</span>) + <span class="hljs-number">50</span>);
    }
    rowHeights = newRowHeights;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    rowHeights = <span class="hljs-number">50</span>;
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
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;float: right;font-weight: bold&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Visible Area: start<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{start}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  -
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{end}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
    <span class="hljs-attr">bind:this</span>=<span class="hljs-string">{virtualList}</span>
    <span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-attr">model</span>=<span class="hljs-string">{myModel}</span>
    <span class="hljs-attr">modelCount</span>=<span class="hljs-string">{myModel.length}</span>
    <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{rowHeights}</span>
    {<span class="hljs-attr">scrollToIndex</span>}
    <span class="hljs-attr">scrollOffset</span>=<span class="hljs-string">{scrollOffet}</span>
    {<span class="hljs-attr">scrollToAlignment</span>}
    {<span class="hljs-attr">scrollToBehaviour</span>}
    <span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleMessage}</span>&gt;</span>
    {#snippet slot({ item: _item, style, index })}
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>} <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToIndex}</span>&gt;</span>
        Item #{index}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    {/snippet}
  <span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  :<span class="hljs-built_in">global</span>(body),
  :<span class="hljs-built_in">global</span>(html) {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">249</span>, <span class="hljs-number">249</span>, <span class="hljs-number">249</span>);
    <span class="hljs-attribute">display</span>: block;
  }

  :<span class="hljs-built_in">global</span>(.virtual-list-wrapper) {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">2px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#fafafa</span>;
    <span class="hljs-attribute">font-family</span>: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    -webkit-<span class="hljs-attribute">font-smoothing</span>: antialiased;
  }

  <span class="hljs-selector-class">.row</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">15px</span>;
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
  }

  <span class="hljs-selector-class">.row</span><span class="hljs-selector-class">.highlighted</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#efefef</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,Hs={code:Is,highlightedHTML:Ls,component:As};var Ms=V("<h2>Positioning</h2> <p>The component provides properties to position the list either on an element, or on a pixel offset.</p> <!>",1);function Es(j){var i=Ms(),u=s(os(i),4);ws(u,{example:Hs}),B(j,i)}export{Es as component,Vs as universal};
