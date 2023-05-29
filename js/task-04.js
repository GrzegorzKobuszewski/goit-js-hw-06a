const buttonDecrement = document.querySelector(`#counter > button[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`#counter > button[data-action="increment"]`);
const counter = document.querySelector(`#counter > span#value`);

let counterValue = 0;

buttonDecrement.addEventListener("click", () => counter.textContent = counterValue -= 1);
buttonIncrement.addEventListener("click", () => counter.textContent = counterValue += 1);

// Stylowanie kontenera z przyciskami i wywietlaną wartością
buttonDecrement.style = 'padding: 16px;';
buttonIncrement.style = 'padding: 16px;';
counter.style = 'background-color: yellow; border: solid red 1px; border-radius: 5px; color: red; padding: 16px;';

// Wyświetlnienie aktualnych wartości:
//console.log(buttonDecrement.innerHTML);
// console.log(buttonIncrement.innerHTML);
// console.log(counter.innerHTML);