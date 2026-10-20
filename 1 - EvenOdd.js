const checkEvenOdd = (n) => {
  if(n % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));