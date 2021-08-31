// Desafio 1
function compareTrue(val1, val2) {
  if ((val1 === true) && (val2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = (string.split(' '));
  return arrayString;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contadorMaior = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let c = 0; c < array.length; c += 1) {
    if (array[c] === maior) {
      contadorMaior += 1;
    }
  }
  return contadorMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let intervaloCat1 = cat1 - mouse;
  let intervaloCat2 = cat2 - mouse;

  if (Math.abs(intervaloCat1) === Math.abs(intervaloCat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(intervaloCat1) < Math.abs(intervaloCat2)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFinal = [];
  for (let number of array) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      arrayFinal.push('fizzbuzz');
    } else if (number % 3 === 0) {
      arrayFinal.push('fizz');
    } else if (number % 5 === 0) {
      arrayFinal.push('buzz');
    } else {
      arrayFinal.push('bug!');
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode() {

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
