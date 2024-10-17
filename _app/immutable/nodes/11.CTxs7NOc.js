import{L as M,p as H,l as p,y as L,g as _,h as o,j as I,d as k,k as r,s as A,t as f,m as d,r as g,v as w,K as S}from"../chunks/external.C-DTn3zE.js";import{E as F}from"../chunks/ExampleArea.BC67eoZ3.js";import{V}from"../chunks/svelte-virtuallists.B2nk2Ovp.js";function N(i,a){k(a,(e,h)=>25)}var R=r("<div> </div>"),E=r("<div> </div>"),K=r('<h2>Horizontal</h2> <!> <h2>Vertical</h2> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function T(i,a){H(a,!0);const e=new Array(1e4).fill(1).map((u,n)=>({text:"Item "+n}));function h(){k(c,(u,n)=>Math.round(Math.random()*125+30))}let c=A(void 0);h();var v=K(),x=p(L(v),2);V(x,{items:e,style:"width:100%",isHorizontal:!0,get sizingCalculator(){return _(c)},vl_slot:(n,s)=>{let m=()=>s==null?void 0:s().item,j=()=>s==null?void 0:s().size;var t=R(),l=d(t);g(t),f(()=>{w(t,"style",`border: 1px solid rgb(204, 204, 204); width: ${j()??""}px;`),S(l,m().text)}),o(n,t)},$$slots:{vl_slot:!0}});var b=p(x,4);V(b,{items:e,style:"height:600px",get sizingCalculator(){return _(c)},vl_slot:(n,s)=>{let m=()=>s==null?void 0:s().index,j=()=>s==null?void 0:s().item,t=()=>s==null?void 0:s().size;var l=E(),C=d(l);g(l),f(()=>{w(l,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${t()??""}px;`),S(C,`Index:${m()??""} Content:${j().text??""}`)}),o(n,l)},$$slots:{vl_slot:!0}});var z=p(b,2),y=d(z);y.__click=h;var q=p(y,2);q.__click=[N,c],g(z),o(i,v),I()}M(["click"]);const B=`<script lang="ts">
  import { type SizingCalculatorFn, type VLSlotSignature } from 'svelte-virtuallists';
  import VirtualList from 'svelte-virtuallists/new/VirtualListNew.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return {
      text: 'Item ' + i
    };
  });

  function randomize() {
    calculator = (index: number, item: any) => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    calculator = (index: number, item: any) => 25;
  }

  // @ts-expect-error undefined
  let calculator: SizingCalculatorFn = $state();

  randomize();
<\/script>

<h2>Horizontal</h2>

<VirtualList items={myModel} style="width:100%" isHorizontal={true} sizingCalculator={calculator}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); width: {size}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px" sizingCalculator={calculator}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;">
      Index:{index} Content:{item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
`,D=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { type <span class="hljs-title class_">SizingCalculatorFn</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">VirtualList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists/new/VirtualListNew.svelte&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i
    };
  });

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
    calculator = <span class="hljs-function">(<span class="hljs-params">index: number, item: any</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">30</span>) + <span class="hljs-number">30</span>);
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    calculator = <span class="hljs-function">(<span class="hljs-params">index: number, item: any</span>) =&gt;</span> <span class="hljs-number">25</span>;
  }

  <span class="hljs-comment">// @ts-expect-error undefined</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">calculator</span>: <span class="hljs-title class_">SizingCalculatorFn</span> = $state();

  <span class="hljs-title function_">randomize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Horizontal<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:100%&quot;</span> <span class="hljs-attr">isHorizontal</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{calculator}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); width: {size}px;&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span> <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{calculator}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>&gt;</span>
      Index:{index} Content:{item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,G={code:B,highlightedHTML:D,component:T};var J=r("<h2>Variable Sizing</h2> <!>",1);function U(i){var a=J(),e=p(L(a),2);F(e,{example:G}),o(i,a)}export{U as component};
