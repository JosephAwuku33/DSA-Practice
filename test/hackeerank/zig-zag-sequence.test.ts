import { describe, it, expect } from "vitest";
import { zigZagSequence } from "../../src/hackerrank/zig-zag-sequence";

describe("zig zag sequence", () => {
  let nums = [2, 3, 5, 1, 4];

  it("should return the zig zag sequence", () => {
    expect(zigZagSequence(nums)).toEqual([1, 2, 5, 4, 3]);
    console.log(zigZagSequence(nums));
  });
});
