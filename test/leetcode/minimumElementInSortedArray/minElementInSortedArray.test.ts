import { describe, it, expect } from "vitest";
import { minElementInSortedArray } from "../../../src/leetcode/minimumElementInSortedArray/minElementInSortedArray";

describe("minElementInSortedArray", () => {
  it("should return the minimum element in a sorted array", () => {
    expect(minElementInSortedArray([3, 4, 5, 1, 2])).toBe(1);
    expect(minElementInSortedArray([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    expect(minElementInSortedArray([11, 13, 15, 17])).toBe(11);
  });
});
