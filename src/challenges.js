/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable no-mixed-operators */
// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = base * (height / 2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let var2 = string.split(' ');
  return var2;
}

// Desafio 4
function concatName(array) {
  let nomeFinal = array[array.length - 1];
  let nomeInicial = array[0];
  return `${nomeFinal}, ${nomeInicial}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  } if (distCat1 < distCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      newArray.push('buzz');
    } else if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
// Desafio 9
function encode(code) {
  let code1 = [];
  for (let index in code) {
    if (code[index] === 'a') {
      code1.push('1');
    } else if (code[index] === 'e') {
      code1.push('2');
    } else if (code[index] === 'i') {
      code1.push('3');
    } else if (code[index] === 'o') {
      code1.push('4');
    } else if (code[index] === 'u') {
      code1.push('5');
    } else {
      code1.push(code[index]);
    }
  }
  let readycode = code1.join('');
  return readycode;
}
console.log(encode('hello there'));

function decode(code2) {
  let code1 = [];
  for (let index in code2) {
    if (code2[index] === '1') {
      code1.push('a');
    } else if (code2[index] === '2') {
      code1.push('e');
    } else if (code2[index] === '3') {
      code1.push('i');
    } else if (code2[index] === '4') {
      code1.push('o');
    } else if (code2[index] === '5') {
      code1.push('u');
    } else {
      code1.push(code2[index]);
    }
  }
  let readycode = code1.join('');
  return readycode;
}
console.log(decode('h2ll4 th2r2'));

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
