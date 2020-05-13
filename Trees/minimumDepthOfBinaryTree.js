// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root
// node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

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
var minDepth = function(root) {
  if (root == null) {
    return 0
  }

  if (root.left == null && root.right == null) {
    return 1
  }

  let min = Number.MAX_VALUE

  if (root.left) {
    min = Math.min(minDepth(root.left), min)
  }

  if (root.right) {
    min = Math.min(minDepth(root.right), min)
  }

  return min + 1
};

// Time complexity : we visit each node exactly once, thus the time complexity is O(N),
// where N is the number of nodes.

// Space complexity : in the worst case, the tree is completely unbalanced, e.g. each node has only
// one child node, the recursion call would occur N times (the height of the tree), therefore the
// storage to keep the call stack would be O(N). But in the best case (the tree is completely
// balanced), the height of the tree would be \log(N)log(N). Therefore, the space complexity in
// this case would be O(log(N)).