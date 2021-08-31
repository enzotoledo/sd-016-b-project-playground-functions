/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
  //  Troquei o else desnecessário por conta da sugestão do Lint
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let splited = str.split(' ');
  return splited;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let name = '';
  name += array[array.length - 1];
  name += ', ';
  name += array[0];
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let high = Math.max.apply({}, array);
  // Código do high inspirado no site: https://stackoverflow.com/questions/54623431/find-the-biggest-number-in-an-array-by-using-javascript-loops
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (high === array[i]) {
      count += 1;
    }
  }
  return count;
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
