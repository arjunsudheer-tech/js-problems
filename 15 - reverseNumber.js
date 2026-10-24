const reverseNumber = (n) => {
  let reversed = 0;
  
  while(n > 0) {
    let rem = n % 10;
    reversed = reversed * 10 + rem;
    n = Math.trunc(n / 10);
  }

  return reversed;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(567));
console.log(reverseNumber(120));