// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }

// Populate each next pointer to point to its next right node. If there is no next right node,
// the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Follow up:
// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space
// for this problem.


// Example 1:
// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next
// pointer to point to its next right node, just like in Figure B. The serialized output is in
// level order as connected by the next pointers, with '#' signifying the end of each level.

// Constraints:
// The number of nodes in the given tree is less than 6000.
// -100 <= node.val <= 100

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
let connect = function(root) {
  if(!root) return null

  let queue = [root]

  while (queue.length) {
    let size = queue.length

    for (let i=0; i < size; i ++) {
      let current = queue.shift()

      // This check is important. We don't want to
      // establish any wrong connections. The queue will
      // contain nodes from 2 levels at most at any
      // point in time. This check ensures we only
      // don't establish next pointers beyond the end
      // of a level
      if (i < size - 1) {
        current.next = queue[0]
      }

      if (current.left != null) {
        queue.push(current.left)
      }
      if (current.right != null) {
        queue.push(current.right)
      }
    }
  }
  // Since the tree has now been modified, return the root node
  return root
}
