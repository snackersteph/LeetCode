// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]
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
// root, left, right

// recursive method
var preorderTraversalRecursive = function(root, results = []) {    
    if (root == null) {
        return results
    }
    
    results.push(root.val)
    preorderTraversalRecursive(root.left, results)
    preorderTraversalRecursive(root.right, results)
    
    return results
};

// iterative method using a stack 
var preorderTraversalIterative = function(root) {    
  if (!root) return [];
  var result = [];
  var stack = [root];
  
  while(stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};