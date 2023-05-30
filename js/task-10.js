const createButton = document.querySelector(`button[data-create=""]`);
const destroyButton = document.querySelector(`button[data-destroy=""]`);
const input = document.querySelector(`div#controls>input`);
const boxes = document.querySelector(`div#boxes`);

createButton.addEventListener( "click", () => createBoxes(input.value) );
destroyButton.addEventListener( "click", () => destroyBoxes() );

let boxHeight = 30;
let boxWidth = 30;
let border = "solid black 1px";

function createBoxes(number) {
  for (let i = 0; i < number; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.borderTop = box.style.borderLeft = box.style.borderRight = `${border}`;
    boxes.append(box);
    box.style.height = `${boxHeight += 10}px`;
    box.style.width = `${boxWidth += 10}px`;
  }
}

const destroyBoxes = () => {
  boxes.textContent = "";
  boxHeight = 30;
  boxWidth = 30;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


// PONIŻEJ INFO Z CZYM MIAŁEM TRUDNOŚĆ W ZADANIU:)
// function createBoxes(number) {
//   let boxHeight = 30;
//   let boxWidth = 30;
//   let border = "solid black 2px";

//   for (let i = 0; i < number; i += 1) {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     box.style.borderTop = box.style.borderLeft = box.style.borderRight = `${border}`;
//     box.style.height = `${boxHeight += 10*i}px`;
//     box.style.width = `${boxWidth += 10*i}px`;
//     boxes.prepend(box);
//   }
// }

// Przy rozwiązaniu poniżej zmienne nie mają aktualnych wartości, Lepiej obliczeń nie wykonywać w stylach
// Pierwszy błąd, to zadeklarowanie boxWidth i boxHeight w funkcji createBoxes.
// Ją przecież wykonujesz na kliknięciu w przycisk, także za każdym kliknięciem znów ustawiasz boxWidth i Height na 30.
// A więc przenieś deklarowanie do góry, nad funkcję.

// Druga sprawa:
// box.style.height = `${boxHeight + 10*i}px`;
// box.style.width = `${boxWidth + 10*i}px`;
// Tutaj niepotrzebna komplikacja, wystarczy użyć tylko zmiennej, a więc w ten sposób:
//     box.style.height = `${boxHeight}px`;
//     box.style.width = `${boxWidth}px`;

// I teraz najważniejsze. 
// Zmieniamy prepend na append, ponieważ prepend każdy nowy blok doda CI na początku, a powinen na końcu, więc użyjemy append.
// Po boxes.append(box)
// Zwiększamy width i height o 10, aby kolejny blok który dodamy, był o 10 wyższy i szerszy od poprzedniego czyli:
//     boxes.append(box);
//     boxHeight += 10;
//     boxWidth += 10;






