// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 == true) && (value2 == true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(array) {
  var namae = ''
  namae += array[array.length - 1];
  namae += ", ";
  namae += array[0];

  return namae; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3) + ties)
}

// Desafio 6
function highestCount(Numbers) {
  let max = Math.max.apply(null, Numbers)
  let contagem = 0

  for( let i=0; i < Numbers.length; i+=1) {
    if (max === Numbers[i])
    contagem+=1;
  }

  return contagem;
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
