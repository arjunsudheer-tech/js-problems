const isStringPalindrome = (str) => {
  let lowerStr = str.toLowerCase();
  let reversed = '';
  for(let i = lowerStr.length - 1 ; i >= 0 ; i--) {
    reversed += lowerStr[i];
  }

  return lowerStr === reversed;
}

console.log(isStringPalindrome('madam'));
console.log(isStringPalindrome('Level'));
console.log(isStringPalindrome('hello'));