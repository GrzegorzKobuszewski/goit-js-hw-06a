const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (e) => {
    if ( e.currentTarget.value.length === parseInt(e.currentTarget.getAttribute("data-length")) ) e.currentTarget.setAttribute("class", "valid")
    else e.currentTarget.setAttribute("class", "invalid");
})

console.log(parseInt(input.getAttribute("data-length")));

/*
Rozwiązanie Łukasza, ale lepiej nie używać z this... bo jak ktoś zmieni nazwę funkcji, albo zrobi z tego strzałkową to funkcja straci kontekst...

document.getElementById("validation-input").onblur = function () {
  console.log(this.value.length);
  if (this.getAttribute("data-length") > this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};

*/