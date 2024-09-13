import { describe, it , expect,  } from "vitest";
import { SinglyLinkedList } from "../../../src/data-structures/linkedlist/LinkedList";


describe("SinglyLinkedList", () => {
    it("should be empty when initialized", () => {
        const list = new SinglyLinkedList<number>();
        expect(list.isEmpty()).toBe(true);
    });

    it("should insert a node at the beginning", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtBeginning(1);
        expect(list.isEmpty()).toBe(false);
    });

    it("should insert a node at the end", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtEnd(1);
        expect(list.isEmpty()).toBe(false);
    });

    it("should insert multiple nodes at the beginning", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtBeginning(1);
        list.insertAtBeginning(2);
        list.insertAtBeginning(3);
        list.print(); // 3 --> 2 --> 1 -->
    });

    it("should insert multiple nodes at the end", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.print(); // 1 --> 2 --> 3 -->
    });

    it("should delete a node by value", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.deleteValue(2);
        list.print(); // 1 --> 3 -->
    });

    it("should handle deleting a non-existent value", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.deleteValue(4);
        list.print(); // 1 --> 2 --> 3 -->
    });

    it("should delete the head node", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.deleteValue(1);
        list.print(); // 2 --> 3 -->
    });

    it("should print the list", () => {
        const list = new SinglyLinkedList<number>();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.print(); // 1 --> 2 --> 3 -->
    });
});
