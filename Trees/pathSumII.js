// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

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
 * @param {number} sum
 * @return {number[][]}
 */

// we want to perform a preorder traversal from the root node

// shell function
var pathSum = function(root, sum) {
  return findPaths(root, sum, [], [])
};

// recursive function
var findPaths = function(root, sum, newList, paths) {
  if (root == null) return paths
  
  newList.push(root.val)
  
  if (root.val == sum && root.left == null && root.right == null) {
      paths.push(newList.slice()) 
  }
  
  findPaths(root.left, sum-root.val, newList, paths)
  findPaths(root.right, sum-root.val, newList, paths)
  
  newList.pop()
  
  return paths
}