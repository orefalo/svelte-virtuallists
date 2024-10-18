<script module lang="ts">
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
  import SizeAndPositionManager from './SizeAndPositionManager';
  import {
    ALIGNMENT,
    SCROLL_BEHAVIOR,
    SCROLL_CHANGE_REASON,
    type AfterScrollEvent,
    type VLSlotSignature,
    type VLRangeEvent,
    type SizingCalculatorFn
  } from '.';
  import clsx from 'clsx';

  interface VState {
    offset: number;
    scrollChangeReason: number;
  }

  interface VProps {
    scrollToIndex?: number;
    scrollToAlignment?: string;
    scrollToOffset?: number;
    modelCount?: number;
    sizeCalculator?: SizingCalculatorFn;
    estimatedItemSize?: number;
  }

  const {
    model = [],
    // total model count, typically model.length unless a partial loader is used

    // items are the view, size of item n, can be a function
    sizeCalculator,
    // usefull when using a partial loader
    estimatedItemSize,
    getKey,

    // positioning
    scrollToIndex,
    scrollToOffset,
    windowOverPaddingCount = 3,
    isHorizontal = false,
    // scrollDirection = DIRECTION.VERTICAL,
    scrollToAlignment = ALIGNMENT.AUTO,
    scrollToBehaviour = SCROLL_BEHAVIOR.INSTANT,

    // snippets
    footer,
    vl_slot,
    header,

    // events
    onVisibleRangeUpdate,
    onAfterScroll,

    // css
    class: className = '',
    style = ''
  }: {
    model: Array<any>;

    sizeCalculator?: SizingCalculatorFn;

    //TODO: remove , use get avg function
    estimatedItemSize?: number;
    getKey?: (i: number | string) => string;
    // positioning
    scrollToIndex?: number | undefined;
    scrollToOffset?: number | undefined;
    windowOverPaddingCount?: number;
    isHorozontal?: boolean;
    // scrollDirection?: DIRECTION;
    isHorizontal?: boolean;
    scrollToAlignment?: ALIGNMENT;
    scrollToBehaviour?: SCROLL_BEHAVIOR;
    // snippets
    header?: Snippet;
    vl_slot: Snippet<[VLSlotSignature]>;
    footer?: Snippet;
    // events
    onVisibleRangeUpdate?: (range: VLRangeEvent) => void;
    onAfterScroll?: (event: AfterScrollEvent) => void;
    class?: string;
    style?: string;
  } = $props();

  const sizeAndPositionManager = new SizeAndPositionManager(
    model,
    sizeCalculator,
    estimatedItemSize
  );

  let clientHeight: number = $state(0);
  let clientWidth: number = $state(0);

  let mounted: boolean = false;
  let container: HTMLDivElement;
  let visibleItems: Array<VLSlotSignature> = $state([]);

  let curState: VState = $state({
    offset:
      scrollToOffset ||
      (scrollToIndex !== undefined /*&& modelCount*/ && getOffsetForIndex(scrollToIndex)) ||
      0,
    scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
  });

  //@ts-expect-error missing attributes, it's ok for initialization
  let prevState: VState = {};
  let prevProps: VProps = {
    scrollToIndex,
    scrollToAlignment,
    scrollToOffset,
    sizeCalculator,
    estimatedItemSize
  };

  let isDisabled = $state(false);
  let isTable = false;

  // css
  const listStyle = $derived(clsx(!isDisabled && 'overflow:auto;', style));

  const listInnerStyle = $derived.by(() => {
    const { offset } = curState;
    const p = sizeAndPositionManager.getVisibleRangeOffsets(
      isHorizontal ? clientWidth : clientHeight,
      offset
    );
    const startOffset = p.startOffset;
    const endOffset = p.endOffset;
    return clsx(
      !isTable && 'display:flex;',
      !isTable && ((!isHorizontal && 'flex-direction:column;') || 'flex-direction:row;'),
      !isDisabled &&
        ((!isHorizontal && `margin-top:${startOffset}px;margin-bottom:${endOffset}px`) ||
          `margin-left:${startOffset}px;margin-right:${endOffset}px;width:${sizeAndPositionManager.getTotalSize() - endOffset - startOffset}px`)
    );
  });

  $effect(() => {
    // listen to updates:
    //@ts-expect-error unused no side effect
    scrollToIndex,
      scrollToAlignment,
      scrollToOffset,
      /*modelCount,*/ sizeCalculator,
      estimatedItemSize;

    // on update:
    propsUpdated();
  });

  $effect(() => {
    const { offset, scrollChangeReason } = curState;

    if (prevState.offset !== offset || prevState.scrollChangeReason !== scrollChangeReason) {
      refresh();
    }

    if (prevState.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
      scrollTo(offset);
    }

    prevState = curState;
  });

  $effect(() => {
    // listen to component size updates
    //@ts-expect-error unused no side effect
    clientHeight, clientWidth;

    if (mounted) recomputeSizes(0);
  });

  // (() => {
  //   // init run before the DOM is even ready
  //   if (!isHorizontal && typeof height !== 'number') {
  //     throw new Error("virtual list's height must be a number when scrollDirection is 'vertical'");
  //   }
  //   if (isHorizontal && typeof width !== 'number') {
  //     throw new Error("virtual list's width must be a number if scrollDirection is 'horizontal'");
  //   }

  //   refresh(); // Initial Load
  // })();

  onMount(() => {
    container.addEventListener('scroll', handleScroll, thirdEventArg);

    if (scrollToOffset !== undefined) {
      scrollTo(scrollToOffset);
    } else if (scrollToIndex !== undefined) {
      scrollTo(getOffsetForIndex(scrollToIndex));
    }

    refresh(); // Initial Load
    mounted = true;
  });

  onDestroy(() => {
    if (mounted) container.removeEventListener('scroll', handleScroll);
  });

  function propsUpdated() {
    if (!mounted) return;

    if (scrollToIndex && scrollToOffset)
      console.log('VirtualList: scrollToIndex and scrollToOffset MUST NOT be used together.');

    const scrollPropsHaveChanged =
      prevProps.scrollToIndex !== scrollToIndex ||
      prevProps.scrollToAlignment !== scrollToAlignment;
    const itemPropsHaveChanged =
      // prevProps.modelCount !== modelCount ||
      prevProps.sizeCalculator !== sizeCalculator ||
      prevProps.estimatedItemSize !== estimatedItemSize;

    if (itemPropsHaveChanged) {
      sizeAndPositionManager.mutateState(sizeCalculator, model, estimatedItemSize);
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
        offset: getOffsetForIndex(scrollToIndex, scrollToAlignment),
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
      };
    }

    prevProps = {
      scrollToIndex,
      scrollToAlignment,
      scrollToOffset,
      // modelCount,
      sizeCalculator,
      estimatedItemSize
    };
  }

  function refresh() {
    const { offset } = curState;
    let { start, end } = sizeAndPositionManager.getVisibleRangeIndex(
      isHorizontal ? clientWidth : clientHeight,
      offset,
      windowOverPaddingCount
    );

    let updatedItems = [];

    // const totalSize = sizeAndPositionManager.getTotalSize();
    // const heightUnit = typeof height === 'number' ? 'px' : '';
    // const widthUnit = typeof width === 'number' ? 'px' : '';
    // if (scrollDirection === DIRECTION.VERTICAL) {
    //   wrapperStyle = `height:${height}${heightUnit};width:${width}${widthUnit};`;
    //   innerStyle = `flex-direction:column;height:${totalSize}px;`;
    // } else {
    //   wrapperStyle = `height:${height}${heightUnit};width:${width}${widthUnit};`;
    //   innerStyle = `min-height:100%;width:${totalSize}px;`;
    // }

    if (start !== undefined && end !== undefined) {
      for (let index = start; index <= end; index++) {
        updatedItems.push({
          // TODO: we don't need the item:model[] here, just return the index, let the rendering code fetch model[]
          item: model[index],
          index
          // style: getStyle(index)
        });
      }

      if (onVisibleRangeUpdate) {
        // calculate the visible positions
        const r = sizeAndPositionManager.getVisibleRangeIndex(
          isHorizontal ? clientWidth : clientHeight,
          offset,
          0
        );

        onVisibleRangeUpdate({
          type: 'range.update',
          start: r.start,
          end: r.end
        });
      }
    }

    visibleItems = updatedItems;
  }

  // scrolls the contrainer to px
  function scrollTo(value: number) {
    if ('scroll' in container) {
      const p: Record<string, any> = { behavior: scrollToBehaviour };
      p[!isHorizontal ? 'top' : 'left'] = value;
      container.scroll(p);
    } else {
      //@ts-expect-error no index signature
      container[!isHorizontal ? 'scrollTop' : 'scrollLeft'] = value;
    }
  }

  export function recomputeSizes(startIndex: number = 0) {
    // styleCache = {};
    sizeAndPositionManager.resetItem(startIndex);
    refresh();
  }

  function getOffsetForIndex(index: number, align: ALIGNMENT = scrollToAlignment): number {
    if (index < 0) {
      index = 0;
    } else if (index >= model.length) {
      index = model.length - 1;
    }

    return sizeAndPositionManager.getUpdatedOffsetForIndex(
      align,

      isHorizontal ? clientWidth : clientHeight,
      curState.offset || 0,
      index
    );
  }

  const handleScroll = (event: Event) => {
    const offset = isHorizontal ? container.scrollLeft : container.scrollTop;

    if (offset < 0 || curState.offset === offset || event.target !== container) return;

    curState = {
      offset,
      scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
    };

    if (onAfterScroll) {
      onAfterScroll({ type: 'scroll.update', offset, event });
    }
  };
</script>

<div
  bind:this={container}
  bind:clientHeight
  bind:clientWidth
  class="vtlist ${className}"
  style={listStyle}
  >
  {#if header}
    {@render header()}
  {/if}
  <div class="vtlist-inner" style={listInnerStyle}>
    {#each visibleItems as el}
      {@render vl_slot({
        index: getKey ? getKey(el.index) : el.index,
        item: el.item,
        size: sizeAndPositionManager.itemSizeAndPositionData[el.index].size
      })}
    {/each}
  </div>

  {#if footer}
    {@render footer()}
  {/if}
</div>
