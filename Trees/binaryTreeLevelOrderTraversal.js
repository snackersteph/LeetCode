// Given a binary tree, return the level order traversal of its nodes' values. 
// (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// this is breadth first search 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let levelNum = 0
  let solution = [];

  if (!root) return solution;

  let que = [root];

  while (que.length > 0) {
    let level = [];
    let newQue = [];
    for (let node of que) {
        level.push(node.val);
        if (node.left) newQue.push(node.left);
        if (node.right) newQue.push(node.right);
    }
    solution[levelNum] = level;
    que = newQue;
    levelNum++;
  }
  return solution;
};