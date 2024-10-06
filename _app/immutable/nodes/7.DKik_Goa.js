import{h as p,k as e,m as i,t as m,r as c,v as u,K as v,l as x,y as b}from"../chunks/external.ClML6rh5.js";import{E as y}from"../chunks/ExampleArea.DqjhyFIj.js";import{V as f}from"../chunks/svelte-virtuallists.Cbo0UehG.js";const _=!0,O=Object.freeze(Object.defineProperty({__proto__:null,prerender:_},Symbol.toStringTag,{value:"Module"}));var w=e('<div class="row"> </div>'),L=e('<div class="list svelte-80s6"><!></div>');function S(l){const a=["A","B","C","D","E","F"];var n=L(),r=i(n);f(r,{width:"100%",height:600,model:a,get modelCount(){return a.length},itemSize:50,slot:(o,s)=>{let h=()=>s==null?void 0:s().item,j=()=>s==null?void 0:s().style,d=()=>s==null?void 0:s().index;var t=w(),g=i(t);c(t),m(()=>{u(t,"style",j()),v(g,`Letter: ${h()??""}, Row: #${d()??""}`)}),p(o,t)},$$slots:{slot:!0}}),c(n),p(l,n)}const k=`<script lang="ts">
  import { VirtualList, type SlotAttributes } from 'svelte-virtuallists';
  const data = ['A', 'B', 'C', 'D', 'E', 'F' /* ... */];
<\/script>

<div class="list">
  <VirtualList width="100%" height={600} model={data} modelCount={data.length} itemSize={50}>
    {#snippet slot({ item, style, index }: SlotAttributes<any>)}
      <div class="row" {style}>
        Letter: {item}, Row: #{index}
      </div>
    {/snippet}
  </VirtualList>
</div>

<style>
  .list :global(.virtual-list-wrapper) {
    background-color: #0f0;
    /* ... */
  }

  .list :global(.virtual-list-inner) {
    background-color: #f00;
    /* ... */
  }
</style>
`,q=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">SlotAttributes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">const</span> data = [<span class="hljs-string">&#x27;A&#x27;</span>, <span class="hljs-string">&#x27;B&#x27;</span>, <span class="hljs-string">&#x27;C&#x27;</span>, <span class="hljs-string">&#x27;D&#x27;</span>, <span class="hljs-string">&#x27;E&#x27;</span>, <span class="hljs-string">&#x27;F&#x27;</span> <span class="hljs-comment">/* ... */</span>];
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100%&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{600}</span> <span class="hljs-attr">model</span>=<span class="hljs-string">{data}</span> <span class="hljs-attr">modelCount</span>=<span class="hljs-string">{data.length}</span> <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{50}</span>&gt;</span>
    {#snippet slot({ item, style, index }: SlotAttributes<span class="hljs-tag">&lt;<span class="hljs-name">any</span>&gt;</span>)}
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
        Letter: {item}, Row: #{index}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    {/snippet}
  <span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.list</span> :<span class="hljs-built_in">global</span>(.virtual-list-wrapper) {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#0f0</span>;
    <span class="hljs-comment">/* ... */</span>
  }

  <span class="hljs-selector-class">.list</span> :<span class="hljs-built_in">global</span>(.virtual-list-inner) {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f00</span>;
    <span class="hljs-comment">/* ... */</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,A={code:k,highlightedHTML:q,component:S};var V=e("<h2>Styling</h2> <p>TODO WIP</p> <!>",1);function B(l){var a=V(),n=x(b(a),4);y(n,{example:A}),p(l,a)}export{B as component,O as universal};
