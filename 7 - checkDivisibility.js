const checkDivisibility = (n) => {
  if(n % 3 === 0 && n % 5 === 0) {
    return 'Both';
  } else if(n % 3 === 0) {
    return 'Three';
  } else if(n % 5 === 0) {
    return 'Five';
  } else {
    return 'Neither';
  }
}

console.log(checkDivisibility(15));