const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  // New tests for extended operations
  test('modulo: 5 % 2 => 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws an error', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero in modulo');
  });

  test('power: 2 ^ 3 => 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power: 2 ^ 0 => 1', () => {
    expect(power(2, 0)).toBe(1);
  });

  test('power with fractional exponent: 4 ^ 0.5 => 2', () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });

  test('squareRoot: sqrt(16) => 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });
});
