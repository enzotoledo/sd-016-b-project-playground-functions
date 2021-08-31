// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(a, b) {
  // seu código aqui
  return (a * b) / 2;
}

// Desafio 3
function splitSentence(myString) {
  // seu código aqui
  return myString.split(' ');
}

// Desafio 4
function concatName(myString) {
  // seu código aqui
  let finalWord = myString[myString.length - 1];
  let firstWord = myString[0];
  return `${finalWord}, ${firstWord}`;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
