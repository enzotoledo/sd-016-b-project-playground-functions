// Desafio 1
function compareTrue(arg, arg2) {
  if ((arg == true) && (arg2 == true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let newArray = string.split(' ');

  return newArray;
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];

  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;

  let sum = wins + ties;

  return sum;
}

// Desafio 6
function highestCount(array) {
  let maxNumber = -Infinity;
  let repeatNumber = 0;

  for (let i in array) {
    if (i > maxNumber) {
      maxNumber = array[i];
    }
  }

  for (let j in array) {
    if (maxNumber === array[j]) {
      repeatNumber += 1;
    }
  }

  return repeatNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse); // 1
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
      newArray.push(array[i]);
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
      newArray.push(array[i]);
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
      newArray.push(array[i]);
    } else {
      array[i] = 'bug!';
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Desafio 9
function encode(str) {
  let newStr = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let strSplit = str.split('');

  for (let i = 0; i < str.length; i++) {
    for (let index in newStr) {
      if (strSplit[i] === index) {
        strSplit[i] = newStr[index];
      }
    }
  }
  return strSplit.join('');
}

function decode(str) {
  let newStr = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let strSplit = str.split('');

  for (let i = 0; i < str.length; i++) {
    for (let index in newStr) {
      if (strSplit[i] === index) {
        strSplit[i] = newStr[index];
      }
    }
  }
  return strSplit.join('');
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
