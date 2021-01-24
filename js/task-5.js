const inputRef = document.querySelector("#name-input");
//console.dir(inputRef);
const spanRef = document.querySelector("#name-output");
//console.dir(spanRef);

document.addEventListener("input", () => {
  
  spanRef.textContent = inputRef.value || "незнакомец";
 
  //console.dir(inputRef);
  //console.log(spanRef.textContent);
});
