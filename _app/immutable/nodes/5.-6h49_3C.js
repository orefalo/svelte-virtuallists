import{p as g,J as d,h as i,j as x,k as r,m as c,t as f,r as h,v as y,K as v,l as _,y as w}from"../chunks/external.UKebNneP.js";import{E as I}from"../chunks/ExampleArea.dAkGpRjY.js";import{a as k,D as M}from"../chunks/svelte-virtuallists.BfBL4frO.js";const L=!0,R=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));var z=r('<div class="col svelte-18cdkus"> </div>'),D=r('<div class="list horizontal svelte-18cdkus"><!></div>');function O(p,n){g(n,!1);const l=new Array(1e4).fill(1).map((j,a)=>({text:"Item "+a,lineHeight:20+a%20+"px",width:100+a%30+"px"}));d();var e=D(),o=c(e);k(o,{height:"200px",width:680,get scrollDirection(){return M.HORIZONTAL},model:l,get modelCount(){return l.length},itemSize:150,slot:(a,s)=>{let u=()=>s==null?void 0:s().style,m=()=>s==null?void 0:s().index;var t=z(),b=c(t);h(t),f(()=>{y(t,"style",u()),v(b,`Item #${m()??""}`)}),i(a,t)},$$slots:{slot:!0}}),h(e),i(p,e),x()}const H=`<script lang="ts">
  import { DIRECTION, VirtualList, type VirtualListModel } from 'svelte-virtuallists';

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
<\/script>

<div class="list horizontal">
  <VirtualList
    height="200px"
    width={680}
    scrollDirection={DIRECTION.HORIZONTAL}
    model={myModel}
    modelCount={myModel.length}
    itemSize={150}>
    {#snippet slot({ item: _item, style, index }: VirtualListModel<any>)}
      <div class="col" {style}>
        Item #{index}
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

  .col {
    padding: 0 15px;
    padding-top: 30px;
    border-right: 1px solid #eee;
    box-sizing: border-box;
    line-height: 50px;
    font-weight: 500;
    text-align: center;
    background: #fff;
  }

  .horizontal {
    margin: 50px auto;
  }
</style>
`,A=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">DIRECTION</span>, <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">VirtualListModel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

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
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list horizontal&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
    <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">{680}</span>
    <span class="hljs-attr">scrollDirection</span>=<span class="hljs-string">{DIRECTION.HORIZONTAL}</span>
    <span class="hljs-attr">model</span>=<span class="hljs-string">{myModel}</span>
    <span class="hljs-attr">modelCount</span>=<span class="hljs-string">{myModel.length}</span>
    <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{150}</span>&gt;</span>
    {#snippet slot({ item: _item, style, index }: VirtualListModel<span class="hljs-tag">&lt;<span class="hljs-name">any</span>&gt;</span>)}
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
        Item #{index}
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

  <span class="hljs-selector-class">.col</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">15px</span>;
    <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">30px</span>;
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
  }

  <span class="hljs-selector-class">.horizontal</span> {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">50px</span> auto;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,T={code:H,highlightedHTML:A,component:O};var V=r("<h2>Horizontal</h2> <p>The component can layout its content horizontaly</p> <!>",1);function E(p){var n=V(),l=_(w(n),4);I(l,{example:T}),i(p,n)}export{E as component,R as universal};
