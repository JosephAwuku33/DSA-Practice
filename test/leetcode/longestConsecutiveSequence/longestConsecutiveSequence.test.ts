import { longestConsecutiveSequenceInShortTime, longestConsecutiveSequence } from "../../../src/leetcode/longestConsecutiveSequence/longestConsecutiveSequence";

import { describe, expect, it, beforeEach } from "vitest";

describe("longestConsecutiveSequence", () => {
  let nums: number[];

  beforeEach(() => {
    nums = [2, 20, 4, 10, 3, 4, 5];
  });

  it("should return the longest consecutive sequence in quadratic time", () => {
    expect(longestConsecutiveSequence(nums)).toBe(4);
  });

  it("should return the longest consecutive sequence in linear time", () => {
    expect(longestConsecutiveSequenceInShortTime(nums)).toBe(4);
  });
});
