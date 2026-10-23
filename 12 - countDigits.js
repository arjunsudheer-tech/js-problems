const countDigits = (n) => {
  n = Math.abs(n);
  let count = 0;
  if(n === 0) return 1;
  while (n > 0) {
    let rem = n % 10;
    count++;
    n = Math.trunc(n / 10);
  }
  return count;
}

console.log(countDigits(12345));
console.log(countDigits(786));