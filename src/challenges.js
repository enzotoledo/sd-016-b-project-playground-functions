// Desafio 1
function compareTrue(valueOne, valueTwo) {
  // seu código aqui
  if ((valueOne === true) && (valueTwo === true)) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ');
}

// Desafio 4
function concatName(phrase) {
  // seu código aqui
  const firstName = phrase[0];
  const lastName = phrase[phrase.length - 1];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const winPoints = wins * 3;
  const tiesPoints = ties;

  return winPoints + tiesPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let count = 0;
  let highestNumber = numbers[0];
  // Descobre o maior numero
  for (const number of numbers) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  for (const number of numbers) {
    if (number === highestNumber) {
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
