import { describe, it, expect, beforeEach } from 'vitest';
import Stack from '../../../src/data-structures/stack/Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('should push and pop elements', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should return the top element with peek', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('should return whether the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('should return the size of the stack', () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    expect(stack.size()).toBe(1);
  });
});
