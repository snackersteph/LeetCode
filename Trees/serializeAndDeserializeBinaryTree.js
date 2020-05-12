// Serialization is the process of converting a data structure or object into a sequence of
// bits so that it can be stored in a file or memory buffer, or transmitted across a network
// connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on
// how your serialization/deserialization algorithm should work. You just need to ensure that a
// binary tree can be serialized to a string and this string can be deserialized to the original
// tree structure.

// Example:

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not
// necessarily need to follow this format, so please be creative and come up with different
// approaches yourself.

// Note: Do not use class member/global/static variables to store states. Your serialize and
// deserialize algorithms should be stateless.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// this problem resembles how we make meaning from text files
// how can we traverse the tree to get the string?
// the DFS approach is a better fit because the linkage among the adjacent nodes is naturally
// encoded in the order
// we should do a preorder traversal
// when thinking about tree problems, our focus of the tree is a single node
// what is the base case?
var serialize = function(root) {
  return serializeHelper(root, '')
};

var serializeHelper = function(root, string) {
  if (root == null) {
    string += 'null,'
  } else {
    string += root.val + ','
    string = serializeHelper(root.left, string)
    string = serializeHelper(root.right, string)
  }

  return string
}

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
   let dataArray = data.split(',')
   return deserializeHelper(dataArray)
};

var deserializeHelper = function(dataArray) {
  let current = dataArray.shift()

  if (current == 'null') {
  return null
  }

  let root = new TreeNode(current)

  root.left = deserializeHelper(dataArray)
  root.right = deserializeHelper(dataArray)

  return root
}

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/