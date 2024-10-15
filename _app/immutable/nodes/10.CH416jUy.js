import{L as q,p as H,l as p,y as L,h as i,j as S,d as M,k as o,s as A,t as w,m as u,r as d,v as f,K as z}from"../chunks/external.XxHSezL0.js";import{E as I}from"../chunks/ExampleArea.CQkmjKMx.js";import{V}from"../chunks/svelte-virtuallists.De9BByWX.js";function N(e,t){M(t,(l,r)=>25)}var R=o("<div> </div>"),E=o("<div> </div>"),C=o('<h2>Horizontal</h2> <!> <h2>Vertical</h2> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function K(e,t){H(t,!0);const l=new Array(1e4).fill(1).map((c,n)=>({text:"Item "+n+" item "+n}));let r=A(void 0);function g(){M(r,(c,n)=>Math.round(Math.random()*125+30))}g();var v=C(),x=p(L(v),2);V(x,{items:l,style:"width:100%",isHorizontal:!0,vl_slot:(n,s)=>{let h=()=>s==null?void 0:s().item,m=()=>s==null?void 0:s().size;var a=R(),j=u(a);d(a),w(()=>{f(a,"style",`border: 1px solid rgb(204, 204, 204); width: ${m()??""}px;`),z(j,h().text)}),i(n,a)},$$slots:{vl_slot:!0}});var b=p(x,4);V(b,{items:l,style:"height:600px",vl_slot:(n,s)=>{let h=()=>s==null?void 0:s().item,m=()=>s==null?void 0:s().size;var a=E(),j=u(a);d(a),w(()=>{f(a,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${m()??""}px;`),z(j,h().text)}),i(n,a)},$$slots:{vl_slot:!0}});var y=p(b,2),_=u(y);_.__click=g;var k=p(_,2);k.__click=[N,r],d(y),i(e,v),S()}q(["click"]);const T=`<script lang="ts">
  import { type VirtualListModel } from 'svelte-virtuallists';
  import VirtualList from 'svelte-virtuallists/new/VirtualListNew.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return {
      text: 'Item ' + i + ' item ' + i
    };
  });

  let rowHeights = $state();

  function randomize() {
    rowHeights = (index: number, item: any) => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    rowHeights = (index: number, item: any) => 25;
  }

  randomize();
<\/script>

<h2>Horizontal</h2>

<VirtualList items={myModel} style="width:100%" isHorizontal={true}>
  {#snippet vl_slot({ index, item, size }: VirtualListModel)}
    <div style="border: 1px solid rgb(204, 204, 204); width: {size}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ index, item, size }: VirtualListModel)}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
`,B=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { type <span class="hljs-title class_">VirtualListModel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">VirtualList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists/new/VirtualListNew.svelte&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i + <span class="hljs-string">&#x27; item &#x27;</span> + i
    };
  });

  <span class="hljs-keyword">let</span> rowHeights = $state();

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
    rowHeights = <span class="hljs-function">(<span class="hljs-params">index: number, item: any</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">30</span>) + <span class="hljs-number">30</span>);
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    rowHeights = <span class="hljs-function">(<span class="hljs-params">index: number, item: any</span>) =&gt;</span> <span class="hljs-number">25</span>;
  }

  <span class="hljs-title function_">randomize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Horizontal<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:100%&quot;</span> <span class="hljs-attr">isHorizontal</span>=<span class="hljs-string">{true}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VirtualListModel)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); width: {size}px;&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VirtualListModel)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,D={code:T,highlightedHTML:B,component:K};var F=o("<h2>Variable Sizing</h2> <!>",1);function P(e){var t=F(),l=p(L(t),2);I(l,{example:D}),i(e,t)}export{P as component};
