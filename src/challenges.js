// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(paramText) {
  // seu código aqui
  let arrayText = paramText.split(' ');
  return arrayText;
}

// Desafio 4
function concatName(paramArray) {
  // seu código aqui
  let firstIndex = paramArray.shift();
  let lastIndex = paramArray.pop();
  return `${lastIndex}, ${firstIndex}`;
}

// Desafio 5
function footballPoints(wins, tiers) {
  // seu código aqui
  let pointsByWins = wins * 3;
  let pointsByDraws = tiers * 1;
  return pointsByWins + pointsByDraws;
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
