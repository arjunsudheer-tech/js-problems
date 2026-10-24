const sumOfDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem;
    n = Math.trunc(n / 10);
  }

  return sum;
}

console.log(sumOfDigits(12345));
console.log(sumOfDigits(708));
console.log(sumOfDigits(9));