import { describe, it, expect } from "vitest";
import diagonalDifference from "../../src/hackerrank/diagonalDifference";

describe("diagonalDifference", () => {
  let nums: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  it("should return the absolute difference between the sum of the primary and secondary diagonals", () => {
    expect(diagonalDifference(nums)).toBe(2);
  });
});
