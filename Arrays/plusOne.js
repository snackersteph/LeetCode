var plusOne = function(digits) {

  // loop through the array from the back to the front
  for (i=digits.length-1; i>=0; i--){
    // if the digit is less than 9, increment by 1
    if (digits[i] < 9) {
      digits[i]++
      break
    } else {
      // if the digit is equal to 9, set to 0
      digits[i] = 0
    }
  }

  // if all the digits are 9, create a new array and set the head to 1 followed by all zeros
  if (digits[0] == 0) {
    digits.unshift(1)
  }

  console.log("digits", digits)
  return digits
};

// var nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
// var nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]

var nums1 = [1,2,3]

plusOne(nums1)