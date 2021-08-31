// Desafio 1
function compareTrue(value1, value2) {
  let status = false;
  if (value1 === true && value2 === true) {
    status = true;
  } else {
    status = false;
  }
  return status;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(str) {
  let splitStr = str.split(' ');
  return splitStr;
}

// Desafio 4
function concatName(array) {
  let lastAndFirstArray = '';
  let firstElement = array.shift();
  let lastElement = array.pop();
  lastAndFirstArray = `${lastElement}, ${firstElement}`;
  return lastAndFirstArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties * 1;
  return result;
}

// Desafio 6
function highestCount(array) {
  let highestValue = -Infinity;
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestValue) {
      highestValue = array[index];
      count = 1;
    } else if (array[index] === highestValue) {
      count += 1;
    }
  }
  return count;
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
