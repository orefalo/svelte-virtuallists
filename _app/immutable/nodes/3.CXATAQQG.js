import{L as cs,p as rs,b as j,s as O,t as L,B as n,y as ls,w as a,M as is,e as $,N as ss,n as h,g as I,h as hs,q as d,O as ns,x as l,P as as,m as us,k as js,K as ds}from"../chunks/jdX24A6w.js";import{E as gs}from"../chunks/OWgUB9v-.js";import{A as ms,S as vs,V as fs}from"../chunks/B7HiuRcr.js";function bs(o,t){d(t,()=>25)}function _s(o,t){for(let p=0;p<10;p++)t.pop()}var ys=(o,t)=>t("scrollToIndex",Number(o.currentTarget.value)),Ts=(o,t)=>t("scrollToOffset",Number(o.currentTarget.value)),xs=L("<div> </div>"),Ss=L('<b>Please check the browser console to see event traces</b> <div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button> <button class="button">Randomize content</button> <button class="button">array size -10</button></div>',1);function zs(o,t){rs(t,!0);const p=j(new Array(1e4));let g=O(j(ms.AUTO)),m=O(j(vs.SMOOTH)),v=O(void 0),u;function C(s,e){console.log(s+JSON.stringify(e))}let r=j({});function P(s,e){s==="scrollToIndex"?(r.scrollToIndex=e,r.scrollToOffset=void 0):s==="scrollToOffset"&&(r.scrollToOffset=e,r.scrollToIndex=void 0)}function V(){u=new Array(p.length);for(let s=0;s<u.length;s++)u[s]=Math.round(Math.random()*65+30);d(v,(s,e)=>u[s])}function R(){for(let s=0;s<p.length;s++)p[s]={text:Math.floor(Math.random()*p.length)}}R(),V();var N=Ss(),f=n(ls(N),2),b=a(f),B=a(b),_=n(a(B));ns(_),_.__input=[ys,P],l(B),l(b);var y=n(b,2),E=a(y),T=n(a(E));ns(T),T.__input=[Ts,P],l(E),l(y);var x=n(y,2),H=a(x),S=n(a(H)),z=a(S);z.value=(z.__value="auto")==null?"":"auto";var q=n(z);q.value=(q.__value="start")==null?"":"start";var k=n(q);k.value=(k.__value="center")==null?"":"center";var U=n(k);U.value=(U.__value="end")==null?"":"end",l(S),l(H),l(x);var G=n(x,2),J=a(G),w=n(a(J)),M=a(w);M.value=(M.__value="auto")==null?"":"auto";var A=n(M);A.value=(A.__value="smooth")==null?"":"smooth";var K=n(A);K.value=(K.__value="instant")==null?"":"instant",l(w),l(J),l(G),l(f);var D=n(f,2);fs(D,is({get items(){return p},style:"height:500px"},()=>r,{get scrollToAlignment(){return h(g)},get scrollToBehaviour(){return h(m)},get sizingCalculator(){return h(v)},onAfterScroll:(...e)=>C("onAfterScroll:",e),onVisibleRangeUpdate:(...e)=>C("onVisibleRangeUpdate:",e),vl_slot:(e,c)=>{let Y=()=>c==null?void 0:c().index,ps=()=>c==null?void 0:c().item,es=()=>c==null?void 0:c().size;var i=xs();let Z;var os=a(i);l(i),$(()=>{us(i,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${es()??""}px;`),Z=js(i,1,"svelte-1bng65z",null,Z,{highlighted:Y()===r.scrollToIndex}),ds(os,`#${Y()??""}
      ${ps().text??""}`)}),I(e,i)},$$slots:{vl_slot:!0}}));var F=n(D,2),Q=a(F);Q.__click=V;var W=n(Q,2);W.__click=[bs,v];var X=n(W,2);X.__click=R;var ts=n(X,2);ts.__click=[_s,p],l(F),$(()=>{as(_,r.scrollToIndex),as(T,r.scrollToOffset)}),ss(S,()=>h(g),s=>d(g,s)),ss(w,()=>h(m),s=>d(m,s)),I(o,N),hs()}cs(["input","click"]);const qs=`<script lang="ts">
  import { ALIGNMENT, SCROLL_BEHAVIOR, type VariantScrollConfig, type VLSlotSignature } from '$lib';
  import { VirtualList } from 'svelte-virtuallists';

  const myModel = $state(new Array(10000));

  let scrollToAlignment: ALIGNMENT = $state(ALIGNMENT.AUTO);
  let scrollToBehaviour: SCROLL_BEHAVIOR = $state(SCROLL_BEHAVIOR.SMOOTH);

  let szCalculator: ((index: number, item: unknown) => number) | undefined = $state();

  // holds randomized sizes
  let randSizes: Array<number>;

  function handleMessage(prefix: string, event: any) {
    console.log(prefix + JSON.stringify(event));
  }

  let scrollToProps: VariantScrollConfig = $state({});

  function updateScrollToProps(key: 'scrollToIndex' | 'scrollToOffset', value: number | undefined) {
    if (key === 'scrollToIndex') {
      scrollToProps.scrollToIndex = value;
      scrollToProps.scrollToOffset = undefined;
    } else if (key === 'scrollToOffset') {
      scrollToProps.scrollToOffset = value;
      scrollToProps.scrollToIndex = undefined;
    }
  }

  function randomizeSize() {
    randSizes = new Array(myModel.length);
    for (let i = 0; i < randSizes.length; i++) {
      randSizes[i] = Math.round(Math.random() * 65 + 30);
    }

    szCalculator = (_index: number, _item: any) => randSizes[_index];
  }

  function sameSize() {
    szCalculator = () => 25;
  }

  function randomizeContent() {
    for (let i = 0; i < myModel.length; i++) {
      myModel[i] = { text: Math.floor(Math.random() * myModel.length) }; // Random number between 0 and 9999
    }
  }

  function stripItemsBy10() {
    for (let i = 0; i < 10; i++) myModel.pop();
  }

  randomizeContent();
  randomizeSize();
<\/script>

<b>Please check the browser console to see event traces</b>
<div class="actions">
  <div class="select">
    <span>
      Scroll to row index
      <input
        id="index"
        type="number"
        placeholder="pick an index..."
        class="input"
        value={scrollToProps.scrollToIndex}
        oninput={e => updateScrollToProps('scrollToIndex', Number(e.currentTarget.value))} />
    </span>
  </div>
  <div class="select">
    <span>
      Scroll to pixel offset
      <input
        id="offset"
        type="number"
        placeholder="pick an offset..."
        class="input"
        value={scrollToProps.scrollToOffset}
        oninput={e => updateScrollToProps('scrollToOffset', Number(e.currentTarget.value))} />
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

<VirtualList
  items={myModel}
  style="height:500px"
  {...scrollToProps}
  {scrollToAlignment}
  {scrollToBehaviour}
  sizingCalculator={szCalculator}
  onAfterScroll={(...props) => handleMessage('onAfterScroll:', props)}
  onVisibleRangeUpdate={(...props) => handleMessage('onVisibleRangeUpdate:', props)}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature<(typeof myModel)[0]>)}
    <div
      style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;"
      class:highlighted={index === scrollToProps.scrollToIndex}>
      #{index}
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomizeSize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
  <button onclick={randomizeContent} class="button">Randomize content</button>
  <button onclick={stripItemsBy10} class="button">array size -10</button>
</div>

<style>
  .highlighted {
    background: #efefef;
  }
</style>
`,ks=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ALIGNMENT</span>, <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>, type <span class="hljs-title class_">VariantScrollConfig</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$lib&#x27;</span>;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = $state(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>));

  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToAlignment</span>: <span class="hljs-variable constant_">ALIGNMENT</span> = $state(<span class="hljs-variable constant_">ALIGNMENT</span>.<span class="hljs-property">AUTO</span>);
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToBehaviour</span>: <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> = $state(<span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>.<span class="hljs-property">SMOOTH</span>);

  <span class="hljs-keyword">let</span> <span class="hljs-attr">szCalculator</span>: (<span class="hljs-function">(<span class="hljs-params">index: number, item: unknown</span>) =&gt;</span> number) | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// holds randomized sizes</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">randSizes</span>: <span class="hljs-title class_">Array</span>&lt;number&gt;;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">prefix: string, event: any</span>) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(prefix + <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(event));
  }

  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToProps</span>: <span class="hljs-title class_">VariantScrollConfig</span> = $state({});

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">updateScrollToProps</span>(<span class="hljs-params">key: <span class="hljs-string">&#x27;scrollToIndex&#x27;</span> | <span class="hljs-string">&#x27;scrollToOffset&#x27;</span>, value: number | <span class="hljs-literal">undefined</span></span>) {
    <span class="hljs-keyword">if</span> (key === <span class="hljs-string">&#x27;scrollToIndex&#x27;</span>) {
      scrollToProps.<span class="hljs-property">scrollToIndex</span> = value;
      scrollToProps.<span class="hljs-property">scrollToOffset</span> = <span class="hljs-literal">undefined</span>;
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (key === <span class="hljs-string">&#x27;scrollToOffset&#x27;</span>) {
      scrollToProps.<span class="hljs-property">scrollToOffset</span> = value;
      scrollToProps.<span class="hljs-property">scrollToIndex</span> = <span class="hljs-literal">undefined</span>;
    }
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomizeSize</span>(<span class="hljs-params"></span>) {
    randSizes = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(myModel.<span class="hljs-property">length</span>);
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; randSizes.<span class="hljs-property">length</span>; i++) {
      randSizes[i] = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">65</span> + <span class="hljs-number">30</span>);
    }

    szCalculator = <span class="hljs-function">(<span class="hljs-params">_index: number, _item: any</span>) =&gt;</span> randSizes[_index];
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">sameSize</span>(<span class="hljs-params"></span>) {
    szCalculator = <span class="hljs-function">() =&gt;</span> <span class="hljs-number">25</span>;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">randomizeContent</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; myModel.<span class="hljs-property">length</span>; i++) {
      myModel[i] = { <span class="hljs-attr">text</span>: <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">floor</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * myModel.<span class="hljs-property">length</span>) }; <span class="hljs-comment">// Random number between 0 and 9999</span>
    }
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">stripItemsBy10</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) myModel.<span class="hljs-title function_">pop</span>();
  }

  <span class="hljs-title function_">randomizeContent</span>();
  <span class="hljs-title function_">randomizeSize</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Please check the browser console to see event traces<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      Scroll to row index
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
        <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;index&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;pick an index...&quot;</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input&quot;</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{scrollToProps.scrollToIndex}</span>
        <span class="hljs-attr">oninput</span>=<span class="hljs-string">{e</span> =&gt;</span> updateScrollToProps(&#x27;scrollToIndex&#x27;, Number(e.currentTarget.value))} /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
      Scroll to pixel offset
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
        <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;offset&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;pick an offset...&quot;</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input&quot;</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{scrollToProps.scrollToOffset}</span>
        <span class="hljs-attr">oninput</span>=<span class="hljs-string">{e</span> =&gt;</span> updateScrollToProps(&#x27;scrollToOffset&#x27;, Number(e.currentTarget.value))} /&gt;
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

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
  <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:500px&quot;</span>
  {<span class="hljs-attr">...scrollToProps</span>}
  {<span class="hljs-attr">scrollToAlignment</span>}
  {<span class="hljs-attr">scrollToBehaviour</span>}
  <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{szCalculator}</span>
  <span class="hljs-attr">onAfterScroll</span>=<span class="hljs-string">{(...props)</span> =&gt;</span> handleMessage(&#x27;onAfterScroll:&#x27;, props)}
  onVisibleRangeUpdate={(...props) =&gt; handleMessage(&#x27;onVisibleRangeUpdate:&#x27;, props)}&gt;
  {#snippet vl_slot({ index, item, size }: VLSlotSignature&lt;(typeof myModel)[0]&gt;)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>
      <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToProps.scrollToIndex}</span>&gt;</span>
      #{index}
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomizeSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{sameSize}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Same row heights<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{randomizeContent}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Randomize content<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">{stripItemsBy10}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>array size -10<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.highlighted</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#efefef</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`,ws={code:qs,highlightedHTML:ks,component:zs};var Ms=L("<h2>Events</h2> <p>Try interacting with the list below and check the event log in the console.</p> <!>",1);function Ls(o){var t=Ms(),p=n(ls(t),4);gs(p,{example:ws}),I(o,t)}export{Ls as component};
