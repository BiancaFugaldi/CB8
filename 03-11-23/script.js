// EXERCISE 1: DEFINITION
function getTemperatureStatus(currentTemperature) {
  if (currentTemperature >= 0 && currentTemperature <= 10) {
    return "freddo";
  } else if (currentTemperature >= 11 && currentTemperature <= 22) {
    return "mite";
  } else if (currentTemperature >= 23 && currentTemperature <= 35) {
    return "caldo";
  } else {
    return "Temperatura fornita non valida";
  }
}

// EXERCISE 1: EXECUTION
// // TESTING "COLD"
console.log(getTemperatureStatus(5));

// // TESTING "WARM"
console.log(getTemperatureStatus(20));

// // TESTING "HOT"
console.log(getTemperatureStatus(35));

// // TESTING UNVALID VALUE
console.log(getTemperatureStatus(36));

// EXERCISE 2: DEFINITION
const identityData = {
  name: "Bianca",
  surname: "Fugaldi",
  age: 33,
  "eye-color": "marroni",
  job: "impiegata",

  greetings: function () {
    return (
      "Ciao, il mio nome è " +
      this.name +
      " " +
      this.surname +
      " e ho " +
      this.age +
      " anni."
    );
  },
  hobby: function (spareTime) {
    if (
      spareTime === "lunedì" ||
      spareTime === "martedì" ||
      spareTime === "giovedì"
    ) {
      return "Nel tempo libero partecipo al coding bootcamp di Edgemony.";
    } else if (spareTime === "mercoledì") {
      return "Nel tempo libero pratico yoga.";
    } else if (spareTime === "venerdì") {
      return "Nel tempo libero vado al cinema.";
    } else {
      return "Nel tempo libero mi rilasso.";
    }
  },
};

// EXERCISE 2: EXECUTION
console.log(identityData);
console.log(identityData["eye-color"]);
console.log(identityData.greetings(), identityData.hobby("lunedì"));

// EXERCISE 3: DEFINITION --> SOLUTION NOT FOUND YET
// const myFavourites = [];
// function addToFavourites() {}
// function showFavourites() {}
// function removeFromFavourites() {}

// EXERCISE 3: EXECUTION --> SOLUTION NOT FOUND YET
// console.log(myFavourites);
