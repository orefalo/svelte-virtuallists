import{p as z,J as q,y,g as f,R as S,h as o,j as M,k as b,l as u,m as n,t as H,d as L,V as I,T as V,r as l,v as A,K as D}from"../chunks/external.B2XIb3UX.js";import{E as B}from"../chunks/ExampleArea.DauRvbGK.js";import{a as C}from"../chunks/svelte-virtuallists.C5xEC3WX.js";const F=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"}));var T=b('<div class="row svelte-hvu9xx"> </div>'),E=b('<div class="actions svelte-hvu9xx"><label for="item-height" class="svelte-hvu9xx">Item Height: <div class="range svelte-hvu9xx"><input type="range" id="item-height" step="5" min="50" max="155" class="svelte-hvu9xx"></div></label></div> <div class="list svelte-hvu9xx"><!></div>',1);function O(i,t){z(t,!1);const p=new Array(1e4).fill(1).map((h,a)=>({text:"Item "+a,lineHeight:20+a%20+"px",width:100+a%30+"px"}));let r=I(50);q();var j=E(),c=y(j),g=n(c),m=u(n(g)),d=n(m);V(d),l(m),l(g),l(c);var x=u(c,2),v=n(x);C(v,{model:p,height:500,width:"auto",get modelCount(){return p.length},get itemSize(){return f(r)},slot:(a,s)=>{let w=()=>s==null?void 0:s().item,k=()=>s==null?void 0:s().style;var e=T(),_=n(e);l(e),H(()=>{A(e,"style",k()),D(_,w().text)}),o(a,e)},$$slots:{slot:!0}}),l(x),S(d,()=>f(r),h=>L(r,h)),o(i,j),M()}const P=`<script lang="ts">
  import { VirtualList, type VLSlotSignature } from 'svelte-virtuallists';

  interface MyItemsData {
    text: string;
    lineHeight: string;
    width: string;
  }

  const myModel: Array<MyItemsData> = new Array(10000).fill(1).map((v, i) => ({
    text: 'Item ' + i,
    lineHeight: 20 + (i % 20) + 'px',
    width: 100 + (i % 30) + 'px'
  }));

  let itemSize = 50;
<\/script>

<div class="actions">
  <label for="item-height">
    Item Height:
    <div class="range">
      <input type="range" id="item-height" step="5" min="50" max="155" bind:value={itemSize} />
    </div>
  </label>
</div>

<div class="list">
  <VirtualList model={myModel} height={500} width="auto" modelCount={myModel.length} {itemSize}>
    {#snippet slot({ item, style, index: _index }: VLSlotSignature<MyItemsData>)}
      <div class="row" {style}>
        {item.text}
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
  }

  :global(.virtual-list-wrapper) {
    margin: 20px;
    background: #fff;
    border-radius: 2px;
    box-shadow:
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
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

  .actions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 20px;
    padding-top: 15px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .actions label {
    padding: 10px 0;
    font-size: 18px;
    color: #999;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  }

  .range {
    position: relative;
    top: -1px;
    display: inline-block;
    margin-left: 15px;
    width: 250px;
  }

  :global(input[type='range']) {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #d7dcdf;
    outline: none;
    padding: 0;
    margin: 0;
  }

  :global(input[type='range']),
  :global(input[type='range']) *,
  :global(input[type='range']:after),
  :global(input[type='range']:before) {
    box-sizing: border-box;
  }

  :global(input[type='range']::-webkit-slider-thumb) {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2c3e50;
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }

  :global(input[type='range']::-webkit-slider-thumb:hover),
  :global(input[type='range']:active::-webkit-slider-thumb) {
    background: #008cff;
  }

  :global(input[type='range']::-moz-range-thumb) {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: #2c3e50;
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }

  :global(input[type='range']::-moz-range-thumb:hover),
  :global(input[type='range']:active::-moz-range-thumb) {
    background: #008cff;
  }

  :global(::-moz-range-track) {
    background: #d7dcdf;
    border: 0;
  }

  :global(input::-moz-focus-inner),
  :global(input::-moz-focus-outer) {
    border: 0;
  }
</style>
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  interface <span class="hljs-title class_">MyItemsData</span> {
    <span class="hljs-attr">text</span>: string;
    <span class="hljs-attr">lineHeight</span>: string;
    <span class="hljs-attr">width</span>: string;
  }

  <span class="hljs-keyword">const</span> <span class="hljs-attr">myModel</span>: <span class="hljs-title class_">Array</span>&lt;<span class="hljs-title class_">MyItemsData</span>&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> ({
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i,
    <span class="hljs-attr">lineHeight</span>: <span class="hljs-number">20</span> + (i % <span class="hljs-number">20</span>) + <span class="hljs-string">&#x27;px&#x27;</span>,
    <span class="hljs-attr">width</span>: <span class="hljs-number">100</span> + (i % <span class="hljs-number">30</span>) + <span class="hljs-string">&#x27;px&#x27;</span>
  }));

  <span class="hljs-keyword">let</span> itemSize = <span class="hljs-number">50</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;item-height&quot;</span>&gt;</span>
    Item Height:
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;range&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;item-height&quot;</span> <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;155&quot;</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{itemSize}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">model</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">modelCount</span>=<span class="hljs-string">{myModel.length}</span> {<span class="hljs-attr">itemSize</span>}&gt;</span>
    {#snippet slot({ item, style, index: _index }: VLSlotSignature<span class="hljs-tag">&lt;<span class="hljs-name">MyItemsData</span>&gt;</span>)}
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
        {item.text}
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
  }

  :<span class="hljs-built_in">global</span>(.virtual-list-wrapper) {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">2px</span>;
    <span class="hljs-attribute">box-shadow</span>:
      <span class="hljs-number">0</span> <span class="hljs-number">2px</span> <span class="hljs-number">2px</span> <span class="hljs-number">0</span> <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.14</span>),
      <span class="hljs-number">0</span> <span class="hljs-number">3px</span> <span class="hljs-number">1px</span> -<span class="hljs-number">2px</span> <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.2</span>),
      <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">5px</span> <span class="hljs-number">0</span> <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.12</span>);
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

  <span class="hljs-selector-class">.actions</span> {
    <span class="hljs-attribute">display</span>: -webkit-box;
    <span class="hljs-attribute">display</span>: -ms-flexbox;
    <span class="hljs-attribute">display</span>: flex;
    -ms-<span class="hljs-attribute">flex-wrap</span>: wrap;
    <span class="hljs-attribute">flex-wrap</span>: wrap;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">15px</span>;
    -webkit-box-pack: justify;
    -ms-<span class="hljs-attribute">flex</span>-pack: justify;
    <span class="hljs-attribute">justify-content</span>: space-between;
  }

  <span class="hljs-selector-class">.actions</span> <span class="hljs-selector-tag">label</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">0</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#999</span>;
    <span class="hljs-attribute">font-family</span>: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  }

  <span class="hljs-selector-class">.range</span> {
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">top</span>: -<span class="hljs-number">1px</span>;
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">15px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">250px</span>;
  }

  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]) {
    <span class="hljs-attribute">appearance</span>: none;
    -webkit-<span class="hljs-attribute">appearance</span>: none;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#d7dcdf</span>;
    <span class="hljs-attribute">outline</span>: none;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  }

  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]),
  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]) *,
  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]:after),
  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]:before) {
    <span class="hljs-attribute">box-sizing</span>: border-box;
  }

  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]::-webkit-slider-thumb) {
    -webkit-<span class="hljs-attribute">appearance</span>: none;
    <span class="hljs-attribute">appearance</span>: none;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#2c3e50</span>;
    <span class="hljs-attribute">cursor</span>: pointer;
    <span class="hljs-attribute">transition</span>: background <span class="hljs-number">0.15s</span> ease-in-out;
  }

  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]::-webkit-slider-thumb:hover),
  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]:active::-webkit-slider-thumb) {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#008cff</span>;
  }

  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]::-moz-range-thumb) {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#2c3e50</span>;
    <span class="hljs-attribute">cursor</span>: pointer;
    <span class="hljs-attribute">transition</span>: background <span class="hljs-number">0.15s</span> ease-in-out;
  }

  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]::-moz-range-thumb:hover),
  :<span class="hljs-built_in">global</span>(input[type=<span class="hljs-string">&#x27;range&#x27;</span>]:active::-moz-range-thumb) {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#008cff</span>;
  }

  :<span class="hljs-built_in">global</span>(::-moz-range-track) {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#d7dcdf</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">0</span>;
  }

  :<span class="hljs-built_in">global</span>(input::-moz-focus-inner),
  :<span class="hljs-built_in">global</span>(input::-moz-focus-outer) {
    <span class="hljs-attribute">border</span>: <span class="hljs-number">0</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,K={code:P,highlightedHTML:J,component:O};var R=b("<h2>List Positioning</h2> <p>The component provides properties to position the list either on an element, or on a pixel offset.</p> <!>",1);function W(i){var t=R(),p=u(y(t),4);B(p,{example:K}),o(i,t)}export{W as component,U as universal};
