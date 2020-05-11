// Given a binary tree, count the number of uni-value subtrees.

// A Uni-value subtree means all nodes of the subtree have the same value.

// Example :

// Input:  root = [5,1,5,5,5,null,5]

//               5
//              / \
//             1   5
//            / \   \
//           5   5   5

// Output: 4

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
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
  if (root == null) {
    return 0
  }
  
  let total = countUnivalSubtrees(root.left) + countUnivalSubtrees(root.right)
  
  if (isUnival(root)) {
    total ++
  }
  
  return total
};

var isUnival = function(node) {
  if (node == null) {
    return true
  }
  
  if (node.left != null && node.left.val != node.val) {
    return false
  }
  
  if (node.right != null && node.right.val != node.val) {
    return false
  }
  
  if (isUnival(node.left) && isUnival(node.right)) {
    return true
  }
  
  return false
}
