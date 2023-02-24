const categoriesAmount = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesAmount.length);
// Number of categories: 3

const titleRef = document.querySelectorAll("h2");
console.log(`Category: ${titleRef[0].textContent}`);
// Category: Animals

console.log("Elements: ", categoriesAmount[0].querySelectorAll("li").length);
// Elements: 4

console.log(`Category: ${titleRef[1].textContent}`);
// Category: Products

console.log("Elements: ", categoriesAmount[1].querySelectorAll("li").length);
// Elements: 3

console.log(`Category: ${titleRef[2].textContent}`);
// Category: Technologies

console.log("Elements: ", categoriesAmount[2].querySelectorAll("li").length);
// Elements: 5


