/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


// we can use linear search, but that would result in 
// the time limit being exceeded

// a better approach would be to use binary search
// the time complexity of binary search is O(log n)
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1
    let right = n
    
    while (left < right) {
      let mid = Math.floor((left+right)/2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    
    // if the middle was the first bad version
    return left
  };
};