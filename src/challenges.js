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
