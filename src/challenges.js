// Desafio 1
function compareTrue(booleano1, booleano2) {
  if ((booleano1 === true) && (booleano2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = 0;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let arrayReverse = array.reverse();
  let string = arrayReverse[0] + ", " + arrayReverse[arrayReverse.length-1];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = numeros[0];
  let highestNumberRepet = 0;
  for (let number in numeros) {
    if (highestNumber < numeros[number]) {
      highestNumber = numeros[number];
    }
  }

  for (let repet in numeros) {
    if (highestNumber == numeros[repet]) {
      highestNumberRepet += 1;
    }
  }
  return highestNumberRepet;
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
