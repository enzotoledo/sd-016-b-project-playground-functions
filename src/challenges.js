// Desafio 1
function compareTrue(firstValue, secondValue) {
  if ((firstValue == true)&&(secondValue == true)) {
    return true;
  } else {
    return false;
    }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(listOfNames) {
  let result = listOfNames[listOfNames.length - 1] + ', ' + listOfNames[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbersList) {
  let higherNumber = Math.max.apply(null, numbersList);
  let count = 0;

  for (let index = 0; index < numbersList.length; index++) {
      if (numbersList[index] === higherNumber) {
      count += 1;
      }
  }
  return count;
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
