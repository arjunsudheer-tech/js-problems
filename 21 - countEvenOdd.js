const countEvenOdd = (arr) => {
  let odd = 0;
  let even = 0;
  for(i = 0 ; i < arr.length ; i++) {
    if(arr[i] % 2 === 0) {
      even++
    } else {
      odd++;
    }
  }
  console.log(`Even : ${even}`)
  console.log(`Odd : ${odd}`)

}

countEvenOdd([1,2,3,4,5,6]);
countEvenOdd([2,4,6]);
countEvenOdd([]);