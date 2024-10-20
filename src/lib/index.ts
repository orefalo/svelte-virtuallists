export { default as VirtualList } from './VirtualListNew.svelte';

// sizing calculator signature, used to programmatically size elements. recommendation: stick to css and defaults
export type SizingCalculatorFn = (index: number, item: unknown) => number;

// used by the vl_slot() snippet
export interface VLSlotSignature<ItemType> {
  // The row's index being rendered, from the original dataset
  // The index is a string if the IDs are processed via the getKey() function
  index: number | string;

  // the item being rendered
  item: ItemType;

  // only present if there a custom sizing calculator configured, holds calculated size in pixels
  size?: number;
}

export interface VLRangeEvent {
  // index of the first visible item
  start: number;
  // index of the last visible item
  end: number;
}

export interface VLScrollEvent {
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
