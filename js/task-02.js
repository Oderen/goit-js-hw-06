
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
const array = [];

for (const ingredient of ingredients) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');

  array.push(item);
}

listRef.append(...array);








