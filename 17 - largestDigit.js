const largestDigit = (n) => {
  n = Math.abs(n);
  let largest = 0;

  while(n > 0) {
    let digit = n % 10;
    if(digit > largest) {
      largest = digit;
    }
    n = Math.trunc(n / 10);
  }

  return largest;
}

console.log(largestDigit(58321));
console.log(largestDigit(-749));
console.log(largestDigit(111));
console.log(largestDigit(0));