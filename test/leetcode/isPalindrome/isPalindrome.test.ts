import { describe, it, expect } from "vitest";
import { isPalindrome } from "../../../src/leetcode/isPalindrome/isPalindrome";

describe("Return if a string is a palindrome", () => {
    it("should return true for a simple palindrome", () => {
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("madam")).toBe(true);
    });

    it("should return true for palindromes with spaces and punctuation", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
        expect(isPalindrome("Race a car!")).toBe(false);
    });

    it("should handle empty strings", () => {
        expect(isPalindrome("")).toBe(false);
    });

    it("should be case insensitive", () => {
        expect(isPalindrome("RaCeCaR")).toBe(true);
        expect(isPalindrome("MaDaM")).toBe(true);
    });

    it("should handle strings with numbers", () => {
        expect(isPalindrome("12321")).toBe(true);
        expect(isPalindrome("123456")).toBe(false);
    });

    it("should handle strings with mixed alphanumeric characters", () => {
        expect(isPalindrome("A1b22b1a")).toBe(true);
        expect(isPalindrome("A1b33c")).toBe(false);
    });

    it("should handle strings with special characters", () => {
        expect(isPalindrome("A man, a plan, a canal - Panama!")).toBe(true);
        expect(isPalindrome("race a car")).toBe(false);
        expect(isPalindrome("0P")).toBe(false);
    });
});