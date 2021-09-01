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
  for (let index = 0; index < array.length; index += 1) {
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
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      string = string.replace(string[index], '1');
    }
    if (string[index] === 'e') {
      string = string.replace(string[index], '2');
    }
    if (string[index] === 'i') {
      string = string.replace(string[index], '3');
    }
    if (string[index] === 'o') {
      string = string.replace(string[index], '4');
    }
    if (string[index] === 'u') {
      string = string.replace(string[index], '5');
    }
  }
  return string;
}
function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      string = string.replace(string[index], 'a');
    }
    if (string[index] === '2') {
      string = string.replace(string[index], 'e');
    }
    if (string[index] === '3') {
      string = string.replace(string[index], 'i');
    }
    if (string[index] === '4') {
      string = string.replace(string[index], 'o');
    }
    if (string[index] === '5') {
      string = string.replace(string[index], 'u');
    }
  }
  return string;
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
