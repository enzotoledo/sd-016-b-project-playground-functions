// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true)
  return true
  else
  return false
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2

  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ")
  return array
  
  // seu código aqui
}

// Desafio 4
function concatName(array1) {
let last = array1[array1.length - 1]
let first = array1[0]
let result = (last + ", " + first)
return result

  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3
  let tiePoints = ties * 1
  return winPoints + tiePoints
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  

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
