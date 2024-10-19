import{I as is,p as rs,b as j,s as r,u as ss,q as n,m as ts,g as t,O as ns,P as as,f as L,h as hs,k as p,j as R,w as a,t as us,Q as ls,y as l,z as js,R as ds,H as gs}from"../chunks/external.BR_3oSYm.js";import{E as ms}from"../chunks/ExampleArea.B1b5SDnM.js";import{A as fs,S as vs,V as bs}from"../chunks/svelte-virtuallists.DsPTyFtM.js";const _s=!0,Ls=Object.freeze(Object.defineProperty({__proto__:null,prerender:_s},Symbol.toStringTag,{value:"Module"}));function ys(h,c){p(c,()=>25)}function xs(h,c){for(let e=0;e<10;(e+=1)-1)c.pop()}var Ss=R('<div class="svelte-1bng65z"> </div>'),zs=R('<b>Please check the browser console to see event traces</b> <div class="actions"><div class="select"><span>Scroll to row index <input id="index" type="number" placeholder="pick an index..." class="input"></span></div> <div class="select"><span>Scroll to pixel offset <input id="offset" type="number" placeholder="pick an offset..." class="input"></span></div> <div class="select"><span>Alignment <select id="alignment"><option>auto</option><option>start</option><option>center</option><option>end</option></select></span></div> <div class="select"><span>Behaviour <select id="behaviour"><option>auto</option><option>smooth</option><option>instant</option></select></span></div></div> <!> <div class="actions"><button class="button">Randomize row heights</button> <button class="button">Same row heights</button> <button class="button">Randomize content</button> <button class="button">array size -10</button></div>',1);function Ts(h,c){rs(c,!0);const e=j(new Array(1e4));let m=r(void 0),f=r(void 0),d=r(void 0),v=r(void 0),b=r(j(fs.AUTO)),_=r(j(vs.SMOOTH)),y=r(void 0),g;function C(s,i){console.log(s+JSON.stringify(i))}ss(()=>{p(d,void 0),p(v,j(t(f)))}),ss(()=>{p(v,void 0),p(d,j(t(m)))});function V(){g=new Array(e.length);for(let s=0;s<g.length;(s+=1)-1)g[s]=Math.round(Math.random()*65+30);p(y,(s,i)=>g[s])}function B(){for(let s=0;s<e.length;(s+=1)-1)e[s]={text:Math.floor(Math.random()*e.length)}}B(),V();var N=zs(),x=n(ts(N),2),S=a(x),E=a(S),H=n(a(E));ls(H),l(E),l(S);var z=n(S,2),U=a(z),G=n(a(U));ls(G),l(U),l(z);var T=n(z,2),P=a(T),q=n(a(P)),w=a(q);w.value=(w.__value="auto")==null?"":"auto";var k=n(w);k.value=(k.__value="start")==null?"":"start";var O=n(k);O.value=(O.__value="center")==null?"":"center";var J=n(O);J.value=(J.__value="end")==null?"":"end",l(q),l(P),l(T);var Q=n(T,2),$=a(Q),M=n(a($)),I=a(M);I.value=(I.__value="auto")==null?"":"auto";var A=n(I);A.value=(A.__value="smooth")==null?"":"smooth";var D=n(A);D.value=(D.__value="instant")==null?"":"instant",l(M),l($),l(Q),l(x);var F=n(x,2);bs(F,{get items(){return e},style:"height:500px",get scrollToIndex(){return t(d)},get scrollToOffset(){return t(v)},get scrollToAlignment(){return t(b)},get scrollToBehaviour(){return t(_)},get sizingCalculator(){return t(y)},onAfterScroll:(...i)=>C("onAfterScroll:",i),onVisibleRangeUpdate:(...i)=>C("onVisibleRangeUpdate:",i),vl_slot:(i,o)=>{let Z=()=>o==null?void 0:o().index,ps=()=>o==null?void 0:o().item,os=()=>o==null?void 0:o().size;var u=Ss(),cs=a(u);l(u),us(()=>{js(u,"style",`border: 1px solid rgb(204, 204, 204); line-height: ${os()??""}px;`),ds(u,"highlighted",Z()===t(d)),gs(cs,`#${Z()??""}
      ${ps().text??""}`)}),L(i,u)},$$slots:{vl_slot:!0}});var K=n(F,2),W=a(K);W.__click=V;var X=n(W,2);X.__click=[ys,y];var Y=n(X,2);Y.__click=B;var es=n(Y,2);es.__click=[xs,e],l(K),ns(H,()=>t(m),s=>p(m,s)),ns(G,()=>t(f),s=>p(f,s)),as(q,()=>t(b),s=>p(b,s)),as(M,()=>t(_),s=>p(_,s)),L(h,N),hs()}is(["click"]);const qs=`<script lang="ts">
  import { ALIGNMENT, SCROLL_BEHAVIOR, type VLSlotSignature } from '$lib';
  import { VirtualList } from 'svelte-virtuallists';

  const myModel = $state(new Array(10000));

  // on the UI
  let theScrollToIndex: number | undefined = $state();
  let theScrollOffet: number | undefined = $state();

  // on the component
  let scrollToIndex: number | undefined = $state();
  let scrollToOffet: number | undefined = $state();

  let scrollToAlignment: ALIGNMENT = $state(ALIGNMENT.AUTO);
  let scrollToBehaviour: SCROLL_BEHAVIOR = $state(SCROLL_BEHAVIOR.SMOOTH);

  let szCalculator: ((index: number, item: unknown) => number) | undefined = $state();

  // holds randomized sizes
  let randSizes: Array<number>;

  function handleMessage(prefix: string, event: any) {
    console.log(prefix + JSON.stringify(event));
  }

  // The two effects below are an elegant way to ensure only one fo the value is defined
  $effect(() => {
    // scrollToIndex and scrollOffset shall not be used together.
    scrollToIndex = undefined;
    scrollToOffet = theScrollOffet;
  });

  $effect(() => {
    // scrollToIndex and scrollOffset shall not be used together.
    scrollToOffet = undefined;
    scrollToIndex = theScrollToIndex;
  });

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
        bind:value={theScrollToIndex} />
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
        bind:value={theScrollOffet} />
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
  {scrollToIndex}
  scrollToOffset={scrollToOffet}
  {scrollToAlignment}
  {scrollToBehaviour}
  sizingCalculator={szCalculator}
  onAfterScroll={(...props) => handleMessage('onAfterScroll:', props)}
  onVisibleRangeUpdate={(...props) => handleMessage('onVisibleRangeUpdate:', props)}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div
      style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;"
      class:highlighted={index === scrollToIndex}>
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
`,ws=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ALIGNMENT</span>, <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>, type <span class="hljs-title class_">VLSlotSignature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;$lib&#x27;</span>;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = $state(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>));

  <span class="hljs-comment">// on the UI</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">theScrollOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// on the component</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToIndex</span>: number | <span class="hljs-literal">undefined</span> = $state();
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToOffet</span>: number | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToAlignment</span>: <span class="hljs-variable constant_">ALIGNMENT</span> = $state(<span class="hljs-variable constant_">ALIGNMENT</span>.<span class="hljs-property">AUTO</span>);
  <span class="hljs-keyword">let</span> <span class="hljs-attr">scrollToBehaviour</span>: <span class="hljs-variable constant_">SCROLL_BEHAVIOR</span> = $state(<span class="hljs-variable constant_">SCROLL_BEHAVIOR</span>.<span class="hljs-property">SMOOTH</span>);

  <span class="hljs-keyword">let</span> <span class="hljs-attr">szCalculator</span>: (<span class="hljs-function">(<span class="hljs-params">index: number, item: unknown</span>) =&gt;</span> number) | <span class="hljs-literal">undefined</span> = $state();

  <span class="hljs-comment">// holds randomized sizes</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">randSizes</span>: <span class="hljs-title class_">Array</span>&lt;number&gt;;

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMessage</span>(<span class="hljs-params">prefix: string, event: any</span>) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(prefix + <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(event));
  }

  <span class="hljs-comment">// The two effects below are an elegant way to ensure only one fo the value is defined</span>
  $effect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
    scrollToIndex = <span class="hljs-literal">undefined</span>;
    scrollToOffet = theScrollOffet;
  });

  $effect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// scrollToIndex and scrollOffset shall not be used together.</span>
    scrollToOffet = <span class="hljs-literal">undefined</span>;
    scrollToIndex = theScrollToIndex;
  });

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
        <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{theScrollToIndex}</span> /&gt;</span>
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
        <span class="hljs-attr">bind:value</span>=<span class="hljs-string">{theScrollOffet}</span> /&gt;</span>
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
  {<span class="hljs-attr">scrollToIndex</span>}
  <span class="hljs-attr">scrollToOffset</span>=<span class="hljs-string">{scrollToOffet}</span>
  {<span class="hljs-attr">scrollToAlignment</span>}
  {<span class="hljs-attr">scrollToBehaviour</span>}
  <span class="hljs-attr">sizingCalculator</span>=<span class="hljs-string">{szCalculator}</span>
  <span class="hljs-attr">onAfterScroll</span>=<span class="hljs-string">{(...props)</span> =&gt;</span> handleMessage(&#x27;onAfterScroll:&#x27;, props)}
  onVisibleRangeUpdate={(...props) =&gt; handleMessage(&#x27;onVisibleRangeUpdate:&#x27;, props)}&gt;
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204); line-height: {size}px;&quot;</span>
      <span class="hljs-attr">class:highlighted</span>=<span class="hljs-string">{index</span> === <span class="hljs-string">scrollToIndex}</span>&gt;</span>
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
`,ks={code:qs,highlightedHTML:ws,component:Ts};var Os=R("<h2>Events</h2> <p>Try interacting with the list below and check the event log below.</p> <!>",1);function Rs(h){var c=Os(),e=n(ts(c),4);ms(e,{example:ks}),L(h,c)}export{Rs as component,Ls as universal};
