// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(stringTrybe) {
  let resultado = stringTrybe.split(" ");
  return resultado;
}

// Desafio 4
function concatName(stringArrays) {
  let newArray = stringArrays[stringArrays.length - 1] + ', ' + stringArrays[0];
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points
}

// Desafio 6
function highestCount(numbers) {
let maiorNumero = numbers[0];
let contador = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] === maiorNumero) {
    contador += 1;
  }
}
return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs (mouse - cat1);
  let mouseCat2 = Math.abs (mouse - cat2);
  if (mouseCat1 > mouseCat2) {
    return "cat2";
  } else if (mouseCat1 < mouseCat2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge"
  }
  }

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10
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
