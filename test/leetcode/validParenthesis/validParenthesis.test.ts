import { describe, it, expect } from "vitest";
import validParenthesis from "../../../src/leetcode/validParenthesis/validParenthesis";

describe("Valid Paranthesis", () => {
  it("should return true for valid paranthesis", () => {
    expect(validParenthesis("([{}])")).toBe(true);
  });

  it("should return false for invalid paranthesis", () => {
    expect(validParenthesis("([)]")).toBe(false);
  });
});
