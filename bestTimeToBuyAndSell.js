/**
 * @param {number[]} prices
 * @return {number}
 */

// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as 
// you like (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions at the same time 
// (i.e., you must sell the stock before you buy again).

// NOTES:
// We have to determine the maximum profit that can be obtained by making the transactions
// (no limit on the number of transactions done). For this we need to find out those sets
// of buying and selling prices which together lead to the maximization of profit 

// Brute force approach: calucate the profit corresponding to all the possible sets
// of transactions and find out the maximum profit out of them
// Time complexity : O(n^n). Recursive function is called n^n times.
// Space complexity : O(n). Depth of recursion is n.

// Peak Valley Approach with One Pass
// we notice that the points of interest are the consecutive valleys and peaks
// The key point is we need to consider every peak immediately following a valley to maximize 
// the profit. In case we skip one of the peaks, we will end up losing the profit over one 
// of the transactions leading to an overall lesser profit

// we can simply go on crawling over the slope and keep on adding the profit obtained 
// from every consecutive transaction. In the end,we will be using the peaks and valleys 
// effectively, but we need not track the costs corresponding to the peaks and valleys 
// along with the maximum profit, but we can directly keep on adding the difference between 
// the consecutive numbers of the array if the second number is larger than the first one, 
// and at the total sum we obtain will be the maximum profit. This approach will 
// simplify the solution.

// Time complexity : O(n). Single pass.
// Space complexity: O(1). Constant space needed.

var maxProfit = function(prices) {
  var maxProfit = 0
  for (i = 1; i < prices.length; i ++) {
    if (prices[i] > prices[i-1]) {
      maxProfit += prices[i] - prices[i-1]
    }
  }
  return maxProfit
};

var prices = [7,1,5,3,6,4]

maxProfit()