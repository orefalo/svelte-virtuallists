import{p as f,H as y,h as _,f as r,r as m,t as w,j as i,x as c,z as h,I as j,n as L}from"../chunks/external.BW6pQqo1.js";import{E as T}from"../chunks/ExampleArea.D_dBPbyW.js";import{V}from"../chunks/svelte-virtuallists.CWEvJYjh.js";import{g as k}from"../chunks/sushi.BIpvo6ML.js";var q=i("<thead><tr><th>Text</th><th>Index</th></tr></thead>"),M=i("<tr><td> </td><td> </td></tr>");function R(n,a){f(a,!1);const t=new Array(1e4).fill(1).map((d,g)=>({text:k()}));y(),V(n,{items:t,class:"list-table",style:"height:600px",isTable:!0,header:l=>{var s=q();r(l,s)},vl_slot:(l,s)=>{let u=()=>s==null?void 0:s().item,b=()=>s==null?void 0:s().index;var p=M(),e=c(p),x=c(e);h(e);var o=m(e),v=c(o);h(o),h(p),w(()=>{j(x,b()),j(v,u().text)}),r(l,p)},$$slots:{header:!0,vl_slot:!0}}),_()}const S=`<script lang="ts">
  import { VirtualList } from 'svelte-virtuallists';
  import { getRandomSushi } from '../sushi';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: getRandomSushi() };
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
      <td>{item.text}</td>
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
`,A=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">import</span> { getRandomSushi } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../sushi&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-title function_">getRandomSushi</span>() };
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
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{item.text}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
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
`,I={code:S,highlightedHTML:A,component:R};var E=i("<h2>Table Rendering</h2> <!>",1);function B(n){var a=E(),t=m(L(a),2);T(t,{example:I}),r(n,a)}export{B as component};
