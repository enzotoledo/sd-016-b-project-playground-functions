// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
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
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayDeString) {
  let result = `${arrayDeString[arrayDeString.length - 1]}, ${arrayDeString[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNum) {
  let bigger = Math.max.apply(null, arrayNum);
  let result = 0;

  for (let i = 0; i < arrayNum.length; i += 1) {
    if (bigger === arrayNum[i]) {
      result += 1;
    }
  }

  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if ((distanciaCat1) < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
/* A função abaixo faz parte da resolução do Desafio 8, foi feita para reduzir a complexidade da function exigida pelo lint na resolução principal do desafio proposto. */

function resultadoFinal(numAtual, arrayFinal) {
  if (Math.trunc(numAtual % 3) === 0 && Math.trunc(numAtual % 5) === 0) {
    arrayFinal.push('fizzBuzz');
  } else if (Math.trunc(numAtual % 3) === 0) {
    arrayFinal.push('fizz');
  } else if (Math.trunc(numAtual % 5) === 0) {
    arrayFinal.push('buzz');
  } else {
    arrayFinal.push('bug!');
  }
}

function fizzBuzz(arrayInicial) {
  let resultado = [];
  for (let i = 0; i < arrayInicial.length; i += 1) {
    resultadoFinal(arrayInicial[i], resultado);
  }
  return resultado;
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
