import { describe, it, expect } from "vitest";
import { moveZeroes } from "../../../src/algorithms/twoPointers/moveZeroes";

describe("moveZeroes problem", () => {
  let nums = [0, 1, 0, 3, 12];
  it("log the values ", () => {
    console.log(`The console log of the operation is ${moveZeroes(nums)}`);
  });
});
