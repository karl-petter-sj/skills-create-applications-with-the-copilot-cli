#!/usr/bin/env node
// CLI wrapper for the calculator in src/calculator.js
// Supported operations (as requested in the issue and image):
// - add: addition
// - subtract: subtraction
// - multiply: multiplication
// - divide: division

const path = require('path');
const { add, subtract, multiply, divide } = require('./calculator');

function printUsage() {
  console.error('Usage: node src/cli.js <operation> <a> <b>');
  console.error('Operations: add, subtract, multiply, divide');
}

function exitWithError(msg) {
  console.error(msg);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length !== 3) {
  printUsage();
  process.exit(1);
}

const [op, aRaw, bRaw] = args;
const a = Number(aRaw);
const b = Number(bRaw);

if (Number.isNaN(a) || Number.isNaN(b)) {
  exitWithError('Error: Both operands must be valid numbers');
}

try {
  let result;
  switch (op) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    default:
      exitWithError(`Error: Unknown operation "${op}"`);
  }

  // Print numeric result to stdout
  console.log(result);
  process.exit(0);
} catch (err) {
  exitWithError(`Error: ${err.message}`);
}
