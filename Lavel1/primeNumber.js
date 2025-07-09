// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function checkPrimeNumber(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let a = 2; a < Math.floor(num / 2); a++) {
    if (num % a === 0) return false;
  }
  return true;
}

const isPrimeNumber = checkPrimeNumber(8);
console.log("is prime number", isPrimeNumber);
