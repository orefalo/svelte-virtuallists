import{J as C,p as R,r as t,n as L,g as b,f as o,h as H,k as M,j as c,s as A,t as S,x as m,z as d,A as w,I as V}from"../chunks/external.BW6pQqo1.js";import{E as F}from"../chunks/ExampleArea.D_dBPbyW.js";import{V as k}from"../chunks/svelte-virtuallists.CWEvJYjh.js";import{g as E}from"../chunks/sushi.BIpvo6ML.js";function I(l,n){M(n,()=>25)}var J=c("<div> </div>"),N=c("<div> </div>"),T=c('<h2>Horizontal</h2> <!> <h2>Vertical</h2> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function B(l,n){R(n,!0);const p=new Array(1e4).fill(1).map((_,i)=>({text:E()}));function g(){M(e,()=>Math.round(Math.random()*125+30))}let e=A(void 0);g();var v=T(),x=t(L(v),2);k(x,{items:p,style:"width:100%",isHorizontal:!0,get sizingCalculator(){return b(e)},vl_slot:(i,s)=>{let r=()=>s==null?void 0:s().index,h=()=>s==null?void 0:s().item,u=()=>s==null?void 0:s().size;var a=J(),j=m(a);d(a),S(()=>{w(a,"style",`border: 1px solid rgb(204, 204, 204); width: ${u()??""}px;`),V(j,`#${r()??""}
      ${h().text??""}`)}),o(i,a)},$$slots:{vl_slot:!0}});var z=t(x,4);k(z,{items:p,style:"height:600px",get sizingCalculator(){return b(e)},vl_slot:(i,s)=>{let r=()=>s==null?void 0:s().index,h=()=>s==null?void 0:s().item,u=()=>s==null?void 0:s().size;var a=N(),j=m(a);d(a),S(()=>{w(a,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${u()??""}px;`),V(j,`#${r()??""}
      ${h().text??""}`)}),o(i,a)},$$slots:{vl_slot:!0}});var y=t(z,2),f=m(y);f.__click=g;var q=t(f,2);q.__click=[I,e],d(y),o(l,v),H()}C(["click"]);const D=`<script lang="ts">
  import { VirtualList, type SizingCalculatorFn, type VLSlotSignature } from 'svelte-virtuallists';
  import { getRandomSushi } from '../sushi';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: getRandomSushi() };
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
      #{index}
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
`,G=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">SizingCalculatorFn</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">import</span> { getRandomSushi } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../sushi&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-title function_">getRandomSushi</span>() };
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
      #{index}
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,K={code:D,highlightedHTML:G,component:B};var O=c("<h2>Variable item Sizing</h2> <!>",1);function X(l){var n=O(),p=t(L(n),2);F(p,{example:K}),o(l,n)}export{X as component};
