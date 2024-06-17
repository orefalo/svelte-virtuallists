export type VirtualRowSize = number | number[] | ((index: number) => number);

export { default as VirtualList } from './VirtualList.svelte';

// use by the row() snippet
export interface RowAttributes {
	// the index of the row being rendered, from the original dataset
	index: number;
	// the calculated style for this row
	style: string;
}

export interface VirtualPosition {
	size: number;
	offset: number;
}

export interface VirtualRange {
	// index of the first visible item
	start: number;
	// index of the last visible item
	end: number;
}

export interface VirtualRangeEvent extends VirtualRange {
	type: 'range.update';
}

export interface AfterScrollEvent {
	type: 'scroll.update';
	// either the value of `wrapper.scrollTop` or `wrapper.scrollLeft`
	offset: number | string;
	// the original event
	event: Event;
}

export enum SCROLL_BEHAVIOR {
	AUTO = 'auto',
	SMOOTH = 'smooth',
	INSTANT = 'instant'
}

export enum ALIGNMENT {
	AUTO = 'auto',
	START = 'start',
	CENTER = 'center',
	END = 'end'
}

export enum DIRECTION {
	HORIZONTAL = 'horizontal',
	VERTICAL = 'vertical'
}

export enum SCROLL_CHANGE_REASON {
	OBSERVED = 0,
	REQUESTED = 1
}
