// Desafio 1
function compareTrue(parametA, parametB) {
  if (parametA === true && parametB === true) {
    return true
    } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(str) {
  let strToArr = str.split(' ')
  return strToArr
}

// Desafio 4
function concatName(arrToStr) {
  let firstName = arrToStr[0];
  let lastName = arrToStr[arrToStr.length - 1];
  let str = [lastName, firstName];
  return str.join(', ')
}

// Desafio 5
function footballPoints(wins, ties) {
  let jogosGanhos = wins * 3;
  let jogosEmpatados = ties;
  let pontos = jogosGanhos + jogosEmpatados;
  return pontos
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero  = arrayDeNumeros[0];
  let contadorNumero = 0;

  for (let index = 0; index < arrayDeNumeros.length; index +=1) {
    if (arrayDeNumeros[index] > maiorNumero) {
      maiorNumero = arrayDeNumeros[index];
    }
  }
  for (let index = 0; index < arrayDeNumeros.length; index +=1) {
    if (arrayDeNumeros[index] === maiorNumero) {
      contadorNumero += 1;
    }
  }
  return contadorNumero;
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
