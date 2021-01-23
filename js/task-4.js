let counterValue = 0;
const btnInRef = document.querySelector("[data-action='increment']");
console.log(btnInRef);

const btnOffRef = document.querySelector("[data-action='decrement']");
console.log(btnOffRef);

const spanRef = document.querySelector("span#value");
console.dir(spanRef);

const increment = () => {
  spanRef.textContent = counterValue += 1;
  console.log(counterValue);
};

const decrement = () => {
  spanRef.textContent = counterValue -= 1;
  console.log(counterValue);
};

btnInRef.addEventListener("click", increment);
btnOffRef.addEventListener("click", decrement);
