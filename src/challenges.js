// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(param) {
  const resultado = param.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let reversedArray = array.reverse();

  return (`${reversedArray[0]}, ${reversedArray[reversedArray.length - 1]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins !== 0) {
    wins *= 3;
  }
  return wins + ties;
}

// Desafio 6
function highestCount(array) {
  let sum = 0;
  let indexBigger = 0;

  for (const key in array) {
    if (array[indexBigger] < array[key]) {
      indexBigger = key;
    }
  }
  for (const key in array) {
    if (array[indexBigger] === array[key]) {
      sum += 1;
    }
  }
  return sum;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

  /*
  for (let index = 0; index < array.length; index += 1) {
    if (array[indexBigger] === array[index]) {
      sum += 1;
    }
  }
}*/

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
