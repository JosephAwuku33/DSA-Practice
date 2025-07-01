import { describe, it, expect } from "vitest";
import { solution } from "../../src/codesignal/stringPatternMatching";

describe("stringPatternMatching", () => {
    it("should return 2", () => {
        expect(solution("010", "amazing")).toEqual(2);
    });

    it("should return 0", () => {
        expect(solution("010", "hello")).toEqual(0);
    });
});