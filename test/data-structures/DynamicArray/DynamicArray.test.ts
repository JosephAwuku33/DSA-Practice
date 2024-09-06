import { describe, expect, beforeEach, it } from "vitest";
import DynamicArray from "../../../src/data-structures/DynamicArray/DynamicArray"

describe('DynamicArray', () => {
    let dynamicArray: DynamicArray<number>;

    beforeEach(() => {
        dynamicArray = new DynamicArray<number>();
    });

    it('should add elements', () => {
        dynamicArray.add(1);
        dynamicArray.add(2);
        expect(dynamicArray.get(0)).toBe(1);
        expect(dynamicArray.get(1)).toBe(2);
    });

    it('should check if an array is empty', () => {
        expect(dynamicArray.isEmpty()).toBe(true);
        dynamicArray.add(1);
        expect(dynamicArray.isEmpty()).toBe(false);
    });

    it('should remove and return element', () => {
        dynamicArray.add(1);
        dynamicArray.add(2);
        expect(dynamicArray.remove(1)).toBe(2)
    });

    it('should retrieve an element at a specific index', () => {
        dynamicArray.add(10);
        dynamicArray.add(20);
        expect(dynamicArray.get(0)).toBe(10);
    });
});