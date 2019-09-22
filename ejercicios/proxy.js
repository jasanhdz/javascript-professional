// target es mi objeto a supervisar (sus propiedades pueden ser objetos, array, funciones, u otro proxy)
const target = {
  red: 'Rojo',
  green: 'Verde',
  blue: 'Azul'
}
// handler es un objeto con funciones (trampa) que definen las acciones a seguir cuando se accede al objeto supervisado
const handler = {
  get(obj, prop) {
    if (prop in obj) {
      // si la propiedad existe, pues retornamos su valor
      return obj[prop]
    }

    // Si llega hasta aqui, vamos a ver si podemos retornar una sugerencia
    const suggetion = Object.keys(obj).find(key => {
      // creo un objeto con todas mis claves del objeto supervisado, y retorno aquella (nombre) 
      // que su distancia sea <= 3 tomando como base la propiedad invocada
      return Levenshtein.get(key, prop) <= 3 
    })

    
    if (suggetion) {
      console.log(`${prop} no se encontró. ¿Quisiste decir ${suggetion}?`);
    }

    return obj[prop];
  }
}
const p = new Proxy(target, handler);

p.red; // "Rojo"
p.green; // "Verder"
p.reed //reee no se encontró. ¿Quisiste decir red?
p.geen //reee no se encontró. ¿Quisiste decir green?