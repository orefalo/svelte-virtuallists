import{p as y,G as f,h as _,f as i,q as g,t as T,j,w as h,y as r,H as m,m as w}from"../chunks/external.CRE2G0uo.js";import{E as I}from"../chunks/ExampleArea.BixNdV5O.js";import{V as M}from"../chunks/svelte-virtuallists.BQg1dKTL.js";var E=j("<thead><tr><th>Text</th><th>Index</th></tr></thead>"),L=j("<tr><td> </td><td> </td></tr>");function V(n,a){y(a,!1);const t=new Array(1e4).fill(1).map((u,l)=>({text:"ITEM "+l+" - Item "+l}));f(),M(n,{items:t,class:"list-table",style:"height:600px",isTable:!0,header:p=>{var s=E();i(p,s)},vl_slot:(p,s)=>{let x=()=>s==null?void 0:s().item,o=()=>s==null?void 0:s().index;var e=L(),c=h(e),b=h(c);r(c);var d=g(c),v=h(d);r(d),r(e),T(()=>{m(b,o()),m(v,`ITEM: ${o()??""} - ${x().text??""}`)}),i(p,e)},$$slots:{header:!0,vl_slot:!0}}),_()}const q=`<script lang="ts">
  import { VirtualList } from 'svelte-virtuallists';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: 'ITEM ' + i + ' - Item ' + i };
  });
<\/script>

<VirtualList items={myModel} class="list-table" style="height:600px" isTable={true}>
  {#snippet header()}
    <thead>
      <tr>
        <th>Text</th>
        <th>Index</th>
      </tr>
    </thead>
  {/snippet}
  {#snippet vl_slot({ item, index })}
    <tr>
      <td>{index}</td>
      <td>ITEM: {index} - {item.text}</td>
    </tr>
  {/snippet}
</VirtualList>

<style global>
  .list-table table,
  .list-table td,
  .list-table th {
    border: 1px solid #ccc;
  }
  .list-table table {
    border-collapse: collapse;
    width: 100%;
  }
</style>
`,k=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;ITEM &#x27;</span> + i + <span class="hljs-string">&#x27; - Item &#x27;</span> + i };
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-table&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span> <span class="hljs-attr">isTable</span>=<span class="hljs-string">{true}</span>&gt;</span>
  {#snippet header()}
    <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Index<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
  {/snippet}
  {#snippet vl_slot({ item, index })}
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{index}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>ITEM: {index} - {item.text}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">global</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.list-table</span> <span class="hljs-selector-tag">table</span>,
  <span class="hljs-selector-class">.list-table</span> <span class="hljs-selector-tag">td</span>,
  <span class="hljs-selector-class">.list-table</span> <span class="hljs-selector-tag">th</span> {
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;
  }
  <span class="hljs-selector-class">.list-table</span> <span class="hljs-selector-tag">table</span> {
    <span class="hljs-attribute">border-collapse</span>: collapse;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,A={code:q,highlightedHTML:k,component:V};var H=j("<h2>Table Rendering</h2> <!>",1);function R(n){var a=H(),t=g(w(a),2);I(t,{example:A}),i(n,a)}export{R as component};
