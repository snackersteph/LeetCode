var moveZeroes = function(nums) {
  // keep track of the index of non-zero numbers
  var index = 0;
  // iterate through the array and set the non zero numbers to the index
  for (i=0; i < nums.length; i ++) {
    if (nums[i] != 0) {
      nums[index] = nums[i]
      index++
    }
  }

  // iterate through the array and set the remaining elements to 0
  for (i=index; i< nums.length; i++) {
    nums[i] = 0
  }
  // return the final array
  console.log("NUMS", nums)
  return nums
};

// var nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
// var nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]

var nums1 = [1,2,3,0,4,0,5]

moveZeroes(nums1)