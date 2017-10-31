/*  Sum all the prime numbers up to and including the provided number. A prime
    number is defined as a number greater than one and having only two divisors,
    one and itself. For example, 2 is a prime number because it's only divisible
    by one and two. The provided number may not be a prime.

    Input: 7
    Output: 17
*/

console.log(sumPrimes(7));

function sumPrimes(num) {
  let sum = 0;
  
  for (let i = 0; i <= num; i++) {
    // 1 IS NOT PRIME, INITIALIZE ALL OTHERS AS PRIMES
    let prime = i === 1 ? false : true;
    
    // IS IT REALLY A PRIME?
    for (let j = 2; j < i; j++) {
      if (i % j === 0) prime = false;
    }
    
    if (prime === true) sum += i;
  }
  
  return sum;
}