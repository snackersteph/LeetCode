// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note: All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let longestCommonPrefix = ''

  if (strs == null || strs.length == 0) {
    return longestCommonPrefix
  }

  let index = 0 
  // iterate through the words and compare each letter 
  // we need to make sure that we only iterate up to the shortest word
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return longestCommonPrefix;
    }
    longestCommonPrefix += strs[0][i];
  }


  return longestCommonPrefix    
};

let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))
