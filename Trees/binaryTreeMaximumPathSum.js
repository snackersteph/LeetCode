// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node 
// in the tree along the parent-child connections. The path must contain at least one node and does 
// not need to go through the root.

// Example 1:
// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6

// Example 2:
// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42

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

// binary tree -> max of 2 children per node
// could start at any node but stay along a continuous path 

var maxPathSum = function(root) {
  let maxPathSumNum = -Infinity;
  
  // we need to decide if its better to continue the old path, or start a new path 
  const maxPathSumRec = function(node){
    if(!node){
      return 0;
    }
    
    // calculate the left and right subtrees
    let leftMax = Math.max(maxPathSumRec(node.left), 0);
    let rightMax = Math.max(maxPathSumRec(node.right), 0);
    
    
    maxPathSumNum = Math.max(maxPathSumNum, leftMax + rightMax + node.val);
    
    return Math.max(leftMax, rightMax) + node.val;
  };
  
  maxPathSumRec(root);
  return maxPathSumNum;
};

// Time complexity : O(N) where N is number of nodes, since we visit each node not more 
// than 2 times.

// Space complexity : O(log(N)). We have to keep a recursion stack of the size of the tree height, 
// which is O(log(N)) for the binary tree.