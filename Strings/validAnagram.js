// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note: You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // if the two strings are not the same length, return false
  if (s.length != t.length) {
    return false;
  }

  // create a hashmap 
  let characterCounts = {};

  // iterate through the first string and count the letters into the hasmap
  for (i=0; i < s.length; i++) {
    if (characterCounts.hasOwnProperty(s[i])) {
      characterCounts[s[i]]++
    } else {
      characterCounts[s[i]] = 1
    }
  }

  // iterate through the second string
  for (j=0; j < t.length; j++) {    
    // check the hashmap to see if the letter is there and decrement the count 
    if (characterCounts[t[j]]) {
      // if the letter is equal to 0 return false
      if (characterCounts[t[j]] == 0) {
        return false;
      }

      characterCounts[t[j]]--
    } else {
      // if the letter doesnt exist, return false
      return false;
    }
  }

  return true
};

let s = 'anagram'
let t =  'nagaram'

console.log(isAnagram(s, t))

// Complexity analysis

// Time complexity : O(n)O(n). Time complexity is O(n)O(n) because accessing the counter 
// table is a constant time operation.

// Space complexity : O(1)O(1). Although we do use extra space, the space complexity is O(1)O(1) 
// because the table's size stays constant no matter how large nn is.