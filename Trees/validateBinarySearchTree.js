// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Duplicates are not accepted

// Example 1:
//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true

// Example 2:
//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false

// Explanation: The root node's value is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // we want to use in order traversal

  // were going to use a stack
  let nodeStack = []
  let previous = -Infinity
  let current = root

  while (current || nodeStack.length) {
    // go all the way down to the left side of the tree
    while (current) {
      // pushing values onto a stack
      nodeStack.push(current)
      current = current.left
    }

    // after the stack has been filled, we will see if they are in order
    current = nodeStack.pop()

    if (previous >= current.val) {
      return false
    }

    previous = current.val
    current = current.right
  }

  return true;
};


// Solution with recursion

// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isValidBST = function(root) {
//   if (!root) {
//       return true; // Sanity check for passing test case '[]'
//   }

//   function helper(root, min, max) {
//       if (!root) {
//           return true; // We hit the end of the path
//       }

//       if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
//           return false; // current node's val doesn't satisfy the BST rules
//       }

//       // Continue to scan left and right
//       return helper(root.left, min, root.val) && helper(root.right, root.val, max);
//   }

//   return helper(root, null, null);
// };