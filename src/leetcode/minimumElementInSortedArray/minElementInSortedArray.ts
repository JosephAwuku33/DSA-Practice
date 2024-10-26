export function minElementInSortedArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middleIndex = Math.floor((left + right) / 2);

    if (arr[middleIndex] > arr[right]) {
      left = middleIndex + 1;
    } else {
      right = middleIndex;
    }
  }

  return arr[left];
}
