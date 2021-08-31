// Desafio 1
function compareTrue(value1, value2) {
  if(value1 && value2) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitedString = string.split(' ');
  return splitedString;
}

// Desafio 4
function concatName(stringArray) {
  let last = stringArray[stringArray.length - 1];
  let first = stringArray[0];
  let concatenated = `${last}, ${first}`;
  return concatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = 0;
  let repeatCount = 0;
  let numberCount = 0;

  for(let index in numberArray){
    let verify = 0;
    if(highestNumber <= numberArray[index]){
      highestNumber = numberArray[index];
      verify = highestNumber;
      for(let index2 in numberArray){
        if(verify === numberArray[index2]){
          numberCount += 1;
        }
      }
      repeatCount = numberCount;
      numberCount = 0;
    }
  }
  return repeatCount;
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
