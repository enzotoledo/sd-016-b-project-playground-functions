// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let concat = `${ultimo}, ${primeiro}`;

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let points = winPoints + ties;

  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
