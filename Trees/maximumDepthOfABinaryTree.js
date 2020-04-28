// Given a binary tree, find its maximum depth.

// A binary tree is a tree data structure in which each node has at most two children,
// which are referred to as the left child and the right child

// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // top down recursion
  // base case 
  // if there are no children, return the max
  if (root == null) {
    return 0;
  }

  // if there is a left child go left
  let left = maxDepth(root.left)

  // if there is a right child go right 
  let right = maxDepth(root.right)

  return Math.max(left, right) + 1
};

// Complexity analysis

// Time complexity : we visit each node exactly once, thus the time complexity is {O}(N), 
// where N is the number of nodes.

// Space complexity : in the worst case, the tree is completely unbalanced, e.g. each node 
// has only left child node, the recursion call would occur N times (the height of the tree), 
// therefore the storage to keep the call stack would be {O}(N). But in the best case (the tree 
// is completely balanced), the height of the tree would be \log(N)log(N). Therefore, the 
// space complexity in this case would be O(log(N)).