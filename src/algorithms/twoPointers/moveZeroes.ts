export function moveZeroes(nums: number[]): number[] {
  if (nums.length === 0) return nums;

  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }

  return nums;
}
