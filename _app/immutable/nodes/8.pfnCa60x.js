import{p as _,H as q,g as j,J as z,h,j as I,k as u,n as t,t as S,N as A,L as H,m as M,D as L,d as V,v as a,x as g}from"../chunks/external.DvB2ine7.js";import{E as D}from"../chunks/ExampleArea.eE4E0hkm.js";import{V as B}from"../chunks/svelte-virtuallists.DHOrxcnk.js";const C=!0,R=Object.freeze(Object.defineProperty({__proto__:null,prerender:C},Symbol.toStringTag,{value:"Module"}));var F=u('<div class="row svelte-11qjlwp"> </div>'),T=u('<div class="actions svelte-11qjlwp"><label for="item-height" class="svelte-11qjlwp">Item Height: <div class="range svelte-11qjlwp"><input type="range" id="item-height" step="5" min="50" max="155" class="svelte-11qjlwp"></div></label></div> <div class="list svelte-11qjlwp"><!></div>',1);function E(r,l){_(l,!1);const p=new Array(1e4).fill(1).map((i,s)=>({text:"Item "+s,lineHeight:20+s%20+"px",width:100+s%30+"px"}));let n=A(50);q();var e=T(),b=g(e),m=t(b),d=a(t(m)),o=t(d);H(o);var x=a(a(b,!0)),f=t(x);{var y=(i,s)=>{let v=()=>s==null?void 0:s().item,w=()=>s==null?void 0:s().style;var c=F(),k=t(c);S(()=>{M(c,"style",w()),L(k,v().text)}),h(i,c)};B(f,{items:p,height:500,width:"auto",get itemCount(){return p.length},get itemSize(){return j(n)},slot:y})}z(o,()=>j(n),i=>V(n,i)),h(r,e),I()}const O=`<script lang="ts">
	import { VirtualList, type SlotAttributes } from 'svelte-virtuallists';

	interface MyItemsData {
		text: string;
		lineHeight: string;
		width: string;
	}

	const myItems: Array<MyItemsData> = new Array(10000).fill(1).map((v, i) => ({
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
	<VirtualList items={myItems} height={500} width="auto" itemCount={myItems.length} {itemSize}>
		{#snippet slot({ item, style, index }:SlotAttributes<MyItemsData>)}
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
`,P=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, type <span class="hljs-title class_">SlotAttributes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

	interface <span class="hljs-title class_">MyItemsData</span> {
		<span class="hljs-attr">text</span>: string;
		<span class="hljs-attr">lineHeight</span>: string;
		<span class="hljs-attr">width</span>: string;
	}

	<span class="hljs-keyword">const</span> <span class="hljs-attr">myItems</span>: <span class="hljs-title class_">Array</span>&lt;<span class="hljs-title class_">MyItemsData</span>&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> ({
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
	<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myItems}</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">itemCount</span>=<span class="hljs-string">{myItems.length}</span> {<span class="hljs-attr">itemSize</span>}&gt;</span>
		{#snippet slot({ item, style, index }:SlotAttributes<span class="hljs-tag">&lt;<span class="hljs-name">MyItemsData</span>&gt;</span>)}
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
		appearance: none;
		-webkit-appearance: none;
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
		-webkit-appearance: none;
		appearance: none;
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
`,J={code:O,highlightedHTML:P,component:E};var N=u("<h2>List Positioning</h2> <p>The component provides properties to position the list either on an element, or on a pixel offset.</p> <!>",1);function U(r){var l=N(),p=g(l),n=a(a(p,!0)),e=a(a(n,!0));D(e,{example:J}),h(r,l)}export{U as component,R as universal};
