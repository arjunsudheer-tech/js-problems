const isDivisibleBy5 = (n) => {
  if(n % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isDivisibleBy5(25));
console.log(isDivisibleBy5(12));
console.log(isDivisibleBy5(0));