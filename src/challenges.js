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
function fizzBuzz(array) {
  let frase = [];
  // Expected to return a value in function https://eslint.org/docs/rules/array-callback-return (map => forEach)
  // array.map(function (call) {
  array.forEach(function (call) {
    if (call % 15 === 0) frase.push('fizzBuzz');
    else if (call % 5 === 0) frase.push('buzz');
    else if (call % 3 === 0) frase.push('fizz');
    else frase.push('bug!');
  });
  return frase;
}
// function bugFizzBuzz(call) {
//   if (call % 3 === 0 && call % 5 === 0) return 'fizzBuzz';
//   if (call % 3 === 0) return 'fizz';
//   if (call % 5 === 0) return 'buzz';
//   return 'bug!';
// }
// function fizzBuzz(array) {
//   let frase = [];
//   for (let i of array) {
//     frase.push(bugFizzBuzz(i));
//   }
//   return frase;
// }
// function fizzBuzz(array) {
// let frase = [];
// const d1 = array.filter((div1) => ((div1 % 3 !== 0) && (div1 % 5 !== 0)));
// const d3 = array.filter((div3) => ((div3 % 3 === 0) && (div3 % 5 !== 0)));
// const d5 = array.filter((div5) => ((div5 % 5 === 0) && (div5 % 3 !== 0)));
// const d15 = array.filter((div15) => ((div15 % 5 === 0) && (div15 % 3 === 0)));
// for (let i = 0; i < array.length; i += 1) {
//   for (let z = 0; z < d1.length; z += 1) {
//     if (array[i] === d1[z]) frase.push('bug!');
//   }
//   for (let y = 0; y < d3.length; y += 1) {
//     if (array[i] === d3[y]) frase.push('fizz');
//   }
//   for (let x = 0; x < d5.length; x += 1) {
//     if (array[i] === d5[x]) frase.push('buzz');
//   }
//   for (let w = 0; w < d15.length; w += 1) {
//     if (array[i] === d15[w]) frase.push('fizzBuzz');
//   }
// }
// return frase;
// }
// let d3 = array.map(split3x => {return 'fizz';});
// let d3 = array.map(div3 => { if ((div3 % 3) === 0) return 'fizz'});
// let d3 = array.filter((div3) => (div3 % 3) === 0);
//
// let d3 = array.filter((div3) => (div3 % 3) === 0);
// let fizz = d3.map(function() {return 'fizz';});

// Desafio 9
function encode() {
// return array.replace (/ [aeiou] / g, '' ");
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
