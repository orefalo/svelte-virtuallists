import{p as m,G as g,h as i,j as d,k as c,n as h,t as x,m as v,y as f,v as t,w as y}from"../chunks/external.snEXkSWD.js";import{E as _}from"../chunks/ExampleArea.BZmIF7EF.js";import{V as k,D as w}from"../chunks/svelte-virtuallists.CjbgwzFk.js";const I=!0,H=Object.freeze(Object.defineProperty({__proto__:null,prerender:I},Symbol.toStringTag,{value:"Module"}));var z=c('<div class="col svelte-1vy46ks"> </div>'),O=c('<div class="list horizontal svelte-1vy46ks"><!></div>');function L(l,a){m(a,!1),g();var n=O(),p=h(n);{var e=(o,s)=>{let u=()=>s==null?void 0:s().style,j=()=>s==null?void 0:s().index;var r=z(),b=h(r);x(()=>{v(r,"style",u()),f(b,`Item #${j()??""}`)}),i(o,r)};k(p,{height:"200px",width:680,get scrollDirection(){return w.HORIZONTAL},itemCount:1e5,itemSize:150,row:e})}i(l,n),d()}const T=`<script>
	import { DIRECTION, VirtualList } from 'svelte-virtuallists';
<\/script>

<div class="list horizontal">
	<VirtualList height="200px" width={680} scrollDirection={DIRECTION.HORIZONTAL} itemCount={100000} itemSize={150}>
		{#snippet row({ style, index })}
			<div class="col" {style}>
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

	.col {
		padding: 0 15px;
		padding-top: 30px;
		border-right: 1px solid #eee;
		box-sizing: border-box;
		line-height: 50px;
		font-weight: 500;
		text-align: center;
		background: #fff;
	}

	.horizontal {
		margin: 50px auto;
	}
</style>
`,C=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">DIRECTION</span>, <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list horizontal&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">{680}</span> <span class="hljs-attr">scrollDirection</span>=<span class="hljs-string">{DIRECTION.HORIZONTAL}</span> <span class="hljs-attr">itemCount</span>=<span class="hljs-string">{100000}</span> <span class="hljs-attr">itemSize</span>=<span class="hljs-string">{150}</span>&gt;</span>
		{#snippet row({ style, index })}
			<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col&quot;</span> {<span class="hljs-attr">style</span>}&gt;</span>
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

	<span class="hljs-selector-class">.col</span> {
		<span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">15px</span>;
		<span class="hljs-attribute">padding-top</span>: <span class="hljs-number">30px</span>;
		<span class="hljs-attribute">border-right</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eee</span>;
		<span class="hljs-attribute">box-sizing</span>: border-box;
		<span class="hljs-attribute">line-height</span>: <span class="hljs-number">50px</span>;
		<span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
		<span class="hljs-attribute">text-align</span>: center;
		<span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
	}

	<span class="hljs-selector-class">.horizontal</span> {
		<span class="hljs-attribute">margin</span>: <span class="hljs-number">50px</span> auto;
	}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,D={code:T,highlightedHTML:C,component:L};var N=c("<h2>Horizontal</h2> <p>The component can layout its content horizontaly</p> <!>",1);function S(l){var a=N(),n=y(a),p=t(t(n,!0)),e=t(t(p,!0));_(e,{example:D}),i(l,a)}export{S as component,H as universal};
