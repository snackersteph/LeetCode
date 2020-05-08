// Given a sorted integer array nums, where the range of elements are in the inclusive range
//  [lower, upper], return its missing ranges.

// Example:

// Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
// Output: ["2", "4->49", "51->74", "76->99"]

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

var findMissingRanges = function(nums, lower, upper) {
  const output = [];
  let pre = lower;
    
  // iterate through nums
  // keep track of the last value in the range we've encountered
  for (const num of nums) {
    if (num > pre) {
        // save the right and left value of the range
      output.push([pre, num - 1]);
    }
    pre = num + 1;
  }

  if (upper >= pre) {
    output.push([pre, upper]);
  }
    
  // get rid of non-ranges
  return output.map(([s, e]) => (s === e ? `${s}` : `${s}->${e}`));
};