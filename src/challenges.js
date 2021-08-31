// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  } return false;
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let sentence = string.split(' ');
  return sentence;
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let concatFirstLast = `${array.slice(-1)}, ${array[0]}`;
  return concatFirstLast;
}

let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// let rocket = ['foguete', 'não', 'tem', 'ré'];
// let boat = ['captain', 'my', 'captain'];

console.log(concatName(names));

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let sumPoints = victory + ties;
  return sumPoints;
}

console.log(footballPoints(14, 8));

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
