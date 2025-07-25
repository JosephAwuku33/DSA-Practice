export function getConcatenation(nums: number[]) {
  let n = nums.length;
  let ans: number[] = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
}
