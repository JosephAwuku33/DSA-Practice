// Two Sum Leetcode problem solution
// O(n^2) time complexity
// O(1) space complexity
export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // Add a return statement for the case when no solution is found
  return [];
}

// Two Sum Leetcode problem solution
// O(n log n) time complexity
// O(n) space complexity
export function twoSumOptimized(nums: number[], target: number): number[] {
  // Create an array of objects with value and index
  const numWithIndex = nums.map((num, index) => ({ value: num, index }));

  // Sort the array based on values
  numWithIndex.sort((a, b) => a.value - b.value);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = numWithIndex[left].value + numWithIndex[right].value;

    if (sum === target) {
      return [numWithIndex[left].index, numWithIndex[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // Return empty array if no solution is found
  return [];
}

// O(n) time complexity
// O(1) space complexity
export default function twoSumFinalSolution(nums: number[], target: number): number[] {
  let complementMap = new Map<number, number>();

  for ( let i = 0; i < nums.length; i++){
    let difference = target - nums[i];

    if ( complementMap.has(difference)){
      return [complementMap.get(difference)!, i];
    }

    complementMap.set(nums[i], i);
  }

  return [];
}

// Example usage:
// const result = twoSumOptimized([2, 7, 11, 15], 9);
// console.log(result); // Output: [0, 1]
