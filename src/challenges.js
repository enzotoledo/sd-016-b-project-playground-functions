// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2;
  return area
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array
}

// Desafio 4
function concatName(arrayDes4) {
  return arrayDes4[arrayDes4.length - 1] + ", " + arrayDes4[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties
  return points
}

// Desafio 6
function highestCount(valuesArray) {
  let bigger = -Infinity;
  let countBigger = 0;
  for (let index = 0; index < valuesArray.length; index += 1){
    if (valuesArray[index] >= bigger) {
      bigger = valuesArray[index]
    }
  }
  for (let index = 0; index < valuesArray.length; index += 1) {
    if (valuesArray[index] == bigger) {
      countBigger += 1; 
    }
  }
  return countBigger
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
