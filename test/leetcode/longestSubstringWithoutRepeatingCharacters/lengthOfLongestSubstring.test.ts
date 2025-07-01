import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "../../../src/leetcode/longestSubstringWithoutRepeatingCharacters/lengthOfLongestSubstring";

describe('longestSubstringWithoutRepeatingCharacters', () => {
    it('should return 3 for "abcabcbb"', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });

    it('should return 1 for "bbbbb"', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
        console.log(`lengthOfLongestSubstring("bbbbb") = ${lengthOfLongestSubstring("bbbbb")}`);
    });

    it('should return 3 for "pwwkew"', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });
});