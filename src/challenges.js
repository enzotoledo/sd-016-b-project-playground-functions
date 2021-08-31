// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(s) {
  return s.split(' ');
}

// Desafio 4
function concatName(a) {
  // return a[a.length - 1] + ', ' + a[0]; //Lint reclamou
  return `${a[a.length - 1]}, ${a[0]}`; //  https://developer.school/javascript-es6-string-concatenation-with-template-literals/
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(a) {
  let vencedor = a[0];
  let quantidade = 0;
  for (let i of a) if (i > vencedor) vencedor = i;
  for (let j of a) if (j === vencedor) quantidade += 1;
  return quantidade;
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
