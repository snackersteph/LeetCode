// Merge two sorted linked lists and return it as a new list. The new list should be made by 
// splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(node1, node2) {
  if (node1 == null) {
    return node2
  } else if (node2 == null) {
    return node1
  } else if (node1.val < node2.val) {
    node1.next = mergeTwoLists(node1.next, node2)
    return node1
  } else {
    node2.next = mergeTwoLists(node1, node2.next)
    return node2
  }
    
};

// Complexity Analysis

// Time complexity : O(n + m)

// Because each recursive call increments the pointer to l1 or l2 by one
// (approaching the dangling null at the end of each list), there will be 
// exactly one call to mergeTwoLists per element in each list. Therefore, 
// the time complexity is linear in the combined size of the lists.

// Space complexity : O(n + m)

// The first call to mergeTwoLists does not return until the ends of both 
// l1 and l2 have been reached, so n + mn+m stack frames consume O(n + m) space.