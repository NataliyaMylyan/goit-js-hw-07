const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

console.dir(inputRef);
console.dir(spanRef);

inputRef.addEventListener("input", () => {
  spanRef.style.fontSize = `${inputRef.value * 2}%`;
  console.log(spanRef);
});
