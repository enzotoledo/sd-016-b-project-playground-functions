// Desafio 1
function compareTrue(ValorA,ValorB) {
  if(ValorA && ValorB) {
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base*height)/2)
}

// Desafio 3
function splitSentence(texto) {
  return arraytexto = texto.split(" ")
}

// Desafio 4
function concatName(recebearray) {
  let lastname = recebearray[recebearray.length-1];
  let firstname = recebearray[0];
  
  return lastname + ", " + firstname
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
