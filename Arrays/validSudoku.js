var isValidSudoku = function(board) {
  var dictionary = {}

  // when you want a fast lookup, you want to use a HashMap
  // Traverse through the grid and check for repititions in the row, column, grid level
  // rows = i 
  // column = j
  // grid =  

  // looping through rows
  for (i=0; i < 9; i++) {
    // looping through columns
    for (j=0; j < 9; j++) {
      var currentValue = board[i][j]
      // console.log("currentValue", currentValue)
      if (currentValue != '.') {
        var gridRow = Math.floor( i / 3 );
        var gridCol = Math.floor( j / 3 );
        var gridIndex = gridRow * 3 + gridCol;

        if (currentValue == 1) {
          console.log(dictionary.hasOwnProperty(currentValue + " found in row " + gridRow))
          console.log(dictionary.hasOwnProperty(currentValue + " found in column " + gridCol))
          console.log(dictionary.hasOwnProperty(currentValue + " found in sub grid " + gridIndex))
        }
        // console.log("[i]:::", i)
        // console.log("[j]:::", j)

        if (dictionary.hasOwnProperty(currentValue + " found in row " + i) ||
          dictionary.hasOwnProperty(currentValue + " found in column " + j) ||
          dictionary.hasOwnProperty(currentValue + " found in sub grid " + gridIndex)
        ) {
          console.log("dictionary", JSON.stringify(dictionary))
          console.log("false")
          return false
        }
        else {
          var row = currentValue + " found in row " + i
          var column = currentValue + " found in column " + j
          var grid = currentValue + " found in sub grid " + gridIndex
          dictionary[row] = true
          dictionary[column] = true
          dictionary[grid] = true
        }
      }
    }
  }

  console.log("dictionary", JSON.stringify(dictionary))
  console.log("true")
  return true
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
  [".",".",".",".","5",".",".","1","."],
  [".","4",".","3",".",".",".",".","."],
  [".",".",".",".",".","3",".",".","1"],
  ["8",".",".",".",".",".",".","2","."],
  [".",".","2",".","7",".",".",".","."],
  [".","1","5",".",".",".",".",".","."],
  [".",".",".",".",".","2",".",".","."],
  [".","2",".","9",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."]]

isValidSudoku(nums)