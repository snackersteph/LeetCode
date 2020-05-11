// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let hash = {}
  for (let i=0; i < inorder.length; i ++) {
    hash[inorder[i]] = i  
  }
  
  let helper = function(start, end) {
    if (start > end) {
      return null
    }
    
    let val = preorder.shift()
    let root = new TreeNode(val)
    
    root.left = helper(start, hash[val] - 1)
    root.right = helper(hash[val] + 1, end)
    
    return root
  }
  
  return helper(0, inorder.length - 1)
}
