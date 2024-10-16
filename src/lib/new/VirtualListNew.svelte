<script module lang="ts">
  // this code is used to support passive events when available
  // addEventListener('eventname', callback, thirdEventArg);
  type ResultType = boolean | { passive: boolean };
  /**
   * the third argument for event bundler
   * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
   */
  const thirdEventArg = (() => {
    let result: ResultType = false;

    try {
      const arg = Object.defineProperty({}, 'passive', {
        get() {
          result = { passive: true };
          return true;
        }
      });

      //@ts-expect-error no overload match this call
      window.addEventListener('testpassive', arg, arg);

      //@ts-expect-error property 'remove' does not exist
      window.remove('testpassive', arg, arg);
    } catch (_e) {
      /* */
    }

    return result;
  })();
</script>

<script lang="ts">
  import { onMount, onDestroy, type Snippet } from 'svelte';
  import {
    ALIGNMENT,
    SCROLL_BEHAVIOR,
    type AfterScrollEvent,
    type SizingCalculatorFn,
    type VLSlotSignature,
    type VLRangeEvent
  } from '..';
  import { binarySearch } from './jshelper';
  import clsx from 'clsx';

  // ====== INTERNAL TYPES ============

  enum SCROLL_CHANGE_REASON {
    OBSERVED = 0,
    REQUESTED = 1
  }

  interface VState {
    offset: number;
    scrollChangeReason: number;
  }

  // ====== PROPERTIES ================

  const {
    // TODO: implement a partial loader
    items = [],

    // When disabled, all items are rendered like a normal html list
    isDisabled = false,
    isHorizontal = false,
    isTable = false,

    // reactive variable related to positioning
    scrollToIndex,
    scrollOffset,
    // windowOverPadding = 3,

    // Render count at start, used for SSR
    preRenderCount = 6,

    // scroll attributes
    scrollToAlignment = ALIGNMENT.AUTO,
    scrollToBehaviour = SCROLL_BEHAVIOR.INSTANT,

    // snippets
    header,
    vl_slot,
    footer,

    // events
    onVisibleRangeUpdate,
    onAfterScroll,

    // css
    class: className = '',
    style = '',

    // calculate the size of a given index
    sizingCalculator
  }: {
    items: any[];

    isDisabled?: boolean;
    isHorizontal?: boolean;
    isTable?: boolean;

    // positioning
    scrollToIndex?: number | undefined;
    scrollOffset?: number | undefined;

    // scroll attributes
    scrollToAlignment?: ALIGNMENT;
    scrollToBehaviour?: SCROLL_BEHAVIOR;

    preRenderCount?: number;

    // snippets
    header?: Snippet;
    // size is passed when a sizingCalculator is defined
    vl_slot: Snippet<[VLSlotSignature]>;
    footer?: Snippet;

    // events
    onVisibleRangeUpdate?: (range: VLRangeEvent) => void;
    onAfterScroll?: (event: AfterScrollEvent) => void;

    // css
    class?: string;
    style?: string;

    sizingCalculator?: SizingCalculatorFn;
  } = $props();

  // ======== VARIABLES ========

  let mounted: boolean = false;

  // dom references
  let listContainer: HTMLDivElement;
  // svelte-ignore non_reactive_update  - not sure where its updated?!
  let listInner: HTMLDivElement;

  let clientHeight: number = $state(0);
  let clientWidth: number = $state(0);

  // viewport overfetch trigger in px
  let overfetchBufferInPx: number = 100;

  let itemKey: 'index' | ((item: any, index: number) => any);

  // virtual list first visible index
  let startIdx = $state(0);

  // virtual list last visible index
  let endIdx = $state(preRenderCount - 1);

  // used when rendering didn't happen yet, the average size
  let avgSizeInPx = $state(0);

  let curState: VState = $state({
    offset:
      scrollOffset ||
      (scrollToIndex !== undefined /*&& modelCount && getOffsetForIndex(scrollToIndex)*/ && 1) ||
      0,
    scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
  });

  let prevState: VState | undefined;

  const end2 = $derived.by(() => {
    const max = (items?.length || 1) - 1;
    return endIdx < max ? endIdx : max;
  });

  const runtimeSizes: (number | undefined)[] = $derived(new Array(items.length));

  // this is index -> height or width
  const sizes: number[] = $derived.by(() => {
    return items.map((item, index) => {
      let s = sizingCalculator?.(index, item);
      if (s !== undefined) return s;
      s = runtimeSizes[index];
      if (s !== undefined) return s;
      return avgSizeInPx;
    });
  });

  // this is index -> offset
  const positions: number[] = $derived.by(() => {
    const p: number[] = [];
    sizes.reduce((a, b) => {
      p.push(a);
      return a + b;
    }, 0);
    return p;
  });

  const visibleItemsInfo: VLSlotSignature[] = $derived.by(() => {
    if (!items || isDisabled) {
      return [];
    }
    const r: VLSlotSignature[] = [];
    for (let index = startIdx; index <= end2; index++) {
      // console.log(index);
      const item = items[index];
      if (item) {
        //  console.log(sizes[index])
        r.push({ item, index: index, size: sizes[index] });
      }
    }
    return r;
  });

  const startOffset = $derived(positions[startIdx] ? positions[startIdx] : 0);

  const totalViewportSize = $derived(
    positions.length > 0 ? positions[positions.length - 1] + sizes[sizes.length - 1] : 0
  );

  const endOffset = $derived(
    positions[end2] ? totalViewportSize - positions[end2] - sizes[end2] : 0
  );

  // css
  const listStyle = $derived(clsx(!isDisabled && 'overflow:auto;', style));

  const listInnerStyle = $derived.by(() =>
    clsx(
      !isTable && 'display:flex;',
      !isTable && ((!isHorizontal && 'flex-direction:column;') || 'flex-direction:row;'),
      !isDisabled &&
        ((!isHorizontal && `margin-top:${startOffset}px;margin-bottom:${endOffset}px`) ||
          `margin-left:${startOffset}px;margin-right:${endOffset}px;width:${totalViewportSize - endOffset - startOffset}px`)
    )
  );

  // ======= FUNCTIONS =======

  onMount(() => {
    listContainer.addEventListener('scroll', onscroll, thirdEventArg);
    mounted = true;
    updatePositions();
  });

  onDestroy(() => {
    if (mounted) listContainer.removeEventListener('scroll', onscroll);
  });

  //TODO see if effect.pre not a better option
  $effect(() => {
    const { offset, scrollChangeReason } = curState;

    if (prevState?.offset !== offset || prevState?.scrollChangeReason !== scrollChangeReason) {
      // refresh();
      updatePositions();
    }

    if (prevState?.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
      scrollTo(offset);
    }

    prevState = curState;
  });

  $effect(() => onVisibleRangeUpdate?.({ type: 'range.update', start: startIdx, end: endIdx }));

  function onscroll(event: Event): void {
    const offset = getScroll(listContainer);

    if (
      event.target !== listContainer ||
      offset < 0 ||
      curState.offset === offset ||
      overfetchBufferInPx - Math.abs(offset - curState.offset) >= 1
    )
      return;

    curState = {
      offset,
      scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
    };

    onAfterScroll?.({ type: 'scroll.update', offset, event });
  }

  // return the index of the starting boundary
  function getStart(): number {
    const startPosition =
      getScroll(listContainer) - getPaddingStart(listContainer) - overfetchBufferInPx;
    const r = binarySearch(positions, mid => mid - startPosition, {
      returnNearestIfNoHit: true
    })!;
    return r.index;
  }

  // return the index of the closing boundary
  function getEnd() {
    const endPosition =
      getScroll(listContainer) -
      getPaddingStart(listContainer) +
      getClientSize(listContainer) +
      overfetchBufferInPx;

    const r = binarySearch(positions, mid => mid - endPosition, { returnNearestIfNoHit: true })!;
    return r.index;
  }

  // recalculates the viewport position
  function updatePositions() {
    // console.log('updatePositions');
    if (!avgSizeInPx) {
      avgSizeInPx = getAvgSize();
    }

    startIdx = getStart();
    // console.log('starIdx' + startIdx);
    endIdx = getEnd();
    // console.log('endIdx' + endIdx);

    let vi0 = 0;

    // holds index -> offset
    const runtimeSizesTemp: Record<number, number> = {};
    const children = !isTable ? listInner.children : listInner.querySelector('tbody')!.children;

    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      const stl = getComputedStyle(el);

      const cssPosition = stl.position;
      if (cssPosition && ['absolute', 'fixed'].includes(cssPosition)) {
        continue;
      }

      const size = stl.display !== 'none' ? getOuterSize(el as HTMLElement) : 0;
      const index = startIdx + vi0;
      runtimeSizesTemp[index] = (runtimeSizesTemp[index] || 0) + size;
      // console.log('rt size ' + index + ' -> ' + runtimeSizesTemp[index]);
      vi0++;
    }

    //TODO see if a simple array copy could suffice
    for (const indexS of Object.keys(runtimeSizesTemp)) {
      const index = parseInt(indexS);
      if (runtimeSizes[index] !== runtimeSizesTemp[index]) {
        runtimeSizes[index] = runtimeSizesTemp[index];
      }
    }
  }

  function getAvgSize() {
    const maxSampleCount = 10;
    const sizeArr: number[] = [];
    const children = !isTable ? listInner.children : listInner.querySelector('tbody')!.children;

    for (let index = 0; index < children.length; index++) {
      const el = <HTMLElement>children[index];
      const style = getComputedStyle(el);
      if (['absolute', 'fixed'].includes(style.position)) {
        continue;
      }
      const outerSize = getOuterSize(el);
      sizeArr.push(outerSize);
      if (sizeArr.length >= maxSampleCount) {
        break;
      }
    }
    if (sizeArr.length === 0) {
      return 0;
    }
    return sizeArr.reduce((a, b) => a + b, 0) / sizeArr.length;
  }

  function getClientSize(el: HTMLElement) {
    const style = getComputedStyle(el);
    let r = parseFloat(!isHorizontal ? style.height : style.width);
    if (style.boxSizing === 'border-box') {
      if (!isHorizontal) {
        r -= parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth);
      } else {
        r -= parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      }
    }
    return r;
  }

  function getOuterSize(el: HTMLElement) {
    const style = getComputedStyle(el);

    let r = getClientSize(el);
    if (!isHorizontal) {
      r +=
        parseFloat(style.borderTopWidth) +
        parseFloat(style.borderBottomWidth) +
        parseFloat(style.marginTop) +
        parseFloat(style.marginBottom);
    } else {
      r +=
        parseFloat(style.borderLeftWidth) +
        parseFloat(style.borderRightWidth) +
        parseFloat(style.marginLeft) +
        parseFloat(style.marginRight);
    }
    return Number.isNaN(r) ? 0 : r;
  }

  function getScroll(el: HTMLElement) {
    return !isHorizontal ? el.scrollTop : el.scrollLeft;
  }

  function getPaddingStart(el: HTMLElement) {
    const style = getComputedStyle(el);
    return !isHorizontal ? parseFloat(style.paddingTop) : parseFloat(style.paddingLeft);
  }

  // scrolls the contrainer to px
  function scrollTo(value: number) {
    if ('scroll' in listContainer) {
      const p: Record<string, any> = { behavior: scrollToBehaviour };
      p[!isHorizontal ? 'top' : 'left'] = value;
      listContainer.scroll(p);
    } else {
      //@ts-expect-error no index signature
      listContainer[!isHorizontal ? 'scrollTop' : 'scrollLeft'] = value;
    }
  }

  //TODO implement
  function getItemKey(index: number, item: any) {
    if (itemKey) {
      if (/*typeof itemKey === 'string' &&*/ itemKey === 'index') {
        return index;
      } else if (typeof itemKey === 'function') {
        return itemKey(item, index);
      }
    }
  }
</script>

<div
  bind:this={listContainer}
  bind:clientHeight
  bind:clientWidth
  class={clsx('vtlist', className)}
  style={listStyle}>
  {#if isTable}
    <table bind:this={listInner} class="vtlist-inner" style={listInnerStyle}>
      {#if header}
        {@render header()}
      {/if}
      <tbody>
        {#if isDisabled}
          {#each items as item}
            {@render vl_slot(item)}
          {/each}
        {:else}
          {#each visibleItemsInfo as item}
            {@render vl_slot(item)}
          {/each}
        {/if}
      </tbody>
    </table>
    {#if footer}
      {@render footer()}
    {/if}
  {:else}
    <div bind:this={listInner} class="vtlist-inner" style={listInnerStyle}>
      {#if header}
        {@render header()}
      {/if}
      {#if isDisabled}
        {#each items as item}
          {@render vl_slot(item)}
        {/each}
      {:else}
        {#each visibleItemsInfo as item}
          {@render vl_slot(item)}
        {/each}
      {/if}
      {#if footer}
        {@render footer()}
      {/if}
    </div>
  {/if}
</div>
