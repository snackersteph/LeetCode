// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note: Assume we are dealing with an environment which could only store integers 
// within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this 
// problem, assume that your function returns 0 when the reversed integer overflows.

// Intuition

// We can build up the reverse integer one digit at a time. While doing so, we can 
// check beforehand whether or not appending another digit would cause overflow.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = false

  if (x < 0) {
    isNegative = true
    x = x *-1
  }

  let reversed = 0;
  let pop;

  while (Math.floor(x) > 0) {
    pop = Math.floor(x) % 10;
    Math.floor(x /= 10);

    reversed = (reversed * 10) + pop
  }

  if (reversed > 2**31) {
    return 0
  }

  if (isNegative) {
    return reversed * -1
  }

  return reversed
}

// console.log(reverse(1534236469))
