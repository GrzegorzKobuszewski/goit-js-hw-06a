const numberOfCategories = document.querySelectorAll("ul#categories>li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categoriesOfItems = document.querySelectorAll(".item")
    .forEach(e => {
        console.log(`Category: ${e.querySelector("h2").textContent}`);
        console.log(`Elements: ${e.querySelectorAll("li").length}`);
    });

// alternatywnie można dać:
// console.log ("------------------------------------------------------------------");
// const categoriesOfItems2 = document.querySelectorAll(".item")
//     .forEach(e => {
//         console.log(`Category: ${e.firstElementChild.textContent}`);
//         console.log(`Elements: ${e.lastElementChild.children.length}`);
//     });