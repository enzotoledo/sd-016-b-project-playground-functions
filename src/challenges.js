// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(param) {
  return `${param[param.length - 1]}, ${param[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = Math.max.apply(null, numbers);
  let contador = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNumero === numbers[i]) {
      contador += 1;
    }
  } return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    result = 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  } return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let resultado = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3) === 0 && (numbers[index] % 5) === 0) {
      resultado.push('fizzBuzz');
    } else if ((numbers[index] % 3) === 0) {
      resultado.push('fizz');
    } else if ((numbers[index] % 5) === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  } return resultado;
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
