// Desafio 1
function compareTrue(param, param2) {
  if ((param === true) && (param2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(text) {
  let array = text.split(' '); // Usado comando split com o separador " ", retirado informação do site : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let last = arrayString.length - 1;
  let space = ', ';
  return arrayString[last] + space + arrayString[0];
}

// Desafio 5
function footballPoints(win, ties) {
  let winPoints = win * 3;
  let tiesPoints = ties;
  return winPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highNumber = Math.max.apply(null, arrayNumbers);// Retirado a informação para fazer a linha do código no site https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  let count = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1); // Math.abs usado para usar o valor absoluto do número retirado do site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs;
  let distanceCat2 = Math.abs(mouse - cat2);
  let answer = '';
  if (distanceCat1 < distanceCat2) {
    answer = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    answer = 'cat2';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
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
