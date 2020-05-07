// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// iterate through the array and then solve the problem like 2 sum
var threeSum = function(nums) {

  let set = new Set()
  let results = []
  
  nums.sort((a,b) => {return a-b})
  
  // we stop before the last 2 nums so we can compare them
  for (let i=0; i < nums.length-2; i ++) {
      // pass over duplicates
      if (i == 0 || (i > 0 && nums[i] != nums[i-1])) {
          let low = i + 1
          let high = nums.length-1
          let sum = 0-nums[i]
          
          while (low < high) {
              if (nums[low] + nums[high] == sum) {
                  if (!set.has([nums[i], nums[low], nums[high]])) {
                      set.add([nums[i], nums[low], nums[high]])
                      results.push([nums[i], nums[low], nums[high]])
                  }
                  
                  // pass over duplicates
                  while (low < high && (nums[low] == nums[low+1])) {
                      low ++
                  }
                  
                  // pass over duplicates
                  while (low < high && (nums[high] == nums[high-1])) {
                      high --
                  }
                  
                  low ++
                  high --
                  
              } else if (nums[low] + nums[high] > sum) {
                  high --
              } else {
                  low ++
              }
          }
      }
  }
  
  return results
};