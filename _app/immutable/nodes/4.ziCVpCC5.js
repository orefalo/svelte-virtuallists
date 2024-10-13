import{p as h,J as m,j,t as d,h as i,k as e,m as u,r as g,K as x,l as v,y}from"../chunks/external.B56iKtsd.js";import{E as f}from"../chunks/ExampleArea.DWmN8iNl.js";import{V as _}from"../chunks/svelte-virtuallists.6csm501w.js";var b=e('<div style="border: 1px solid rgb(204, 204, 204)"> </div>');function w(t,s){h(s,!1);const n=new Array(1e4).fill(1).map((r,a)=>({text:"ITEM "+a+" - Item "+a}));m(),_(t,{items:n,style:"width:600px",isHorizontal:!0,vl_slot:(a,l)=>{let o=()=>l==null?void 0:l().item;var p=b(),c=u(p);g(p),d(()=>x(c,o().text)),i(a,p)},$$slots:{vl_slot:!0}}),j()}const L=`<script lang="ts">
  import VirtualList from '$lib/VirtualList2.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: 'ITEM ' + i + ' - Item ' + i };
  });
<\/script>

<VirtualList items={myModel} style="width:600px" isHorizontal={true}>
  {#snippet vl_slot({ item, index })}
    <div style="border: 1px solid rgb(204, 204, 204)">
      {item.text}
    </div>
  {/snippet}
</VirtualList>
`,V=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">VirtualList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$lib/VirtualList2.svelte&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;ITEM &#x27;</span> + i + <span class="hljs-string">&#x27; - Item &#x27;</span> + i };
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:600px&quot;</span> <span class="hljs-attr">isHorizontal</span>=<span class="hljs-string">{true}</span>&gt;</span>
  {#snippet vl_slot({ item, index })}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204)&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
`,M={code:L,highlightedHTML:V,component:w};var I=e("<h2>Internal: VirtualList</h2> <!>",1);function A(t){var s=I(),n=v(y(s),2);f(n,{example:M}),i(t,s)}export{A as component};
