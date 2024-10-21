import{I as C,p as H,q as l,m as M,g as f,f as c,h as A,k as q,j as o,s as F,t as w,w as m,y as d,z as S,H as V}from"../chunks/external.C0RecZlA.js";import{E as I}from"../chunks/ExampleArea.Bapa_yz3.js";import{V as L}from"../chunks/svelte-virtuallists.CqqwytNq.js";function R(p,n){q(n,()=>25)}var E=o("<div> </div>"),N=o("<div> </div>"),T=o('<h2>Horizontal</h2> <!> <h2>Vertical</h2> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function B(p,n){H(n,!0);const e=new Array(1e4).fill(1).map((_,t)=>({text:"Item "+t}));function g(){q(i,()=>Math.round(Math.random()*125+30))}let i=F(void 0);g();var v=T(),x=l(M(v),2);L(x,{items:e,style:"width:100%",isHorizontal:!0,get sizingCalculator(){return f(i)},vl_slot:(t,s)=>{let r=()=>s==null?void 0:s().index,h=()=>s==null?void 0:s().item,u=()=>s==null?void 0:s().size;var a=E(),j=m(a);d(a),w(()=>{S(a,"style",`border: 1px solid rgb(204, 204, 204); width: ${u()??""}px;`),V(j,`#${r()??""}
      ${h().text??""}`)}),c(t,a)},$$slots:{vl_slot:!0}});var z=l(x,4);L(z,{items:e,style:"height:600px",get sizingCalculator(){return f(i)},vl_slot:(t,s)=>{let r=()=>s==null?void 0:s().index,h=()=>s==null?void 0:s().item,u=()=>s==null?void 0:s().size;var a=N(),j=m(a);d(a),w(()=>{S(a,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${u()??""}px;`),V(j,`#${r()??""} Content:${h().text??""}`)}),c(t,a)},$$slots:{vl_slot:!0}});var y=l(z,2),b=m(y);b.__click=g;var k=l(b,2);k.__click=[R,i],d(y),c(p,v),A()}C(["click"]);const D=`<script lang="ts">
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
  {#snippet vl_slot({ index, item, size }: VLSlotSignature<(typeof myModel)[0]>)}
    <div style="border: 1px solid rgb(204, 204, 204); width: {size}px;">
      #{index}
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px" sizingCalculator={calculator}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature<(typeof myModel)[0]>)}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;">
      #{index} Content:{item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
`,G=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
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
  {#snippet vl_slot({ index, item, size }: VLSlotSignature&lt;(typeof myModel)[0]&gt;)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); width: {size}px;&quot;</span>&gt;</span>
      #{index}
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span> <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{calculator}</span>&gt;</span>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature&lt;(typeof myModel)[0]&gt;)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>&gt;</span>
      #{index} Content:{item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,J={code:D,highlightedHTML:G,component:B};var K=o("<h2>Variable item Sizing</h2> <!>",1);function U(p){var n=K(),e=l(M(n),2);I(e,{example:J}),c(p,n)}export{U as component};
