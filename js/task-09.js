
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
})


  

