// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  let calculo = 0;
  calculo = (base * height) / 2;
  return calculo;
}
console.log(calcArea(1, 51));

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}
console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(concaArray) {
  let lista = concaArray;
  let ultimoNome = lista[lista.length - 1];
  let nomeString = (ultimoNome + ", " + concaArray[0]);
  return nomeString;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let calculo = 0;
  calculo = ((wins * 3) + (ties * 1));
  return calculo;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let numeroRepitido = 0;
  for (let key in arrayNumeros) {
    if (maiorNumero < arrayNumeros[key]) {
      maiorNumero = arrayNumeros[key];
    }
  }
  for (let key2 in arrayNumeros) {
    if (maiorNumero === arrayNumeros[key2]) {
      numeroRepitido += 1;
    }
  }
  return numeroRepitido;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

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
