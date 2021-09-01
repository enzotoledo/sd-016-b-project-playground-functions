// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if ((valueOne === true) && (valueTwo === true)) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(phrase) {
  const firstName = phrase[0];
  const lastName = phrase[phrase.length - 1];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winPoints = wins * 3;
  const tiesPoints = ties;

  return winPoints + tiesPoints;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = numbers[0];
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
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;

  if (cat1Distance < 0) cat1Distance *= -1;
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }

  if (cat2Distance > cat1Distance) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
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
