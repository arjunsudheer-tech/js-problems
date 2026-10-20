const sumToN = (n) => {
  let sum = 0;
  for(let i = 1 ; i <= n ; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumToN(5));
console.log(sumToN(3));
console.log(sumToN(1));