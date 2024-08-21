import { describe, it, expect, beforeEach } from 'vitest';
import Queue from '../../../src/data-structures/queue/Queue'

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    it('should enqueue and dequeue elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
    });

    
    it('should return the first element with peek', () => {
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    });

    it('should return whether the queue is empty', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should return the size of the queue', () => {
        expect(queue.size()).toBe(0);
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
    });
});