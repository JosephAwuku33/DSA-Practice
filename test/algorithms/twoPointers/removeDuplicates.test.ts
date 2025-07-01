import { describe, it, expect } from "vitest";
import { removeDuplicates } from "../../../src/algorithms/twoPointers/removeDuplicates";

describe("remove Duplicates from array", () => {
  let nums: number[] = [0, 1, 1, 2, 2, 3, 3];
  it("return the number of unique values", () => {
    expect(removeDuplicates(nums)).toBe(4);
  });
});
