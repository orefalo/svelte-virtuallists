var Be=Object.defineProperty;var ke=(r,e,t)=>e in r?Be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var $=(r,e,t)=>ke(r,typeof e!="symbol"?e+"":e,t);import{p as Me,a as x,s as Q,b as k,u as be,o as Fe,c as Ve,g as n,d as P,e as ye,i as K,f as ze,t as Ae,h as v,j as Ue,k as Ce,l as ue,m as Ie,n as Te,r as he,q as We,v as Ee,w as He,x as C,y,z as B,A as Qe,B as we,C as N,D as je,E as Oe}from"./external.UKebNneP.js";class qe{constructor(e,t,o,c){$(this,"model");$(this,"modelCount");$(this,"itemSize");$(this,"estimatedItemSize");$(this,"itemSizeAndPositionData");$(this,"lastMeasuredIndex");$(this,"totalSize");this.model=e,this.itemSize=o,this.modelCount=t,this.estimatedItemSize=c,this.itemSizeAndPositionData={},this.lastMeasuredIndex=-1,this.checkForMismatchItemSizeAndItemCount(),this.justInTime||this.computeTotalSizeAndPositionData()}get justInTime(){return typeof this.itemSize=="function"}updateConfig(e,t,o){t!==void 0&&(this.modelCount=t),o!==void 0&&(this.estimatedItemSize=o),e!==void 0&&(this.itemSize=e),this.checkForMismatchItemSizeAndItemCount(),this.justInTime&&this.totalSize!==void 0?this.totalSize=void 0:this.computeTotalSizeAndPositionData()}checkForMismatchItemSizeAndItemCount(){if(Array.isArray(this.itemSize)&&this.itemSize.length<this.modelCount)throw Error("When itemSize is an array, itemSize.length can't be smaller than itemCount")}getSize(e){const{itemSize:t}=this;return typeof t=="function"?t(this.model[e],e):Array.isArray(t)?t[e]:t}computeTotalSizeAndPositionData(){let e=0;for(let t=0;t<this.modelCount;t++){const o=this.getSize(t);this.itemSizeAndPositionData[t]={offset:e,size:o},e+=o}this.totalSize=e}getSizeAndPositionForIndex(e){if(e<0||e>=this.modelCount)throw Error(`Requested index ${e} is outside of range 0..${this.modelCount}`);return this.justInTime?this.getJustInTimeSizeAndPositionForIndex(e):this.itemSizeAndPositionData[e]}getJustInTimeSizeAndPositionForIndex(e){if(e>this.lastMeasuredIndex){const t=this.getSizeAndPositionOfLastMeasuredItem();let o=t.offset+t.size;for(let c=this.lastMeasuredIndex+1;c<=e;c++){const d=this.getSize(c);if(d===void 0||isNaN(d))throw Error(`Invalid size returned for index ${c} of value ${d}`);this.itemSizeAndPositionData[c]={offset:o,size:d},o+=d}this.lastMeasuredIndex=e}return this.itemSizeAndPositionData[e]}getSizeAndPositionOfLastMeasuredItem(){return this.lastMeasuredIndex>=0?this.itemSizeAndPositionData[this.lastMeasuredIndex]:{offset:0,size:0}}getEstimatedItemSize(){return this.estimatedItemSize||typeof this.itemSize=="number"&&this.itemSize||50}getTotalSize(){if(this.totalSize)return this.totalSize;const e=this.getSizeAndPositionOfLastMeasuredItem();return e.offset+e.size+(this.modelCount-this.lastMeasuredIndex-1)*this.getEstimatedItemSize()}getUpdatedOffsetForIndex(e=re.START,t,o,c){if(t<=0)return 0;const d=this.getSizeAndPositionForIndex(c),u=d.offset,I=u-t+d.size;let h;switch(e){case re.END:h=I;break;case re.CENTER:h=u-(t-d.size)/2;break;case re.START:h=u;break;default:h=Math.max(I,Math.min(u,o))}const W=this.getTotalSize();return Math.max(0,Math.min(W-t,h))}getVisibleRange(e=0,t,o){if(this.getTotalSize()===0)return{start:0,end:0};const d=t+e;let u=this.findNearestItem(t);if(u===void 0)throw Error(`Invalid offset ${t} specified`);const I=this.getSizeAndPositionForIndex(u);t=I.offset+I.size;let h=u;for(;t<d&&h<this.modelCount-1;)h++,t+=this.getSizeAndPositionForIndex(h).size;return o&&(u=Math.max(0,u-o),h=Math.min(h+o,this.modelCount-1)),{start:u,end:h}}resetItem(e){this.lastMeasuredIndex=Math.min(this.lastMeasuredIndex,e-1)}findNearestItem(e){if(isNaN(e))throw Error(`Invalid offset ${e} specified`);e=Math.max(0,e);const t=this.getSizeAndPositionOfLastMeasuredItem(),o=Math.max(0,this.lastMeasuredIndex);return t.offset>=e?this.binarySearch(0,o,e):this.exponentialSearch(o,e)}binarySearch(e,t,o){let c=0,d=0;for(;e<=t;){if(c=e+Math.floor((t-e)/2),d=this.getSizeAndPositionForIndex(c).offset,d===o)return c;d<o?e=c+1:d>o&&(t=c-1)}return e>0?e-1:0}exponentialSearch(e,t){let o=1;for(;e<this.modelCount&&this.getSizeAndPositionForIndex(e).offset<t;)e+=o,o*=2;return this.binarySearch(Math.floor(e/2),Math.min(e,this.modelCount-1),t)}}const Ze=(()=>{let r=!1;try{const e=Object.defineProperty({},"passive",{get(){return r={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch{}return r})();var Ke=Ce('<div><!> <div class="virtual-list-inner svelte-f32i87"></div> <!></div>');function et(r,e){Me(e,!0);const t=x(e,"width",3,"100%"),o=x(e,"model",19,()=>[]),c=x(e,"windowOverPadding",3,3),d=x(e,"scrollDirection",19,()=>M.VERTICAL),u=x(e,"scrollToAlignment",19,()=>re.AUTO),I=x(e,"scrollToBehaviour",19,()=>Pe.INSTANT),h=x(e,"class",3,"");x(e,"style",3,"");const W=He(e,["$$slots","$$events","$$legacy","height","width","model","modelCount","itemSize","estimatedItemSize","getKey","scrollToIndex","scrollOffset","windowOverPadding","scrollDirection","scrollToAlignment","scrollToBehaviour","footer","slot","header","onVisibleRangeUpdate","onAfterScroll","class","style"]),F={[M.VERTICAL]:"top",[M.HORIZONTAL]:"left"},J={[M.VERTICAL]:"scrollTop",[M.HORIZONTAL]:"scrollLeft"},j=new qe(o(),e.modelCount,e.itemSize,e.estimatedItemSize);let le=!1,V,q=Q(k([])),w=Q(k({offset:e.scrollOffset||e.scrollToIndex!==void 0&&e.modelCount&&te(e.scrollToIndex)||0,scrollChangeReason:fe.REQUESTED})),Y={},U={scrollToIndex:e.scrollToIndex,scrollToAlignment:u(),scrollOffset:e.scrollOffset,modelCount:e.modelCount,itemSize:e.itemSize,estimatedItemSize:e.estimatedItemSize},A={},X=Q(""),G=Q("");be(()=>{e.scrollToIndex,u(),e.scrollOffset,e.modelCount,e.itemSize,e.estimatedItemSize,ae()}),be(()=>{const{offset:a,scrollChangeReason:f}=n(w);(Y.offset!==a||Y.scrollChangeReason!==f)&&D(),Y.offset!==a&&f===fe.REQUESTED&&ee(a),Y=n(w)}),be(()=>{e.height,t(),le&&de(0)}),(()=>{if(d()===M.VERTICAL&&typeof e.height!="number")throw new Error("virtual list's height must be a number when scrollDirection is 'vertical'");if(d()===M.HORIZONTAL&&typeof t()!="number")throw new Error("virtual list's width must be a number if scrollDirection is 'horizontal'");D()})(),Fe(()=>{V.addEventListener("scroll",me,Ze),e.scrollOffset!==void 0?ee(e.scrollOffset):e.scrollToIndex!==void 0&&ee(te(e.scrollToIndex)),le=!0}),Ve(()=>{le&&V.removeEventListener("scroll",me)});function ae(){if(!le)return;e.scrollToIndex&&e.scrollOffset&&console.log("VirtualList: scrollToIndex and scrollOffset MUST NOT be used together.");const a=U.scrollToIndex!==e.scrollToIndex||U.scrollToAlignment!==u(),f=U.modelCount!==e.modelCount||U.itemSize!==e.itemSize||U.estimatedItemSize!==e.estimatedItemSize;f&&(j.updateConfig(e.itemSize,e.modelCount,e.estimatedItemSize),de()),U.scrollOffset!==e.scrollOffset?P(w,k({offset:e.scrollOffset||0,scrollChangeReason:fe.REQUESTED})):typeof e.scrollToIndex=="number"&&(a||f)&&P(w,k({offset:te(e.scrollToIndex,u(),e.modelCount),scrollChangeReason:fe.REQUESTED})),U={scrollToIndex:e.scrollToIndex,scrollToAlignment:u(),scrollOffset:e.scrollOffset,modelCount:e.modelCount,itemSize:e.itemSize,estimatedItemSize:e.estimatedItemSize}}function D(){const{offset:a}=n(w);let{start:f,end:S}=j.getVisibleRange(d()===M.VERTICAL?e.height:t(),a,c()),L=[];const ne=j.getTotalSize(),ce=typeof e.height=="number"?"px":"",ve=typeof t()=="number"?"px":"";if(d()===M.VERTICAL?(P(X,`height:${e.height}${ce};width:${t()}${ve};`),P(G,`flex-direction:column;height:${ne}px;`)):(P(X,`height:${e.height}${ce};width:${t()}${ve};`),P(G,`min-height:100%;width:${ne}px;`)),f!==void 0&&S!==void 0){for(let H=f;H<=S;(H+=1)-1)L.push({item:o()[H],index:H,style:b(H)});if(e.onVisibleRangeUpdate){const H=j.getVisibleRange(d()===M.VERTICAL?e.height:t(),a,0);e.onVisibleRangeUpdate({type:"range.update",start:H.start,end:H.end})}}P(q,k(L))}function ee(a){"scroll"in V?V.scroll({[F[d()]]:a,behavior:I()}):V[J[d()]]=a}function de(a=0){A={},j.resetItem(a),D()}function te(a,f=u(),S=e.modelCount){return a<0?a=0:a>=S&&(a=S-1),j.getUpdatedOffsetForIndex(f,d()===M.VERTICAL?e.height:t(),n(w).offset||0,a)}const me=a=>{const f=V[J[d()]];f<0||n(w).offset===f||a.target!==V||(P(w,k({offset:f,scrollChangeReason:fe.OBSERVED})),e.onAfterScroll&&e.onAfterScroll({type:"scroll.update",offset:f,event:a}))};function b(a){if(A[a])return A[a];const{size:f,offset:S}=j.getSizeAndPositionForIndex(a);let L;return d()===M.VERTICAL?L=`left:0;width:100%;height:${f}px;position:absolute;top:${S}px;`:L=`top:0;width:${f}px;position:absolute;height:100%;left:${S}px;`,A[a]=L}var _=Ke();ye(_,a=>V=a,()=>V);let xe;var ge=Ie(_);K(ge,()=>e.header,a=>{var f=C(),S=y(f);B(S,()=>e.header),v(a,f)});var ie=ue(ge,2);ze(ie,21,()=>n(q),Te,(a,f)=>{var S=C(),L=y(S),ne=Qe(()=>({item:n(f).item,style:n(f).style,index:e.getKey?e.getKey(n(f).index):n(f).index}));B(L,()=>e.slot,()=>n(ne)),v(a,S)}),he(ie);var _e=ue(ie,2);return K(_e,()=>e.footer,a=>{var f=C(),S=y(f);B(S,()=>e.footer),v(a,f)}),he(_),Ae(()=>{xe=We(_,xe,{class:`virtual-list-wrapper $${h()??""}`,style:n(X),...W},"svelte-f32i87"),Ee(ie,"style",n(G))}),v(r,_),Ue({recomputeSizes:de})}var Pe=(r=>(r.AUTO="auto",r.SMOOTH="smooth",r.INSTANT="instant",r))(Pe||{}),re=(r=>(r.AUTO="auto",r.START="start",r.CENTER="center",r.END="end",r))(re||{}),M=(r=>(r.HORIZONTAL="horizontal",r.VERTICAL="vertical",r))(M||{}),fe=(r=>(r[r.OBSERVED=0]="OBSERVED",r[r.REQUESTED=1]="REQUESTED",r))(fe||{});function De(r,e,t={}){t={start:0,end:r.length-1,maxTimes:1e3,...t};let o=t.start,c=t.end;const d=t.returnNearestIfNoHit,u=t.maxTimes;let I,h;o||(o=0,c=r.length-1);let W=0,F=0;for(;o>=0&&o<=c;){if(W>=u)throw Error(`binarySearch: loop times is over ${u}, you can increase the limit.`);I=Math.floor((c-o)/2+o),h=r[I];const J=W+1;if(F=e(h,I,J),F>0)c=I-1;else if(F<0)o=I+1;else return{index:I,value:h,count:J,hit:!0};W++}return d?{index:I,value:h,count:W+1,hit:!1,greater:F>0}:null}const Je=(()=>{let r=!1;try{const e=Object.defineProperty({},"passive",{get(){return r={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch{}return r})();var Ye=Ce('<table class="vtlist-inner"><!><tbody><!></tbody></table> <!>',1),Xe=Ce('<div class="vtlist-inner"><!> <!> <!></div>'),Ge=Ce("<div><!></div>");function tt(r,e){Me(e,!0);const t=x(e,"items",19,()=>[]),o=x(e,"isDisabled",3,!1),c=x(e,"isHorizontal",3,!1),d=x(e,"isTable",3,!1),u=x(e,"preRenderCount",3,6);x(e,"scrollToAlignment",19,()=>re.AUTO);const I=x(e,"scrollToBehaviour",19,()=>Pe.INSTANT),h=x(e,"class",3,""),W=x(e,"style",3,"");var F;(function(s){s[s.OBSERVED=0]="OBSERVED",s[s.REQUESTED=1]="REQUESTED"})(F||(F={}));let J=!1,j=Q(0),le=Q(0),V=100,q=Q(0),w=Q(u()-1),Y=Q(0),U=Q(k({offset:e.scrollOffset||e.scrollToIndex!==void 0&&1||0,scrollChangeReason:F.REQUESTED})),A;const X=N(()=>{var i;const s=(((i=t())==null?void 0:i.length)||1)-1;return n(w)<s?n(w):s}),G=N(()=>new Array(t().length)),ae=N(()=>t().map((i,l)=>n(G)[l]!=null?n(G)[l]:n(Y))),D=N(()=>{const s=[];return n(ae).reduce((i,l)=>(s.push(i),i+l),0),s}),ee=N(()=>n(D)[n(q)]?n(D)[n(q)]:0),de=N(()=>n(D).length>0?n(D)[n(D).length-1]+n(ae)[n(ae).length-1]:0),te=N(()=>n(D)[n(X)]?n(de)-n(D)[n(X)]-n(ae)[n(X)]:0);Fe(()=>{b.addEventListener("scroll",ie,Je),J=!0,f()}),Ve(()=>{J&&b.removeEventListener("scroll",ie)});const me=N(()=>{if(!t()||o())return;const s=[];for(let i=n(q);i<=n(X);(i+=1)-1){const l=t()[i];if(!l)break;s.push({item:l,index:i})}return s});let b,_;const xe=N(()=>Oe(!o()&&"overflow:auto;",W())),ge=N(()=>Oe(!d()&&"display:flex;",!d()&&(!c()&&"flex-direction:column;"||"flex-direction:row;"),!o()&&(!c()&&`margin-top:${n(ee)}px;margin-bottom:${n(te)}px`||`margin-left:${n(ee)}px;margin-right:${n(te)}px;width:${n(de)-n(te)-n(ee)}px`)));be(()=>{const{offset:s,scrollChangeReason:i}=n(U);((A==null?void 0:A.offset)!==s||(A==null?void 0:A.scrollChangeReason)!==i)&&f(),(A==null?void 0:A.offset)!==s&&i===F.REQUESTED&&H(s),A=n(U)});function ie(s){var l;const i=ce(b);s.target!==b||i<0||n(U).offset===i||(P(U,k({offset:i,scrollChangeReason:F.OBSERVED})),(l=e.onAfterScroll)==null||l.call(e,{type:"scroll.update",offset:i,event:s}))}function _e(){const s=ce(b)-ve(b)-V;return De(n(D),l=>l-s,{returnNearestIfNoHit:!0}).index}function a(){const s=ce(b)-ve(b)+L(b)+V;return De(n(D),l=>l-s,{returnNearestIfNoHit:!0}).index}function f(){var R;console.log("updatePositions"),n(Y)||P(Y,k(S())),P(q,k(_e())),P(w,k(a()));let s=0;const i={},l=d()?_.querySelector("tbody").children:_.children;for(let E=0;E<l.length;(E+=1)-1){const m=l[E],z=getComputedStyle(m),g=z.position;if(g&&["absolute","fixed"].includes(g))continue;const T=z.display!=="none"?ne(m):0,O=n(q)+s;i[O]=(i[O]||0)+T,s+=1}for(const E of Object.keys(i)){const m=parseInt(E);n(G)[m]!==i[m]&&(n(G)[m]=i[m])}(R=e.onVisibleRangeUpdate)==null||R.call(e,{type:"range.update",start:n(q),end:n(w)})}function S(){const i=[],l=d()?_.querySelector("tbody").children:_.children;for(let R=0;R<l.length;(R+=1)-1){const E=l[R],m=getComputedStyle(E);if(["absolute","fixed"].includes(m.position))continue;const z=ne(E);if(i.push(z),i.length>=10)break}return i.length===0?0:i.reduce((R,E)=>R+E,0)/i.length}function L(s){const i=getComputedStyle(s);let l=parseFloat(c()?i.width:i.height);return i.boxSizing==="border-box"&&(c()?l-=parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth):l-=parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)),l}function ne(s){const i=getComputedStyle(s);let l=L(s);return c()?l+=parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth)+parseFloat(i.marginLeft)+parseFloat(i.marginRight):l+=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth)+parseFloat(i.marginTop)+parseFloat(i.marginBottom),Number.isNaN(l)?0:l}function ce(s){return c()?s.scrollLeft:s.scrollTop}function ve(s){const i=getComputedStyle(s);return c()?parseFloat(i.paddingLeft):parseFloat(i.paddingTop)}function H(s){if("scroll"in b){const i={behavior:I()};i[c()?"left":"top"]=s,b.scroll(i)}else b[c()?"scrollLeft":"scrollTop"]=s}var p=Ge();ye(p,s=>b=s,()=>b);const Le=N(()=>Oe("vtlist",h()));var Ne=Ie(p);K(Ne,d,s=>{var i=Ye(),l=y(i);ye(l,g=>_=g,()=>_);var R=Ie(l);K(R,()=>e.header,g=>{var T=C(),O=y(T);B(O,()=>e.header),v(g,T)});var E=ue(R),m=Ie(E);K(m,o,g=>{var T=C(),O=y(T);ze(O,17,t,Te,(se,Z,oe)=>{var Se=C(),Re=y(Se);B(Re,()=>e.vl_slot,()=>({item:n(Z).item,index:oe})),v(se,Se)}),v(g,T)},g=>{var T=C(),O=y(T);ze(O,17,()=>n(me),Te,(se,Z,oe)=>{var Se=C(),Re=y(Se);B(Re,()=>e.vl_slot,()=>({item:n(Z).item,index:oe})),v(se,Se)}),v(g,T)}),he(E),he(l);var z=ue(l,2);K(z,()=>e.footer,g=>{var T=C(),O=y(T);B(O,()=>e.footer),v(g,T)}),Ae(()=>Ee(l,"style",n(ge))),v(s,i)},s=>{var i=Xe();ye(i,m=>_=m,()=>_);var l=Ie(i);K(l,()=>e.header,m=>{var z=C(),g=y(z);B(g,()=>e.header),v(m,z)});var R=ue(l,2);K(R,o,m=>{var z=C(),g=y(z);ze(g,17,t,Te,(T,O,se)=>{var Z=C(),oe=y(Z);B(oe,()=>e.vl_slot,()=>({item:n(O).item,index:se})),v(T,Z)}),v(m,z)},m=>{var z=C(),g=y(z);ze(g,17,()=>n(me),Te,(T,O,se)=>{var Z=C(),oe=y(Z);B(oe,()=>e.vl_slot,()=>({item:n(O).item,index:se})),v(T,Z)}),v(m,z)});var E=ue(R,2);K(E,()=>e.footer,m=>{var z=C(),g=y(z);B(g,()=>e.footer),v(m,z)}),he(i),Ae(()=>Ee(i,"style",n(ge))),v(s,i)}),he(p),Ae(()=>{je(p,n(Le)),Ee(p,"style",n(xe))}),we(p,"clientHeight",s=>P(j,s)),we(p,"clientWidth",s=>P(le,s)),v(r,p),Ue()}export{re as A,M as D,Pe as S,tt as V,et as a};
