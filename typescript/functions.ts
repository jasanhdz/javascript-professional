// Funciones
function add(a: number, b: number): number {
  return a + b;
}
const sum = add(4, 25)

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firtsName: string, lastName?: string): string {
  return `${firtsName} ${lastName}`;
}
const jasan = fullName('Jasan');

function fullValue(firtsName: string = "Pepe", lastName: string = "Smith"): string {
  return `${firtsName} ${lastName}`;
}
const person = fullValue();