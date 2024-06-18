import{p as $,a as A,u as V,t as R,I as M,h as T,j as J,k as q,N as as,m as B,g as a,y as S,O as C,n,v as s,e as ts,d as p,b as k,s as h,w as F,K as N,L as ns}from"../chunks/external.CMwsuptN.js";import{E as ls}from"../chunks/ExampleArea.Df1Pw4rO.js";import{V as es}from"../chunks/svelte-virtuallists.Dr23T3gI.js";const ps=!0,bs=Object.freeze(Object.defineProperty({__proto__:null,prerender:ps},Symbol.toStringTag,{value:"Module"}));var rs=q('<div class="container svelte-1gm0t61"><pre aria-hidden="true" class="svelte-1gm0t61"> </pre> <textarea readonly="" style="outline: none;" class="svelte-1gm0t61"></textarea></div>');function cs(j,e){$(e,!0);let l=A(e,"value",7,""),d=A(e,"minRows",3,1),r=A(e,"maxRows",3,40);const v=c=>c.split(/\r?\n/);function b(c,y){const w=v(c);return w.length=y,w.reduce(function(O,L){return O+`
`+L})}V(()=>{l(b(l(),r()))});let g=C(()=>`${1+d()*1.2}em`),f=C(()=>r()?`${1+r()*1.2}em`:"auto");var i=rs(),o=n(i),x=n(o),m=s(s(o,!0));as(m),R(()=>{B(o,"style",`min-height: ${a(g)??""}; max-height: ${a(f)??""}`),S(x,l()+`
`)}),M(m,l,c=>l(c)),T(j,i),J()}var is=q('<div class="row svelte-1rhn2my"> </div>'),os=q('<!> <div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div></div> <div style="float: right;font-weight: bold"><span>Visible Area: start</span> <span> </span> - <span>end</span> <span> </span></div> <div class="list"><!></div>',1);function hs(j,e){$(e,!0);let l=h("// Event name: Event params   (Last event at the top)"),d=h(0),r=h(0);function v(t){p(l,JSON.stringify(t)+`
`+a(l)),t.type==="range.update"&&(p(d,k(t.start)),p(r,k(t.end)))}let b,g=h(void 0),f=h(void 0),i=h(void 0),o=h(void 0);V(()=>{p(i,void 0),p(o,k(a(f)))}),V(()=>{p(o,void 0),p(i,k(a(g)))});var x=os(),m=F(x);cs(m,{get value(){return a(l)},minRows:4,maxRows:15});var c=s(s(m,!0)),y=n(c),w=n(y),I=s(n(w));N(I);var O=s(s(y,!0)),L=n(O),z=s(n(L));N(z);var E=s(s(c,!0)),K=n(E),H=s(s(K,!0)),P=n(H),D=s(s(H,!0)),G=s(s(D,!0)),Q=n(G),W=s(s(E,!0)),X=n(W);{var Y=(t,u)=>{let Z=()=>u==null?void 0:u().style,U=()=>u==null?void 0:u().index;var _=is(),ss=n(_);R(()=>{B(_,"style",Z()),ns(_,"highlighted",U()===a(i)),S(ss,`Item #${U()??""}`)}),T(t,_)};ts(es(X,{height:500,width:"auto",itemCount:1e4,itemSize:40,get scrollToIndex(){return a(i)},get scrollOffset(){return a(o)},onAfterScroll:v,onVisibleRangeUpdate:v,row:Y}),t=>b=t,()=>b)}R(()=>{S(P,a(d)),S(Q,a(r))}),M(I,()=>a(g),t=>p(g,t)),M(z,()=>a(f),t=>p(f,t)),T(j,x),J()}const ds=`<script lang="ts">
	import { VirtualList } from 'svelte-virtuallists';
	import TextArea from '$comp/TextAreaAutosize.svelte';

	let val = $state('// Event name: Event params   (Last event at the top)');

	let start = $state(0);
	let end = $state(0);

	function handleMessage(event: any) {
		val = JSON.stringify(event) + '\\n' + val;

		if (event.type === 'range.update') {
			start = event.start;
			end = event.end;
		}
	}

	let virtualList: VirtualList;

	// on the UI
	let theScrollToIndex: number | undefined = $state();
	let theScrollOffet: number | undefined = $state();

	// on the component
	let scrollToIndex: number | undefined = $state();
	let scrollOffet: number | undefined = $state();

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
<\/script>

<TextArea value={val} minRows={4} maxRows={15} />

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
		itemCount={10000}
		itemSize={40}
		{scrollToIndex}
		scrollOffset={scrollOffet}
		onAfterScroll={handleMessage}
		onVisibleRangeUpdate={handleMessage}
	>
		{#snippet row({ style, index }:{style:string, index:number})}
			<div class="row" {style} class:highlighted={index === scrollToIndex}>
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
`,us=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
	<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;
	<span class="hljs-keyword">import</span> <span class="hljs-title class_">TextArea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$comp/TextAreaAutosize.svelte&#x27;</span>;

	<span class="hljs-keyword">let</span> val = $state(<span class="hljs-string">&#x27;// Event name: Event params   (Last event at the top)&#x27;</span>);

	<span class="hljs-keyword">let</span> start = $state(<span class="hljs-number">0</span>);
	<span class="hljs-keyword">let</span> end = $state(<span class="hljs-number">0</span>);

	<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">event: any</span>) {
		val = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(event) + <span class="hljs-string">&#x27;\\n&#x27;</span> + val;

		<span class="hljs-keyword">if</span> (event.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;range.update&#x27;</span>) {
			start = event.<span class="hljs-property">start</span>;
			end = event.<span class="hljs-property">end</span>;
		}
	}

	<span class="hljs-keyword">let</span> <span class="hljs-attr">virtualList</span>: <span class="hljs-title class_">VirtualList</span>;

	<span class="hljs-comment">// on the UI</span>
	<span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
	<span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

	<span class="hljs-comment">// on the component</span>
	<span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
	<span class="hljs-keyword">let</span> <span class="hljs-attr">scrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

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
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{val}</span> <span class="hljs-attr">minRows</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">maxRows</span>=<span class="hljs-string">{15}</span> /&gt;</span>

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
		<span class="hljs-attr">itemCount</span>=<span class="hljs-string">{10000}</span>
		<span class="hljs-attr">itemSize</span>=<span class="hljs-string">{40}</span>
		{<span class="hljs-attr">scrollToIndex</span>}
		<span class="hljs-attr">scrollOffset</span>=<span class="hljs-string">{scrollOffet}</span>
		<span class="hljs-attr">onAfterScroll</span>=<span class="hljs-string">{handleMessage}</span>
		<span class="hljs-attr">onVisibleRangeUpdate</span>=<span class="hljs-string">{handleMessage}</span>
	&gt;</span>
		{#snippet row({ style, index }:{style:string, index:number})}
			<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span> {<span class="hljs-attr">style</span>} <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToIndex}</span>&gt;</span>
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
`,js={code:ds,highlightedHTML:us,component:hs};var gs=q("<h2>Events</h2> <p>Try interacting with the list below and check the event log below.</p> <!>",1);function xs(j){var e=gs(),l=F(e),d=s(s(l,!0)),r=s(s(d,!0));ls(r,{example:js}),T(j,e)}export{xs as component,bs as universal};
