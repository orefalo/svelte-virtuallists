import{h as c,k as r,q as o,t as m,n as v,G as x,x as n,z as b}from"../chunks/external.BPpIJIx1.js";import{E as y}from"../chunks/ExampleArea.DwcMytTj.js";import{V as f}from"../chunks/svelte-virtuallists.ChZJuPxm.js";const _=!0,D=Object.freeze(Object.defineProperty({__proto__:null,prerender:_},Symbol.toStringTag,{value:"Module"}));var w=r('<div class="row"> </div>'),L=r('<div class="list svelte-140h3r0"><!></div>');function S(l){const t=["A","B","C","D","E","F"];var a=L(),p=o(a);{var e=(h,s)=>{let j=()=>s==null?void 0:s().item,g=()=>s==null?void 0:s().style,d=()=>s==null?void 0:s().index;var i=w(),u=o(i);m(()=>{v(i,"style",g()),x(u,`Letter: ${j()??""}, Row: #${d()??""}`)}),c(h,i)};f(p,{width:"100%",height:600,model:t,get modelCount(){return t.length},itemSize:50,slot:e,$$legacy:!0})}c(l,a)}const q=`<script lang="ts">
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
`,k=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
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
`,A={code:q,highlightedHTML:k,component:S};var V=r("<h2>Styling</h2> <p>TODO WIP</p> <!>",1);function O(l){var t=V(),a=b(t),p=n(n(a,!0)),e=n(n(p,!0));y(e,{example:A,$$legacy:!0}),c(l,t)}export{O as component,D as universal};
