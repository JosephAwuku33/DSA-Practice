import { describe, it, expect } from "vitest";
import twoSumFinalSolution from "../../../src/leetcode/2sum/twoSum";
import { twoSumOptimized } from "../../../src/leetcode/2sum/twoSum";

describe("Two Sum Leetcode problem", () => {
  it("should return the indices of the two numbers such that they add up to a specific target", () => {
    expect(twoSumFinalSolution([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumFinalSolution([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSumFinalSolution([3, 3], 6)).toEqual([0, 1]);
  });

  it("should return the indices of the two numbers such that they add up to a specific target but in O(nlogn) time", () => {
    expect(twoSumOptimized([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumOptimized([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
