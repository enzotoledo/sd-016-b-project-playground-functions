// Desafio 1
function compareTrue(firstValue, secondValue) {
  let value = firstValue === true && secondValue === true ? true : false
  return value
}

// Desafio 2
function calcArea(base, height) {
  let value = (base * height) / 2
  return value
}

// Desafio 3
function splitSentence(string) {
  let value = string.split(' ')
  return value
}

// Desafio 4
function concatName(array) {
  let string = ""
  let first = array[0]
  let last = array[array.length - 1]
  string += last
  string += ", "
  string += first
  return string
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
