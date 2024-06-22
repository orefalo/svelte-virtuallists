<script context="module" lang="ts">
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
		DIRECTION,
		SCROLL_BEHAVIOR,
		SCROLL_CHANGE_REASON,
		type AfterScrollEvent,
		type SlotAttributes,
		type VirtualRangeEvent,
		type VirtualItemSize
	} from '.';

	const {
		height,
		width = '100%',
		model = [],
		// total model count, typically model.length unless a partial loader is used
		modelCount,
		// items are the view, size of item n, can be a function
		itemSize,
		// usefull when using a partial loader
		estimatedItemSize,
		getKey,

		// positioning
		scrollToIndex,
		scrollOffset,
		windowOverPadding = 3,
		scrollDirection = DIRECTION.VERTICAL,
		scrollToAlignment = ALIGNMENT.AUTO,
		scrollToBehaviour = SCROLL_BEHAVIOR.INSTANT,

		// snippets
		footer,
		slot,
		header,

		// events
		onVisibleRangeUpdate,
		onAfterScroll,

		// dom
		zclass = '',
		zstyle = '',

		...props
	}: {
		height: number | string;
		width: number | string;
		model: Array<any>;
		modelCount: number;
		itemSize: VirtualItemSize;
		estimatedItemSize?: number;
		getKey?: (i: number | string) => string;
		// positioning
		scrollToIndex?: number | undefined;
		scrollOffset?: number | undefined;
		windowOverPadding?: number;
		scrollDirection?: DIRECTION;
		scrollToAlignment?: ALIGNMENT;
		scrollToBehaviour?: SCROLL_BEHAVIOR;
		// snippets
		header?: Snippet;
		slot: Snippet<[SlotAttributes<any>]>;
		footer?: Snippet;
		// events
		onVisibleRangeUpdate?: (range: VirtualRangeEvent) => void;
		onAfterScroll?: (event: AfterScrollEvent) => void;
		zclass?: string;
		zstyle?: string;
	} = $props();

	const SCROLL_PROP = {
		[DIRECTION.VERTICAL]: 'top',
		[DIRECTION.HORIZONTAL]: 'left'
	};

	const SCROLL_PROP_LEGACY = {
		[DIRECTION.VERTICAL]: 'scrollTop',
		[DIRECTION.HORIZONTAL]: 'scrollLeft'
	};

	interface VState {
		offset: number;
		scrollChangeReason: number;
	}

	interface VProps {
		scrollToIndex?: number;
		scrollToAlignment?: string;
		scrollOffset?: number;
		modelCount?: number;
		itemSize?: VirtualItemSize;
		estimatedItemSize?: number;
	}

	const sizeAndPositionManager = new SizeAndPositionManager(model, modelCount, itemSize, estimatedItemSize);

	let mounted: boolean = false;
	let container: HTMLDivElement;
	let visibleItems: Array<SlotAttributes<any>> = $state([]);

	let curState: VState = $state({
		offset: scrollOffset || (scrollToIndex !== undefined && modelCount && getOffsetForIndex(scrollToIndex)) || 0,
		scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
	});

	//@ts-expect-error missing attributes, it's ok for initialization
	let prevState: VState = {};
	let prevProps: VProps = {
		scrollToIndex,
		scrollToAlignment,
		scrollOffset,
		modelCount,
		itemSize,
		estimatedItemSize
	};

	let styleCache: { [rowidx: number]: string } = {};
	let wrapperStyle = $state('');
	let innerStyle = $state('');

	$effect(() => {
		// listen to updates:
		//@ts-expect-error unused no side effect
		scrollToIndex, scrollToAlignment, scrollOffset, modelCount, itemSize, estimatedItemSize;

		// on update:
		propsUpdated();
	});

	$effect(() => {
		// listen to updates:
		curState;

		// on update:
		stateUpdated();
	});

	$effect(() => {
		// listen to updates:
		//@ts-expect-error unused no side effect
		height, width;
		// on update:
		if (mounted) recomputeSizes(0); // call scroll.reset
	});

	(() => {
		// init run before the DOM is even ready
		if (scrollDirection === DIRECTION.VERTICAL && typeof height !== 'number') {
			throw new Error("virtual list's height must be a number when scrollDirection is 'vertical'");
		}
		if (scrollDirection === DIRECTION.HORIZONTAL && typeof width !== 'number') {
			throw new Error("virtual list's width must be a number if scrollDirection is 'horizontal'");
		}

		refresh(); // Initial Load
	})();

	onMount(() => {
		container.addEventListener('scroll', handleScroll, thirdEventArg);

		if (scrollOffset !== undefined) {
			scrollTo(scrollOffset);
		} else if (scrollToIndex !== undefined) {
			scrollTo(getOffsetForIndex(scrollToIndex));
		}
		mounted = true;
	});

	onDestroy(() => {
		if (mounted) container.removeEventListener('scroll', handleScroll);
	});

	function propsUpdated() {
		if (!mounted) return;

		if (scrollToIndex && scrollOffset) {
			console.log('VirtualList: scrollToIndex and scrollOffset shall not be used together.');
		}

		const scrollPropsHaveChanged =
			prevProps.scrollToIndex !== scrollToIndex || prevProps.scrollToAlignment !== scrollToAlignment;
		const itemPropsHaveChanged =
			prevProps.modelCount !== modelCount ||
			prevProps.itemSize !== itemSize ||
			prevProps.estimatedItemSize !== estimatedItemSize;

		if (itemPropsHaveChanged) {
			sizeAndPositionManager.updateConfig(itemSize, modelCount, estimatedItemSize);

			recomputeSizes();
		}

		const scrollOffsetHaveChanged = prevProps.scrollOffset !== scrollOffset;
		if (scrollOffsetHaveChanged) {
			curState = {
				offset: scrollOffset || 0,
				scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
			};
		} else if (typeof scrollToIndex === 'number' && (scrollPropsHaveChanged || itemPropsHaveChanged)) {
			curState = {
				offset: getOffsetForIndex(scrollToIndex, scrollToAlignment, modelCount),

				scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
			};
		}

		prevProps = {
			scrollToIndex,
			scrollToAlignment,
			scrollOffset,
			modelCount,
			itemSize,
			estimatedItemSize
		};
	}

	// updates component state and triggers refresh or scrollto accotdingly
	function stateUpdated() {
		if (!mounted) return;

		const { offset, scrollChangeReason } = curState;

		if (prevState.offset !== offset || prevState.scrollChangeReason !== scrollChangeReason) {
			refresh();
		}

		if (prevState.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
			scrollTo(offset);
		}

		prevState = curState;
	}

	function refresh() {
		const { offset } = curState;
		let { start, end } = sizeAndPositionManager.getVisibleRange(
			//@ts-expect-error wrong type assignment
			scrollDirection === DIRECTION.VERTICAL ? height : width,
			offset,
			windowOverPadding
		);

		let updatedItems = [];

		const totalSize = sizeAndPositionManager.getTotalSize();
		const heightUnit = typeof height === 'number' ? 'px' : '';
		const widthUnit = typeof width === 'number' ? 'px' : '';
		if (scrollDirection === DIRECTION.VERTICAL) {
			wrapperStyle = `height:${height}${heightUnit};width:${width}${widthUnit};`;
			innerStyle = `flex-direction:column;height:${totalSize}px;`;
		} else {
			wrapperStyle = `height:${height}${heightUnit};width:${width}${widthUnit};`;
			innerStyle = `min-height:100%;width:${totalSize}px;`;
		}

		if (start !== undefined && end !== undefined) {
			for (let index = start; index <= end; index++) {
				updatedItems.push({
					item: model[index],
					index,
					style: getStyle(index)
				});
			}

			if (onVisibleRangeUpdate) {
				// calculate the visible positions
				const r = sizeAndPositionManager.getVisibleRange(
					//@ts-expect-error wrong type assignment
					scrollDirection === DIRECTION.VERTICAL ? height : width,
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

	function scrollTo(value: number) {
		if ('scroll' in container) {
			container.scroll({
				[SCROLL_PROP[scrollDirection]]: value,
				behavior: scrollToBehaviour
			});
		} else {
			//@ts-expect-error no index signature
			container[SCROLL_PROP_LEGACY[scrollDirection]] = value;
		}
	}

	export function recomputeSizes(startIndex: number = 0) {
		styleCache = {};
		sizeAndPositionManager.resetItem(startIndex);
		refresh();
	}

	function getOffsetForIndex(
		index: number,
		align: ALIGNMENT = scrollToAlignment,
		_modelCount: number = modelCount
	): number {
		if (index < 0) {
			index = 0;
		} else if (index >= _modelCount) {
			index = _modelCount - 1;
		}

		return sizeAndPositionManager.getUpdatedOffsetForIndex(
			align,
			//@ts-expect-error wrong type assignment
			scrollDirection === DIRECTION.VERTICAL ? height : width,
			curState.offset || 0,
			index
		);
	}

	const handleScroll = (event: Event) => {
		//@ts-expect-error no index signature
		const offset = container[SCROLL_PROP_LEGACY[scrollDirection]];

		if (offset < 0 || curState.offset === offset || event.target !== container) return;

		curState = {
			offset,
			scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
		};

		if (onAfterScroll) {
			onAfterScroll({ type: 'scroll.update', offset, event });
		}
	};

	function getStyle(index: number): string {
		if (styleCache[index]) return styleCache[index];

		const { size, offset } = sizeAndPositionManager.getSizeAndPositionForIndex(index);

		let style;

		if (scrollDirection === DIRECTION.VERTICAL) {
			style = `left:0;width:100%;height:${size}px;position:absolute;top:${offset}px;`;
		} else {
			style = `top:0;width:${size}px;position:absolute;height:100%;left:${offset}px;`;
		}

		return (styleCache[index] = style);
	}
</script>

<div bind:this={container} class="virtual-list-wrapper ${zclass}" style={wrapperStyle} {...props}>
	{#if header}
		{@render header()}
	{/if}
	<div class="virtual-list-inner" style={innerStyle}>
		{#each visibleItems as el}
			{@render slot({ item: el.item, style: el.style, index: getKey ? getKey(el.index) : el.index })}
		{/each}
	</div>

	{#if footer}
		{@render footer()}
	{/if}
</div>

<style>
	.virtual-list-wrapper {
		overflow: auto;
		will-change: transform;
		-webkit-overflow-scrolling: touch;
	}

	.virtual-list-inner {
		position: relative;
		display: flex;
		width: 100%;
	}
</style>
