import{L as M,p as H,q as l,m as q,g as y,f as c,h as A,k,j as o,s as F,t as w,w as m,y as d,z as S,K as V}from"../chunks/external.DepRz0zj.js";import{E as I}from"../chunks/ExampleArea.CqFsZ60u.js";import{V as L}from"../chunks/svelte-virtuallists.CXsgq9DL.js";function R(p,n){k(n,()=>25)}var E=o("<div> </div>"),K=o("<div> </div>"),N=o('<h2>Horizontal</h2> <!> <h2>Vertical</h2> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function T(p,n){H(n,!0);const e=new Array(1e4).fill(1).map((f,t)=>({text:"Item "+t}));function g(){k(i,()=>Math.round(Math.random()*125+30))}let i=F(void 0);g();var v=N(),x=l(q(v),2);L(x,{items:e,style:"width:100%",isHorizontal:!0,get sizingCalculator(){return y(i)},vl_slot:(t,s)=>{let r=()=>s==null?void 0:s().index,h=()=>s==null?void 0:s().item,u=()=>s==null?void 0:s().size;var a=E(),j=m(a);d(a),w(()=>{S(a,"style",`border: 1px solid rgb(204, 204, 204); width: ${u()??""}px;`),V(j,`#${r()??""}
      ${h().text??""}`)}),c(t,a)},$$slots:{vl_slot:!0}});var z=l(x,4);L(z,{items:e,style:"height:600px",get sizingCalculator(){return y(i)},vl_slot:(t,s)=>{let r=()=>s==null?void 0:s().index,h=()=>s==null?void 0:s().item,u=()=>s==null?void 0:s().size;var a=K(),j=m(a);d(a),w(()=>{S(a,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${u()??""}px;`),V(j,`#${r()??""} Content:${h().text??""}`)}),c(t,a)},$$slots:{vl_slot:!0}});var b=l(z,2),_=m(b);_.__click=g;var C=l(_,2);C.__click=[R,i],d(b),c(p,v),A()}M(["click"]);const B=`<script lang="ts">
  import { VirtualList, type SizingCalculatorFn, type VLSlotSignature } from 'svelte-virtuallists';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return {
      text: 'Item ' + i
    };
  });

  function randomize() {
    calculator = () => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    calculator = () => 25;
  }

  // @ts-expect-error undefined
  let calculator: SizingCalculatorFn = $state();

  randomize();
<\/script>

<h2>Horizontal</h2>

<VirtualList items={myModel} style="width:100%" isHorizontal={true} sizingCalculator={calculator}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); width: {size}px;">
      #{index}
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px" sizingCalculator={calculator}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;">
      #{index} Content:{item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
`,D=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">SizingCalculatorFn</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i
    };
  });

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
    calculator = <span class="hljs-function">() =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">30</span>) + <span class="hljs-number">30</span>);
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    calculator = <span class="hljs-function">() =&gt;</span> <span class="hljs-number">25</span>;
  }

  <span class="hljs-comment">// @ts-expect-error undefined</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">calculator</span>: <span class="hljs-title class_">SizingCalculatorFn</span> = $state();

  <span class="hljs-title function_">randomize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Horizontal<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:100%&quot;</span> <span class="hljs-attr">isHorizontal</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{calculator}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); width: {size}px;&quot;</span>&gt;</span>
      #{index}
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span> <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{calculator}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>&gt;</span>
      #{index} Content:{item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,G={code:B,highlightedHTML:D,component:T};var J=o("<h2>Variable Sizing</h2> <!>",1);function U(p){var n=J(),e=l(q(n),2);I(e,{example:G}),c(p,n)}export{U as component};
