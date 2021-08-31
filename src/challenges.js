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
let resSplitSentence = '';
function splitSentence(frase) {
  resSplitSentence = frase.split(' ');
  return resSplitSentence;
}

// Desafio 4
let resConcatName;
function concatName(arrrayString) {
  resConcatName = `${arrrayString[arrrayString.length - 1]}, ${arrrayString[0]}`;
  return resConcatName;
}

// Desafio 5
let resFootPoints = 0;
function footballPoints(wins, ties) {
  let winsPoints = 0;
  let tiesPoints = 0;
  for (let index = 1; index <= wins; index += 1) {
    winsPoints += 3;
  }
  for (let index = 1; index <= ties; index += 1) {
    tiesPoints += 1;
  }
  resFootPoints = winsPoints + tiesPoints;
  return resFootPoints;
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
