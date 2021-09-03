// Desafio 1
function compareTrue(v, k) {
  // seu código aqui
  if (v == true && k == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(b, h) {
  // seu código aqui
  return b * h / 2;
}

// Desafio 3
function splitSentence(s) {
  // seu código aqui
  return s.split(" ");
}

// Desafio 4
function concatName(v) {
  // seu código aqui
  return v[v.length - 1].concat(", ", v[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(value) {
  // seu código aqui
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let m = Math.abs(mouse),
      c1 = Math.abs(cat1),
      c2 = Math.abs(cat2);
  
}

// Desafio 8
function fizzBuzz(value) {
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
