const ulRef = document.querySelectorAll("li.item");
console.log(ulRef);
console.log(`В списке ${ulRef.length} категории.`);

ulRef.forEach((li) => {
  console.log(`Категория: ${li.children[0].textContent}`);
  console.log(`Количество елементов: ${li.children[1].childElementCount}`);
});
