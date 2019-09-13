function* simpleGenerator() {
  console.log("GENERATOR START");
  yield 1; // {value: 1, done: false}
  yield 2; // {value: 2, done: false}
  yield 3; // {value: 3, done: false}
  console.log("GENERATOR END");
}

// const gen = simpleGenerator();
// gen.next()
// GENERATOR START
// gen.next();
// GENERATOR END

// Podemos hacer generadores infinitos
function* idMaker() {
  let id = 1;
  while (true) {
    yield id;
    id += 1;
  }
}

// Cuando llamamos a next también podemos pasar valores que la función recibe.
function* idMakerWithReset() {
  let id = 1;
  let reset;
  while (true) {
    reset = yield id;
    if (reset) {
      id = 1;
    } else {
      id += 1;
    }
  }
}

// Ahora hagamos un ejemplo un poco más complejo: la secuencia fibonacci
function* fibonacci() {
  let a = 1, b = 1;
  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}