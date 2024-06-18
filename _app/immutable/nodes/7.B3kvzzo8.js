import{H as z,s as k,b as m,e as H,g as L,h as o,d as g,k as h,n as c,t as q,v as t,m as S,y as V,w as d}from"../chunks/external.CMwsuptN.js";import{E as R}from"../chunks/ExampleArea.Df1Pw4rO.js";import{V as M}from"../chunks/svelte-virtuallists.Dr23T3gI.js";const C=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:C},Symbol.toStringTag,{value:"Module"}));function A(e,a){g(a,50)}var I=h('<div class="row svelte-18ammbl"> </div>'),E=h('<div class="list"><!></div> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function O(e){let a,l=k(m([]));function p(){let n=[];for(let s=0;s<1e4;s++)n.push(Math.random()*105+50);g(l,m(n))}p();var i=E(),u=d(i),b=c(u);{var v=(n,s)=>{let _=()=>s==null?void 0:s().style,y=()=>s==null?void 0:s().index;var r=I(),x=c(r);q(()=>{S(r,"style",_()),V(x,`Item #${y()??""}`)}),o(n,r)};H(M(b,{height:500,width:"auto",itemCount:1e4,get itemSize(){return L(l)},row:v}),n=>a=n,()=>a)}var w=t(t(u,!0)),j=c(w);j.__click=p;var f=t(t(j,!0));f.__click=[A,l],o(e,i)}z(["click"]);const T=`<script lang="ts">
	import { VirtualList } from 'svelte-virtuallists';

	let virtualList: VirtualList;

	// on the component
	let rowHeights: Array<number> | number = $state([]);

	function randomize() {
		let newRowHeights = [];
		for (let i = 0; i < 10000; i++) {
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
	<VirtualList bind:this={virtualList} height={500} width="auto" itemCount={10000} itemSize={rowHeights}>
		{#snippet row({ style, index }:{style:string, index:number})}
			<div class="row" {style}>
				Item #{index}
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
`,P=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

	<span class="hljs-keyword">let</span> <span class="hljs-attr">virtualList</span>: <span class="hljs-title class_">VirtualList</span>;

	<span class="hljs-comment">// on the component</span>
	<span class="hljs-keyword">let</span> <span class="hljs-attr">rowHeights</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; | number = $state([]);

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">randomize</span>(<span class="hljs-params"></span>) {
		<span class="hljs-keyword">let</span> newRowHeights = [];
		<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10000</span>; i++) {
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
	<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">bind:this</span>=<span class="hljs-string">{virtualList}</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">itemCount</span>=<span class="hljs-string">{10000}</span> <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{rowHeights}</span>&gt;</span>
		{#snippet row({ style, index }:{style:string, index:number})}
			<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
				Item #{index}
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
`,B={code:T,highlightedHTML:P,component:O};var D=h("<h2>Variable heights</h2> <p>list items can have different sizes</p> <!>",1);function N(e){var a=D(),l=d(a),p=t(t(l,!0)),i=t(t(p,!0));R(i,{example:B}),o(e,a)}export{N as component,K as universal};
