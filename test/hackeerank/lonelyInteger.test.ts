import { describe, it, expect, beforeEach } from "vitest";
import lonelyInteger from "../../src/hackerrank/lonelyInteger";

describe("lonely Integer Problem", () => {
  let nums: number[] = [];

  beforeEach(() => {
    nums = [1, 2, 3, 4, 3, 2, 1];
  });

  it("should return the integer which doesn't have a duplicate", () => {
    expect(lonelyInteger(nums)).toBe(4);
  });
});
