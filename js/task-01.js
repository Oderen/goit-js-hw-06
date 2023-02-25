const categoriesAmount = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesAmount.length);

categoriesAmount.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`);
})


