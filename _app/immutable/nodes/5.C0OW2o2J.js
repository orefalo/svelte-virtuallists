import{I as ms,p as vs,s as e,b as o,u as D,e as fs,g as t,t as J,J as K,K as Q,h as T,j as bs,d as l,k,n,v as s,L as W,m as _s,M as ws,D as q,x as X}from"../chunks/external.DvB2ine7.js";import{E as ys}from"../chunks/ExampleArea.eE4E0hkm.js";import{A as xs,S as qs,V as Ts}from"../chunks/svelte-virtuallists.DHOrxcnk.js";const ks=!0,Es=Object.freeze(Object.defineProperty({__proto__:null,prerender:ks},Symbol.toStringTag,{value:"Module"}));function Is(h,c){l(c,50)}var Os=k('<div class="row svelte-1rhn2my"> </div>'),Ss=k('<div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <div style="float: right;font-weight: bold"><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <div class="list"><!></div> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button></div>',1);function As(h,c){vs(c,!0);let u,i=e(void 0),r=e(void 0),g=e(o([])),j=e(void 0),m=e(void 0),I=e(0),O=e(0);function Y(a){a.type==="range.update"&&(l(I,o(a.start)),l(O,o(a.end)))}const Z=new Array(1e4).fill(1).map((a,p)=>p);D(()=>{l(j,void 0),l(m,o(t(r)))}),D(()=>{l(m,void 0),l(j,o(t(i)))});let v=e(o(xs.AUTO)),f=e(o(qs.SMOOTH));function S(){let a=[];for(let p=0;p<1e4;p++)a.push(Math.random()*105+50);l(g,o(a))}S();var A=Ss(),L=X(A),H=n(L),ss=n(H),R=s(n(ss));W(R);var M=s(s(H,!0)),as=n(M),V=s(n(as));W(V);var z=s(s(M,!0)),ns=n(z),B=s(n(ns)),b=n(B);b.value=(b.__value="auto")==null?"":"auto";var _=s(b);_.value=(_.__value="start")==null?"":"start";var w=s(_);w.value=(w.__value="center")==null?"":"center";var E=s(w);E.value=(E.__value="end")==null?"":"end";var ts=s(s(z,!0)),ls=n(ts),N=s(n(ls)),y=n(N);y.value=(y.__value="auto")==null?"":"auto";var x=s(y);x.value=(x.__value="smooth")==null?"":"smooth";var C=s(x);C.value=(C.__value="instant")==null?"":"instant";var U=s(s(L,!0)),ps=n(U),G=s(s(ps,!0)),es=n(G),os=s(s(G,!0)),cs=s(s(os,!0)),is=n(cs),$=s(s(U,!0)),rs=n($);{var hs=(a,p)=>{let ds=()=>p==null?void 0:p().style,P=()=>p==null?void 0:p().index;var d=Os(),gs=n(d);J(()=>{_s(d,"style",ds()),ws(d,"highlighted",P()===t(j)),q(gs,`Item #${P()??""}`)}),T(a,d)};fs(Ts(rs,{height:500,width:"auto",items:Z,itemCount:1e4,get itemSize(){return t(g)},get scrollToIndex(){return t(j)},get scrollOffset(){return t(m)},get scrollToAlignment(){return t(v)},get scrollToBehaviour(){return t(f)},onVisibleRangeUpdate:Y,slot:hs}),a=>u=a,()=>u)}var us=s(s($,!0)),F=n(us);F.__click=S;var js=s(s(F,!0));js.__click=[Is,g],J(()=>{q(es,t(I)),q(is,t(O))}),K(R,()=>t(i),a=>l(i,a)),K(V,()=>t(r),a=>l(r,a)),Q(B,()=>t(v),a=>l(v,a)),Q(N,()=>t(f),a=>l(f,a)),T(h,A),bs()}ms(["click"]);const Ls=`<script lang="ts">
	import { VirtualList, ALIGNMENT, SCROLL_BEHAVIOR } from 'svelte-virtuallists';

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
	const myItems: Array<number> = new Array(10000).fill(1).map((v, i) => i);

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
		items={myItems}
		itemCount={10000}
		itemSize={rowHeights}
		{scrollToIndex}
		scrollOffset={scrollOffet}
		{scrollToAlignment}
		{scrollToBehaviour}
		onVisibleRangeUpdate={handleMessage}
	>
		{#snippet slot({ item, style, index })}
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
`,Hs=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>, <span class="hljs-variable constant_">ALIGNMENT</span>, <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

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
	<span class="hljs-keyword">const</span> <span class="hljs-attr">myItems</span>: <span class="hljs-title class_">Array</span>&lt;number&gt; = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> i);

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
		<span class="hljs-attr">items</span>=<span class="hljs-string">{myItems}</span>
		<span class="hljs-attr">itemCount</span>=<span class="hljs-string">{10000}</span>
		<span class="hljs-attr">itemSize</span>=<span class="hljs-string">{rowHeights}</span>
		{<span class="hljs-attr">scrollToIndex</span>}
		<span class="hljs-attr">scrollOffset</span>=<span class="hljs-string">{scrollOffet}</span>
		{<span class="hljs-attr">scrollToAlignment</span>}
		{<span class="hljs-attr">scrollToBehaviour</span>}
		<span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleMessage}</span>
	&gt;</span>
		{#snippet slot({ item, style, index })}
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
`,Rs={code:Ls,highlightedHTML:Hs,component:As};var Ms=k("<h2>Positioning</h2> <p>The component provides properties to position the list either on an element, or on a pixel offset.</p> <!>",1);function Ns(h){var c=Ms(),u=X(c),i=s(s(u,!0)),r=s(s(i,!0));ys(r,{example:Rs}),T(h,c)}export{Ns as component,Es as universal};
