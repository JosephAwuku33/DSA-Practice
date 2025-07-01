import { describe, it, expect } from "vitest";
import { countMatches } from "../../../src/leetcode/countItemsMatchingARule/countItemsMatchingARule";

describe("countMatches", () => {
  it("should return the count of items matching the rule", () => {
    const items = [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ];
    const ruleKey = "color";
    const ruleValue = "silver";
    expect(countMatches(items, ruleKey, ruleValue)).toBe(1);
  });

  it("should return 0 if no items match the rule", () => {
    const items = [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ];
    const ruleKey = "type";
    const ruleValue = "tablet";
    expect(countMatches(items, ruleKey, ruleValue)).toBe(0);
  });
});
