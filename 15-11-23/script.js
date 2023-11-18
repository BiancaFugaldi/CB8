// Exercise 1
// Create dynamic html elements
const shoeProdGen = (shoeData) => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const productNameEl = document.createElement("h5");
  const priceEl = document.createElement("p");
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Aggiungi al carrello";
  const cardFooter = document.createElement("div");
  const favouriteItem = document.createElement("div");
  favouriteItem.textContent = "O";

  // Assign properties and contents to elements
  wrapperEl.className = "shoe";
  imgEl.setAttribute("src", shoeData.imageUrl);
  imgEl.setAttribute("alt", shoeData.shoeName);
  textEl.className = "text";
  cardFooter.className = "card-footer";
  favouriteItem.className = "fav-item";
  priceEl.textContent = shoeData.price + "€";
  productNameEl.textContent = shoeData.shoeName;
  textEl.append(productNameEl, priceEl);
  cardFooter.append(textEl, buttonEl);
  wrapperEl.append(favouriteItem, imgEl, cardFooter);

  try {
    wrapperEl.append(ciao);
  } catch (error) {
    console.log("ciao");
  }

  return wrapperEl;
};

const mockData = [
  {
    id: 1,
    shoeName: "Rainbow Sandal",
    price: 1250,
    imageUrl: "./Media/428954_00.png",
  },
  {
    id: 2,
    shoeName: "Gold Varina",
    price: 650,
    imageUrl: "./Media/560177_00.png",
  },
  {
    id: 2,
    shoeName: "Gold Varina",
    price: 650,
    imageUrl: "./Media/560177_00.png",
  },
  {
    id: 2,
    shoeName: "Gold Varina",
    price: 650,
    imageUrl: "./Media/560177_00.png",
  },
  {
    id: 2,
    shoeName: "Gold Varina",
    price: 650,
    imageUrl: "./Media/560177_00.png",
  },
];

const shoeListEl = document.querySelector(".product-list");

// document.body.append(shoeProdGen(mockData[1]));
// document.body.append(shoeProdGen(mockData[0]));

// Exercise 2 inside exercise 1
// Try&Catch
try {
  mockData.map((shoe) => shoeListEl.appendChild(shoeProdGen(shoe)));
} catch (error) {
  console.log("Errore custom: ", error);
}
// End exercise 2
// End exercise 1
