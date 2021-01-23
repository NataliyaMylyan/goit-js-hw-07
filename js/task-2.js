const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulRef = document.querySelector("ul#ingredients");
// console.log(ulRef);
const liRef = ingredients.map((item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  // itemRef.classList.add('site-title');
  // itemRef.id = 'title';
  //console.log(itemRef);
  return itemRef;
});
//console.dir(liRef);
ulRef.append(...liRef);
//console.log(ulRef);
