// A linked list is given such that each node contains an additional random pointer which could 
// point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a list of n nodes. Each node is represented 
// as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null 
// if it does not point to any node.

// Example 1:
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Example 2:
// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Example 3:
// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Example 4:
// Input: head = []
// Output: []
// Explanation: Given linked list is empty (null pointer), so return null.
 
// Constraints:

// -10000 <= Node.val <= 10000
// Node.random is null or pointing to a node in the linked list.
// Number of Nodes will not exceed 1000.

// Just iterate the linked list and create copies of the nodes on the go. Since a node can be 
// referenced from multiple nodes due to the random pointers, make sure you are not making multiple 
// copies of the same node.

// You may want to use extra space to keep old node ---> new node mapping to prevent creating 
// multiples copies of same node.

// We can avoid using extra space for old node ---> new node mapping, by tweaking the original 
// linked list. Simply interweave the nodes of the old and copied list. 

// The interweaving is done using next pointers and we can make use of interweaved structure to get 
// the correct reference nodes for random pointers.

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// When we are iterating over the list, we can create new nodes via the random pointer or the 
// next pointer whichever points to a node that doesn't exist in our old --> new dictionary.

var copyRandomList = function(head) {
  var dummy = new Node(NaN, null, null)
  var p = dummy
  var q = head
  var map = new Map
  
  while(q) {
    let newNode = new Node(q.val, null, null)
    p.next = newNode
    map.set(q, newNode)
    
    p = p.next
    q = q.next
  }
  
  p = dummy.next
  q = head
  
  while(q) {
    if (q.random) {
      p.random = map.get(q.random)
    }
    p = p.next
    q = q.next
  }
  
  return dummy.next
};