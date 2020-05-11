// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// start from not inorder traversal
// usually its preorder or postorder

// the value picked from preorder/postorder traversal
// splits the inorder traversal into left and right subtrees
// the only information one needs from inorder is if the current subtree is empty or not
var buildTree = function(inorder, postorder) {    
  // build a hashmap from inorder traversal
  let hash = {};
  for (let i=0;i<inorder.length;i++) hash[inorder[i]] = i; 
  
  // helper function which takes the left and right boundaries for the current subtree in the inorder traversal
  // these boundaries are used only to check if the subtree is empty or not
  let recur = function(start, end) {
    // the subtree is empty
    if (start > end) return null;
    
    // pick the last element in postorder traversal as the root node
    let val = postorder.pop();
    let root = new TreeNode(val);
    
    root.right = recur(hash[val] + 1, end);
    root.left = recur(start, hash[val] - 1);
    
    return root;
  }
  
  return recur(0, inorder.length - 1);  
};
