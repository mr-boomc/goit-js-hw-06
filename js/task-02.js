const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {

  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  liArray.push(liEl)

})
console.log(liArray)

ulEl.append(...liArray)