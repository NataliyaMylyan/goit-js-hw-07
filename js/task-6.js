//<input
//type="text"
//id="validation-input"
//data-length="6"
//placeholder="Введи 6 символов"
///>

const inputRef = document.querySelector("#validation-input");

//console.dir(inputRef);
//console.log(inputRef.dataset.length);

function validate(str) {
  return str.length === Number(inputRef.dataset.length);
}

inputRef.addEventListener("blur", (event) => {
  const { value } = event.target;

  !validate(value)
    ? inputRef.classList.add("invalid")
    : inputRef.classList.add("valid");
});

inputRef.addEventListener("focus", (event) => {
  event.target.classList.remove("invalid","valid");
  
});
