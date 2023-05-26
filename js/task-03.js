const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Stworzenie galerii z nowych zdjęć

const galleryList = document.querySelector("ul.gallery");

const newElements = images
  .map(image => 
    `<li class = "gallery-item">
      <img class = "gallery-picture" src = "${image.url}" alt = "${image.alt}" />
    </li>`)
  .join("");

galleryList.insertAdjacentHTML("beforeend", newElements);
console.log(galleryList);

// Sprawdzenie tego, co wyświetla się na konsoli
// console.log(galleryList.innerHTML);


// Stylowanie "starej" galerii z "nowymi" elemetami

galleryList.style.display = "flex";
// galleryList.style.flexDirection = "column-reverse";
galleryList.style.gap = "20px";
galleryList.style.listStyle = "none";
galleryList.style.padding = "0px";


// Stylowanie nowych zdjeć w "starej" galerii

const newGalleryItems = document.querySelectorAll("ul.gallery > li.gallery-item");
const newGalleryPictures = document.querySelectorAll("ul.gallery > li.gallery-item > img.gallery-picture");

newGalleryPictures.forEach(e => {
  e.setAttribute("alt", `${e.getAttribute("alt")}, new gallery photo`);
  e.setAttribute("width", "400px");
  e.classList.add("newGalleryPicture");
  e.style.borderRadius = "40px";
  e.style.hover = "cursor: pointer";
  e.style.transition = "1000ms linear";
})




// const galleryList = document.querySelector("ul.gallery");

// const galleryWithNewElements = images
//   .forEach(image => { 
//     galleryList.insertAdjacentHTML("beforeend",
//     `<li>
//       <img src="${image.url}" alt="${image.alt}" width="300"/>
//     </li>`)
//   });

// console.log(galleryWithNewElements);
// console.log(galleryList.innerHTML);
