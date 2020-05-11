// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// left, root, right 
var inorderTraversalRecursive = function(root, results = []) {
    if (root == null) {
      return results
    }
    
    if (root.left) {
      inorderTraversal(root.left, results) 
    }
    
    results.push(root.val)
    
    if (root.right) {
      inorderTraversal(root.right, results)
    }   
    
    return results
};

var inorderTraversalIterative = function(root) {
  let results = []
  
  if (root == null) {
    return results
  }
  
  let stack = []
  
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      results.push(root.val)
      root = root.right
    }
  }
  
  return results
};