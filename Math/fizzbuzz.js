// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples 
// of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

// APPROACH
// Put all the mappings in a hash table. The hash table fizzBuzzHash would look something
// like { 3: 'Fizz', 5: 'Buzz' }
// Iterate on the numbers from 1 ... N1...N.
// For every number, iterate over the fizzBuzzHash keys and check for divisibility.
// If the number is divisible by the key, concatenate the corresponding hash value to the
// answer string for current number. We do this for every entry in the hash table.
// Add the answer string to the answer list.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let valueHash = {
      3: "Fizz",
      5: "Buzz"
  }

  let finalResult = []

  for (let i=1; i <= n; i++) {
      let answer = ''

      for ([key, value] of Object.entries(valueHash)) {
          console.log()
          if (i % key === 0) {
              answer += value
          }
      }

      if (answer === '') {
          answer += i
      }

      finalResult.push(answer)
  }

  return finalResult
};