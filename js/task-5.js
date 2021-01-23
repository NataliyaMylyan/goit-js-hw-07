const inputRef = document.querySelector("#name-input");
//console.dir(inputRef);
const spanRef = document.querySelector("#name-output");
//console.dir(spanRef);

document.addEventListener("keyup", () => {
  !inputRef.value
    ? (spanRef.textContent = "незнакомец")
    : (spanRef.textContent = inputRef.value);
  //console.dir(inputRef);
  //console.log(spanRef.textContent);
});
