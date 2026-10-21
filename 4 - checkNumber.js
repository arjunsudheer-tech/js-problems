const checkNumber = (n) => {
  if (n === 0) {
    return 'Zero';
  } else if(n < 0) {
    return 'Negative';
  } else {
    return 'Positive';
  }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));