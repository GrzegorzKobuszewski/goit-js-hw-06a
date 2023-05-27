const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

input.addEventListener("input", (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`;
});