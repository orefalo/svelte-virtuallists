import{p as g,I as d,f as r,h as b,j as i,y as c,t as y,A as h,J as f,q as v,v as x}from"../chunks/external.BjooDgN5.js";import{E as S}from"../chunks/ExampleArea.C-JSldN1.js";import{V as _}from"../chunks/svelte-virtuallists.ClKjKDvk.js";import{g as w}from"../chunks/sushi.BIpvo6ML.js";var k=i('<div class="slotStyle svelte-1iooypm"> </div>'),L=i('<div class="gradient myStyle svelte-1iooypm"><!></div>');function V(a,s){g(s,!1);const n=new Array(1e4).fill(1).map((m,t)=>({text:"#"+t+" "+w()}));d();var l=L(),o=c(l);_(o,{items:n,style:"height:600px",vl_slot:(t,p)=>{let j=()=>p==null?void 0:p().item;var e=k(),u=c(e,!0);h(e),y(()=>f(u,j().text)),r(t,e)},$$slots:{vl_slot:!0}}),h(l),r(a,l),b()}const q=`<script lang="ts">
  import { VirtualList, type VLSlotSignature } from 'svelte-virtuallists';
  import { getRandomSushi } from '../sushi';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: '#' + i + ' ' + getRandomSushi() };
  });
<\/script>

<div class="gradient myStyle">
  <VirtualList items={myModel} style="height:600px">
    {#snippet vl_slot({ item }: VLSlotSignature<(typeof myModel)[0]>)}
      <div class="slotStyle">
        {item.text}
      </div>
    {/snippet}
  </VirtualList>
</div>

<style>
  .gradient {
    background: rgb(100, 187, 243);
    background: linear-gradient(90deg, rgba(100, 187, 243, 1) 0%, rgba(100, 102, 233, 1) 100%);
  }

  .myStyle {
    border-radius: 1em;
  }

  .slotStyle {
    background: #4f76be;
    color: #fff;
    font-weight: 500;
    opacity: 0.8;
    border-radius: 4px;
    width: 400px;
    height: 2em;
    align-items: center;
    padding: 10 50%;
    margin: 0 auto;
    margin-bottom: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
`,M=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">import</span> { getRandomSushi } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../sushi&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;#&#x27;</span> + i + <span class="hljs-string">&#x27; &#x27;</span> + <span class="hljs-title function_">getRandomSushi</span>() };
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;gradient myStyle&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span>&gt;</span>
    {#snippet vl_slot({ item }: VLSlotSignature&lt;(typeof myModel)[0]&gt;)}
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slotStyle&quot;</span>&gt;</span>
        {item.text}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    {/snippet}
  <span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.gradient</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">100</span>, <span class="hljs-number">187</span>, <span class="hljs-number">243</span>);
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">90deg</span>, <span class="hljs-built_in">rgba</span>(<span class="hljs-number">100</span>, <span class="hljs-number">187</span>, <span class="hljs-number">243</span>, <span class="hljs-number">1</span>) <span class="hljs-number">0%</span>, <span class="hljs-built_in">rgba</span>(<span class="hljs-number">100</span>, <span class="hljs-number">102</span>, <span class="hljs-number">233</span>, <span class="hljs-number">1</span>) <span class="hljs-number">100%</span>);
  }

  <span class="hljs-selector-class">.myStyle</span> {
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">1em</span>;
  }

  <span class="hljs-selector-class">.slotStyle</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#4f76be</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.8</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">400px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">2em</span>;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10</span> <span class="hljs-number">50%</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">0.5em</span>;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">justify-content</span>: center;
    <span class="hljs-attribute">align-items</span>: center;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,A={code:q,highlightedHTML:M,component:V};var R=i("<h2>Vertical List</h2> <!>",1);function J(a){var s=R(),n=v(x(s),2);S(n,{example:A}),r(a,s)}export{J as component};
