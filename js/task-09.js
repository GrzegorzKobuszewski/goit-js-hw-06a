const colorName = document.querySelector("span.color");
const body = document.querySelector("body");
const button = document.querySelector("button.change-color");

button.addEventListener("click", () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = `${getRandomHexColor()}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
