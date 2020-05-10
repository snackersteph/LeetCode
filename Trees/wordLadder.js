// Given two words (beginWord and endWord), and a dictionary's word list, find the length of 
// shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

// Example 1:

// Input:
  // beginWord = "hit",
  // endWord = "cog",
  // wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Example 2:

// Input:
  // beginWord = "hit"
  // endWord = "cog"
  // wordList = ["hot","dot","dog","lot","log"]
// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// this is a good problem to use breadth first search 
// if you can imagine this as a bunch of nodes on a graph, you want to know how many 
// transformations you need to take to get to the ending point
// how many levels? this is a clue that you need to do DFS or BFS

// breadth first search is done with a queue

var ladderLength = function (beginWord, endWord, wordList) {
  const seen = new Set()
  const dict = new Set(wordList)
  
  let len = 1

  const queue = [beginWord]
  
  while (queue.length > 0) {
    const N = queue.length
    
    for (let w = 0; w < N; w++) {
      const word = queue.shift()
      if (word === endWord) return len
        
      const arr = word.split("")
      
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 26; j++) {
          // iterate through the alphabet to create all possible combos 
          // fromCharCode converts a unicode number into a character
          arr[i] = String.fromCharCode(97 + j)
          const nw = arr.join("")
          
          if (!seen.has(nw) && dict.has(nw)) {
            seen.add(nw)
            queue.push(nw)
          }
            
        }
          
        arr[i] = word[i]
      }
    }
      
    len++
  }
    
  return 0
}