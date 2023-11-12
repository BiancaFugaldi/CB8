// EXERCISE 1
// Create element
const hero = document.createElement("div");
const heroImage = document.createElement("img");
const heroText = document.createElement("div");
const heroTitle = document.createElement("h1");
const heroParagraph = document.createElement("p");
const heroButton = document.createElement("button");

// Assign properties and contents to elements
hero.setAttribute("class", "hero");
heroImage.setAttribute("class", "hero-image");
heroText.setAttribute("class", "hero-text");
heroTitle.textContent = "La tua settimana bianca";
heroParagraph.textContent = "5-11 febbraio 2024";
heroButton.textContent = "Prenota";

// Append elements
hero.append(heroImage, heroText);
document.body.append(hero);

// EXERCISE 2 - NOT COMPLETED
heroButton.addEventListener("click", () => {
  hero.display = none;
});
