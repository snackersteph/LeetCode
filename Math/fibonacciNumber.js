// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

// Example 1:
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Note: 0 ≤ N ≤ 30.

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let values = new Map()

  if (N === 0 || N === 1) {
    return N
  }

  let oneLess = values[N-1] || fib(N-1)
  let twoLess = values[N-2] || fib(N-2)

  return oneLess + twoLess
};

// Bottom-up Solution

function fib(n) {

  // Edge cases:
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }

  // We'll be building the fibonacci series from the bottom up
  // So we'll need to track the previous 2 numbers at each step
  let prevPrev = 0;  // 0th fibonacci
  let prev = 1;      // 1st fibonacci
  let current;       // Declare current

  for (let i = 1; i < n; i++) {

    // Iteration 1: current = 2nd fibonacci
    // Iteration 2: current = 3rd fibonacci
    // Iteration 3: current = 4th fibonacci
    // To get nth fibonacci ... do n-1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

// What We Learned
// This one's a good illustration of the tradeoff we sometimes have between code cleanliness and efficiency.

// We could use a cute, recursive function to solve the problem. But that would cost O(2^n) time as
// opposed to nn time in our final bottom-up solution. Massive difference!

// In general, whenever you have a recursive solution to a problem, think about what's actually
// happening on the call stack. An iterative solution might be more efficient.