// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it is able to trap after raining.

// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 
// 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
  if (height == null || height.length == 0) {
      return 0
  }
  
  let result = 0 
  
  // the level is the tallest elevation we have seen so far
  let level = 0 
  
  // we can use the two pointer technique 
  // time: O(n)
  // constant space 
  let left = 0 
  let right = height.length - 1
  
  while (left < right) {
    let lower = height[ height[left] < height[right] ? left ++ : right --]
    // the amount of water you can trap depends on the lower elevation 
    level = Math.max(level, lower)
  
    result += level - lower
  }
  
  return result
};
