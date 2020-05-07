// Implement next permutation, which rearranges numbers into the lexicographically next greater 
// permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order 
// (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs 
// are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {

  let swap = function(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  let reverse = function(start) {
    let end = nums.length - 1;
    while (start < end) {
        swap(start, end);
        start++;
        end--;
    }
  }
  
  // find the first consecutive decreasing number from the back
  let i = nums.length-1;
  while (i >= 0 && nums[i] <= nums[i-1]) {
      i--;
  }
  
  // swap the number with a number just bigger
  let j = nums.length-1;
  while(j >= 0 && nums[j] <= nums[i-1]) {
      j--;
  }
  
  // reverse the rest of the digits
  if (i == 0) {
    reverse(i);
  } else {
    swap(i-1, j);
    reverse(i);
  }
};