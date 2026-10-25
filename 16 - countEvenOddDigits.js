const countEvenOddDigits = (n) => {
  let even = 0;
  let odd = 0;

  while(n > 0) {
    let rem = n % 10;
    if(rem % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    n = Math.trunc(n / 10);
  }

  console.log(`Even digits : ${even}`);
  console.log(`Odd digits : ${odd}`);
}

countEvenOddDigits(123456);