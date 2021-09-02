// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  // return array.slice(-1)[0] + ', ' + array[0];
  return array[array.length - 1] + ', '.concat(array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
// "mind blowing" do array.sort - https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
  let x = array.sort((a, b) => a - b);
  let count = 0;
  for (let y of array) {
    if (x[x.length - 1] === y) count += 1;
  }
  return count;
// let max = array[0];
// let count = 0;
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] > max) max = array[i];
// }
// for (let x of array) {
//   if (max === x) count += 1;
// }
// return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
// "Math.abs" - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }
  if (Math.abs((cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
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
