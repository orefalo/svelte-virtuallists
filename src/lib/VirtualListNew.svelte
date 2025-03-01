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

  // this line fixes an issue with es-lint and the ItenType generic
  // seems to be fixed upstream
  // type ItemType = any;
</script>

<script lang="ts" generics="ItemType">
  import { onDestroy, onMount, tick, type Snippet } from 'svelte';
  import {
    ALIGNMENT,
    SCROLL_BEHAVIOR,
    type SizingCalculatorFn,
    type VLRangeEvent,
    type VLScrollEvent,
    type VLSlotSignature,
    type VariantScrollConfig
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
    clientHeight?: number;
    clientWidth?: number;
    startIdx?: number;
    endIdx?: number;
  }

  // ====== PROPERTIES ================

  const {
    items = [],

    // When disabled, all items are rendered like a normal html list
    isDisabled = false,
    isHorizontal = false,
    isTable = false,

    // reactive variable related to positioning
    scrollToIndex,
    scrollToOffset,

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

    // calculates the size of a given index
    sizingCalculator
  }: {
    items: ItemType[];

    isDisabled?: boolean;
    isHorizontal?: boolean;
    isTable?: boolean;

    scrollToIndex?: number;
    scrollToOffset?: number;

    // scroll attributes
    scrollToAlignment?: ALIGNMENT;
    scrollToBehaviour?: SCROLL_BEHAVIOR;

    preRenderCount?: number;

    // snippets
    header?: Snippet;
    // size is passed when a sizingCalculator is defined
    vl_slot: Snippet<[VLSlotSignature<ItemType>]>;
    footer?: Snippet;

    // events
    onVisibleRangeUpdate?: (range: VLRangeEvent) => void;
    onAfterScroll?: (event: VLScrollEvent) => void;

    // css
    class?: string;
    style?: string;

    sizingCalculator?: SizingCalculatorFn;
  } & VariantScrollConfig = $props();

  // ======== VARIABLES ========

  // number of elements to pad above & below the visible range to prevent visual glitching
  const WINDOW_OVERSIZE_COUNT = 3;

  let mounted: boolean = false;

  let lastMeasuredIndex = -1;

  // dom references
  let listContainer: HTMLDivElement;

  // @ts-expect-error undefined not in type - it's ok, only used for initialization
  let listInner: HTMLDivElement = $state();

  let clientHeight: number = $state(0);
  let clientWidth: number = $state(0);

  // virtual list first visible index
  let startIdx = $state(0);

  // virtual list last visible index
  let endIdx = $state(preRenderCount - 1);

  // used when rendering didn't happen yet, the average size
  let avgSizeInPx = $state(0);

  let curState: VState = $state({
    offset: scrollToOffset || 0,
    scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
  });

  let prevState: VState | undefined;

  // Holds the raw rendered position of each item in the list
  const rawSizes: (number | undefined)[] = $derived(new Array(items.length));

  // Holds the calculated size (height or width) of each item in the list
  const sizes: number[] = $derived.by(() => {
    const r = items.map((item, index) => {
      let s = sizingCalculator?.(index, item);
      if (s !== undefined) return s;
      s = rawSizes[index];
      if (s !== undefined) return s;
      return avgSizeInPx;
    });
    return r;
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

  const visibleItemsInfo: VLSlotSignature<ItemType>[] = $derived.by(() => {
    if (!items || isDisabled) {
      return [];
    }
    const r: VLSlotSignature<ItemType>[] = [];
    for (let index = startIdx; index <= endIdx; index++) {
      const item = items[index];
      if (item) {
        r.push({ item, index: index, size: sizes[index] });
      }
    }
    return r;
  });

  const totalViewportSize = () =>
    offsets.length > 0 ? offsets[offsets.length - 1] + sizes[sizes.length - 1] : 0;

  // css
  const listStyle = $derived(clsx(!isDisabled && 'overflow:auto;', style));

  const listInnerStyle = $derived.by(() => {
    //TODO: the bug is here
    const startOffset = offsets[startIdx] ? offsets[startIdx] : 0;
    const endOffset =
      endIdx > 0
        ? totalViewportSize() -
          (offsets[Math.min(endIdx, offsets.length - 1)] +
            sizes[Math.min(endIdx, sizes.length - 1)])
        : 0;

    return clsx(
      !isTable && 'display:flex;',
      !isTable && ((!isHorizontal && 'flex-direction:column;') || 'flex-direction:row;'),
      !isDisabled &&
        ((!isHorizontal && `margin-top:${startOffset}px;margin-bottom:${endOffset}px`) ||
          `margin-left:${startOffset}px;margin-right:${endOffset}px;width:${offsets[Math.min(endIdx, offsets.length - 1)] + sizes[Math.min(endIdx, sizes.length - 1)] - startOffset}px`)
    );
  });

  // ======= FUNCTIONS =======

  onMount(() => {
    listContainer.addEventListener('scroll', onScroll, thirdEventArg);

    refreshOffsets();

    if (scrollToOffset !== undefined) {
      scrollTo(scrollToOffset);
    } else if (scrollToIndex !== undefined) {
      scrollTo(getOffsetForIndex(scrollToIndex));
    }

    mounted = true;
  });

  onDestroy(() => {
    if (mounted) listContainer.removeEventListener('scroll', onScroll);
  });

  $effect(() => {
    //@ts-expect-error unused no side effect
    scrollToIndex, scrollToAlignment, scrollToOffset, items.length, sizingCalculator;
    propsUpdated();
  });

  $effect(() => {
    //@ts-expect-error not assigned
    startIdx, endIdx;
    propsUpdated();
  });

  $effect(() => {
    if (curState.scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
      scrollTo(curState.offset);
    } else {
      refreshOffsets();
    }
  });

  let prevProps: VProps = {};

  async function propsUpdated() {
    if (!mounted) return;

    if (scrollToIndex && scrollToOffset) {
      console.error('VirtualList: scrollToIndex and scrollToOffset MUST NOT be used together.');
    }

    const scrollPropsHaveChanged =
      prevProps?.scrollToIndex !== scrollToIndex ||
      prevProps?.scrollToAlignment !== scrollToAlignment;
    const itemPropsHaveChanged =
      prevProps?.modelCount !== items.length ||
      prevProps?.sizingCalculator !== sizingCalculator ||
      prevProps?.avgSizeInPx !== avgSizeInPx ||
      prevProps?.clientHeight !== clientHeight ||
      prevProps?.clientWidth !== clientWidth;

    if (itemPropsHaveChanged) {
      await recomputeSizes();
    }

    const scrollOffsetHaveChanged = prevProps?.scrollToOffset !== scrollToOffset;
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

    if (
      onVisibleRangeUpdate &&
      (prevProps?.startIdx !== startIdx || prevProps?.endIdx !== endIdx)
    ) {
      const vr = getVisibleRange(isHorizontal ? clientWidth : clientHeight, curState.offset);
      onVisibleRangeUpdate(vr);
    }

    prevProps = {
      scrollToIndex,
      scrollToAlignment,
      scrollToOffset,
      modelCount: items.length,
      sizingCalculator,
      avgSizeInPx,
      clientHeight,
      clientWidth,
      startIdx,
      endIdx
    };
  }

  async function recomputeSizes(startIndex: number = 0) {
    //resetItem
    lastMeasuredIndex = Math.min(lastMeasuredIndex, startIndex - 1);
    await refreshOffsets();
  }

  function onScroll(event: Event): void {
    const offset = isHorizontal ? listContainer.scrollLeft : listContainer.scrollTop;
    if (event.target !== listContainer || offset < 0 || curState.offset === offset) return;

    if (prevState?.offset !== offset) {
      curState = {
        offset,
        scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
      };

      onAfterScroll?.({ offset, event });
    }
  }

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
      curState.offset /*|| 0*/,
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

    const size = sizes[targetIndex];
    const maxOffset = offsets[targetIndex];
    const minOffset = maxOffset - containerSize + size;

    let idealOffset;

    switch (align) {
      case ALIGNMENT.END:
        idealOffset = minOffset;
        break;
      case ALIGNMENT.CENTER:
        idealOffset = maxOffset - (containerSize - size) / 2;
        break;
      case ALIGNMENT.START:
        idealOffset = maxOffset;
        break;
      default:
        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
    }

    return Math.max(0, Math.min(totalViewportSize() - containerSize, idealOffset));
  }

  /**
   * Searches for the item (index) nearest the specified offset.
   *
   * If no exact match is found the next lowest item index will be returned.
   * This allows partially visible items (with offsets just before/above the fold) to be visible.
   *
   */
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
    while (low <= high) {
      const middle = low + ((high - low) >>> 1); // Faster bitwise right shift
      const currentOffset = offsets[middle];

      if (currentOffset === offset) {
        return middle;
      } else if (currentOffset < offset) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }

    return Math.max(0, low - 1);
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
  async function refreshOffsets() {
    if (!avgSizeInPx) {
      avgSizeInPx = getAvgSize();
    }

    const vr = getVisibleRange(
      isHorizontal ? clientWidth : clientHeight,
      curState.offset,
      WINDOW_OVERSIZE_COUNT
    );

    startIdx = vr.start;
    endIdx = vr.end;

    await tick();

    let vi0 = 0;

    // Cache computed styles to avoid layout thrashing
    const styleCache = new Map<HTMLElement, CSSStyleDeclaration>();
    const getStyle = (el: HTMLElement) => {
      if (!styleCache.has(el)) {
        styleCache.set(el, getComputedStyle(el));
      }
      return styleCache.get(el)!;
    };

    // holds index -> offset
    const itemOffsetsTemp: Record<number, number> = {};
    const children = getChildren();

    for (let i = 0; i < children.length; i++) {
      const el = children[i] as HTMLElement;
      const stl = getStyle(el);

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
    const children = getChildren();

    for (let index = 0; index < children.length; index++) {
      const el = children[index];
      const style = getComputedStyle(el);
      if (['absolute', 'fixed'].includes(style.position)) {
        continue;
      }
      const outerSize = getOuterSize(el as HTMLElement);
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
    // TODO: is there a easier way to make this check?
    if (totalViewportSize() === 0) return { start: 0, end: 0 };

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
    if (isHorizontal) {
      r +=
        parseFloat(style.borderLeftWidth) +
        parseFloat(style.borderRightWidth) +
        parseFloat(style.marginLeft) +
        parseFloat(style.marginRight);
    } else {
      r +=
        parseFloat(style.borderTopWidth) +
        parseFloat(style.borderBottomWidth) +
        parseFloat(style.marginTop) +
        parseFloat(style.marginBottom);
    }
    return Number.isNaN(r) ? 0 : r;
  }

  // scrolls the contrainer to give px value
  function scrollTo(value: number) {
    if ('scroll' in listContainer) {
      const p: Record<string, any> = { behavior: scrollToBehaviour };
      p[isHorizontal ? 'left' : 'top'] = value;
      listContainer.scroll(p);
    } else {
      //@ts-expect-error no index signature
      listContainer[isHorizontal ? 'scrollLeft' : 'scrollTop'] = value;
    }
  }

  function getChildren() {
    return !isTable ? listInner.children : listInner.querySelector('tbody')!.children;
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
      {@render header?.()}
      <tbody>
        {#if isDisabled}
          {#each items as item, index (index)}
            {@render vl_slot({ index, item })}
          {/each}
        {:else}
          {#each visibleItemsInfo as item (item.index)}
            {@render vl_slot(item)}
          {/each}
        {/if}
      </tbody>
    </table>
    {@render footer?.()}
  {:else}
    <div bind:this={listInner} class="vtlist-inner" style={listInnerStyle}>
      {@render header?.()}
      {#if isDisabled}
        {#each items as item, index (index)}
          {@render vl_slot({ index, item })}
        {/each}
      {:else}
        {#each visibleItemsInfo as item (item)}
          {@render vl_slot(item)}
        {/each}
      {/if}
      {@render footer?.()}
    </div>
  {/if}
</div>
