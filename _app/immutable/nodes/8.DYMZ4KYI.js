import{K as H,p as S,s as M,b as d,e as L,g as A,h as r,j as V,d as b,k as h,q as o,t as C,x as a,n as R,G as I,z as v}from"../chunks/external.CEs9Ysyu.js";import{E as D}from"../chunks/ExampleArea.C8HxGlJx.js";import{V as E}from"../chunks/svelte-virtuallists.CuVeN2vA.js";const O=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function T(p,t){b(t,50)}var G=h('<div class="row svelte-1q7rqk5"> </div>'),K=h('<div class="list"><!></div> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function P(p,t){S(t,!0);const l=1e4;let i,e=M(d([]));const w=new Array(l).fill(1).map((n,s)=>({text:"Item "+s}));function u(){let n=[];for(let s=0;s<l;s++)n.push(Math.random()*105+50);b(e,d(n))}u();var j=K(),m=v(j),y=o(m);{var f=(n,s)=>{let k=()=>s==null?void 0:s().item,z=()=>s==null?void 0:s().style;var c=G(),q=o(c);C(()=>{R(c,"style",z()),I(q,k().text)}),r(n,c)};L(E(y,{model:w,height:500,width:"auto",modelCount:l,get itemSize(){return A(e)},slot:f}),n=>i=n,()=>i)}var _=a(a(m,!0)),g=o(_);g.__click=u;var x=a(a(g,!0));x.__click=[T,e],r(p,j),V()}H(["click"]);const B=`<script lang="ts">
  import { VirtualList, type SlotAttributes } from 'svelte-virtuallists';

  const modelCount = 10000;

  let virtualList: VirtualList;

  // on the component
  let rowHeights: Array<number> | number = $state([]);

  interface MyItemsData {
    text: string;
  }

  const myModel: Array<MyItemsData> = new Array(modelCount).fill(1).map((v, i) => ({
    text: 'Item ' + i
  }));

  function randomize() {
    let newRowHeights = [];
    for (let i = 0; i < modelCount; i++) {
      newRowHeights.push(Math.random() * (155 - 50) + 50);
    }
    rowHeights = newRowHeights;
  }

  function sameSize() {
    rowHeights = 50;
  }

  randomize();
<\/script>

<div class="list">
  <VirtualList
    bind:this={virtualList}
    model={myModel}
    height={500}
    width="auto"
    {modelCount}
    itemSize={rowHeights}>
    {#snippet slot({ item, style, index: _index }: SlotAttributes<MyItemsData>)}
      <div class="row" {style}>
        {item.text}
      </div>
    {/snippet}
  </VirtualList>
</div>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>

<style>
  .row {
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    line-height: 50px;
    font-weight: 500;
    background: #fff;
  }
</style>
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">SlotAttributes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> modelCount = <span class="hljs-number">10000</span>;

  <span class="hljs-keyword">let</span> <span class="hljs-attr">virtualList</span>: <span class="hljs-title class_">VirtualList</span>;

  <span class="hljs-comment">// on the component</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">rowHeights</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; | number = $state([]);

  interface <span class="hljs-title class_">MyItemsData</span> {
    <span class="hljs-attr">text</span>: string;
  }

  <span class="hljs-keyword">const</span> <span class="hljs-attr">myModel</span>: <span class="hljs-title class_">Array</span>&lt;<span class="hljs-title class_">MyItemsData</span>&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(modelCount).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> ({
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i
  }));

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> newRowHeights = [];
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; modelCount; i++) {
      newRowHeights.<span class="hljs-title function_">push</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">50</span>) + <span class="hljs-number">50</span>);
    }
    rowHeights = newRowHeights;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    rowHeights = <span class="hljs-number">50</span>;
  }

  <span class="hljs-title function_">randomize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
    <span class="hljs-attr">bind:this</span>=<span class="hljs-string">{virtualList}</span>
    <span class="hljs-attr">model</span>=<span class="hljs-string">{myModel}</span>
    <span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span>
    {<span class="hljs-attr">modelCount</span>}
    <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{rowHeights}</span>&gt;</span>
    {#snippet slot({ item, style, index: _index }: SlotAttributes<span class="hljs-tag">&lt;<span class="hljs-name">MyItemsData</span>&gt;</span>)}
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
        {item.text}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    {/snippet}
  <span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.row</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">15px</span>;
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,J={code:B,highlightedHTML:F,component:P};var N=h("<h2>Variable heights</h2> <p>list items can have different sizes</p> <!>",1);function Y(p){var t=N(),l=v(t),i=a(a(l,!0)),e=a(a(i,!0));D(e,{example:J,$$legacy:!0}),r(p,t)}export{Y as component,X as universal};
