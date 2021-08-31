// Desafio 1
function compareTrue(x, y) {
  if ((x === true) && (y === true)) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/ 2;
}
// console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  const array = string.split(" ")
  return array;
  }
  
console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins*3;
  ties = ties;
  return wins + ties;
}
// console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numeros) {
  numeros = [];
  for(let index = 0; index < numeros.length; index +=1) {

  }
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
