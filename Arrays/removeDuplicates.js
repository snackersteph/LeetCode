/**
 * @param {number[]} nums
 * @return {number}
 */

// Given a sorted array nums, remove the duplicates in-place such that 
// each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this 
// by modifying the input array in-place with O(1) extra memory.

// it doesnt matter what you leave beyond the returned length
// the returned value is an integer but your answer is the array 
//  -> this means you want to modify the original array

//  NOTES: 
//  when you need to modify an array in place, that probably means
//  you will need to create pointers to keep track of where you are

// Expected input -> an array
// Expected output -> an integer

var removeDuplicates = function(nums) {
  // since the array is already sorted, we can keep two pointers i and j, 
  // where i is the slow runner and j is the fast runner. As long as 
  // nums[i] = nums[j], we increment j to skip the duplicate

  // when we encounter nums[j]=/=nums[i], the duplicate run has ended 
  // so we must copy its value to nums[i+1], i is then incremented 
  // and we repeat the same process again until j reaches the end of the array
    
  if (nums.length == 0) {
    return 0
  }

  var i = 0

  for(j=1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }

  return i + 1
};

nums = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(nums)