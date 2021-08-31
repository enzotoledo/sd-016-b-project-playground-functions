// Desafio 1
function compareTrue(valorA, valorB) {
  if ((valorA && valorB)) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(frase) {
  let fraseDividida = frase.split(' ');
  return fraseDividida;
}

// Desafio 4
function concatName(array) {
  let ultimaPalavra = array[array.length - 1];
  let primeiraPalavra = array[0];
  let fraseConcatenada = `${ultimaPalavra}, ${primeiraPalavra}`;
  return fraseConcatenada;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let i = 0; i < wins; i += 1) {
    pontos += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    pontos += 1;
  }

  return pontos;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorNumero = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
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
