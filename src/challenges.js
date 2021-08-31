// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(wordString) {
  let result = wordString.split(' ');
  return result;
}

// Desafio 4
function concatName(anyArray) {
  let lastArray = anyArray[anyArray.length - 1];
  let firstArray = anyArray[0];
  return lastArray + ', ' + firstArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoins = wins * 3;
  return winPoins + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let result = [];
  let largerNumber = Math.max(...arrayNumbers);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === largerNumber) {
      result.push(largerNumber);
    }
  }
  return result.length;
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
