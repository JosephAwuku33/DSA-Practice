import {
  productOfArrayExceptSelf,
  productOfArrayExceptSelfTwoPointers,
} from "../../../src/leetcode/productOfArrayExceptSelf/productOfArrayExceptSelf";
import { describe, expect, beforeEach, it } from "vitest";

describe("productOfArrayExceptSelf", () => {
  let nums: number[];

  beforeEach(() => {
    nums = [1, 2, 3, 4];
  });

  it("should return an array of products", () => {
    expect(productOfArrayExceptSelf(nums)).toEqual([24, 12, 8, 6]);
  });

  it("should return an array of products using the two pointer technique", () => {
    expect(productOfArrayExceptSelfTwoPointers(nums)).toEqual([24, 12, 8, 6]);
  });
});
