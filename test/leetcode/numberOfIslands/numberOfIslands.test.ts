import { describe, it, expect } from "vitest";
import numberOfIslands from "../../../src/leetcode/numberOfIslands/numberOfIslands";
describe("Number of Islands", () => {
  it("should return 1 for a single island", () => {
    const grid = [
      ["1", "1", "1"],
      ["1", "1", "1"],
      ["1", "1", "1"],
    ];
    expect(numberOfIslands(grid)).toBe(1);
  });

  it("should return 0 for a grid with no islands", () => {
    const grid = [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    expect(numberOfIslands(grid)).toBe(0);
  });

  it("should return correct count for multiple islands", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numberOfIslands(grid)).toBe(3);
  });

  it("should handle diagonal cells as separate islands", () => {
    const grid = [
      ["1", "0", "1"],
      ["0", "1", "0"],
      ["1", "0", "1"],
    ];
    expect(numberOfIslands(grid)).toBe(5);
  });

//   it("should handle empty grid", () => {
//     const grid: string[][] = [];
//     expect(numberOfIslands(grid)).toBe(0);
//   });

  it("should handle grid with single row", () => {
    const grid = [["1", "0", "1", "1", "0", "1", "0"]];
    expect(numberOfIslands(grid)).toBe(3);
  });

  it("should handle grid with single column", () => {
    const grid = [["1"], ["0"], ["1"], ["1"]];
    expect(numberOfIslands(grid)).toBe(2);
  });

  it("should handle complex island shapes", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "0", "0", "0", "0"],
      ["1", "1", "0", "1", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numberOfIslands(grid)).toBe(2);
  });
});
