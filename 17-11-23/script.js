// EXERCISE 1
const popupEl = (text, btnText) => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("p");
  const btnEl = document.createElement("button");

  wrapperEl.className = "popup";
  textEl.textContent = text;
  btnEl.classname = "popup-btn";
  btnEl.textContent = btnText;

  wrapperEl.append(textEl, btnEl);
  return wrapperEl;
};

setTimeout(() => {
  // console.log("Questo si esegue alla fine dei 3,5 secondi");
  document.body.append(popupEl("Sei maggiorenne?", "Puoi procedere"));
}, 3500);

// EXERCISE 2
// Eseguire una chiamata di tipo `fetch` al seguente indirizzo `https://dummyjson.com/products`.
// Dalla risposta che ne consegue, stampare un array che contiene non tutti i valori ma solo quelli il cui prezzo (chiave `price`) sia inferiore a 50.

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));

// FAILED ATTEMPT TO FILTER PRODUCTS
// const array = product;

// const filteredProducts = array.filter((product) => product.price <= 50);
// console.log(product.title, product.price);

// for (let i = 0; i <= filteredProducts.length - 1; i++) {
//   console.log(filteredProducts[i]);
// }
