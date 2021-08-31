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
function concatName(arrayString) {
  resConcatName = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
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
let resCount = 0;
function highestCount(arrayNumbers) {
  let contador = 0;
  let arrayArgm = arrayNumbers;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let numberArray = arrayNumbers[index];
    if (numberArray === Math.max(...arrayArgm)) {
      contador += 1;
    }
  }
  resCount = contador;
  return resCount;
}

// Desafio 7
let resCatWin = '';
function catAndMouse(mouse, cat1, cat2) {
  let localCat1 = Math.abs(cat1 - mouse);
  let localCat2 = Math.abs(cat2 - mouse);
  if (localCat1 < localCat2) {
    resCatWin = 'cat1';
  } else if (localCat2 < localCat1) {
    resCatWin = 'cat2';
  } else {
    resCatWin = 'os gatos trombam e o rato foge';
  }
  return resCatWin;
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
