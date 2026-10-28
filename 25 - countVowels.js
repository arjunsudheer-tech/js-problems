const countVowels = (str) => {
  let lowerStr = str.toLowerCase();
  let count = 0;
  for(let i = 0 ; i < lowerStr.length ; i++) {
    if(
      lowerStr[i] === 'a' || 
      lowerStr[i] === 'e' || 
      lowerStr[i] === 'i' || 
      lowerStr[i] === 'o' || 
      lowerStr[i] === 'u'
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('hello'));
console.log(countVowels('JAVASCRIPT'));
console.log(countVowels('xyz'));
