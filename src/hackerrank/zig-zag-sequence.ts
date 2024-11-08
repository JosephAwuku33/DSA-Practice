// My own variation of the zig-zag sequence problem where the final array returned shouldn't be 
// in the smallest lexicographical order.
export function zigZagSequence(arr: number[]): number[] {
  let n = arr.length;
  let k = Math.floor((n + 1) / 2);
  let sortedNums = arr.sort((a, b) => a - b);
  console.log(`The sorted array nums are ${sortedNums}`);

  let zigZaggedArray: number[] = [];
  let ascendingPartOfSortedNums: number[] = sortedNums.slice(0, k - 1);
  console.log(`The ascending part of the sorted nums are ${ascendingPartOfSortedNums}`);
  
  // Get the middle element
  // let middleElement = sortedNums[k - 1];
  
  let descendingPartOfSortedNums: number[] = sortedNums
    .slice(k - 1, n)
    .sort((a, b) => b - a);

  console.log(`The descending part of the sorted nums are ${descendingPartOfSortedNums}`);

  zigZaggedArray.push(
    ...ascendingPartOfSortedNums,
    ...descendingPartOfSortedNums
  );
  return zigZaggedArray;
}
