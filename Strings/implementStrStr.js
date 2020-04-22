// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if 
// needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question 
// to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. 
// This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // account for empty needle
  if (needle == '') return 0

  // return if the needle is longer than the haystack
  if (needle.length > haystack.length) return -1

  let hLength = haystack.length
  let nLength = needle.length

  let subString = subStringDetector(needle);

  // iterate through the haystack 
  for(i = 0, j = 0; i < hLength;) {

      if(haystack[i] == needle[j]) {
          i++, j++;
      }

      if(j == nLength) return i - j;

      // if a letter is no longer matching, continue where we left off
      if(i < hLength && haystack[i] != needle[j]) {
          if(j) j = subString[j - 1];
          else i++;
      }
      
  }
  return -1;
};

var subStringDetector = function(needle) {
  let nLength = needle.length;
  let subString = new Array(nLength).fill(0);
  for (i = 1, length = 0; i < nLength;) {
      if(needle[i] === needle[length]) {
          length++;
          subString[i] = length;
          i++;
      } else if (length) length = subString[length - 1];
      else {
        subString[i] = 0; 
          i++;
      }
  }
  return subString;
}

// Complexity Analysis

// Time complexity: {O}((N - L)L)O((N−L)L) in the worst case of numerous almost 
// complete false matches, and {O}(N)O(N) in the best case of one single match.

// Space complexity: {O}(1)O(1).

// let haystack = 'hllo'
// let needle = 'll'

// console.log(strStr(haystack, needle))