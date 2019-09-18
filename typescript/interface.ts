enum Color {
  Rojo = "Rojo",
  Verde = "Verde"
};

interface Rectangulo {
  height: number,
  width: number
  color?: Color
}

let rect: Rectangulo = {
  height: 4,
  width: 3,
  // color: Color.Verde
}

function area(r: Rectangulo) {
  return r.height * r.width;
}

const areaReact = area(rect);
rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());

