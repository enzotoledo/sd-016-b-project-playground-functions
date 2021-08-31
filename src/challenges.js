// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calcularTriangulo = (base * height) / 2;
  return calcularTriangulo;
}

// Desafio 3
function splitSentence(palavra) {
  let resultado = palavra.split(' ', 10);
  return resultado;
}

// Desafio 4
function concatName(nomesArray) {
  let stringDeRetorno = `${nomesArray[nomesArray.length - 1]}, ${nomesArray[0]}`;
  return stringDeRetorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  return vitorias + ties;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = Math.max.apply(null, arrayDeNumeros);
  let numerosRepetidos = 0;

  for (let contar of arrayDeNumeros) {
    if (contar === maiorNumero) {
      numerosRepetidos += 1;
    }
  }
  return numerosRepetidos;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
