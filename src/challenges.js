// Desafio 1
function compareTrue(number1, number2) {
  if ((number1 == true) && (number2 == true)){
    return true;
  } else { return false;
  }

}

// Desafio 2
function calcArea(base, heignt) {
  return (base * heignt) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase
}

// Desafio 4
function concatName(words) {
  var end = words[words.length-1];
  var start = words[0];
  var junction = (end + ', ' + start);
  return junction;

}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
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
