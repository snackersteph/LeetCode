// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

// the count matters
// the order matters
// we can use a stack to keep track of the order
// stack == first in last out
// push to the stack whenever we see an opening character
// remove from the stack when its the correct closing character 

var isValid = function(s) {
  let stack = []
  let opening = ['(','[','{']
  
  for (letter of s) {
    if(opening.includes(letter)) {
      stack.push(letter)
    } else if (letter == ')' &&
      (stack.length > 0) &&
      (stack[stack.length-1] == '(')) {
        stack.pop()
    } else if (letter == ']' &&
      (stack.length > 0) &&
      (stack[stack.length-1] == '[')) {
        stack.pop()
    } else if (letter == '}' &&
      (stack.length > 0) &&
      (stack[stack.length-1] == '{')) {
        stack.pop()
    } else {
      return false
    }
  }
  
  if (stack.length == 0) {
    return true 
  } else {
    return false
  }
};
