import { describe, it , expect } from "vitest";
import { binarySearch } from "../../../src/algorithms/Binary Search/binarySearch";


describe('Binary Search', () => {

    it('Should return the index of the target element', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toBe(4);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(0);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBe(8);
    });

    it('Should return -1 if the target element is not in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)).toBe(-1);
    });

    it('Should return -1 if the array is empty', () => {
        expect(binarySearch([], 10)).toBe(-1);
    });

    it('Should return -1 if the target element is not in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)).toBe(-1);
    });

    it('Should return -1 if the array is empty', () => {
        expect(binarySearch([], 10)).toBe(-1);
    });
});