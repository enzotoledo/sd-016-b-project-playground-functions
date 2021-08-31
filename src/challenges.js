// Desafio 1
function compareTrue(valueFirst, valueSecond) {
  if (valueFirst === true && valueSecond === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(splitStringInSpaces) {
  let newString = splitStringInSpaces.split(" ");
  return newString;
}

// Desafio 4
function concatName(FirstAndLast) {
  let stringTwo = FirstAndLast[FirstAndLast.length -1] + ", " + FirstAndLast[0];
  return stringTwo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let largestNumber = null;
  let countingTimes = 0;

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let iterationNumber = arrayOfNumbers[index];
    if (largestNumber === null) {
      largestNumber = iterationNumber;
      countingTimes = 1;
    } else if (largestNumber < iterationNumber) {
      largestNumber = iterationNumber;
      countingTimes = 1;
    } else if (largestNumber === iterationNumber) {
      countingTimes += 1;
    }
  }
  return countingTimes;
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
