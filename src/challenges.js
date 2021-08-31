// Desafio 1
function compareTrue(value1, value2) {
  if(value1 && value2) {
    return true;
  }
  else {
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
  let splitedString = string.split(' ');
  return splitedString;
}

// Desafio 4
function concatName(stringArray) {
  let concatenated = stringArray[stringArray.length - 1] + `,` + stringArray[0];
  return concatenated;
}
//console.log(concatName(['Lucas','Cassiano','Ferraz','Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
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
