// Desafio 1
function compareTrue(a,b) {
if((a==true) && (b==true)){
  return true;
}
  else {
  return false;
  }
}

// Desafio 2
function calcArea(base,height) {
let resultado = [];
resultado = (base * height)/2;
return resultado;
}
// Desafio 3
function splitSentence(string) {
  string = string.split(" ")
  return string
}

// Desafio 4
function concatName(array) {
array = array[array.length-1] + "," + array[0];
return array
}

// Desafio 5
function footballPoints(wins,ties) {
let pontos= 0;
wins = wins * 3;
ties = ties * 1;
pontos = ties + wins;
return pontos;
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
