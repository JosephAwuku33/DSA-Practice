// Brute Force solution
export function houseRobber(nums: number[]): number {
  function robFrom(index: number): number {
    if (index >= nums.length) return 0;

    // Choice 1: Rob the current house and move to i + 2
    const robCurrent = nums[index] + robFrom(index + 2);

    // Choice 2: Skipt the current house and move to i + 1
    const skipCurrent = robFrom(index + 1);

    // Return the maximum of the two choices
    return Math.max(robCurrent, skipCurrent);
  }

  return robFrom(0);
}

// Bottom Up Solution
export function houseRobberTabulation(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  const dp: number[] = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
}
