/*
 * new: added types and remove {} input parameter pattern
 * SizeAndPositionManager was forked from svelte-tiny-virtual-list,
 * which was forked from react-tiny-virtual-list,
 * which was forked from react-virtualized.
 */

import { ALIGNMENT, type VirtualItemSize, type VirtualRange, type VirtualPosition } from '.';

export default class SizeAndPositionManager {
	private model: Array<any>;
	private modelCount: number;
	private itemSize: VirtualItemSize;
	private estimatedItemSize?: number;
	private itemSizeAndPositionData: Record<number, VirtualPosition>;
	private lastMeasuredIndex: number;
	private totalSize?: number;

	constructor(model: Array<any>, modelCount: number, itemSize: VirtualItemSize, estimatedItemSize?: number) {
		this.model = model;
		this.itemSize = itemSize;
		this.modelCount = modelCount;
		this.estimatedItemSize = estimatedItemSize;
		this.itemSizeAndPositionData = {};
		this.lastMeasuredIndex = -1;

		this.checkForMismatchItemSizeAndItemCount();

		if (!this.justInTime) this.computeTotalSizeAndPositionData();
	}

	get justInTime() {
		return typeof this.itemSize === 'function';
	}

	updateConfig(itemSize: VirtualItemSize, itemCount: number, estimatedItemSize?: number) {
		if (itemCount !== undefined) {
			this.modelCount = itemCount;
		}

		if (estimatedItemSize !== undefined) {
			this.estimatedItemSize = estimatedItemSize;
		}

		if (itemSize !== undefined) {
			this.itemSize = itemSize;
		}

		this.checkForMismatchItemSizeAndItemCount();

		if (this.justInTime && this.totalSize !== undefined) {
			this.totalSize = undefined;
		} else {
			this.computeTotalSizeAndPositionData();
		}
	}

	checkForMismatchItemSizeAndItemCount() {
		if (Array.isArray(this.itemSize) && this.itemSize.length < this.modelCount) {
			throw Error(`When itemSize is an array, itemSize.length can't be smaller than itemCount`);
		}
	}

	getSize(index: number) {
		const { itemSize } = this;

		if (typeof itemSize === 'function') {
			return itemSize(this.model[index], index);
		}

		return Array.isArray(itemSize) ? itemSize[index] : itemSize;
	}

	/**
	 * Compute the totalSize and itemSizeAndPositionData at the start,
	 * only when itemSize is a number or an array.
	 */
	computeTotalSizeAndPositionData() {
		let totalSize = 0;
		for (let i = 0; i < this.modelCount; i++) {
			const size = this.getSize(i);
			const offset = totalSize;
			totalSize += size;

			this.itemSizeAndPositionData[i] = {
				offset,
				size
			};
		}

		this.totalSize = totalSize;
	}

	getLastMeasuredIndex() {
		return this.lastMeasuredIndex;
	}

	/**
	 * This method returns the size and position for the item at the specified index.
	 *
	 */
	getSizeAndPositionForIndex(index: number) {
		if (index < 0 || index >= this.modelCount) {
			throw Error(`Requested index ${index} is outside of range 0..${this.modelCount}`);
		}

		return this.justInTime ? this.getJustInTimeSizeAndPositionForIndex(index) : this.itemSizeAndPositionData[index];
	}

	/**
	 * This is used when itemSize is a function.
	 * just-in-time calculates (or used cached values) for items leading up to the index.
	 */
	getJustInTimeSizeAndPositionForIndex(index: number) {
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

	getSizeAndPositionOfLastMeasuredItem() {
		return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : { offset: 0, size: 0 };
	}

	getEstimatedItemSize(): number {
		return this.estimatedItemSize || (typeof this.itemSize === 'number' && this.itemSize) || 50;
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
			(this.modelCount - this.lastMeasuredIndex - 1) * this.getEstimatedItemSize()
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

	getVisibleRange(containerSize: number = 0, offset: number, windowOverPadding: number): VirtualRange {
		const totalSize = this.getTotalSize();

		if (totalSize === 0) {
			return { start: 0, end: 0 };
		}

		const maxOffset = offset + containerSize;
		let start = this.findNearestItem(offset);

		if (start === undefined) {
			throw Error(`Invalid offset ${offset} specified`);
		}

		const datum = this.getSizeAndPositionForIndex(start);
		offset = datum.offset + datum.size;

		let end = start;

		while (offset < maxOffset && end < this.modelCount - 1) {
			end++;
			offset += this.getSizeAndPositionForIndex(end).size;
		}

		if (windowOverPadding) {
			start = Math.max(0, start - windowOverPadding);
			end = Math.min(end + windowOverPadding, this.modelCount - 1);
		}

		return {
			start,
			end
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
	findNearestItem(offset: number): number {
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

		while (index < this.modelCount && this.getSizeAndPositionForIndex(index).offset < offset) {
			index += interval;
			interval *= 2;
		}

		return this.binarySearch(Math.floor(index / 2), Math.min(index, this.modelCount - 1), offset);
	}
}
