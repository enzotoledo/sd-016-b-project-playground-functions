// Desafio 1
function compareTrue(param1, param2) {
  if((param1 === true) && (param2 === true)){
    return true
  }else{
    return false
  }
}
//console.log(compareTrue());

// Desafio 2
function calcArea(base, height) {
  return ( ( base * height) / 2 );
}

// Desafio 3
function splitSentence(paramText) {
  let frase = paramText.split(" ");
  return frase;
}

// Desafio 4
function concatName(text) {
  let firstText = text[text.length - 1];
  let lastText =  text[0];

  let result = firstText+ ", " +lastText;
  return result
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
