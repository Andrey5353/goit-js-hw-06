const categoriesEL = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEL.length}`);

categoriesEL.forEach(function (categories) {
    console.log(`Category: ${categories.firstElementChild.textContent}`);
    console.log(`Elements: ${categories.lastElementChild.children.length}`)
});