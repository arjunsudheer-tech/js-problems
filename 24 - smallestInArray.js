const smallestInArray = (arr) => {
  let min = arr[0];
  for(let i = 0 ; i < arr.length ; i++) {
    if(min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

console.log(smallestInArray([5, 2, 9, 1, 7])); // 1
console.log(smallestInArray([-5, -2, -9]));