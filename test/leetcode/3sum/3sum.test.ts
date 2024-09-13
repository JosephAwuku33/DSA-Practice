import { describe, it, expect, beforeEach } from "vitest";
import threeSum from "../../../src/leetcode/3sum/3sum";

describe("Three Sum of Integer", () => {
  let nums: number[];

  beforeEach(() => {
    nums = [-1, 0, 1, 2, -1, -4];
  });

  it("should return the triplets", () => {
    expect(threeSum(nums)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
});
