// // EXERCISE 1 - DEFINITION A
// const sum = (first, second, third) => first + second + third;
// const sub = (first, second, third) => first - second - third;
// const mult = (first, second, third) => first * second * third;
// const div = (first, second, third) => first / second / third;

// function calculator(fn, operator) {
//   if (operator === "+") {
//     return fn(15, 10, 5);
//   }
//   if (operator === "-") {
//     return fn(15, 10, 5);
//   }
//   if (operator === "*") {
//     return fn(15, 10, 5);
//   }
//   if (operator === "/") {
//     return fn(15, 10, 5);
//   }
// }

// // // EXERCISE 1 - CALLBACK A
// console.log(calculator(sum, "+"));
// console.log(calculator(sub, "-"));
// console.log(calculator(mult, "*"));
// console.log(calculator(div, "/"));

// // // EXERCISE 1 - DEFINITION B
const sub = (first, second, third) => first - second - third;
const sum = (first, second, third) => first + second + third;
const mult = (first, second, third) => first * second * third;
const div = (first, second, third) => first / second / third;

function calculator(fn) {
  return fn;
}

// // // EXERCISE 1 - CALLBACK B
let firstNum = prompt("Inserisci il primo numero");
let secondNum = prompt("Inserisci il secondo numero");
let thirdNum = prompt("Inserisci il secondo numero");

console.log(
  calculator(sum(parseInt(firstNum), parseInt(secondNum), parseInt(thirdNum)))
);
console.log(
  calculator(sub(parseInt(firstNum), parseInt(secondNum), parseInt(thirdNum)))
);
console.log(
  calculator(mult(parseInt(firstNum), parseInt(secondNum), parseInt(thirdNum)))
);
console.log(
  calculator(div(parseInt(firstNum), parseInt(secondNum), parseInt(thirdNum)))
);
