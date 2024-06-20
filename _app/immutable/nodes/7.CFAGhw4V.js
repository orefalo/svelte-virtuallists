import{I as S,p as I,s as L,b as d,e as q,g as A,h as o,j as M,d as b,k as h,n as r,t as V,v as t,m as C,D as R,x as v}from"../chunks/external.DvB2ine7.js";import{E as D}from"../chunks/ExampleArea.eE4E0hkm.js";import{V as E}from"../chunks/svelte-virtuallists.DHOrxcnk.js";const O=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function T(p,n){b(n,50)}var P=h('<div class="row svelte-18ammbl"> </div>'),B=h('<div class="list"><!></div> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function F(p,n){I(n,!0);const l=1e4;let i,e=L(d([]));const w=new Array(l).fill(1).map((a,s)=>({text:"Item "+s}));function m(){let a=[];for(let s=0;s<l;s++)a.push(Math.random()*105+50);b(e,d(a))}m();var j=B(),u=v(j),f=r(u);{var y=(a,s)=>{let k=()=>s==null?void 0:s().item,z=()=>s==null?void 0:s().style;var c=P(),H=r(c);V(()=>{C(c,"style",z()),R(H,k().text)}),o(a,c)};q(E(f,{items:w,height:500,width:"auto",itemCount:l,get itemSize(){return A(e)},slot:y}),a=>i=a,()=>i)}var _=t(t(u,!0)),g=r(_);g.__click=m;var x=t(t(g,!0));x.__click=[T,e],o(p,j),M()}S(["click"]);const G=`<script lang="ts">
	import { VirtualList, type SlotAttributes } from 'svelte-virtuallists';

	const itemCount = 10000;

	let virtualList: VirtualList;

	// on the component
	let rowHeights: Array<number> | number = $state([]);

	interface MyItemsData {
		text: string;
	}

	const myItems: Array<MyItemsData> = new Array(itemCount).fill(1).map((v, i) => ({
		text: 'Item ' + i
	}));

	function randomize() {
		let newRowHeights = [];
		for (let i = 0; i < itemCount; i++) {
			newRowHeights.push(Math.random() * (155 - 50) + 50);
		}
		rowHeights = newRowHeights;
	}

	function sameSize() {
		rowHeights = 50;
	}

	randomize();
<\/script>

<div class="list">
	<VirtualList bind:this={virtualList} items={myItems} height={500} width="auto" {itemCount} itemSize={rowHeights}>
		{#snippet slot({ item, style, index }:SlotAttributes<MyItemsData>)}
			<div class="row" {style}>
				{item.text}
			</div>
		{/snippet}
	</VirtualList>
</div>

<div class="actions">
	<button onclick={randomize} class="button">Randomize row heights </button>
	<button onclick={sameSize} class="button">Same row heights </button>
</div>

<style>
	.row {
		padding: 0 15px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		line-height: 50px;
		font-weight: 500;
		background: #fff;
	}
</style>
`,J=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">SlotAttributes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

	<span class="hljs-keyword">const</span> itemCount = <span class="hljs-number">10000</span>;

	<span class="hljs-keyword">let</span> <span class="hljs-attr">virtualList</span>: <span class="hljs-title class_">VirtualList</span>;

	<span class="hljs-comment">// on the component</span>
	<span class="hljs-keyword">let</span> <span class="hljs-attr">rowHeights</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; | number = $state([]);

	interface <span class="hljs-title class_">MyItemsData</span> {
		<span class="hljs-attr">text</span>: string;
	}

	<span class="hljs-keyword">const</span> <span class="hljs-attr">myItems</span>: <span class="hljs-title class_">Array</span>&lt;<span class="hljs-title class_">MyItemsData</span>&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(itemCount).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> ({
		<span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Item &#x27;</span> + i
	}));

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
		<span class="hljs-keyword">let</span> newRowHeights = [];
		<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; itemCount; i++) {
			newRowHeights.<span class="hljs-title function_">push</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * (<span class="hljs-number">155</span> - <span class="hljs-number">50</span>) + <span class="hljs-number">50</span>);
		}
		rowHeights = newRowHeights;
	}

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
		rowHeights = <span class="hljs-number">50</span>;
	}

	<span class="hljs-title function_">randomize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">bind:this</span>=<span class="hljs-string">{virtualList}</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myItems}</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span> {<span class="hljs-attr">itemCount</span>} <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{rowHeights}</span>&gt;</span>
		{#snippet slot({ item, style, index }:SlotAttributes<span class="hljs-tag">&lt;<span class="hljs-name">MyItemsData</span>&gt;</span>)}
			<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
				{item.text}
			<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
		{/snippet}
	<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
	<span class="hljs-selector-class">.row</span> {
		<span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">15px</span>;
		<span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
		<span class="hljs-attribute">box-sizing</span>: border-box;
		<span class="hljs-attribute">line-height</span>: <span class="hljs-number">50px</span>;
		<span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
		<span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
	}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,K={code:G,highlightedHTML:J,component:F};var N=h("<h2>Variable heights</h2> <p>list items can have different sizes</p> <!>",1);function Y(p){var n=N(),l=v(n),i=t(t(l,!0)),e=t(t(i,!0));D(e,{example:K}),o(p,n)}export{Y as component,X as universal};
