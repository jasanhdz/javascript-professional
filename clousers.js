// Clousers
// printColor
// let color = 'green';
// function printColor() {
//   console.log(color);
// }
// IIFE: immediately invoked function expression
(function () {
  let color = 'green';

  function printColor() {
    console.log(color);
  }

  printColor();
})();
function makeColorPrinter(color) {
  let colorMessage = `The color is: ${color}`;
  return function () {
    console.log(colorMessage);
  }
}
let greenColorPrinter = makeColorPrinter("green");
console.log(greenColorPrinter());

// Clousers Jasan Hernández.
// ¿Variables privadas?
const counter1 = {
  count: 3
}
// count esta en el scope Global Window
console.log(counter1.count);
// Podemos modificar su valor si quisieramos
counter1.count = 99;
console.log(counter1.count);

// Clouseres - creamos un function scope
function makeCounter(n) {
  // count ya no existe en window, ahora
  // solo pertenece a la función
  let count = n;
  return {
    increase: function () { count += 1; },
    decrease: function () { count -= 1},
    getCount: function () { return count; },
  }
}
let counter = makeCounter(7);
console.log('This count is:', counter.getCount());
console.log('This count is:', counter.increase());
console.log('This count is:', counter.decrease());
// No podemos cambiar el valor de count porque no 
// está en nuestro alcance.
// ERROR FATAL
// counter.count = 99;