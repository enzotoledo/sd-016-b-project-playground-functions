// Desafio 1
function compareTrue(valorA, valorB) {
  if((valorA && valorB) == true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(frase) {
  fraseDividida = frase.split(' ')
  return fraseDividida
}

// Desafio 4
function concatName(array) {
  let fraseConcatenada = array[array.length -1] + ", " +array[0]
  return fraseConcatenada;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0
  for (let i = 0; i < wins; i += 1){
    pontos += 3
  }
  for (let i = 0; i < ties; i += 1){
    pontos += 1
  }

  return pontos;
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
