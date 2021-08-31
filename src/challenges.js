/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [''];
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      array.push('');
    } else {
      array[array.length - 1] += string[i];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0 + wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let BiggerNumber = array[0];
  let repOfBiggerNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > BiggerNumber) {
      BiggerNumber = array[i];
      repOfBiggerNumber = 1;
    } else if (array[i] === BiggerNumber) {
      repOfBiggerNumber += 1;
    }
  }
  return repOfBiggerNumber;
}

// Desafio 7
function catAndMouse() {
  // seu código aqu
}

// Desafio 8
// eslint-disable-next-line sonarjs/cognitive-complexity
function fizzBuzz(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i] % 3 === 0) {
    case true:
      if (array[i] % 5 === 0) {
        array2.push('fizzBuzz');
      } else {
        array2.push('fizz');
      }
      break;
    default:
      if (array[i] % 5 === 0) {
        array2.push('buzz');
      } else {
        array2.push('bug!');
      }
    }
  }
  return array2;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case 'a':
      newString += '1';
      break;
    case 'e':
      newString += '2';
      break;
    case 'i':
      newString += '3';
      break;
    case 'o':
      newString += '4';
      break;
    case 'u':
      newString += '5';
      break;
    default:
      newString += string[i];
      break;
    }
  }
  return newString;
}

// eslint-disable-next-line complexity
function decode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case '1':
      newString += 'a';
      break;
    case '2':
      newString += 'e';
      break;
    case '3':
      newString += 'i';
      break;
    case '4':
      newString += 'o';
      break;
    case '5':
      newString += 'u';
      break;
    default:
      newString += string[i];
      break;
    }
  }
  return newString;
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
