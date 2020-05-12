// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example:
// Given 1->2->3->4, you should return the list as 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == null) {
      return null
  }

  let node1 = head || null
  let node2 = head.next || null

  helper(node1, node2)

  return head
};

var helper = function(node1, node2) {
  if (!node1 || !node2) {
    return
  }

  let temp = node1.val
  node1.val = node2.val
  node2.val = temp

  if (node1.next.next && node2.next.next) {
    helper(node1.next.next, node2.next.next)
  }
}
