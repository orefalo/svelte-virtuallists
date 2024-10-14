import{L as H,p as q,s as S,b as v,y,e as V,g as C,h,j as R,d as f,k as m,m as c,t as I,l as j,r,v as A,K as D}from"../chunks/external.C8cba1ez.js";import{E}from"../chunks/ExampleArea.DYttOl7s.js";import{a as O}from"../chunks/svelte-virtuallists.BpvElS_U.js";const T=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:T},Symbol.toStringTag,{value:"Module"}));function K(l,a){f(a,50)}var P=m('<div class="row svelte-1q7rqk5"> </div>'),B=m('<div class="list"><!></div> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function F(l,a){q(a,!0);const t=1e4;let u,i=S(v([]));const _=new Array(t).fill(1).map((e,s)=>({text:"Item "+s}));function d(){let e=[];for(let s=0;s<t;(s+=1)-1)e.push(Math.random()*105+50);f(i,v(e))}d();var g=B(),o=y(g),x=c(o);V(O(x,{model:_,height:500,width:"auto",modelCount:t,get itemSize(){return C(i)},slot:(s,n)=>{let z=()=>n==null?void 0:n().item,M=()=>n==null?void 0:n().style;var p=P(),L=c(p);r(p),I(()=>{A(p,"style",M()),D(L,z().text)}),h(s,p)},$$slots:{slot:!0}}),s=>u=s,()=>u),r(o);var b=j(o,2),w=c(b);w.__click=d;var k=j(w,2);k.__click=[K,i],r(b),h(l,g),R()}H(["click"]);const G=`<script lang="ts">
  import { VirtualList, type VirtualListModel } from 'svelte-virtuallists';

  const modelCount = 10000;

  let virtualList;

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
    {#snippet slot({ item, style, index: _index }: VirtualListModel<MyItemsData>)}
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
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">VirtualListModel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> modelCount = <span class="hljs-number">10000</span>;

  <span class="hljs-keyword">let</span> virtualList;

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
    {#snippet slot({ item, style, index: _index }: VirtualListModel<span class="hljs-tag">&lt;<span class="hljs-name">MyItemsData</span>&gt;</span>)}
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
`,N={code:G,highlightedHTML:J,component:F};var Q=m("<h2>Variable heights</h2> <p>list items can have different sizes</p> <!>",1);function Z(l){var a=Q(),t=j(y(a),4);E(t,{example:N}),h(l,a)}export{Z as component,Y as universal};
