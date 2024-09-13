import { describe, it, expect } from "vitest";
import salesByMatch from "../../src/hackerrank/salesByMatch";

describe("sales by Match problem", () => {
  let nums: number[];

  // the problem is basically to output out the number of pairs of socks in a pile

  it("should return the numbers of pairs", () => {
    nums = [1, 4, 3, 2, 1, 3, 4, 5, 8];
    expect(salesByMatch(nums.length, nums)).toBe(3);
  });
});
