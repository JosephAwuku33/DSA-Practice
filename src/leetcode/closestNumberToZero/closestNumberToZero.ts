export function closestToZero(nums: number[]): number {
  let closest = nums[0];

  for (let num of nums) {
    if (
      Math.abs(num) < Math.abs(closest) ||
      (Math.abs(num) === Math.abs(closest) && num > closest)
    ) {
      closest = num;
    }
  }

  return closest;
}
