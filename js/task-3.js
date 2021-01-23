const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulRef = document.querySelector("ul#gallery");
// console.log(ulRef);

const liRef = images.map((item) => {
  const imageRef = document.createElement("li");
  //console.log(`<img src="${item.url}" alt="${item.alt}">`);
  imageRef.insertAdjacentHTML(
    "afterbegin",
    `<img class = 'decoration' src="${item.url}" alt="${item.alt}">`
  );

  return imageRef;
});

console.log(...liRef);
ulRef.append(...liRef);
// console.log(ulRef);
