// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let draw = ties;
  return victory + draw;
}

// Desafio 6
function highestCount(numbers) {
  let bigger = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > bigger) {
      bigger = numbers[index];
    }
  }
  let biggerCount = 0;
  for (let count = 0; count < numbers.length; count += 1) {
    if (bigger === numbers[count]) {
      biggerCount += 1;
    }
  }
  return biggerCount;
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
