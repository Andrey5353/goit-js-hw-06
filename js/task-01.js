const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const categoriesName1 = categories[0].querySelector('h2');
const quntityEl1 = categories[0].querySelectorAll('li');
console.log(`Category: ${categoriesName1.textContent}`);
console.log(`Elements: ${quntityEl1.length}`)


const categoriesName2 = categories[1].querySelector('h2');
const quntityEl2 = categories[1].querySelectorAll('li');
console.log(`Category: ${categoriesName2.textContent}`);
console.log(`Elements: ${quntityEl2.length}`)


const categoriesName3 = categories[2].querySelector('h2');
const quntityEl3 = categories[2].querySelectorAll('li');
console.log(`Category: ${categoriesName3.textContent}`);
console.log(`Elements: ${quntityEl3.length}`)


