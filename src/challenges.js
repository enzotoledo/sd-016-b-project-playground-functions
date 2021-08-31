// Desafio 1
function compareTrue(boolean1, boolean2) {
  if((boolean1 == true) && (boolean2 == true)){
    return true;
  }  else{
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
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[(array.length - 1)] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points =(wins * 3) + ties; 
  return points;
}

// Desafio 6
function highestCount(array) {
  let timesTheNumberAppear = 0;
  let theHighestNumber = array[0];
  //finds the highest number.
  for (let index = 0; index < array.length; index += 1) {
    theHighestNumber = array[index];
    for(let index2 = 0; index2 < array.length; index2 += 1) {
      if (theHighestNumber < array[index2]) {
        theHighestNumber = array[index2];
      }
    }
  }
  //pass the highest number through the array and check the times it appears.
  for (let index3 = 0; index3 < array.length; index3 += 1) {
    if (theHighestNumber === array[index3]) {
      timesTheNumberAppear += 1;
    }
  }
  return timesTheNumberAppear;
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
