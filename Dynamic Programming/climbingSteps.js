// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
* @param {number} n
* @return {number}
*/

// dynamic programming -> top down or bottom up
// think about the base case, break it down to subproblems

// for example, if you have a total of 6 steps
// we know that we can either take 1 step or 2 steps
// if we take one step 6 -> 5
// if we take two steps 6 -> 4
// we have already solved the number of ways for 5 and 4 steps
// so the total number for 6 steps is
// total of 4 steps + total of 5 steps

var climbStairs = function(n) {
   let results = []

   // our 2 base cases
   results[0] = 1
   results[1] = 1

   for(var i=2; i <= n; i ++) {
       results[i] = results[i-1] + results[i-2]
   }

   return results[n]
};

// Time and Space complexity: O(n)