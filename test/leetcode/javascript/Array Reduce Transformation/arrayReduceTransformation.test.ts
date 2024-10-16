import { describe, it, expect } from "vitest";
import reduce from "../../../../src/leetcode/javascript/Array Reduce Transformation/arrayReduceTransformation";

describe("Array Reduce Transformation", () => {
  it("should return 10", () => {
    const nums = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr;
    const init = 0;

    expect(reduce(nums, fn, init)).toBe(10);
  });

  it("should return 0", () => {
    const nums = [] as number[];
    const fn = (accum: number, curr: number) => accum + curr;
    const init = 0;

    expect(reduce(nums, fn, init)).toBe(0);
  });

  it("should return 130", () => {
    const nums = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr * curr;
    const init = 100;

    expect(reduce(nums, fn, init)).toBe(130);
  });
});
