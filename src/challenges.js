// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2)
  return area
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ")
  return resultado
}

// Desafio 4
function concatName(concatenar) {
  let concatenado = concatenar[concatenar.length-1] + ", " + concatenar[0];
  return concatenado
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties)
  return pontos
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let repete = 0;

  for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
      }
    }
    for (i = 0; i < numeros.length; i += 1) {
      if (numeros[i] === maiorNumero) {
        repete += 1;
      }
    }
    return repete;
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
