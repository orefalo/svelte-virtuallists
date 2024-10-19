import{p as P,a as z,u as E,t as U,R as H,f as A,h as D,j as L,q as e,w as n,y as a,V as as,z as G,g as s,K as O,v as F,m as Q,d as ls,k as i,b as I,s as h,T as K,U as ts}from"../chunks/external.DepRz0zj.js";import{E as es}from"../chunks/ExampleArea.CqFsZ60u.js";import{V as ps}from"../chunks/svelte-virtuallists.CXsgq9DL.js";const rs=!0,xs=Object.freeze(Object.defineProperty({__proto__:null,prerender:rs},Symbol.toStringTag,{value:"Module"}));var cs=L('<div class="container svelte-1cx9x18"><pre aria-hidden="true" class="svelte-1cx9x18"> </pre> <textarea readonly="" style="outline: none;" class="svelte-1cx9x18"></textarea></div>');function is(g,p){P(p,!0);let l=z(p,"value",7,""),w=z(p,"minRows",3,1),d=z(p,"maxRows",3,40);const _=j=>j.split(/\r?\n/);function S(j,b){const u=_(j);return u.length=b,u.reduce(function(T,q){return T+`
`+q})}E(()=>{l(S(l(),d()))});let k=F(()=>`${1+w()*1.2}em`),m=F(()=>d()?`${1+d()*1.2}em`:"auto");var o=cs(),r=n(o),f=n(r);a(r);var v=e(r,2);as(v),a(o),U(()=>{G(r,"style",`min-height: ${s(k)??""}; max-height: ${s(m)??""}`),O(f,l()+`
`)}),H(v,l),A(g,o),D()}var os=L('<div class="row svelte-ufwu3t"> </div>'),hs=L('<!> <div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div></div> <div style="float: right;font-weight: bold"><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <div class="list"><!></div>',1);function ds(g,p){P(p,!0);let l=h("// Event name: Event params   (Last event at the top)"),w=h(0),d=h(0);function _(t){i(l,JSON.stringify(t)+`
`+s(l)),t.type==="range.update"&&(i(w,I(t.start)),i(d,I(t.end)))}const S=new Array(1e4).fill(1).map((t,x)=>x);let k,m=h(void 0),o=h(void 0),r=h(void 0),f=h(void 0);E(()=>{i(r,void 0),i(f,I(s(o)))}),E(()=>{i(f,void 0),i(r,I(s(m)))});var v=hs(),j=Q(v);is(j,{get value(){return s(l)},minRows:4,maxRows:15});var b=e(j,2),u=n(b),V=n(u),T=e(n(V));K(T),a(V),a(u);var q=e(u,2),C=n(q),N=e(n(C));K(N),a(C),a(q),a(b);var M=e(b,2),R=e(n(M),2),W=n(R);a(R);var J=e(R,4),X=n(J);a(J),a(M);var B=e(M,2),Y=n(B);ls(ps(Y,{height:500,width:"auto",model:S,get modelCount(){return S.length},itemSize:40,get scrollToIndex(){return s(r)},get scrollOffset(){return s(f)},onAfterScroll:_,onVisibleRangeUpdate:_,slot:(x,c)=>{let Z=()=>c==null?void 0:c().item,$=()=>c==null?void 0:c().style,ss=()=>c==null?void 0:c().index;var y=os(),ns=n(y);a(y),U(()=>{G(y,"style",$()),ts(y,"highlighted",ss()===s(r)),O(ns,`Item #${Z()??""}`)}),A(x,y)},$$slots:{slot:!0}}),x=>k=x,()=>k),a(B),U(()=>{O(W,s(w)),O(X,s(d))}),H(T,()=>s(m),t=>i(m,t)),H(N,()=>s(o),t=>i(o,t)),A(g,v),D()}const js=`<script lang="ts">
  import { VirtualList, type VLSlotSignature } from 'svelte-virtuallists';
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

  let virtualList;

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
    {#snippet slot({ item, style, index }: VLSlotSignature<any>)}
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
`,us=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
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

  <span class="hljs-keyword">let</span> virtualList;

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
    {#snippet slot({ item, style, index }: VLSlotSignature<span class="hljs-tag">&lt;<span class="hljs-name">any</span>&gt;</span>)}
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
`,gs={code:js,highlightedHTML:us,component:ds};var ms=L("<h2>Events</h2> <p>Try interacting with the list below and check the event log below.</p> <!>",1);function ys(g){var p=ms(),l=e(Q(p),4);es(l,{example:gs}),A(g,p)}export{ys as component,xs as universal};
