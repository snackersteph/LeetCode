// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
// Sieve of Eratosthenes
var countPrimes = function(n) {
  let primes = []

  for (let i=0; i < n; i ++) {
    primes[i] = true
  }

  // there are no primes greater than the current number and its square
  // setting all the multiples of 2 to false
  for (let i=2; i * i < primes.length; i++) {
    if (primes[i]) {
      for (let j=i; j * i < primes.length; j++) {
        primes[i * j] = false
      }
    }
  }

  let primeCount = 0

  // we skip 0 and 1 to start at primes[2]
  for (let i=2; i < primes.length; i++) {
    if (primes[i]) {
      primeCount++
    }
  }
  return primeCount
};