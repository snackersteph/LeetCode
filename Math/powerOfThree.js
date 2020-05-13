// Given an integer, write a function to determine if it is a power of three.

// Example 1:
// Input: 27
// Output: true

// Example 2:
// Input: 0
// Output: false

// Example 3:
// Input: 9
// Output: true

// Example 4:
// Input: 45
// Output: false

// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let value = 1

  // keep generating powers of 3 until we have found n or returned an integer larger than n
  while (value < n) {
    value *= 3
  }

  return value == n
};