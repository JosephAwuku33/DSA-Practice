import { describe, it, expect } from "vitest";
import { houseRobber, houseRobberTabulation } from "../../../src/leetcode/houseRobbers/houseRobber";

describe("House Robbers", () => {
    it("should return the maximum amount of money that can be robbed", () => {
        expect(houseRobber([1, 2, 3, 1])).toBe(4);
        expect(houseRobber([2, 7, 9, 3, 1])).toBe(12);
        expect(houseRobber([2, 1, 1, 2])).toBe(4);
    });

    it("should return 0 if there are no houses", () => {
        expect(houseRobber([])).toBe(0);
    });

    it("should return the amount of money if there is only one house", () => {
        expect(houseRobber([1])).toBe(1);
    });

    it("should return the amount of money if there are only two houses", () => {
        expect(houseRobber([1, 2])).toBe(2);
    });
});

describe("House Robbers Tabulation", () => {
    it("should return the maximum amount of money that can be robbed", () => {
        expect(houseRobberTabulation([1, 2, 3, 1])).toBe(4);
        expect(houseRobberTabulation([2, 7, 9, 3, 1])).toBe(12);
        expect(houseRobberTabulation([2, 1, 1, 2])).toBe(4);
    });

    it("should return 0 if there are no houses", () => {
        expect(houseRobberTabulation([])).toBe(0);
    });

    it("should return the amount of money if there is only one house", () => {
        expect(houseRobberTabulation([1])).toBe(1);
    });

    it("should return the amount of money if there are only two houses", () => {
        expect(houseRobberTabulation([1, 2])).toBe(2);
    });
});