import{L as M,p as S,J as A,l as e,y as H,h,j as I,d as V,k as m,M as R,t as y,m as j,r as d,K as f,v as E,g as w,A as C}from"../chunks/external.C8cba1ez.js";import{E as J}from"../chunks/ExampleArea.DYttOl7s.js";import{V as z}from"../chunks/svelte-virtuallists.BpvElS_U.js";function K(i,n){V(n,(l,c)=>25)}var T=m('<div style="border: 1px solid rgb(204, 204, 204)"> </div>'),B=m("<div> </div>"),D=m('<h2>Horizontal</h2> <!> <h2>Vertical</h2> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function F(i,n){S(n,!1);const l=new Array(1e4).fill(1).map((o,a)=>({text:"Item "+a+" item "+a,lineHeight:20+a%30+"px"}));let c=R((o,a)=>25);function u(){V(c,(o,a)=>Math.round(Math.random()*125+30))}u(),A();var g=D(),v=e(H(g),2);z(v,{items:l,style:"width:100%",isHorizontal:!0,vl_slot:(a,s)=>{let r=()=>s==null?void 0:s().item;var p=T(),t=j(p);d(p),y(()=>f(t,r().text)),h(a,p)},$$slots:{vl_slot:!0}});var x=e(v,4);z(x,{items:l,style:"height:600px",vl_slot:(a,s)=>{let r=()=>s==null?void 0:s().item,p=()=>s==null?void 0:s().index;var t=B();const k=C(()=>`border: 1px solid rgb(204, 204, 204); line-height: ${w(c)(r(),p())??""}px;`);var L=j(t);d(t),y(()=>{E(t,"style",w(k)),f(L,r().text)}),h(a,t)},$$slots:{vl_slot:!0}});var b=e(x,2),_=j(b);_.__click=u;var q=e(_,2);q.__click=[K,c],d(b),h(i,g),I()}M(["click"]);const G=`<script lang="ts">
  import VirtualList from '$lib/VirtualList2.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: 'Item ' + i + ' item ' + i, lineHeight: 20 + (i % 30) + 'px' };
  });

  let rowHeights = (item: any, index: number) => 25;

  function randomize() {
    rowHeights = (item: any, index: number) => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    rowHeights = (item: any, index: number) => 25;
  }

  randomize();
<\/script>

<h2>Horizontal</h2>

<VirtualList items={myModel} style="width:100%" isHorizontal={true}>
  {#snippet vl_slot({ item, index })}
    <div style="border: 1px solid rgb(204, 204, 204)">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ item, index })}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {rowHeights(item, index)}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
`,N=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">VirtualList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$lib/VirtualList2.svelte&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i + <span class="hljs-string">&#x27; item &#x27;</span> + i, <span class="hljs-attr">lineHeight</span>: <span class="hljs-number">20</span> + (i % <span class="hljs-number">30</span>) + <span class="hljs-string">&#x27;px&#x27;</span> };
  });

  <span class="hljs-keyword">let</span> <span class="hljs-title function_">rowHeights</span> = (<span class="hljs-params">item: any, index: number</span>) =&gt; <span class="hljs-number">25</span>;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
    rowHeights = <span class="hljs-function">(<span class="hljs-params">item: any, index: number</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">30</span>) + <span class="hljs-number">30</span>);
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    rowHeights = <span class="hljs-function">(<span class="hljs-params">item: any, index: number</span>) =&gt;</span> <span class="hljs-number">25</span>;
  }

  <span class="hljs-title function_">randomize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Horizontal<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:100%&quot;</span> <span class="hljs-attr">isHorizontal</span>=<span class="hljs-string">{true}</span>&gt;</span>
  {#snippet vl_slot({ item, index })}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204)&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span>&gt;</span>
  {#snippet vl_slot({ item, index })}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {rowHeights(item, index)}px;&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,O={code:G,highlightedHTML:N,component:F};var P=m("<h2>Variable Sizing</h2> <!>",1);function X(i){var n=P(),l=e(H(n),2);J(l,{example:O}),h(i,n)}export{X as component};
