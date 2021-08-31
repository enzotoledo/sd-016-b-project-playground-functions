// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [''];
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      array.push('');
    } else {
      array[array.length - 1] += string[i];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0 + wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let BiggerNumber = array[0];
  let repOfBiggerNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > BiggerNumber) {
      BiggerNumber = array[i];
      repOfBiggerNumber = 1;
    } else if (array[i] === BiggerNumber) {
      repOfBiggerNumber += 1;
    }
  }
  return repOfBiggerNumber;
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
