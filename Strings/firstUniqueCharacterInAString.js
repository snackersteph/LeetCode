// Given a string, find the first non-repeating character in it and return 
// it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // Create a hashMap to save letter counts
  let letterCounts = {};

  // iterate through the string and save each letter into a hashMap 
  for (i=0; i < s.length; i++) {
    if (letterCounts.hasOwnProperty(s[i])) {
      letterCounts[s[i]] ++
    }
    else {
      letterCounts[s[i]] = 1
    }
  }

  // iterate through the string again and return the index of the character with a unique value
  for (j=0; j < s.length; j++) {
    if (letterCounts[s[j]] == 1) {
      return j
    }
  }

  return -1
};

// console.log(firstUniqChar('z'))