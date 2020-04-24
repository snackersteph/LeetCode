// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// we need to save a reference to the previous node and the current node so that you can 
// set the next when you are moving forward

// Iteratively 
var reverseList = function(head) {
  let previous = ListNode(null)
  let current = head

  while (current != null) {
    let nextTemp = current.next
    current.next = previous
    previous = current
    current = nextTemp
  }

  return previous
};

// Recursively 
// var reverseList = function(head) {
//   const helper = (current, prev) => {
//     if(current === null) return prev;

//     // next node
//     let next = current.next;

//     // append previous nodes in current
//     current.next = prev;

//     return helper(next, current)
//   }
//   return helper(head, null);
// };