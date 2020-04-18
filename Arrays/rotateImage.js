/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//  rotate in place
//  cannot use extra space 
//  constant space solution

var rotate = function(matrix) {
  // transpose twice
  // first time, swap the diagonals
  // second time, swap the horizontal ends

  var n = matrix.length
  for (i=0; i < n; i ++) {
    for (j=i; j < n; j++) {
      var temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  for (i=0; i < n; i ++) {
    // we only need to go to the halfway point
    for (j=0; j < (n/2); j++) {
      var temp = matrix[i][j]
      matrix[i][j] = matrix[i][n-1-j]
      matrix[i][n-1-j] = temp
    }
  }

  console.log("MATRIX", JSON.stringify(matrix))
  return matrix
};

// var nums = [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]

var nums = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

[
  [15,13,2,5],
  [14,3,4,1],
  [12,6,8,9],
  [16,7,10,11]]

rotate(nums)

