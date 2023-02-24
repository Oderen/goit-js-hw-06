

const value = document.querySelector('#value');

let counterValue = 0;

const firtsBtn = document.querySelector(
  'button[data-action="decrement"]'
);

const secondBtn = document.querySelector(
  'button[data-action="increment"]'
);


firtsBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
  
});

secondBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});







