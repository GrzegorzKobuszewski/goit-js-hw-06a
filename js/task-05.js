const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

console.log(input.innerHTML);
console.log(output.innerHTML);

let inputValue = "Stranger";

input.addEventListener("input", (e) => {
    if (e.currentTarget.value === "") output.textContent = inputValue
    else output.textContent = e.currentTarget.value;
});

