// Establece this usando 'call'
function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastname}`)
}

const richard = {
  name: 'Richard',
  lastname: 'Lopez'
}

saludar.call(richard)

// Establece this usando 'call' y pasar argumentos a la función.
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}

caminar.call(richard, 500, 'norte');

// Establece this usando 'apply' y pasar argumentos a la función

caminar.apply(richard, [900, 'noreste']);

// Establecer una nueva función usando bind()
const daniel = {
  name: "Daniel",
  lastname: "Sanchez"
}
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel, 1000);
danielCamina('oeste');

// Cuando es útil uno de estós métodos 
const buttons = document.getElementsByClassName("call-to-action");
// buttons.forEach(button => {
//   button.onclick = () => alert('Nunca pares de aprender');
// });

// No es una funcion forEach porque button es NodeList
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert('Nunca pares de aprender');
})