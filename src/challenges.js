// Desafio 1
let resCompareTrue = false;
function compareTrue(parm1, parm2) {
  if ((parm1 === true) && (parm2 === true)) {
    resCompareTrue = true;
  } else {
    resCompareTrue = false;
  }
  return resCompareTrue;
}

// Desafio 2
let resCalcArea = 0;
function calcArea(base, height) {
  resCalcArea = (base * height) / 2;
  return resCalcArea;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

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
