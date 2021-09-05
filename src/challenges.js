// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  const array = string.split(' ');
  return array;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let a = array[array.length - 1];
  let b = array[0];
  return `${a}, ${b}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function checkMaxNumber(array) {
  let highest = array[0];
  for (let x = 1; x < array.length; x += 1) {
    if (highest < array[x]) {
      highest = array[x];
    }
  }
  return highest;
}
function highestCount(array) {
  let count = 0;
  let maxNumber = checkMaxNumber(array);
  for (let x = 0; x < array.length; x += 1) {
    if (maxNumber === array[x]) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let warning = '';
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    warning = 'cat1';
  } else if ((Math.abs(mouse - cat2)) < (Math.abs(mouse - cat1))) {
    warning = 'cat2';
  } else {
    warning = 'os gatos trombam e o rato foge';
  }
  return warning;
}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(2, 2, 2));

// Desafio 8
function module(numberOfArray) {
  if ((numberOfArray % 3 === 0) && (numberOfArray % 5 === 0)) {
    return 'fizzBuzz';
  }
  if (numberOfArray % 3 === 0) {
    return 'fizz';
  }
  if (numberOfArray % 5 === 0) {
    return 'buzz';
  }
}

function fizzBuzz(array) {
  let returnValuesArray = [];
  for (let numberOfArray of array) {
    switch (module(numberOfArray)) {
    case 'fizz':
      returnValuesArray.push('fizz');
      break;
    case 'fizzBuzz':
      returnValuesArray.push('fizzBuzz');
      break;
    case 'buzz':
      returnValuesArray.push('buzz');
      break;
    default:
      returnValuesArray.push('bug!');
      break;
    }
  }
  return returnValuesArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

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
