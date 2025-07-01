import { describe, it, expect } from "vitest";
import { prefixSum } from "../../../src/algorithms/prefixSum/prefixSum";
describe("prefixSum", () => {
  it("should return the correct prefix sum for a given array", () => {
    expect(prefixSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  it("should handle an array with a single element", () => {
    expect(prefixSum([5])).toEqual([5]);
  });

  it("should handle an array with negative numbers", () => {
    expect(prefixSum([-1, -2, -3, -4])).toEqual([-1, -3, -6, -10]);
  });

  it("should handle an array with mixed positive and negative numbers", () => {
    expect(prefixSum([1, -2, 3, -4])).toEqual([1, -1, 2, -2]);
  });

  it("should handle an empty array", () => {
    expect(prefixSum([])).toEqual([]);
  });
});
