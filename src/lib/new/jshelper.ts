
type BinarySearchReturn<T> = {
  index: number;
  value: T;
  count: number;
  hit: boolean;
  greater?: boolean;
} | null;

interface BinarySearchOptions {
  start?: number;
  end?: number;
  returnNearestIfNoHit?: boolean;
  maxTimes?: number;
}
/**
 * binarySearch, 二分查找
 * @param arr
 * @param callback return `mid - your_value` for ascending array
 * @param opt
 * @returns
 */
export function binarySearch<T>(
  arr: T[],
  callback: (mid: T, index: number, count: number) => number,
  opt: BinarySearchOptions = {}
): BinarySearchReturn<T> {
  opt = {
    start: 0,
    end: arr.length - 1,
    maxTimes: 1000,
    ...opt
  };
  let start = opt.start as number;
  let end = opt.end as number;
  const returnNearestIfNoHit = opt.returnNearestIfNoHit;
  const maxTimes = opt.maxTimes as number;
  // let { start, end } = opt;
  //  const { returnNearestIfNoHit, maxTimes } = opt;
  let midNum: number;
  let mid: T;
  if (!start) {
    start = 0;
    end = arr.length - 1;
  }
  let i = 0;
  let r = 0;
  while (start >= 0 && start <= end) {
    if (i >= maxTimes) {
      throw Error(`binarySearch: loop times is over ${maxTimes}, you can increase the limit.`);
    }
    midNum = Math.floor((end - start) / 2 + start);
    mid = arr[midNum];
    const count = i + 1;
    r = callback(mid, midNum, count);
    if (r > 0) {
      end = midNum - 1;
    } else if (r < 0) {
      start = midNum + 1;
    } else {
      return { index: midNum as number, value: mid as T, count, hit: true };
    }
    i++;
  }
  return returnNearestIfNoHit
    ? {
        //@ts-expect-error used before being assigned
        index: midNum as number,
        //@ts-expect-error used before being assigned
        value: mid as T,
        count: i + 1,
        hit: false,
        greater: r > 0
      }
    : null;
}
