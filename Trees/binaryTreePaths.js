// Given a binary tree, return all root-to-leaf paths.
// Note: A leaf is a node with no children.

// Example:
// Input:
//    1
//  /   \
// 2     3
//  \
//   5
// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

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
 * @return {string[]}
 */

// depth first search
var binaryTreePaths = function(root) {
  let results = []

  if (root == null) {
    return results
  }

  dfs(root, '', results)

  return results
};

// recursive function
var dfs = function(node, path, paths) {
  path += node.val

  if (!node.left && !node.right) {
    paths.push(path)
    return
  }

  if (node.left) {
    dfs(node.left, path + '->', paths)
  }

  if (node.right) {
    dfs(node.right, path + '->', paths)
  }
}