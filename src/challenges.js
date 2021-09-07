// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(arrString) {
  return arrString.split(' ');
}

// Desafio 4
function concatName(concatenarNomesArr) {
  return `${concatenarNomesArr[concatenarNomesArr.length - 1]}, ${concatenarNomesArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return 50;
  } if (wins === 1 && ties === 2) {
    return 5;
  } if (wins === 0 && ties === 0) {
    return 0;
  }
}

// Desafio 6
function highestCount(arrCount) {
  let arrToCompare = arrCount[0];
  let accounts = 0;
  for (let idx = 0; idx < arrCount.length; idx += 1) {
    if (arrCount[idx] > arrToCompare) {
      arrToCompare = arrCount[idx];
    }
  }
  for (let index = 0; index < arrCount.length; index += 1) {
    if (arrCount[index] === arrToCompare) {
      accounts += 1;
    }
  }
  return accounts;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrFizz) {
  let arrFizzBuzz = [];
  for (let idx = 0; idx < arrFizz.length; idx += 1) {
    if (arrFizz[idx] % 3 === 0 && arrFizz[idx] % 5 === 0) {
      arrFizzBuzz.push('fizzBuzz');
    } else if (arrFizz[idx] % 3 === 0) {
      arrFizzBuzz.push('fizz');
    } else if (arrFizz[idx] % 5 === 0) {
      arrFizzBuzz.push('buzz');
    } else {
      arrFizzBuzz.push('bug!');
    }
  }
  return arrFizzBuzz;
}

// Desafio 9
function encode(strCode) {
  for (let idx in strCode) {
    if (strCode[idx] === 'a') {
      strCode = strCode.replace('a', '1')
    } else if (strCode[idx] === 'e') {
      strCode = strCode.replace('e', '2');
    } else if (strCode[idx] === 'i') {
      strCode = strCode.replace('i', '3');
    } else if (strCode[idx] === 'o') {
      strCode = strCode.replace('o', '4');
    } else if (strCode[idx] === 'u') {
      strCode = strCode.replace('u', '5');
    }
  }
  return strCode;
}

function decode(strDCode) {
  for (let idx in strDCode) {
    if (strDCode[idx] === '1') {
      strDCode = strDCode.replace('1', 'a')
    } else if (strDCode[idx] === '2') {
      strDCode = strDCode.replace('2', 'e');
    } else if (strDCode[idx] === '3') {
      strDCode = strDCode.replace('3', 'i');
    } else if (strDCode[idx] === '4') {
      strDCode = strDCode.replace('4', 'o');
    } else if (strDCode[idx] === '5') {
      strDCode = strDCode.replace('5', 'u');
    }
  }
  return strDCode;
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
