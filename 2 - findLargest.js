const findLargest = (a,b,c) => {
  if(a >= b && a >= c) {
    return a;
  } else if(b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(10,25,15));
console.log(findLargest(7,3,1));
console.log(findLargest(5,5,2));