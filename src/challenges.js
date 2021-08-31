// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(param) {
  const resultado = param.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let reversedArray = array.reverse();

  return (`${reversedArray[0]}, ${reversedArray[reversedArray.length - 1]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins !== 0) {
    wins *= 3;
  }
  return wins + ties;
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
