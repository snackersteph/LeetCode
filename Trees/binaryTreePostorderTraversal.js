// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]
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

// left, right, root
// the reverse of a preorder traversal

var postorderTraversalRecursive = function(root, results = []) {
    if (root == null) {
      return results
    }
    
    if (root.left) {
      postorderTraversalRecursive(root.left, results)
    }
    if (root.right) {
      postorderTraversalRecursive(root.right, results)
    }

    results.push(root.val)
    
    return results
};

var postorderTraversalIterative = function(root) {
  let results = []
  
  if (root == null) {
      return results
  }
  
  let stack = []
  stack.push(root)
  
  while(stack.length) {
    let current = stack.pop()
    results.unshift(current.val)
    
    if (current.left) {
      stack.push(current.left)
    }
    if (current.right) {
      stack.push(current.right)
    }
  }
  
  return results
};

