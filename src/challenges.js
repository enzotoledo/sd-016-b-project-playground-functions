// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  let resultado = ((base * heigth) / 2);
  return resultado;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ', ' + array[0];
  return concat;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (3 * wins) + (1 * ties);
  return resultado;
}

console.log(footballPoints(14, 8));

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
