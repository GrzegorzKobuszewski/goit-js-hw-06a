const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

const itemsList = ingredients
  .map(e => {
    const lastElement = document.createElement("li");
    lastElement.textContent = e;
    lastElement.classList.add("item");
    return lastElement;
})

list.append(...itemsList);

console.log(list);
