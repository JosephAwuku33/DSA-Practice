import { describe, it, expect } from "vitest";
import { findTheTownJudge } from "../../../src/leetcode/findTheTownJudge/findTheTownJudge";

describe("findTheTownJudge", () => {
  it("should return the town judge", () => {
    expect(findTheTownJudge(2, [[1, 2]])).toEqual(2);
    expect(
      findTheTownJudge(3, [
        [1, 3],
        [2, 3],
      ])
    ).toEqual(3);
    expect(
      findTheTownJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toEqual(-1);
    expect(
      findTheTownJudge(3, [
        [1, 2],
        [2, 3],
      ])
    ).toEqual(-1);
    expect(
      findTheTownJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
      ])
    ).toEqual(3);
  });
});
