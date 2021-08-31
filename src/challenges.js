function compareTrue(param1, param2) {
  return param1 && param2;
}

function calcArea(base, height) {
  return base * height / 2 ;
}

function splitSentence(paramText) {
  let frase = paramText.split(" ");
  return frase;
}

function concatName(text) {
  let firstText = text[text.length - 1];
  let lastText =  text[0];

  let result = firstText+ ", " +lastText;
  return result;
}

function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

function highestCount(table) {
  let max = Math.max.apply({}, table);
  let result = 0;
  for( i = 0; i < table.length; i += 1){
    if(max === table[i]){
      result += 1;
    }
  }
  return result;
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
