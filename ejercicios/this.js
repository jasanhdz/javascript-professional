// this en el scope global
console.log(`this: ${this}`);

// this en el scope de una función
// function whoIsThis() {
//   return this;
// }
// console.log(whoIsThis());

// this en el scope de una función strict mode 
function whoIsThisStrictMode() {
  "use strict";
  return this;
}
// undefine
console.log(`whoIsThisStrictMode: ${whoIsThisStrictMode()}`);

// this en el constexto de un objeto 
const person = {
  name: "Gabriel",
  saludar: function () {
    console.log(`hola soy ${this.name}`);
  }
}
console.log(person.saludar());

// this cuando sacamos una función de un objeto 
const accion = person.saludar;
accion();

// This en el contexto de una Clase(Prototype);
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person.prototype.saludar = function () {
  console.log(`Me llamó ${this.name} ${this.lastName}`);
}

const jasan = new Person('Jasan', 'Hernández');
jasan.saludar();