import { describe, it, expect } from '@jest/globals';
import { multiply, sum } from '../index.js';

describe('sum function', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return a negative number when the sum is negative', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle adding a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should handle adding decimal numbers', () => {
    expect(sum(2.5, 3.5)).toBe(6);
  });

  it('should handle adding large numbers', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });
});


describe("multiply function", () => {
    it("should return the product of two numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });

    it("should return zero when one of the numbers is zero", () => {
        expect(multiply(0, 5)).toBe(0);
    });
    it("should return a negative number when one of the numbers is negative", () => {
        expect(multiply(-2, 3)).toBe(-6);
    });
    it("should return a positive number when both numbers are negative", () => {
        expect(multiply(-2, -3)).toBe(6);
    });
});