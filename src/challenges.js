// Desafio 1
function compareTrue(arg, arg2) {
  if ((arg == true) && (arg2 == true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let newArray = string.split(' ');

  return newArray;
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];

  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;

  let sum = wins + ties;

  return sum;
}

// Desafio 6
function highestCount(array) {
  let maxNumber = -Infinity;
  let repeatNumber = 0;

  for (let i in array) {
    if (i > maxNumber) {
      maxNumber = array[i];
    }
  }

  for (let j in array) {
    if (maxNumber === array[j]) {
      repeatNumber += 1;
    }
  }

  return repeatNumber;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
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
