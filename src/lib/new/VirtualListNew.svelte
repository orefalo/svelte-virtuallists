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
    type VLScrollEvent,
    type SizingCalculatorFn,
    type VLSlotSignature,
    type VLRange
  } from '.';

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

  interface VProps {
    scrollToIndex?: number;
    scrollToAlignment?: string;
    scrollToOffset?: number;
    modelCount?: number;
    sizingCalculator?: SizingCalculatorFn;
    avgSizeInPx?: number;
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
    scrollToOffset,
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
    scrollToOffset?: number | undefined;

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
    onVisibleRangeUpdate?: (range: VLRange) => void;
    onAfterScroll?: (event: VLScrollEvent) => void;

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
  // let overfetchBufferInPx: number = 100;

  let itemKey: 'index' | ((item: any, index: number) => any);

  // virtual list first visible index
  let startIdx = $state(0);

  // virtual list last visible index
  let endIdx = $state(preRenderCount - 1);

  // used when rendering didn't happen yet, the average size
  let avgSizeInPx = $state(0);

  let curState: VState = $state({
    offset:
      scrollToOffset ||
      (scrollToIndex !== undefined && items.length && getOffsetForIndex(scrollToIndex) && 1) ||
      0,
    scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
  });

  let prevState: VState | undefined;

  const end2 = $derived.by(() => {
    const max = (items?.length || 1) - 1;
    return endIdx < max ? endIdx : max;
  });

  // holds the raw rendered position of each item in the list
  // TODO: since rawSizes is only used for sizes calculations, there is probably a better way to get it with out reactivity and memory
  const rawSizes: (number | undefined)[] = $derived(new Array(items.length));

  // holds the calculated size (height or width) of each item in the list
  const sizes: number[] = $derived.by(() => {
    return items.map((item, index) => {
      let s = sizingCalculator?.(index, item);
      if (s !== undefined) return s;
      s = rawSizes[index];
      if (s !== undefined) return s;
      return avgSizeInPx;
    });
  });

  // this is index -> viewport offset
  const offsets: number[] = $derived.by(() => {
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

  const startOffset = $derived(offsets[startIdx] ? offsets[startIdx] : 0);

  const totalViewportSize = $derived(
    offsets.length > 0 ? offsets[offsets.length - 1] + sizes[sizes.length - 1] : 0
  );

  const endOffset = $derived(offsets[end2] ? totalViewportSize - offsets[end2] - sizes[end2] : 0);

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
    refreshOffsets();

    if (scrollToOffset !== undefined) {
      scrollTo(scrollToOffset);
    } else if (scrollToIndex !== undefined) {
      scrollTo(getOffsetForIndex(scrollToIndex));
    }

    mounted = true;
  });

  onDestroy(() => {
    if (mounted) listContainer.removeEventListener('scroll', onscroll);
  });

  $effect(() => {
    // listen to updates:
    //@ts-expect-error unused no side effect
    scrollToIndex, scrollToAlignment, scrollToOffset, items.length, sizingCalculator;

    console.log('propUpdated');
    // on update:
    propsUpdated();
  });

  $effect(() => {
    console.log('onVisibleRangeUpdate');

    if (onVisibleRangeUpdate) {
      const vr = getVisibleRange(isHorizontal ? clientWidth : clientHeight, curState.offset);
      //onVisibleRangeUpdate({ start: startIdx, end: endIdx });
      onVisibleRangeUpdate(vr);
    }
  });

  //TODO see if effect.pre not a better option
  $effect(() => {
    const { offset, scrollChangeReason } = curState;

    if (prevState?.offset !== offset || prevState?.scrollChangeReason !== scrollChangeReason) {
      refreshOffsets();

      // const vr = getVisibleRange(isHorizontal ? clientWidth : clientHeight, offset);
      // onVisibleRangeUpdate?.({ start: vr.start, end: vr.end });
    }

    if (prevState?.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
      scrollTo(offset);
    }

    prevState = curState;
  });

  $effect(() => {
    // listen to updates:
    //@ts-expect-error unused no side effect
    //clientHeight, clientWidth;
    // on update:
    console.log('component is resized ' + clientHeight + ' ' + clientWidth);
    if (mounted) recomputeSizes(0); // call scroll.reset
  });

  let prevProps: VProps = {
    scrollToIndex,
    scrollToAlignment,
    scrollToOffset,
    modelCount: items.length,
    //todo: store a present boolean rather than a ref to the function
    sizingCalculator,
    avgSizeInPx
  };

  function propsUpdated() {
    if (!mounted) return;

    if (scrollToIndex && scrollToOffset) {
      console.log('VirtualList: scrollToIndex and scrollToOffset MUST NOT be used together.');
    }

    const scrollPropsHaveChanged =
      prevProps.scrollToIndex !== scrollToIndex ||
      prevProps.scrollToAlignment !== scrollToAlignment;
    const itemPropsHaveChanged =
      prevProps.modelCount !== items.length ||
      prevProps.sizingCalculator !== sizingCalculator ||
      prevProps.avgSizeInPx !== avgSizeInPx;

    if (itemPropsHaveChanged) {
      // sizeAndPositionManager.updateConfig(itemSize, modelCount, estimatedItemSize);
      recomputeSizes();
    }

    const scrollOffsetHaveChanged = prevProps.scrollToOffset !== scrollToOffset;
    if (scrollOffsetHaveChanged) {
      curState = {
        offset: scrollToOffset || 0,
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
      };
    } else if (
      typeof scrollToIndex === 'number' &&
      (scrollPropsHaveChanged || itemPropsHaveChanged)
    ) {
      curState = {
        offset: getOffsetForIndex(scrollToIndex),
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
      };
    }

    prevProps = {
      scrollToIndex,
      scrollToAlignment,
      scrollToOffset,
      modelCount: items.length,
      sizingCalculator,
      avgSizeInPx
    };
  }

  function recomputeSizes(startIndex: number = 0) {
    //resetItem
    lastMeasuredIndex = Math.min(lastMeasuredIndex, startIndex - 1);
    refreshOffsets();
  }

  function onscroll(event: Event): void {
    const offset = getScroll(listContainer);

    if (
      event.target !== listContainer ||
      offset < 0 ||
      curState.offset === offset
      // todo: bring this back if we find the right location for the range evernt
      // || overfetchBufferInPx - Math.abs(offset - curState.offset) >= 1
    )
      return;

    curState = {
      offset,
      scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
    };

    onAfterScroll?.({ offset, event });
  }

  // return the index of the starting boundary
  // function getStart(): number {
  //   const startPosition =
  //     getScroll(listContainer) - getPaddingStart(listContainer) - overfetchBufferInPx;
  //   return findNearestItem(startPosition);
  // }

  // return the index of the closing boundary
  // function getEnd() {
  //   const endPosition =
  //     getScroll(listContainer) -
  //     getPaddingStart(listContainer) +
  //     getClientSize(listContainer) +
  //     overfetchBufferInPx;

  //   return findNearestItem(endPosition);
  // }

  function getOffsetForIndex(
    index: number,
    align: ALIGNMENT = scrollToAlignment,
    _modelCount: number = items.length
  ): number {
    if (index < 0) {
      index = 0;
    } else if (index >= _modelCount) {
      index = _modelCount - 1;
    }

    return getUpdatedOffsetForIndex(
      align,
      isHorizontal ? clientWidth : clientHeight,
      curState.offset || 0,
      index
    );
  }

  /**
   * Determines a new offset that ensures a certain item is visible, given the alignment.
   *
   * @param align Desired alignment within container
   * @param containerSize Size (width or height) of the container viewport
   * @return Offset to use to ensure the specified item is visible
   */
  function getUpdatedOffsetForIndex(
    align: ALIGNMENT = ALIGNMENT.START,
    containerSize: number,
    currentOffset: number,
    targetIndex: number
  ): number {
    if (containerSize <= 0) {
      return 0;
    }

    // const datum = this.getSizeAndPositionForIndex(targetIndex);

    const datumS = sizes[targetIndex];

    const maxOffset = offsets[targetIndex];
    const minOffset = maxOffset - containerSize + datumS;

    let idealOffset;

    switch (align) {
      case ALIGNMENT.END:
        idealOffset = minOffset;
        break;
      case ALIGNMENT.CENTER:
        idealOffset = maxOffset - (containerSize - datumS) / 2;
        break;
      case ALIGNMENT.START:
        idealOffset = maxOffset;
        break;
      default:
        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
    }

    const totalSize = totalViewportSize;
    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
  }

  /**
   * Searches for the item (index) nearest the specified offset.
   *
   * If no exact match is found the next lowest item index will be returned.
   * This allows partially visible items (with offsets just before/above the fold) to be visible.
   *
   */
  let lastMeasuredIndex = -1;

  function findNearestItem(offset: number): number {
    if (isNaN(offset)) {
      throw Error(`Invalid offset ${offset} specified`);
    }

    // Our search algorithms find the nearest match at or below the specified offset.
    // So make sure the offset is at least 0 or no match will be found.
    offset = Math.max(0, offset);

    const lastMeasuredSizeAndPosition = getSizeAndPositionOfLastMeasuredItem();
    const i = Math.max(0, lastMeasuredIndex);

    if (lastMeasuredSizeAndPosition.offset >= offset) {
      // If we've already measured items within this range just use a binary search as it's faster.
      return binarySearch(0, i, offset);
    } else {
      // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
      // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
      // The overall complexity for this approach is O(log n).
      return exponentialSearch(i, offset);
    }
  }

  function getSizeAndPositionOfLastMeasuredItem() {
    return lastMeasuredIndex >= 0
      ? { offset: offsets[lastMeasuredIndex], size: sizes[lastMeasuredIndex] }
      : { offset: 0, size: 0 };
  }

  function binarySearch(low: number, high: number, offset: number): number {
    let middle = 0;
    let currentOffset = 0;

    while (low <= high) {
      middle = low + Math.floor((high - low) / 2);
      currentOffset = offsets[middle];

      if (currentOffset === offset) {
        return middle;
      } else if (currentOffset < offset) {
        low = middle + 1;
      } else if (currentOffset > offset) {
        high = middle - 1;
      }
    }

    if (low > 0) {
      return low - 1;
    }

    return 0;
  }

  function exponentialSearch(index: number, offset: number): number {
    let interval = 1;

    while (index < items.length && offsets[index] < offset) {
      index += interval;
      interval *= 2;
    }

    return binarySearch(Math.floor(index / 2), Math.min(index, items.length - 1), offset);
  }

  // recalculates the viewport position
  function refreshOffsets() {
    // console.log('updatePositions');
    if (!avgSizeInPx) {
      avgSizeInPx = getAvgSize();
    }

    const vr = getVisibleRange(isHorizontal ? clientWidth : clientHeight, curState.offset,3);
 
    startIdx = vr.start;
    endIdx = vr.end;

    let vi0 = 0;

    // holds index -> offset
    const itemOffsetsTemp: Record<number, number> = {};
    const children = !isTable ? listInner.children : listInner.querySelector('tbody')!.children;

    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      const stl = getComputedStyle(el);

      // ignore entries marked as fixed or absolute
      const cssPosition = stl.position;
      if (cssPosition && ['absolute', 'fixed'].includes(cssPosition)) {
        continue;
      }

      const size = stl.display !== 'none' ? getOuterSize(el as HTMLElement) : 0;
      const index = startIdx + vi0;
      itemOffsetsTemp[index] = (itemOffsetsTemp[index] || 0) + size;
      vi0++;
    }

    // only update the elements that moved
    for (const k of Object.keys(itemOffsetsTemp)) {
      const index = parseInt(k);
      if (rawSizes[index] !== itemOffsetsTemp[index]) {
        rawSizes[index] = itemOffsetsTemp[index];
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

  // returns an index range
  function getVisibleRange(
    containerSize: number = 0,
    scrollbarOffset: number,
    windowOverPaddingCount: number = 0
  ) {
    const totalSize = totalViewportSize;

    if (totalSize === 0) return { start: 0, end: 0 };

    const maxOffset = scrollbarOffset + containerSize;
    let startIdx = findNearestItem(scrollbarOffset);

    if (startIdx === undefined) {
      throw Error(`Invalid offset ${scrollbarOffset} specified`);
    }

    let offset = offsets[startIdx] + sizes[startIdx];
    let endIdx = startIdx;

    while (offset < maxOffset && endIdx < items.length - 1) {
      endIdx++;
      offset += sizes[endIdx];
    }

    if (windowOverPaddingCount > 0) {
      startIdx = Math.max(0, startIdx - windowOverPaddingCount);
      endIdx = Math.min(endIdx + windowOverPaddingCount, items.length - 1);
    }

    return {
      start: startIdx,
      end: endIdx
    };
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
      if (itemKey === 'index') {
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
