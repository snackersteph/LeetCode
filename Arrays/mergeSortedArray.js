// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note: The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold 
// additional elements from nums2.

// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {  
  // if there is nothing to merge we can return  
  if (!nums2.length) {
    return nums1
  }
    
  while (m > 0 && n > 0) {
    if (nums1[m-1] >= nums2[n-1]) {
      nums1[m+n-1] = nums1[m-1];
      m--;
    } else {
      nums1[m+n-1] = nums2[n-1];
      n--;
    }
  }
  // make sure we merge in all the elements from nums2
  while (n > 0) {
    nums1[n-1] = nums2[n-1];
    n--;
  }
  
  return nums1
};

// var nums1 = [0]
// var m = 0
// var nums2 = [1]
// var n = 1

// console.log(merge(nums1, m, nums2, n))

// var nums1 = [2,0]
// var m = 1
// var nums2 = [1]
// var n = 1

// console.log(merge(nums1, m, nums2, n))