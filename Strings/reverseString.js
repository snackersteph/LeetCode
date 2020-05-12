// Write a function that reverses a string.
// The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must
// do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // two pointers
  let endPointer = s.length-1

  // one starting at the beginning
  for (i=0; i < (s.length-1)/2; i++) {
    // one starting at the end
    let temp = s[endPointer]

    // swap the characters at the two pointers
    s[endPointer] = s[i]
    s[i] = temp

    // move towards the middle
    endPointer--
  }

  // return original string
  return s
};

// RECURSIVELY
var reverseString = function(s, start = 0, end = s.length -1) {
  if (start == end || start > end) {
    return
  }

  [s[start], s[end]] = [s[end], s[start]]

  reverseString(s, start + 1, end - 1)
};

// let s = ['h', 'e', 'l', 'l', 'o']

// console.log(reverseString(s))