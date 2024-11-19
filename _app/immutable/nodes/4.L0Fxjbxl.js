import{p as h,J as m,h as j,t as u,f as e,j as i,y as d,A as g,K as y,q as v,v as f}from"../chunks/external.XVS9OJZd.js";import{E as x}from"../chunks/ExampleArea.HLz-Ok4E.js";import{V as _}from"../chunks/svelte-virtuallists.CHV1n25C.js";import{g as w}from"../chunks/sushi.BIpvo6ML.js";var L=i('<div style="border: 1px solid rgb(204, 204, 204)"> </div>');function S(a,s){h(s,!1);const t=new Array(1e4).fill(1).map((r,n)=>({text:"#"+n+" "+w()}));m(),_(a,{items:t,style:"width:100%",isHorizontal:!0,vl_slot:(n,l)=>{let o=()=>l==null?void 0:l().item;var p=L(),c=d(p,!0);g(p),u(()=>y(c,o().text)),e(n,p)},$$slots:{vl_slot:!0}}),j()}const V=`<script lang="ts">
  import { VirtualList, type VLSlotSignature } from 'svelte-virtuallists';
  import { getRandomSushi } from '../sushi';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: '#' + i + ' ' + getRandomSushi() };
  });
<\/script>

<VirtualList items={myModel} style="width:100%" isHorizontal={true}>
  {#snippet vl_slot({ item }: VLSlotSignature<(typeof myModel)[0]>)}
    <div style="border: 1px solid rgb(204, 204, 204)">
      {item.text}
    </div>
  {/snippet}
</VirtualList>
`,b=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
  <span class="hljs-keyword">import</span> { getRandomSushi } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../sushi&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;#&#x27;</span> + i + <span class="hljs-string">&#x27; &#x27;</span> + <span class="hljs-title function_">getRandomSushi</span>() };
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:100%&quot;</span> <span class="hljs-attr">isHorizontal</span>=<span class="hljs-string">{true}</span>&gt;</span>
  {#snippet vl_slot({ item }: VLSlotSignature&lt;(typeof myModel)[0]&gt;)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204)&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
`,M={code:V,highlightedHTML:b,component:S};var k=i("<h2>Horizontal List</h2> <!>",1);function z(a){var s=k(),t=v(f(s),2);x(t,{example:M}),e(a,s)}export{z as component};