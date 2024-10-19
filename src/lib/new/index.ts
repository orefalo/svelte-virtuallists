// export type VirtualItemSize = number | number[] | ((item: unknown, index: number) => number);

export { default as VirtualList } from './VirtualListNew.svelte';

export type SizingCalculatorFn = (index: number, item: unknown) => number;

// use by the row() snippet
export interface VLSlotSignature {
  // the actual item value
  item: any;

  // The row's index being rendered, from the original dataset
  // The index is a string if the IDs are processed via the getKey() function
  index: number | string;

  // only there if there a custom sizing calculator, calculated size in px
  size?: number;
}

export interface VLRange {
  // index of the first visible item
  start: number;
  // index of the last visible item
  end: number;
}

// export interface VLRangeEvent extends VLRange {
//   type: 'range.update';
// }

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

// export enum DIRECTION {
//   HORIZONTAL = 'horizontal',
//   VERTICAL = 'vertical'
// }
