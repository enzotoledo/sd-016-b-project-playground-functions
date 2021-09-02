// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  // let calcArea = (base * height) / 2;
  // return calcArea;
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(textString) {
  // seu código aqui
  // let splitSentence = textString.split(' ');
  // return splitSentence;
  return textString.split(' ');
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  // let firstArray = nameArray[0];
  // let lastArray = nameArray[nameArray.length - 1];
  // let expectedArray = lastArray + ', ' + firstArray;
  // return expectedArray;
  return nameArray[nameArray.length - 1] + ', ' + nameArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoint = 3;
  let tiePoint = 1;
  let score = wins * winPoint + ties * tiePoint;
  return score;
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
