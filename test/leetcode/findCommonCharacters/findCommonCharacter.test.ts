import { describe, it, expect } from "vitest";

import { commonChars } from "../../../src/leetcode/findCommonCharacters/findCommonCharacters";

describe("findCommonCharacters", () => {
  it("should return common characters in multiple words", () => {
    const words = ["bella", "label", "roller"];
    const result = commonChars(words);
    expect(result).toEqual(["e", "l", "l"]);
  });

  it("should return an empty array when no common characters exist", () => {
    const words = ["abc", "def", "ghi"];
    const result = commonChars(words);
    expect(result).toEqual([]);
  });

  it("should handle single character words", () => {
    const words = ["a", "a", "b"];
    const result = commonChars(words);
    expect(result).toEqual([]);
  });

  it("should handle words with varying lengths and characters", () => {
    const words = ["cool", "lock", "cook"];
    const result = commonChars(words);
    expect(result).toEqual(["c", "o"]);
  });

  
});
