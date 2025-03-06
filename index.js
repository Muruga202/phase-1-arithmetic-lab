
// Write your code here// 1. Create a variable `sum` that stores the sum of two numbers.
let num1 = 31;
let num2 = 2;
let sum = num1 + num2; // Expected output: 33

// 2. Create a variable `product` that stores the product of two numbers.
let multiply = num1 * num2; // Expected output: 62

// 3. Generate a random integer greater than 0.
let random = Math.floor(Math.random() * 100) + 1; // Generates a random number from 1 to 100

// 4. Find the remainder of division.
let num3 = 16;
let num4 = 6;
let mod = num3 % num4; // Expected output: 4

// 5. Find the maximum number from a set of numbers.
let max = Math.max(5, 10, 15, 20); // Expected output: 20

// Export the variables if needed (for testing purposes).
module.exports = { sum, multiply, random, mod, max };
