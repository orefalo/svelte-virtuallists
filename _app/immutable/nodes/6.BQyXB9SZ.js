import{K as ms,p as vs,s as e,b as o,u as D,e as fs,g as t,t as J,L as Q,M as W,h as T,j as bs,d as l,k,q as n,x as s,N as X,n as _s,O as ys,G as q,z as Y}from"../chunks/external.BPpIJIx1.js";import{E as ws}from"../chunks/ExampleArea.DwcMytTj.js";import{A as xs,S as qs,V as Ts}from"../chunks/svelte-virtuallists.ChZJuPxm.js";const ks=!0,Es=Object.freeze(Object.defineProperty({__proto__:null,prerender:ks},Symbol.toStringTag,{value:"Module"}));function Ss(h,c){l(c,50)}var Os=k('<div class="row svelte-1rhn2my"> </div>'),As=k('<div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <div style="float: right;font-weight: bold"><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <div class="list"><!></div> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function Is(h,c){vs(c,!0);let u,i=e(void 0),r=e(void 0),g=e(o([])),j=e(void 0),m=e(void 0),S=e(0),O=e(0);function Z(a){a.type==="range.update"&&(l(S,o(a.start)),l(O,o(a.end)))}const A=new Array(1e4).fill(1).map((a,p)=>p);D(()=>{l(j,void 0),l(m,o(t(r)))}),D(()=>{l(m,void 0),l(j,o(t(i)))});let v=e(o(xs.AUTO)),f=e(o(qs.SMOOTH));function I(){let a=[];for(let p=0;p<1e4;p++)a.push(Math.random()*105+50);l(g,o(a))}I();var L=As(),M=Y(L),H=n(M),ss=n(H),R=s(n(ss));X(R);var V=s(s(H,!0)),as=n(V),z=s(n(as));X(z);var B=s(s(V,!0)),ns=n(B),E=s(n(ns)),b=n(E);b.value=(b.__value="auto")==null?"":"auto";var _=s(b);_.value=(_.__value="start")==null?"":"start";var y=s(_);y.value=(y.__value="center")==null?"":"center";var N=s(y);N.value=(N.__value="end")==null?"":"end";var ts=s(s(B,!0)),ls=n(ts),C=s(n(ls)),w=n(C);w.value=(w.__value="auto")==null?"":"auto";var x=s(w);x.value=(x.__value="smooth")==null?"":"smooth";var $=s(x);$.value=($.__value="instant")==null?"":"instant";var G=s(s(M,!0)),ps=n(G),U=s(s(ps,!0)),es=n(U),os=s(s(U,!0)),cs=s(s(os,!0)),is=n(cs),F=s(s(G,!0)),rs=n(F);{var hs=(a,p)=>{let ds=()=>p==null?void 0:p().style,K=()=>p==null?void 0:p().index;var d=Os(),gs=n(d);J(()=>{_s(d,"style",ds()),ys(d,"highlighted",K()===t(j)),q(gs,`Item #${K()??""}`)}),T(a,d)};fs(Ts(rs,{height:500,width:"auto",model:A,get modelCount(){return A.length},get itemSize(){return t(g)},get scrollToIndex(){return t(j)},get scrollOffset(){return t(m)},get scrollToAlignment(){return t(v)},get scrollToBehaviour(){return t(f)},onVisibleRangeUpdate:Z,slot:hs}),a=>u=a,()=>u)}var us=s(s(F,!0)),P=n(us);P.__click=I;var js=s(s(P,!0));js.__click=[Ss,g],J(()=>{q(es,t(S)),q(is,t(O))}),Q(R,()=>t(i),a=>l(i,a)),Q(z,()=>t(r),a=>l(r,a)),W(E,()=>t(v),a=>l(v,a)),W(C,()=>t(f),a=>l(f,a)),T(h,L),bs()}ms(["click"]);const Ls=`<script lang="ts">
	import { VirtualList, ALIGNMENT, SCROLL_BEHAVIOR, type SlotAttributes } from 'svelte-virtuallists';

	let virtualList: VirtualList;

	// on the UI
	let theScrollToIndex: number | undefined = $state();
	let theScrollOffet: number | undefined = $state();

	// on the component
	let rowHeights: Array<number> | number = $state([]);
	let scrollToIndex: number | undefined = $state();
	let scrollOffet: number | undefined = $state();

	let start = $state(0);
	let end = $state(0);

	function handleMessage(event: any) {
		if (event.type === 'range.update') {
			start = event.start;
			end = event.end;
		}
	}

	// that's the model, which we don't use for this example
	const myModel: Array<number> = new Array(10000).fill(1).map((v, i) => i);

	$effect(() => {
		// scrollToIndex and scrollOffset shall not be used together.
		scrollToIndex = undefined;
		scrollOffet = theScrollOffet;
	});

	$effect(() => {
		// scrollToIndex and scrollOffset shall not be used together.
		scrollOffet = undefined;
		scrollToIndex = theScrollToIndex;
	});

	let scrollToAlignment: ALIGNMENT = $state(ALIGNMENT.AUTO);
	let scrollToBehaviour: SCROLL_BEHAVIOR = $state(SCROLL_BEHAVIOR.SMOOTH);

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

<div class="actions">
	<div class="select">
		<span>
			Scroll to row index
			<input id="index" type="number" placeholder="pick an index..." class="input" bind:value={theScrollToIndex} />
		</span>
	</div>
	<div class="select">
		<span>
			Scroll to pixel offset
			<input id="offset" type="number" placeholder="pick an offset..." class="input" bind:value={theScrollOffet} />
		</span>
	</div>
	<div class="select">
		<span>
			Alignment
			<select id="alignment" bind:value={scrollToAlignment}>
				<option value="auto">auto</option>
				<option value="start">start</option>
				<option value="center">center</option>
				<option value="end">end</option>
			</select>
		</span>
	</div>
	<div class="select">
		<span>
			Behaviour
			<select id="behaviour" bind:value={scrollToBehaviour}>
				<option value="auto">auto</option>
				<option value="smooth">smooth</option>
				<option value="instant">instant</option>
			</select>
		</span>
	</div>
</div>
<div style="float: right;font-weight: bold">
	<span>Visible Area: start</span>
	<span>{start}</span>
	- <span>end</span>
	<span>{end}</span>
</div>
<div class="list">
	<VirtualList
		bind:this={virtualList}
		height={500}
		width="auto"
		model={myModel}
		modelCount={myModel.length}
		itemSize={rowHeights}
		{scrollToIndex}
		scrollOffset={scrollOffet}
		{scrollToAlignment}
		{scrollToBehaviour}
		onVisibleRangeUpdate={handleMessage}
	>
		{#snippet slot({ item: _item, style, index }: SlotAttributes<any>)}
			<div class="row" {style} class:highlighted={index === scrollToIndex}>
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
	:global(body),
	:global(html) {
		height: 100%;
		margin: 0;
		background-color: rgb(249, 249, 249);
		display: block;
	}

	:global(.virtual-list-wrapper) {
		margin: 20px;
		background: #fff;
		border-radius: 2px;
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

	.row.highlighted {
		background: #efefef;
	}
</style>
`,Ms=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, <span class="hljs-variable constant_">ALIGNMENT</span>, <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>, type <span class="hljs-title class_">SlotAttributes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

	<span class="hljs-keyword">let</span> <span class="hljs-attr">virtualList</span>: <span class="hljs-title class_">VirtualList</span>;

	<span class="hljs-comment">// on the UI</span>
	<span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
	<span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

	<span class="hljs-comment">// on the component</span>
	<span class="hljs-keyword">let</span> <span class="hljs-attr">rowHeights</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; | number = $state([]);
	<span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
	<span class="hljs-keyword">let</span> <span class="hljs-attr">scrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

	<span class="hljs-keyword">let</span> start = $state(<span class="hljs-number">0</span>);
	<span class="hljs-keyword">let</span> end = $state(<span class="hljs-number">0</span>);

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">event: any</span>) {
		<span class="hljs-keyword">if</span> (event.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;range.update&#x27;</span>) {
			start = event.<span class="hljs-property">start</span>;
			end = event.<span class="hljs-property">end</span>;
		}
	}

	<span class="hljs-comment">// that&#x27;s the model, which we don&#x27;t use for this example</span>
	<span class="hljs-keyword">const</span> <span class="hljs-attr">myModel</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> i);

	$effect(<span class="hljs-function">() =&gt;</span> {
		<span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
		scrollToIndex = <span class="hljs-literal">undefined</span>;
		scrollOffet = theScrollOffet;
	});

	$effect(<span class="hljs-function">() =&gt;</span> {
		<span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
		scrollOffet = <span class="hljs-literal">undefined</span>;
		scrollToIndex = theScrollToIndex;
	});

	<span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToAlignment</span>: <span class="hljs-variable constant_">ALIGNMENT</span> = $state(<span class="hljs-variable constant_">ALIGNMENT</span>.<span class="hljs-property">AUTO</span>);
	<span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToBehaviour</span>: <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> = $state(<span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>.<span class="hljs-property">SMOOTH</span>);

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

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
			Scroll to row index
			<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;pick an index...&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{theScrollToIndex}</span> /&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
			Scroll to pixel offset
			<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;offset&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;pick an offset...&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{theScrollOffet}</span> /&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
			Alignment
			<span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;alignment&quot;</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{scrollToAlignment}</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>auto<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;start&quot;</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
			Behaviour
			<span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;behaviour&quot;</span> <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{scrollToBehaviour}</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>auto<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;smooth&quot;</span>&gt;</span>smooth<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;instant&quot;</span>&gt;</span>instant<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;float: right;font-weight: bold&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Visible Area: start<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{start}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	- <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{end}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
		<span class="hljs-attr">bind:this</span>=<span class="hljs-string">{virtualList}</span>
		<span class="hljs-attr">height</span>=<span class="hljs-string">{500}</span>
		<span class="hljs-attr">width</span>=<span class="hljs-string">&quot;auto&quot;</span>
		<span class="hljs-attr">model</span>=<span class="hljs-string">{myModel}</span>
		<span class="hljs-attr">modelCount</span>=<span class="hljs-string">{myModel.length}</span>
		<span class="hljs-attr">itemSize</span>=<span class="hljs-string">{rowHeights}</span>
		{<span class="hljs-attr">scrollToIndex</span>}
		<span class="hljs-attr">scrollOffset</span>=<span class="hljs-string">{scrollOffet}</span>
		{<span class="hljs-attr">scrollToAlignment</span>}
		{<span class="hljs-attr">scrollToBehaviour</span>}
		<span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleMessage}</span>
	&gt;</span>
		{#snippet slot({ item: _item, style, index }: SlotAttributes<span class="hljs-tag">&lt;<span class="hljs-name">any</span>&gt;</span>)}
			<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>} <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToIndex}</span>&gt;</span>
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
	:<span class="hljs-built_in">global</span>(body),
	:<span class="hljs-built_in">global</span>(html) {
		<span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
		<span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
		<span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">249</span>, <span class="hljs-number">249</span>, <span class="hljs-number">249</span>);
		<span class="hljs-attribute">display</span>: block;
	}

	:<span class="hljs-built_in">global</span>(.virtual-list-wrapper) {
		<span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
		<span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
		<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">2px</span>;
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

	<span class="hljs-selector-class">.row</span><span class="hljs-selector-class">.highlighted</span> {
		<span class="hljs-attribute">background</span>: <span class="hljs-number">#efefef</span>;
	}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,Hs={code:Ls,highlightedHTML:Ms,component:Is};var Rs=k("<h2>Positioning</h2> <p>The component provides properties to position the list either on an element, or on a pixel offset.</p> <!>",1);function Ns(h){var c=Rs(),u=Y(c),i=s(s(u,!0)),r=s(s(i,!0));ws(r,{example:Hs,$$legacy:!0}),T(h,c)}export{Ns as component,Es as universal};
