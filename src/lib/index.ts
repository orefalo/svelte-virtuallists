export type VirtualRowSize = number | number[] | ((index: number) => number);

export { default as VirtualList } from './VirtualList.svelte';

export interface RowAttributes {
	index: number;
	style: string;
}

export interface VirtualPosition {
	size: number;
	offset: number;
}

export interface VirtualRange {
	start?: number;
	end?: number;
}

export interface AfterScrollEvent {
	offset: number | string;
	// original event
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
