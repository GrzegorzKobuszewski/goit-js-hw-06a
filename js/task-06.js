const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (e) => {
    if ( e.currentTarget.value.length === e.currentTarget.getAttribute("data-length") ) e.currentTarget.setAttribute("class", "valid")
    else e.currentTarget.setAttribute("class", "invalid");
})

console.log(input.getAttribute("data-length"));