const countNumbers = (arr) => {
  let positive = 0;
  let zeroes = 0;
  let negative = 0;
  for(let i = 0 ; i < arr.length ; i++) {
    if(arr[i] > 0) {
      positive++;
    } else if(arr[i] === 0) {
      zeroes++;
    } else {
      negative++;
    }
  }
  return {
    positive: positive,
    negative: negative,
    zero: zeroes
  }
}

console.log(countNumbers([1,-2,0,4,-5,0]));

