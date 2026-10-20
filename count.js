let count = 0;
let countDisplay = document.querySelector('.count');
let buttonClick = document.querySelector('.buttonIncrement');

buttonClick.addEventListener('click' , () => {
  count = count + 1;
  countDisplay.innerHTML = `Count: `+count;
})


