// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // sliding window approach 
  // iterate through the entire string 
  // create a hashmap with the values weve seen already 
  // two pointers: one at the beginning, one will expand the window
  
  let a = 0
  let b = 0
  
  let max = 0 
  
  let stringMap = {}
  
  // b is going to keep iterating until the end of the string
  while (b < s.length) {
      if (!stringMap[s[b]]) {
          stringMap[s[b]] = true
          max = Math.max(max, Object.keys(stringMap).length)
          b ++
      } else {
          // we found a repeat
          // remove an old character
          delete stringMap[s[a]]
          a ++
      }
  }
  
  return max
};