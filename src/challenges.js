// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(goTrybe) {
  return goTrybe.split(' ');
}

// Desafio 4
function concatName(conjunto) {
  return conjunto[conjunto.length - 1] + ', ' + conjunto[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let calcula = wins * 3 + ties;
  return calcula;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max(...array);
  let contar = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      contar = contar + 1;
    }
  }
  return contar;
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
