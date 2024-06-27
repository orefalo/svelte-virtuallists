import{p as N,a as I,u as L,t as M,L as V,h as T,j as J,k as O,Q as ls,n as B,g as n,G as q,R as U,q as l,x as s,e as ts,d as r,b as S,s as h,z as F,N as C,O as es}from"../chunks/external.CEs9Ysyu.js";import{E as ps}from"../chunks/ExampleArea.C8HxGlJx.js";import{V as rs}from"../chunks/svelte-virtuallists.CuVeN2vA.js";const cs=!0,ys=Object.freeze(Object.defineProperty({__proto__:null,prerender:cs},Symbol.toStringTag,{value:"Module"}));var is=O('<div class="container svelte-1cx9x18"><pre aria-hidden="true" class="svelte-1cx9x18"> </pre> <textarea readonly="" style="outline: none;" class="svelte-1cx9x18"></textarea></div>');function os(j,p){N(p,!0);let t=I(p,"value",7,""),d=I(p,"minRows",3,1),c=I(p,"maxRows",3,40);const b=o=>o.split(/\r?\n/);function x(o,w){const v=b(o);return v.length=w,v.reduce(function(_,A){return _+`
`+A})}L(()=>{t(x(t(),c()))});let y=U(()=>`${1+d()*1.2}em`),g=U(()=>c()?`${1+c()*1.2}em`:"auto");var u=is(),i=l(u),m=l(i),f=s(s(i,!0));ls(f),M(()=>{B(i,"style",`min-height: ${n(y)??""}; max-height: ${n(g)??""}`),q(m,t()+`
`)}),V(f,t,o=>t(o)),T(j,u),J()}var hs=O('<div class="row svelte-ufwu3t"> </div>'),ds=O('<!> <div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div></div> <div style="float: right;font-weight: bold"><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <div class="list"><!></div>',1);function us(j,p){N(p,!0);let t=h("// Event name: Event params   (Last event at the top)"),d=h(0),c=h(0);function b(a){r(t,JSON.stringify(a)+`
`+n(t)),a.type==="range.update"&&(r(d,S(a.start)),r(c,S(a.end)))}const x=new Array(1e4).fill(1).map((a,e)=>e);let y,g=h(void 0),u=h(void 0),i=h(void 0),m=h(void 0);L(()=>{r(i,void 0),r(m,S(n(u)))}),L(()=>{r(m,void 0),r(i,S(n(g)))});var f=ds(),o=F(f);os(o,{get value(){return n(t)},minRows:4,maxRows:15});var w=s(s(o,!0)),v=l(w),R=l(v),_=s(l(R));C(_);var A=s(s(v,!0)),G=l(A),z=s(l(G));C(z);var E=s(s(w,!0)),P=l(E),H=s(s(P,!0)),Q=l(H),D=s(s(H,!0)),K=s(s(D,!0)),W=l(K),X=s(s(E,!0)),Y=l(X);{var Z=(a,e)=>{let $=()=>e==null?void 0:e().item,ss=()=>e==null?void 0:e().style,as=()=>e==null?void 0:e().index;var k=hs(),ns=l(k);M(()=>{B(k,"style",ss()),es(k,"highlighted",as()===n(i)),q(ns,`Item #${$()??""}`)}),T(a,k)};ts(rs(Y,{height:500,width:"auto",model:x,get modelCount(){return x.length},itemSize:40,get scrollToIndex(){return n(i)},get scrollOffset(){return n(m)},onAfterScroll:b,onVisibleRangeUpdate:b,slot:Z}),a=>y=a,()=>y)}M(()=>{q(Q,n(d)),q(W,n(c))}),V(_,()=>n(g),a=>r(g,a)),V(z,()=>n(u),a=>r(u,a)),T(j,f),J()}const js=`<script lang="ts">
  import { VirtualList, type SlotAttributes } from 'svelte-virtuallists';
  import TextArea from '$comp/TextAreaAutosize.svelte';

  let val = $state('// Event name: Event params   (Last event at the top)');

  let start = $state(0);
  let end = $state(0);

  function handleMessage(event: any) {
    val = JSON.stringify(event) + '\\n' + val;

    if (event.type === 'range.update') {
      start = event.start;
      end = event.end;
    }
  }

  // that's the model, which we don't use for this example
  const myModel: Array<number> = new Array(10000).fill(1).map((v, i) => i);

  let virtualList: VirtualList;

  // on the UI
  let theScrollToIndex: number | undefined = $state();
  let theScrollOffet: number | undefined = $state();

  // on the component
  let scrollToIndex: number | undefined = $state();
  let scrollOffet: number | undefined = $state();

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
<\/script>

<TextArea value={val} minRows={4} maxRows={15} />

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
    itemSize={40}
    {scrollToIndex}
    scrollOffset={scrollOffet}
    onAfterScroll={handleMessage}
    onVisibleRangeUpdate={handleMessage}>
    {#snippet slot({ item, style, index }: SlotAttributes<any>)}
      <div class="row" {style} class:highlighted={index === scrollToIndex}>
        Item #{item}
      </div>
    {/snippet}
  </VirtualList>
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
`,gs=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">SlotAttributes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">TextArea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/TextAreaAutosize.svelte&#x27;</span>;

  <span class="hljs-keyword">let</span> val = $state(<span class="hljs-string">&#x27;// Event name: Event params   (Last event at the top)&#x27;</span>);

  <span class="hljs-keyword">let</span> start = $state(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">let</span> end = $state(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">event: any</span>) {
    val = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(event) + <span class="hljs-string">&#x27;\\n&#x27;</span> + val;

    <span class="hljs-keyword">if</span> (event.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;range.update&#x27;</span>) {
      start = event.<span class="hljs-property">start</span>;
      end = event.<span class="hljs-property">end</span>;
    }
  }

  <span class="hljs-comment">// that&#x27;s the model, which we don&#x27;t use for this example</span>
  <span class="hljs-keyword">const</span> <span class="hljs-attr">myModel</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> i);

  <span class="hljs-keyword">let</span> <span class="hljs-attr">virtualList</span>: <span class="hljs-title class_">VirtualList</span>;

  <span class="hljs-comment">// on the UI</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// on the component</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

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
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{val}</span> <span class="hljs-attr">minRows</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">maxRows</span>=<span class="hljs-string">{15}</span> /&gt;</span>

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
    <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{40}</span>
    {<span class="hljs-attr">scrollToIndex</span>}
    <span class="hljs-attr">scrollOffset</span>=<span class="hljs-string">{scrollOffet}</span>
    <span class="hljs-attr">onAfterScroll</span>=<span class="hljs-string">{handleMessage}</span>
    <span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleMessage}</span>&gt;</span>
    {#snippet slot({ item, style, index }: SlotAttributes<span class="hljs-tag">&lt;<span class="hljs-name">any</span>&gt;</span>)}
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>} <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToIndex}</span>&gt;</span>
        Item #{item}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    {/snippet}
  <span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
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
`,ms={code:js,highlightedHTML:gs,component:us};var fs=O("<h2>Events</h2> <p>Try interacting with the list below and check the event log below.</p> <!>",1);function ws(j){var p=fs(),t=F(p),d=s(s(t,!0)),c=s(s(d,!0));ps(c,{example:ms,$$legacy:!0}),T(j,p)}export{ws as component,ys as universal};
