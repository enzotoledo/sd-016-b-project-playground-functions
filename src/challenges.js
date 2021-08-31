// Desafio 1
function compareTrue(firstValue, secondValue) {
  let value = false;
  if (firstValue && secondValue) {
    value = true;
  }
  return value;
}

// Desafio 2
function calcArea(base, height) {
  let value = (base * height) / 2;
  return value;
}

// Desafio 3
function splitSentence(string) {
  let value = string.split(' ');
  return value;
}

// Desafio 4
function concatName(array) {
  let string = '';
  let first = array[0];
  let last = array[array.length - 1];
  string += last;
  string += ', ';
  string += first;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + ties;
  return score;
}

// Desafio 6
function checkMaxNumber(array) {
  let maxNumber = array[0];
  for (let number of array) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

function highestCount(array) {
  let count = 0;
  let maxNumber = checkMaxNumber(array);
  for (let number of array) {
    if (number === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let msg = '';
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    msg = 'cat1';
  } else if ((Math.abs(mouse - cat1)) > (Math.abs(mouse - cat2))) {
    msg = 'cat2';
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
}

// Desafio 8
function fizzBuzz(array) {
  let arr = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      arr.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      arr.push('buzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arr.push('fizzBuzz');
    } else {
      arr.push('bug!');
    }
  }
  return arr;
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
