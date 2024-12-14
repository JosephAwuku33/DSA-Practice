import { describe, it, expect } from "vitest";
import { fibonacciValue, fibonacciMemo, fibonacciTabulation } from "../../../src/leetcode/fibonacciSequence/fibonacciSequence";

describe("Fibonacci Sequence Test", () => {
    it("Should return 1 for n = 1", () => {
        expect(fibonacciValue(1)).toBe(1);
    });

    it("Should return 5 for n = 5", () => {
        expect(fibonacciValue(5)).toBe(5);
    });

    it("Should return 21 for n = 8", () => {
        expect(fibonacciValue(8)).toBe(21);
    });
});

describe("Fibonacci Sequence Memoization Test", () => {
    it("Should return 1 for n = 1", () => {
        expect(fibonacciMemo(1)).toBe(1);
    });

    it("Should return 5 for n = 5", () => {
        expect(fibonacciMemo(5)).toBe(5);
    });

    it("Should return 21 for n = 8", () => {
        expect(fibonacciMemo(8)).toBe(21);
    });
});

describe("Fibonacci Sequence Tabulation Test", () => {
    it("Should return 1 for n = 1", () => {
        expect(fibonacciTabulation(1)).toBe(1);
    });

    it("Should return 5 for n = 5", () => {
        expect(fibonacciTabulation(5)).toBe(5);
    });

    it("Should return 21 for n = 8", () => {
        expect(fibonacciTabulation(8)).toBe(21);
    });
});