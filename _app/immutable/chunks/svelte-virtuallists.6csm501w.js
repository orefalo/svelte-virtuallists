var Be=Object.defineProperty;var ke=(r,e,t)=>e in r?Be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ee=(r,e,t)=>ke(r,typeof e!="symbol"?e+"":e,t);import{p as De,a as y,s as j,b as k,u as be,o as Fe,c as Ve,g as n,d as R,e as ye,i as K,f as ve,t as Ae,h as S,j as Le,k as Ce,l as ce,m as ze,n as Ie,r as fe,q as We,v as Ee,w as He,x as C,y as E,z as B,A as Qe,B as we,C as N,D as je,E as Oe}from"./external.B56iKtsd.js";class qe{constructor(e,t,o,a){ee(this,"model");ee(this,"modelCount");ee(this,"itemSize");ee(this,"estimatedItemSize");ee(this,"itemSizeAndPositionData");ee(this,"lastMeasuredIndex");ee(this,"totalSize");this.model=e,this.itemSize=o,this.modelCount=t,this.estimatedItemSize=a,this.itemSizeAndPositionData={},this.lastMeasuredIndex=-1,this.checkForMismatchItemSizeAndItemCount(),this.justInTime||this.computeTotalSizeAndPositionData()}get justInTime(){return typeof this.itemSize=="function"}updateConfig(e,t,o){t!==void 0&&(this.modelCount=t),o!==void 0&&(this.estimatedItemSize=o),e!==void 0&&(this.itemSize=e),this.checkForMismatchItemSizeAndItemCount(),this.justInTime&&this.totalSize!==void 0?this.totalSize=void 0:this.computeTotalSizeAndPositionData()}checkForMismatchItemSizeAndItemCount(){if(Array.isArray(this.itemSize)&&this.itemSize.length<this.modelCount)throw Error("When itemSize is an array, itemSize.length can't be smaller than itemCount")}getSize(e){const{itemSize:t}=this;return typeof t=="function"?t(this.model[e],e):Array.isArray(t)?t[e]:t}computeTotalSizeAndPositionData(){let e=0;for(let t=0;t<this.modelCount;t++){const o=this.getSize(t),a=e;e+=o,this.itemSizeAndPositionData[t]={offset:a,size:o}}this.totalSize=e}getLastMeasuredIndex(){return this.lastMeasuredIndex}getSizeAndPositionForIndex(e){if(e<0||e>=this.modelCount)throw Error(`Requested index ${e} is outside of range 0..${this.modelCount}`);return this.justInTime?this.getJustInTimeSizeAndPositionForIndex(e):this.itemSizeAndPositionData[e]}getJustInTimeSizeAndPositionForIndex(e){if(e>this.lastMeasuredIndex){const t=this.getSizeAndPositionOfLastMeasuredItem();let o=t.offset+t.size;for(let a=this.lastMeasuredIndex+1;a<=e;a++){const d=this.getSize(a);if(d===void 0||isNaN(d))throw Error(`Invalid size returned for index ${a} of value ${d}`);this.itemSizeAndPositionData[a]={offset:o,size:d},o+=d}this.lastMeasuredIndex=e}return this.itemSizeAndPositionData[e]}getSizeAndPositionOfLastMeasuredItem(){return this.lastMeasuredIndex>=0?this.itemSizeAndPositionData[this.lastMeasuredIndex]:{offset:0,size:0}}getEstimatedItemSize(){return this.estimatedItemSize||typeof this.itemSize=="number"&&this.itemSize||50}getTotalSize(){if(this.totalSize)return this.totalSize;const e=this.getSizeAndPositionOfLastMeasuredItem();return e.offset+e.size+(this.modelCount-this.lastMeasuredIndex-1)*this.getEstimatedItemSize()}getUpdatedOffsetForIndex(e=re.START,t,o,a){if(t<=0)return 0;const d=this.getSizeAndPositionForIndex(a),u=d.offset,T=u-t+d.size;let m;switch(e){case re.END:m=T;break;case re.CENTER:m=u-(t-d.size)/2;break;case re.START:m=u;break;default:m=Math.max(T,Math.min(u,o))}const W=this.getTotalSize();return Math.max(0,Math.min(W-t,m))}getVisibleRange(e=0,t,o){if(this.getTotalSize()===0)return{start:0,end:0};const d=t+e;let u=this.findNearestItem(t);if(u===void 0)throw Error(`Invalid offset ${t} specified`);const T=this.getSizeAndPositionForIndex(u);t=T.offset+T.size;let m=u;for(;t<d&&m<this.modelCount-1;)m++,t+=this.getSizeAndPositionForIndex(m).size;return o&&(u=Math.max(0,u-o),m=Math.min(m+o,this.modelCount-1)),{start:u,end:m}}resetItem(e){this.lastMeasuredIndex=Math.min(this.lastMeasuredIndex,e-1)}findNearestItem(e){if(isNaN(e))throw Error(`Invalid offset ${e} specified`);e=Math.max(0,e);const t=this.getSizeAndPositionOfLastMeasuredItem(),o=Math.max(0,this.lastMeasuredIndex);return t.offset>=e?this.binarySearch(0,o,e):this.exponentialSearch(o,e)}binarySearch(e,t,o){let a=0,d=0;for(;e<=t;){if(a=e+Math.floor((t-e)/2),d=this.getSizeAndPositionForIndex(a).offset,d===o)return a;d<o?e=a+1:d>o&&(t=a-1)}return e>0?e-1:0}exponentialSearch(e,t){let o=1;for(;e<this.modelCount&&this.getSizeAndPositionForIndex(e).offset<t;)e+=o,o*=2;return this.binarySearch(Math.floor(e/2),Math.min(e,this.modelCount-1),t)}}const Ze=(()=>{let r=!1;try{const e=Object.defineProperty({},"passive",{get(){return r={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch{}return r})();var Ke=Ce('<div><!> <div class="virtual-list-inner svelte-f32i87"></div> <!></div>');function et(r,e){De(e,!0);const t=y(e,"width",3,"100%"),o=y(e,"model",19,()=>[]),a=y(e,"windowOverPadding",3,3),d=y(e,"scrollDirection",19,()=>w.VERTICAL),u=y(e,"scrollToAlignment",19,()=>re.AUTO),T=y(e,"scrollToBehaviour",19,()=>Pe.INSTANT),m=y(e,"class",3,"");y(e,"style",3,"");const W=He(e,["$$slots","$$events","$$legacy","height","width","model","modelCount","itemSize","estimatedItemSize","getKey","scrollToIndex","scrollOffset","windowOverPadding","scrollDirection","scrollToAlignment","scrollToBehaviour","footer","slot","header","onVisibleRangeUpdate","onAfterScroll","class","style"]),M={[w.VERTICAL]:"top",[w.HORIZONTAL]:"left"},J={[w.VERTICAL]:"scrollTop",[w.HORIZONTAL]:"scrollLeft"},h=new qe(o(),e.modelCount,e.itemSize,e.estimatedItemSize);let O=!1,F,Te=j(k([])),D=j(k({offset:e.scrollOffset||e.scrollToIndex!==void 0&&e.modelCount&&te(e.scrollToIndex)||0,scrollChangeReason:de.REQUESTED})),H={},V={scrollToIndex:e.scrollToIndex,scrollToAlignment:u(),scrollOffset:e.scrollOffset,modelCount:e.modelCount,itemSize:e.itemSize,estimatedItemSize:e.estimatedItemSize},Y={},q=j(""),_=j("");be(()=>{e.scrollToIndex,u(),e.scrollOffset,e.modelCount,e.itemSize,e.estimatedItemSize,le()}),be(()=>{const{offset:l,scrollChangeReason:f}=n(D);(H.offset!==l||H.scrollChangeReason!==f)&&X(),H.offset!==l&&f===de.REQUESTED&&G(l),H=n(D)}),be(()=>{e.height,t(),O&&P(0)}),(()=>{if(d()===w.VERTICAL&&typeof e.height!="number")throw new Error("virtual list's height must be a number when scrollDirection is 'vertical'");if(d()===w.HORIZONTAL&&typeof t()!="number")throw new Error("virtual list's width must be a number if scrollDirection is 'horizontal'");X()})(),Fe(()=>{F.addEventListener("scroll",ue,Ze),e.scrollOffset!==void 0?G(e.scrollOffset):e.scrollToIndex!==void 0&&G(te(e.scrollToIndex)),O=!0}),Ve(()=>{O&&F.removeEventListener("scroll",ue)});function le(){if(!O)return;e.scrollToIndex&&e.scrollOffset&&console.log("VirtualList: scrollToIndex and scrollOffset MUST NOT be used together.");const l=V.scrollToIndex!==e.scrollToIndex||V.scrollToAlignment!==u(),f=V.modelCount!==e.modelCount||V.itemSize!==e.itemSize||V.estimatedItemSize!==e.estimatedItemSize;f&&(h.updateConfig(e.itemSize,e.modelCount,e.estimatedItemSize),P()),V.scrollOffset!==e.scrollOffset?R(D,k({offset:e.scrollOffset||0,scrollChangeReason:de.REQUESTED})):typeof e.scrollToIndex=="number"&&(l||f)&&R(D,k({offset:te(e.scrollToIndex,u(),e.modelCount),scrollChangeReason:de.REQUESTED})),V={scrollToIndex:e.scrollToIndex,scrollToAlignment:u(),scrollOffset:e.scrollOffset,modelCount:e.modelCount,itemSize:e.itemSize,estimatedItemSize:e.estimatedItemSize}}function X(){const{offset:l}=n(D);let{start:f,end:v}=h.getVisibleRange(d()===w.VERTICAL?e.height:t(),l,a()),L=[];const ne=h.getTotalSize(),ae=typeof e.height=="number"?"px":"",ge=typeof t()=="number"?"px":"";if(d()===w.VERTICAL?(R(q,`height:${e.height}${ae};width:${t()}${ge};`),R(_,`flex-direction:column;height:${ne}px;`)):(R(q,`height:${e.height}${ae};width:${t()}${ge};`),R(_,`min-height:100%;width:${ne}px;`)),f!==void 0&&v!==void 0){for(let Q=f;Q<=v;(Q+=1)-1)L.push({item:o()[Q],index:Q,style:he(Q)});if(e.onVisibleRangeUpdate){const Q=h.getVisibleRange(d()===w.VERTICAL?e.height:t(),l,0);e.onVisibleRangeUpdate({type:"range.update",start:Q.start,end:Q.end})}}R(Te,k(L))}function G(l){"scroll"in F?F.scroll({[M[d()]]:l,behavior:T()}):F[J[d()]]=l}function P(l=0){Y={},h.resetItem(l),X()}function te(l,f=u(),v=e.modelCount){return l<0?l=0:l>=v&&(l=v-1),h.getUpdatedOffsetForIndex(f,d()===w.VERTICAL?e.height:t(),n(D).offset||0,l)}const ue=l=>{const f=F[J[d()]];f<0||n(D).offset===f||l.target!==F||(R(D,k({offset:f,scrollChangeReason:de.OBSERVED})),e.onAfterScroll&&e.onAfterScroll({type:"scroll.update",offset:f,event:l}))};function he(l){if(Y[l])return Y[l];const{size:f,offset:v}=h.getSizeAndPositionForIndex(l);let L;return d()===w.VERTICAL?L=`left:0;width:100%;height:${f}px;position:absolute;top:${v}px;`:L=`top:0;width:${f}px;position:absolute;height:100%;left:${v}px;`,Y[l]=L}var p=Ke();ye(p,l=>F=l,()=>F);let xe;var me=ze(p);K(me,()=>e.header,l=>{var f=C(),v=E(f);B(v,()=>e.header),S(l,f)});var ie=ce(me,2);ve(ie,21,()=>n(Te),Ie,(l,f)=>{var v=C(),L=E(v),ne=Qe(()=>({item:n(f).item,style:n(f).style,index:e.getKey?e.getKey(n(f).index):n(f).index}));B(L,()=>e.slot,()=>n(ne)),S(l,v)}),fe(ie);var _e=ce(ie,2);return K(_e,()=>e.footer,l=>{var f=C(),v=E(f);B(v,()=>e.footer),S(l,f)}),fe(p),Ae(()=>{xe=We(p,xe,{class:`virtual-list-wrapper $${m()??""}`,style:n(q),...W},"svelte-f32i87"),Ee(ie,"style",n(_))}),S(r,p),Le({recomputeSizes:P})}var Pe=(r=>(r.AUTO="auto",r.SMOOTH="smooth",r.INSTANT="instant",r))(Pe||{}),re=(r=>(r.AUTO="auto",r.START="start",r.CENTER="center",r.END="end",r))(re||{}),w=(r=>(r.HORIZONTAL="horizontal",r.VERTICAL="vertical",r))(w||{}),de=(r=>(r[r.OBSERVED=0]="OBSERVED",r[r.REQUESTED=1]="REQUESTED",r))(de||{});function Me(r,e,t={}){t={start:0,end:r.length-1,maxTimes:1e3,...t};let o=t.start,a=t.end;const d=t.returnNearestIfNoHit,u=t.maxTimes;let T,m;o||(o=0,a=r.length-1);let W=0,M=0;for(;o>=0&&o<=a;){if(W>=u)throw Error(`binarySearch: loop times is over ${u}, you can increase the limit.`);T=Math.floor((a-o)/2+o),m=r[T];const J=W+1;if(M=e(m,T,J),M>0)a=T-1;else if(M<0)o=T+1;else return{index:T,value:m,count:J,hit:!0};W++}return d?{index:T,value:m,count:W+1,hit:!1,greater:M>0}:null}const Je=(()=>{let r=!1;try{const e=Object.defineProperty({},"passive",{get(){return r={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch{}return r})();var Ye=Ce('<table class="vtlist-inner"><!><tbody><!></tbody></table> <!>',1),Xe=Ce('<div class="vtlist-inner"><!> <!> <!></div>'),Ge=Ce("<div><!></div>");function tt(r,e){De(e,!0);const t=y(e,"items",19,()=>[]),o=y(e,"isDisabled",3,!1),a=y(e,"isHorizontal",3,!1),d=y(e,"isTable",3,!1),u=y(e,"firstRender",3,6);y(e,"scrollToAlignment",19,()=>re.AUTO);const T=y(e,"scrollToBehaviour",19,()=>Pe.INSTANT),m=y(e,"class",3,""),W=y(e,"style",3,"");var M;(function(s){s[s.OBSERVED=0]="OBSERVED",s[s.REQUESTED=1]="REQUESTED"})(M||(M={}));let J=!1,h,O,F=j(0),Te=j(0),D=100,H=j(0),V=j(u()-1),Y=j(0),q=j(k({offset:e.scrollOffset||e.scrollToIndex!==void 0&&1||0,scrollChangeReason:M.REQUESTED})),_;const le=N(()=>{var i;const s=(((i=t())==null?void 0:i.length)||1)-1;return n(V)<s?n(V):s}),X=N(()=>new Array(t().length)),G=N(()=>t().map((i,c)=>n(X)[c]!=null?n(X)[c]:n(Y))),P=N(()=>{const s=[];return n(G).reduce((i,c)=>(s.push(i),i+c),0),s}),te=N(()=>n(P)[n(H)]?n(P)[n(H)]:0),ue=N(()=>n(P).length>0?n(P)[n(P).length-1]+n(G)[n(G).length-1]:0),he=N(()=>n(P)[n(le)]?n(ue)-n(P)[n(le)]-n(G)[n(le)]:0);Fe(()=>{h.addEventListener("scroll",ie,Je),J=!0,f()}),Ve(()=>{J&&h.removeEventListener("scroll",ie)});const p=N(()=>{if(!t()||o())return;const s=[];for(let i=n(H);i<=n(le);(i+=1)-1){const c=t()[i];if(!c)break;s.push({item:c,index:i})}return s}),xe=N(()=>Oe(!o()&&"overflow:auto;",W())),me=N(()=>Oe(!d()&&"display:flex;",!d()&&(!a()&&"flex-direction:column;"||"flex-direction:row;"),!o()&&(!a()&&`margin-top:${n(te)}px;margin-bottom:${n(he)}px`||`margin-left:${n(te)}px;margin-right:${n(he)}px;width:${n(ue)-n(he)-n(te)}px`)));be(()=>{const{offset:s,scrollChangeReason:i}=n(q);((_==null?void 0:_.offset)!==s||(_==null?void 0:_.scrollChangeReason)!==i)&&f(),(_==null?void 0:_.offset)!==s&&i===M.REQUESTED&&Q(s),_=n(q)});function ie(s){const i=ae(h);i<0||n(q).offset===i||s.target!==h||D-Math.abs(i-n(q).offset)>=1||(R(q,k({offset:i,scrollChangeReason:M.OBSERVED})),e.onAfterScroll&&e.onAfterScroll({type:"scroll.update",offset:i,event:s}))}function _e(){const s=ae(h)-ge(h)-D;return Me(n(P),c=>c-s,{returnNearestIfNoHit:!0}).index}function l(){const s=ae(h)-ge(h)+L(h)+D;return Me(n(P),c=>c-s,{returnNearestIfNoHit:!0}).index}function f(){console.log("updatePositions"),n(Y)||R(Y,k(v())),R(H,k(_e())),R(V,k(l()));let s=0;const i={},c=d()?O.querySelector("tbody").children:O.children;for(let x=0;x<c.length;(x+=1)-1){const b=c[x],A=getComputedStyle(b),z=A.position;if(z&&["absolute","fixed"].includes(z))continue;const g=A.display!=="none"?ne(b):0,I=n(H)+s;i[I]=(i[I]||0)+g,s+=1}for(const x of Object.keys(i)){const b=parseInt(x);n(X)[b]!==i[b]&&(n(X)[b]=i[b])}}function v(){const i=[],c=d()?O.querySelector("tbody").children:O.children;for(let x=0;x<c.length;(x+=1)-1){const b=c[x],A=getComputedStyle(b);if(["absolute","fixed"].includes(A.position))continue;const z=ne(b);if(i.push(z),i.length>=10)break}return i.length===0?0:i.reduce((x,b)=>x+b,0)/i.length}function L(s){const i=getComputedStyle(s);let c=parseFloat(a()?i.width:i.height);return i.boxSizing==="border-box"&&(a()?c-=parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth):c-=parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)),c}function ne(s){const i=getComputedStyle(s);let c=L(s);return a()?c+=parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth)+parseFloat(i.marginLeft)+parseFloat(i.marginRight):c+=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth)+parseFloat(i.marginTop)+parseFloat(i.marginBottom),Number.isNaN(c)?0:c}function ae(s){return a()?s.scrollLeft:s.scrollTop}function ge(s){const i=getComputedStyle(s);return a()?parseFloat(i.paddingLeft):parseFloat(i.paddingTop)}function Q(s){if("scroll"in h){const i={behavior:T()};i[a()?"left":"top"]=s,h.scroll(i)}else h[a()?scrollLeft:scrollTop]=s}var $=Ge();ye($,s=>h=s,()=>h);const Ue=N(()=>Oe("vtlist",m()));var Ne=ze($);K(Ne,d,s=>{var i=Ye(),c=E(i);ye(c,g=>O=g,()=>O);var x=ze(c);K(x,()=>e.header,g=>{var I=C(),U=E(I);B(U,()=>e.header),S(g,I)});var b=ce(x),A=ze(b);K(A,o,g=>{var I=C(),U=E(I);ve(U,17,t,Ie,(se,Z,oe)=>{var Se=C(),Re=E(Se);B(Re,()=>e.vl_slot,()=>({item:n(Z).item,index:oe})),S(se,Se)}),S(g,I)},g=>{var I=C(),U=E(I);ve(U,17,()=>n(p),Ie,(se,Z,oe)=>{var Se=C(),Re=E(Se);B(Re,()=>e.vl_slot,()=>({item:n(Z).item,index:oe})),S(se,Se)}),S(g,I)}),fe(b),fe(c);var z=ce(c,2);K(z,()=>e.footer,g=>{var I=C(),U=E(I);B(U,()=>e.footer),S(g,I)}),Ae(()=>Ee(c,"style",n(me))),S(s,i)},s=>{var i=Xe();ye(i,A=>O=A,()=>O);var c=ze(i);K(c,()=>e.header,A=>{var z=C(),g=E(z);B(g,()=>e.header),S(A,z)});var x=ce(c,2);K(x,o,A=>{var z=C(),g=E(z);ve(g,17,t,Ie,(I,U,se)=>{var Z=C(),oe=E(Z);B(oe,()=>e.vl_slot,()=>({item:n(U).item,index:se})),S(I,Z)}),S(A,z)},A=>{var z=C(),g=E(z);ve(g,17,()=>n(p),Ie,(I,U,se)=>{var Z=C(),oe=E(Z);B(oe,()=>e.vl_slot,()=>({item:n(U).item,index:se})),S(I,Z)}),S(A,z)});var b=ce(x,2);K(b,()=>e.footer,A=>{var z=C(),g=E(z);B(g,()=>e.footer),S(A,z)}),fe(i),Ae(()=>Ee(i,"style",n(me))),S(s,i)}),fe($),Ae(()=>{je($,n(Ue)),Ee($,"style",n(xe))}),we($,"clientHeight",s=>R(F,s)),we($,"clientWidth",s=>R(Te,s)),S(r,$),Le()}export{re as A,w as D,Pe as S,tt as V,et as a};
