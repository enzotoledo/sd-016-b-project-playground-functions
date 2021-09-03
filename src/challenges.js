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

function fizzBuzz(arrayDiv) {
  let resFizzBuzz = [];
  for (let index = 0; index < arrayDiv.length; index += 1) {
    let divPor3 = arrayDiv[index] % 3;
    let divPor5 = arrayDiv[index] % 5;
    if (divPor3 === 0 && divPor5 === 0) {
      resFizzBuzz.push('fizzBuzz');
    } else if (divPor3 === 0) {
      resFizzBuzz.push('fizz');
    } else if (divPor5 === 0) {
      resFizzBuzz.push('buzz');
    } else {
      resFizzBuzz.push('bug!');
    }
  }
  return resFizzBuzz;
}

// Desafio 9
function encode(stringCode) {
  for (let index = 0; index < stringCode.length; index += 1) {
    switch (stringCode[index]) {
    case 'a':
      stringCode = stringCode.replace(stringCode[index], '1');
      break;
    case 'e':
      stringCode = stringCode.replace(stringCode[index], '2');
      break;
    case 'i':
      stringCode = stringCode.replace(stringCode[index], '3');
      break;
    case 'o':
      stringCode = stringCode.replace(stringCode[index], '4');
      break;
    case 'u':
      stringCode = stringCode.replace(stringCode[index], '5');
      break;
    default:
    }
  }
  return stringCode;
}

function decode(stringDecode) {
  for (let index = 0; index < stringDecode.length; index += 1) {
    switch (stringDecode[index]) {
    case '1':
      stringDecode = stringDecode.replace(stringDecode[index], 'a');
      break;
    case '2':
      stringDecode = stringDecode.replace(stringDecode[index], 'e');
      break;
    case '3':
      stringDecode = stringDecode.replace(stringDecode[index], 'i');
      break;
    case '4':
      stringDecode = stringDecode.replace(stringDecode[index], 'o');
      break;
    case '5':
      stringDecode = stringDecode.replace(stringDecode[index], 'u');
      break;
    default:
    }
  }
  return stringDecode;
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
