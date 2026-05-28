// Calculator functions supporting basic arithmetic operations:
// - addition (add)
// - subtraction (subtract)
// - multiplication (multiply)
// - division (divide)

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide a by b. Throws Error on division by zero.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Modulo: returns remainder of a divided by b. Throws on b === 0.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero in modulo');
  }
  return a % b;
}

/**
 * Power: base raised to exponent
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root: returns sqrt(n). Throws for negative input.
 * @param {number} n
 * @returns {number}
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};
