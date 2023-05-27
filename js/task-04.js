const buttonDecrement = document.querySelector(`#counter > button[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`#counter > button[data-action="increment"]`);
const counter = document.querySelector(`#counter > span#value`);

let counterValue = 0;

buttonDecrement.addEventListener("click", () => counter.textContent = counterValue -= 1);
buttonIncrement.addEventListener("click", () => counter.textContent = counterValue += 1);

// Stylowanie kontenera z przyciskami i wywietlaną wartością
document.querySelector(`div#counter`).padding = "10px";
buttonIncrement.textColor = "red";

// Wyświetlnienie aktualnych wartości:
//console.log(buttonDecrement.innerHTML);
// console.log(buttonIncrement.innerHTML);
// console.log(counter.innerHTML);