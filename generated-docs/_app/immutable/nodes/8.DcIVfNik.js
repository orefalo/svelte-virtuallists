import{g as o,I as w,h,k as b,n as t,t as k,M as _,K as q,m as z,y as S,d as L,v as s,w as j}from"../chunks/external.Bmw6x81a.js";import{E as H}from"../chunks/ExampleArea.BK9EGX7m.js";import{V}from"../chunks/svelte-virtuallists.BPuNv5DC.js";const I=!0,D=Object.freeze(Object.defineProperty({__proto__:null,prerender:I},Symbol.toStringTag,{value:"Module"}));var M=b('<div class="row svelte-11qjlwp"> </div>'),A=b('<div class="actions svelte-11qjlwp"><label for="item-height" class="svelte-11qjlwp">Item Height: <div class="range svelte-11qjlwp"><input type="range" id="item-height" step="5" min="50" max="155" class="svelte-11qjlwp"></div></label></div> <div class="list svelte-11qjlwp"><!></div>',1);function B(e){let n=_(50);var l=A(),p=j(l),i=t(p),g=s(t(i)),u=t(g);q(u);var m=s(s(p,!0)),d=t(m);{var x=(r,a)=>{let f=()=>a==null?void 0:a().style,v=()=>a==null?void 0:a().index;var c=M(),y=t(c);k(()=>{z(c,"style",f()),S(y,`Item #${v()??""}`)}),h(r,c)};V(d,{height:500,width:"auto",itemCount:1e5,get itemSize(){return o(n)},row:x})}w(u,()=>o(n),r=>L(n,r)),h(e,l)}const C=`<script>
	import { VirtualList } from 'svelte-virtuallists';

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
	<VirtualList height={500} width="auto" itemCount={100000} {itemSize}>
		{#snippet row({ style, index })}
			<div class="row" {style}>
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
`,F=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

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
	<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">itemCount</span>=<span class="hljs-string">{100000}</span> {<span class="hljs-attr">itemSize</span>}&gt;</span>
		{#snippet row({ style, index })}
			<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
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
`,T={code:C,highlightedHTML:F,component:B};var E=b("<h2>List Positioning</h2> <p>The component provides properties to position the list either on an element, or on a pixel offset.</p> <!>",1);function G(e){var n=E(),l=j(n),p=s(s(l,!0)),i=s(s(p,!0));H(i,{example:T}),h(e,n)}export{G as component,D as universal};
