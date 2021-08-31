// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if ((v1 && v2) === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let arraysentence = phrase.split(' ');
  return arraysentence; 
}

// Desafio 4
function concatName(vetorstring) {
  // seu código aqui
  let phrase = vetorstring[vetorstring.length-1] + ', '  + vetorstring[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let campeonato = (wins*3) + (ties)
  return campeonato
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
