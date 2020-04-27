// Given a singly linked list, determine if it is a palindrome.

// Example 1:
// Input: 1->2
// Output: false

// Example 2:
// Input: 1->2->2->1
// Output: true

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // Copy the Linked List into an Array
  // Check whether or not the Array is a palindrome

  let allValues = []
  let currentNode = head

  while (currentNode != null) {
    allValues.push(currentNode.val)
    currentNode = currentNode.next
  }

  let front = 0
  let back = allValues.length-1

  while (front < back) {
    if (allValues[front] != allValues[back]) {
      return false
    }

    front ++
    back --
  }
  return true
};

// Complexity Analysis

// Time complexity : O(n), where n is the number of nodes in the Linked List.

// In the first part, we're copying a Linked List into an Array List. 
// Iterating down a Linked List in sequential order is O(n), and each of the 
// n writes to the ArrayList is O(1). Therefore, the overall cost is O(n).

// In the second part, we're using the two pointer technique to check whether 
// or not the Array List is a palindrome. Each of the nn values in the Array 
// list is accessed once, and a total of O(n/2)O(n/2) comparisons are done. 
// Therefore, the overall cost is O(n)O(n).

// This gives O(2n) = O(n) because we always drop the constants.

// Space complexity : O(n), where nn is the number of nodes in the Linked List.

// We are making an Array List and adding n values to it.

