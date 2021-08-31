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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distGatoUm = mouse + cat1;
  let distGatoDois = mouse + cat2;
  if (distGatoUm < distGatoDois){
    return "cat1";
  }else if (distGatoDois < distGatoUm){
    return "cat2";
  }else if (distGatoUm === distGatoDois){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index in array){
    if (array[index] % 3 === 0){
      arrayFizzBuzz[index] = 'fizz';
    }
    if (array[index] % 5 === 0){
      arrayFizzBuzz[index] = 'buzz';
    }
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
      arrayFizzBuzz[index] = 'fizzBuzz';
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0){
      arrayFizzBuzz[index] = 'bug!';
    }
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
