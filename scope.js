// Global scope
var message = 'Hola, Senior';
var $ = function (message) {
  console.log(`Say: ${message}`)
}

// Funcion Scope 
function printNumbers() {
  var i; // No importa si declaramos i adentro javascript lo ejecutará siempre así cuando se trata de var.
  for (i = 0; i < 10; i++) {
    setTimeout(() => { 
      console.log(i);
    }, 100);
  }
}

function printNumbers2() {
  var i
  for (i = 0; i < 10; i++) {
    function eventuallyPrintNumber(n) {
      setTimeout(() => { 
        console.log(n);
      }, 100);
    }

    eventuallyPrintNumber(i)
  }
}

// Block Scope
function printNumbers3() {
  for (let i = 0; i < 10; i++) {
      setTimeout(() => { 
        console.log(i);
      }, 100);
  }
}