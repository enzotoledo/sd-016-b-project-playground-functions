// Desafio 1
function compareTrue(numberOne, numberTwo) {
  if (numberOne == true && numberTwo == true){
    return true;
  }else {
    return false;
  }  
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(frase) {
  let arraySplit = frase.split(' ');
  return arraySplit;
}

// Desafio 4
function concatName(array) {
  ultimoItem = array[array.length - 1];
  primeiroItem = array[0];
  let resultado =  ultimoItem + ', ' + primeiroItem;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6
function highestCount(array){
  let maior = array[0];
  let contaMaior = 0;
  for (let index in array){
    if (array[index] > maior){
      maior = array[index];
    }
  }
  for (let index in array){
    if (array[index] === maior){
      contaMaior += 1;
    }
  }  
  return contaMaior;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
