// Given a string, determine if it is a palindrome, considering only alphanumeric 
// characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // create a pointer to start at the end of the string
  let endPointer = s.length-1
  let startPointer = 0

  // make sure we filter out any numbers or spaces or noncharacters
  let regex = /[a-z0-9]/i

  // iterate through the string from both ends and compare the characters
  while (startPointer < endPointer) {
    if (!regex.test(s[startPointer])) {
      startPointer++;
    } else if (!regex.test(s[endPointer])) {
      endPointer--;
    } else if (s[startPointer++].toLowerCase() !== s[endPointer--].toLowerCase()) {
      return false;
    }
  }

  // get to the middle and return true
  return true
};

// let s = "A man, a plan, a canal: Panama"
let s = "race a car"

console.log(isPalindrome(s))

// Complexity Analysis

// Time complexity : O(n)O(n), in length nn of the string. We traverse over each character 
// at-most once, until the two pointers meet in the middle, or when we break and return early.

// Space complexity : O(1)O(1). No extra space required, at all.