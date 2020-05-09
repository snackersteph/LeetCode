// You are given two non-empty linked lists representing two non-negative integers. The digits are 
// stored in reverse order and each of their nodes contain a single digit. Add the two numbers and 
// return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Keep track of the carry using a variable and simulate digits-by-digits sum starting from
//  the head of list, which contains the least-significant digit.

let addTwoNumbers = function(l1, l2) {
  // initialize a new linkedlist 
  let List = new ListNode(0);
  let head = List;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {

    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;   
    }
    
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  // return next to skip the initial node
  return List.next;
};