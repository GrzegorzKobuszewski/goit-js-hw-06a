const createButton = document.querySelector(`button[data-create=""]`);
const destroyButton = document.querySelector(`button[data-destroy=""]`);
const input = document.querySelector(`div#controls>input`);
const boxes = document.querySelector(`div#boxes`);

createButton.addEventListener( "click", () => createBoxes(input.value) );
destroyButton.addEventListener( "click", () => destroyBoxes() );

function createBoxes(number) {
  
  let boxHeight = 30;
  let boxWidth = 30;
  let border = "solid black 2px";

  for (let i = 0; i < number; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.height = `${boxHeight + 10 * i}px`;
    box.style.width = `${boxWidth + 10 * i}px`;
    box.style.borderBottom = box.style.borderLeft = box.style.borderRight = `${border}`;
    boxes.prepend(box);
  }
}

const destroyBoxes = () => {
  boxes.textContent = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};