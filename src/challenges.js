// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true; 
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,heigth) {
  let area = (base*heigth)/2 ;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(string) {
  let arrayDaString = string.split(' ');
  let result = arrayDaString[arrayDaString.length-1]+","+ arrayDaString[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  points = (wins*3)+ties;
  return points;
}


// Desafio 6
function highestCount(numeros) {
  let arrayDosNumeros = numeros.split(",");
  let max = Math.max(...arrayDosNumeros)
  let contadorMaiorNumero = 0;
  for(let i=0; i<arrayDosNumeros.length;i++){
    if(arrayDosNumeros[i]== max){
      contadorMaiorNumero += 1;
    }
  } 
  return contadorMaiorNumero;
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
