// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:
// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

// Note: Given n will always be valid.

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  const root = new ListNode(0);
  root.next = head;
  let front = root;
  let back = root;
  
  // shorted the list by n
  while (n >= 0) {
    front = front.next;
    n--;
  }

  // when you are at the tail of the shorter list, you also have a pointer at the nth node 
  while (front) {
    // remove the nth node
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  // return head 
  return root.next;
};