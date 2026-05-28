const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator functions', () => {
  test('addition: 2 + 3 => 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 => 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 => 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 => 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division by zero throws an error', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });

  // Additional edge cases
  test('floating point addition', () => {
    expect(add(1.2, 3.4)).toBeCloseTo(4.6);
  });

  test('negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });
});
