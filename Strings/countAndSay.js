// Imagine a sequence of numbers without any explication, and one is asked to produce the next 
// numbers, which would require one to figure out the hidden pattern about the generation of 
// the sequence.

// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1. 1
// 2. 11
// 3. 21
// 4. 1211
// 5. 111221

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. 
// You can do so recursively, in other words from the previous member read off the digits, 
// counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:
// Input: 1
// Output: "1"
// Explanation: This is the base case.

// Example 2:
// Input: 4
// Output: "1211"
// Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" 
//   can be read as "12" w

// Following the rule as we described above, in order to generate the next sequence, we could 
// scan the current sequence with a sort of sliding window which would hold the identical and 
// adjacent digits. With the sliding window, we would divide the original sequence into a list 
// of sub-sequences. We then count the number of digits within each sub-sequence and output the 
// summary as pairs of |{count}, {digit}|.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
   
  let curr = "1";
  
  for (let i = 1; i < n; ++i) {
      let temp = "";
      
      let cursor = 0;
      let lastChar = curr[0];
      let count = 0;
      
      while (cursor < curr.length) {
          if (lastChar !== curr[cursor]) {
              temp += count + lastChar;
              lastChar = curr[cursor];
              count = 0;
          }
          cursor += 1;
          count += 1;
      }
      
      temp += count + lastChar;
      curr = temp;
  }
  
  return curr;
  
};

// Time Complexity: {O}(2^n) where nn is the index of the desired sequence

// Space Complexity: {O}(2^{n-1})