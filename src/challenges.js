// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 == true) && (value2 == true))
    return true; {
    return false
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2)
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
  return resultado
} 


// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length-1];
  let final = lastItem + ", " + firstItem;
  return final;
}
  
  
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ((wins * 3) + ties)
  return pontos
}
  footballPoints(14, 8)

  console.log(footballPoints);
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
