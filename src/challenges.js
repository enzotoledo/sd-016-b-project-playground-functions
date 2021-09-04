// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(word) {
  const wordSpace = word.split(' ');
  return wordSpace;
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  const nameList = [];
  nameList.push(array[array.length - 1], array[0]);
  let nameConcat = nameList.join(', ');
  return nameConcat;
}
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let somaPoints = vitoria + empate;
  return somaPoints;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(repeatMax) {
  let maior = -1;
  let repeat = 0;
  for (let index = 0; index <= repeatMax.length; index += 1) {
    if (maior < repeatMax[index]) {
      maior = repeatMax[index];
    }
  }
  for (let index in repeatMax) {
    if (maior === repeatMax[index]) {
      repeat += 1;
    }
  }
  return repeat;
}
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catAPos = Math.abs(mouse - cat1);
  let catBPos = Math.abs(mouse - cat2);

  if (catAPos < catBPos) {
    return 'cat1';
  } if (catAPos > catBPos) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 3, 2));

// Desafio 8
function fizzBuzz(array) {
  let arrayList = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayList.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayList.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayList.push('fizz');
    } else {
      arrayList.push('bug!');
    }
  }
  return arrayList;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  for (let index = 0; index <= string.length; index += 1) {
    if (string[index] === 'a') {
      string = string.replace('a', 1);
    } else if (string[index] === 'e') {
      string = string.replace('e', 2);
    } else if (string[index] === 'i') {
      string = string.replace('i', 3);
    } else if (string[index] === 'o') {
      string = string.replace('o', 4);
    } else if (string[index] === 'u') {
      string = string.replace('u', 5);
    }
  }
  return string;
}
console.log(encode('How are you today'));

function decode(string) {
  for (let index = 0; index <= string.length; index += 1) {
    if (string[index] === '1') {
      string = string.replace('1', 'a');
    } else if (string[index] === '2') {
      string = string.replace('2', 'e');
    } else if (string[index] === '3') {
      string = string.replace('3', 'i');
    } else if (string[index] === '4') {
      string = string.replace('4', 'o');
    } else if (string[index] === '5') {
      string = string.replace('5', 'u');
    }
  }
  return string;
}
console.log(decode('h2ll4'));

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
