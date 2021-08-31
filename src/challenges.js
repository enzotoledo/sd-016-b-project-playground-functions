// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(names) {
  let newArray = [names[names.length - 1], names[0]];
  return newArray.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 1; i <= wins; i += 1) {
    points += 3;
  }
  for (let i = 1; i <= ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(numArray) {
  let biggestNum = numArray.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let counter = 0;

  for (const num of numArray) {
    if (num === biggestNum) {
      counter += 1;
    }
  }
  return counter;
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
