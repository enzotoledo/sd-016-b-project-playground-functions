// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)){
    return true; 
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(phrase) {
  let resultado = phrase.split(" ");
  return resultado;
}

// Desafio 4
function concatName(array) {
  let firstName = array [0];
  let lastName = array.[array.length - 1];
  let resultado = lastName + ", " + firstName;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let draw = ties; 
  return victory + draw;
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
