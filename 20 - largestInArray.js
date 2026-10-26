const largestInArray = (arr) => {
  let largest = arr[0];
  for(let i = 1 ; i < arr.length ; i++) {
    if(arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestInArray([3,7,2,9,4]));
console.log(largestInArray([-5,-2,-10]));
console.log(largestInArray([8]));