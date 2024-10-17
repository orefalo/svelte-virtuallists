/*
 * new: added types and remove {} input parameter pattern
 * SizeAndPositionManager was forked from svelte-tiny-virtual-list,
 * which was forked from react-tiny-virtual-list,
 * which was forked from react-virtualized.
 */

import { ALIGNMENT, type SizingCalculatorFn, type VLRange } from './index.js';

type SizeAndOffsetData = Record<
  number,
  {
    size: number;
    offset: number;
  }
>;

export default class SizeAndPositionManager {
  private model: Array<any>;
  // implicitly this is model.length
  // private model.length: number;

  // size of the row in px, either calculate or constant
  private sizeCalculatorFn?: SizingCalculatorFn;
  private averageSize?: number;
  private itemSizeAndPositionData: SizeAndOffsetData = {};
  private lastMeasuredIndex: number = -1;
  private totalSize?: number;

  constructor(
    model: Array<any>,
    // model.length: number,
    sizeCalculatorFn?: SizingCalculatorFn,
    averageSize?: number
  ) {
    this.model = model;
    this.sizeCalculatorFn = sizeCalculatorFn;
    // this.model.length = model.length;
    this.averageSize = averageSize;

    if (!this.justInTime) this.computeTotalSizeAndPositionData();
  }

  get justInTime() {
    return typeof this.sizeCalculatorFn === 'function';
  }

  mutateState(
    sizeCalculatorFn?: SizingCalculatorFn,
    model?: Array<any>,
    estimatedItemSize?: number
  ) {
    if (model && this.model.length !== model.length) {
      this.model = model;
    }

    if (estimatedItemSize !== undefined) {
      this.averageSize = estimatedItemSize;
    }

    if (sizeCalculatorFn !== undefined) {
      this.sizeCalculatorFn = sizeCalculatorFn;
    }

    if (this.justInTime && this.totalSize !== undefined) {
      this.totalSize = undefined;
    } else {
      this.computeTotalSizeAndPositionData();
    }
  }

  private getSize(index: number) {
    return this.sizeCalculatorFn?.(this.model[index], index) || this.averageSize;
  }

  /**
   * Compute the totalSize and itemSizeAndPositionData at the start,
   * only when itemSize is a number or an array.
   */
  computeTotalSizeAndPositionData() {
    let offset = 0;
    for (let i = 0; i < this.model.length; i++) {
      let size = this.getSize(i);
      if (!size) {
        console.log('item size is undefined');
        size = 0;
      }

      this.itemSizeAndPositionData[i] = {
        offset,
        size
      };
      offset += size;
    }

    this.totalSize = offset;
  }

  /**
   * This method returns the size and position for the item at the specified index.
   *
   */
  getSizeAndPositionForIndex(index: number) {
    if (index < 0 || index >= this.model.length) {
      throw Error(`Requested index ${index} is outside of range 0..${this.model.length}`);
    }

    return this.justInTime
      ? this.getJustInTimeSizeAndPositionForIndex(index)
      : this.itemSizeAndPositionData[index];
  }

  /**
   * This is used when itemSize is a function.
   * just-in-time calculates (or used cached values) for items leading up to the index.
   */
  private getJustInTimeSizeAndPositionForIndex(index: number) {
    if (index > this.lastMeasuredIndex) {
      const lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      let offset = lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size;

      for (let i = this.lastMeasuredIndex + 1; i <= index; i++) {
        const size = this.getSize(i);

        if (size === undefined || isNaN(size)) {
          throw Error(`Invalid size returned for index ${i} of value ${size}`);
        }

        this.itemSizeAndPositionData[i] = {
          offset,
          size
        };

        offset += size;
      }

      this.lastMeasuredIndex = index;
    }

    return this.itemSizeAndPositionData[index];
  }

  private getSizeAndPositionOfLastMeasuredItem() {
    return this.lastMeasuredIndex >= 0
      ? this.itemSizeAndPositionData[this.lastMeasuredIndex]
      : { offset: 0, size: 0 };
  }

  private getEstimatedItemSize(): number {
    return (
      this.averageSize || (typeof this.sizeCalculatorFn === 'number' && this.sizeCalculatorFn) || 50
    );
  }

  /**
   * Total size of all items being measured.
   */
  getTotalSize(): number {
    // Return the pre computed totalSize when itemSize is number or array.
    if (this.totalSize) return this.totalSize;

    /**
     * When itemSize is a function,
     * This value will be completedly estimated initially.
     * As items as measured the estimate will be updated.
     */
    const lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();

    return (
      lastMeasuredSizeAndPosition.offset +
      lastMeasuredSizeAndPosition.size +
      (this.model.length - this.lastMeasuredIndex - 1) * this.getEstimatedItemSize()
    );
  }

  /**
   * Determines a new offset that ensures a certain item is visible, given the alignment.
   *
   * @param align Desired alignment within container
   * @param containerSize Size (width or height) of the container viewport
   * @return Offset to use to ensure the specified item is visible
   */
  getUpdatedOffsetForIndex(
    align: ALIGNMENT = ALIGNMENT.START,
    containerSize: number,
    currentOffset: number,
    targetIndex: number
  ): number {
    if (containerSize <= 0) {
      return 0;
    }

    const datum = this.getSizeAndPositionForIndex(targetIndex);

    const maxOffset = datum.offset;
    const minOffset = maxOffset - containerSize + datum.size;

    let idealOffset;

    switch (align) {
      case ALIGNMENT.END:
        idealOffset = minOffset;
        break;
      case ALIGNMENT.CENTER:
        idealOffset = maxOffset - (containerSize - datum.size) / 2;
        break;
      case ALIGNMENT.START:
        idealOffset = maxOffset;
        break;
      default:
        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
    }

    const totalSize = this.getTotalSize();
    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
  }

  // returns an index range
  getVisibleRange(
    containerSize: number = 0,
    offset: number,
    windowOverPaddingCount: number
  ): VLRange {
    const totalSize = this.getTotalSize();

    if (totalSize === 0) {
      return { start: 0, end: 0 };
    }

    const maxOffset = offset + containerSize;
    let startIdx = this.findNearestItem(offset);

    if (startIdx === undefined) {
      throw Error(`Invalid offset ${offset} specified`);
    }

    const datum = this.getSizeAndPositionForIndex(startIdx);
    offset = datum.offset + datum.size;

    let endIdx = startIdx;

    while (offset < maxOffset && endIdx < this.model.length - 1) {
      endIdx++;
      offset += this.getSizeAndPositionForIndex(endIdx).size;
    }

    if (windowOverPaddingCount) {
      startIdx = Math.max(0, startIdx - windowOverPaddingCount);
      endIdx = Math.min(endIdx + windowOverPaddingCount, this.model.length - 1);
    }

    return {
      start: startIdx,
      end: endIdx
    };
  }

  /**
   * Clear all cached values for items after the specified index.
   * This method should be called for any item that has changed its size.
   * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionForIndex() is called.
   *
   */
  resetItem(index: number) {
    this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, index - 1);
  }

  /**
   * Searches for the item (index) nearest the specified offset.
   *
   * If no exact match is found the next lowest item index will be returned.
   * This allows partially visible items (with offsets just before/above the fold) to be visible.
   *
   */
  private findNearestItem(offset: number): number {
    if (isNaN(offset)) {
      throw Error(`Invalid offset ${offset} specified`);
    }

    // Our search algorithms find the nearest match at or below the specified offset.
    // So make sure the offset is at least 0 or no match will be found.
    offset = Math.max(0, offset);

    const lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
    const lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);

    if (lastMeasuredSizeAndPosition.offset >= offset) {
      // If we've already measured items within this range just use a binary search as it's faster.
      return this.binarySearch(0, lastMeasuredIndex, offset);
    } else {
      // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
      // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
      // The overall complexity for this approach is O(log n).
      return this.exponentialSearch(lastMeasuredIndex, offset);
    }
  }

  private binarySearch(low: number, high: number, offset: number): number {
    let middle = 0;
    let currentOffset = 0;

    while (low <= high) {
      middle = low + Math.floor((high - low) / 2);
      currentOffset = this.getSizeAndPositionForIndex(middle).offset;

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

  private exponentialSearch(index: number, offset: number): number {
    let interval = 1;

    while (index < this.model.length && this.getSizeAndPositionForIndex(index).offset < offset) {
      index += interval;
      interval *= 2;
    }

    return this.binarySearch(Math.floor(index / 2), Math.min(index, this.model.length - 1), offset);
  }
}
