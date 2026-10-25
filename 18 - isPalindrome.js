const isPalindrome = (n) => {
  n = Math.abs(n);
  let temp = n;
  let rev = 0;

  while(n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.trunc(n / 10);
  }

  return rev === temp;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(1331));
console.log(isPalindrome(120));