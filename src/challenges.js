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
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat1 > distCat2) {
    return 'cat2';
  } if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function division(array, number) {
  if (array[number] % 5 === 0 && array[number] % 3 === 0) {
    return 'fizzBuzz';
  } if (array[number] % 5 === 0) {
    return 'buzz';
  } if (array[number] % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(division(array, index));
  }
  return newArray;
}

// Desafio 9
function analysisEnconde(array, object, index) {
  for (let key in object) {
    if (key === array[index]) {
      array[index] = object[key];
    }
  }
  return array[index];
}

function encode(str) {
  let strValues = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let splitStr = str.split('');
  for (let index = 0; index < splitStr.length; index += 1) {
    analysisEnconde(splitStr, strValues, index);
  }
  let joinStr = splitStr.join('');
  return joinStr;
}

function decode(str) {
  let strValues = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let splitStr = str.split('');
  console.log(splitStr);
  for (let index = 0; index < splitStr.length; index += 1) {
    analysisEnconde(splitStr, strValues, index);
  }
  let joinStr = splitStr.join('');
  return joinStr;
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
