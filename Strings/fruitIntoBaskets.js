// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform 
// step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket 
// to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

// Example 1:
// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].

// Example 2:
// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].

// Example 3:
// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].

// Example 4:
// Input: [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can collect [1,2,1,1,2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.
 

// Note:
// 1 <= tree.length <= 40000
// 0 <= tree[i] < tree.length

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  // handle edge cases
  if (tree == null || tree.length == 0) {
      return 0;
  }
  
  // we want to find the longest string of two alernating values
  // aka the longest substring
  // keep count of the length of pairs with a sliding window approach 
  
  let lastFruit = -1
  let secondLastFruit = -1
  
  // keep track of the lastFruit count in case you need to subtract it for a new fruit
  let lastFruitCount = 0
  let currentMax = 0
  let max = 0
  
  for (let fruit of tree) {
      if (fruit == lastFruit || fruit == secondLastFruit) {
          // we are seeing a repeat of the same fruits
          currentMax ++
      } else {
          // we see a new fruit, update the currentMax
          currentMax = lastFruitCount + 1
      }
      
      if (fruit == lastFruit) {
          lastFruitCount ++
      } else {
          // reset for a new fruit
          lastFruitCount = 1
      }
      
      if (fruit != lastFruit) {
          // start counting for a new fruit
          secondLastFruit = lastFruit
          lastFruit = fruit
      }
      
      // update the max value
      max = Math.max(currentMax, max)
  }
  
  return max
};