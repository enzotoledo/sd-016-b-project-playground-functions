// Desafio 1
function compareTrue(value1, value2) {
  let result = 0;
  if ((value1 == true) && (value2 == true)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
  console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}
  console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let array = 0;
  array = string.split(" ");
  return array;
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName() {
  // seu código aqui
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
