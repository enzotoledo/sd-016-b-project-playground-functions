/* eslint-disable no-undef */
// Desafio 1
function compareTrue(value01, value02) {
  if (value01 === true && value02 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triAng = (base * height) / 2;
  return triAng;
}

// Desafio 3
function splitSentence(frase) {
  let arrayResult = frase.split(' ');
  return arrayResult;
}

// Desafio 4
function concatName(paLavras) {
  return (`${paLavras.pop()}, ${paLavras.shift()}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(listNumer) {
  // let listNumer = [0, 4, 4, 4, 9, 2, 1];
  let maiorNum = Math.max.apply(null, listNumer);
  let contador = 0;
  for (index = 0; index < listNumer.length; index += 1) {
    // eslint-disable-next-line no-undef
    if (maiorNum === listNumer[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {return 'os gatos trombam e o rato foge';
 }
}

// Desafio 8
function fizzBuzz(numTree) {
  // let fizboz = [];
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
