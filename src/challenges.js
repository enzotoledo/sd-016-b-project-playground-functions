// Desafio 1
function compareTrue(valueFirst, valueSecond) {
  if (valueFirst === true && valueSecond === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(splitStringInSpaces) {
  let newString = splitStringInSpaces.split(' ');
  return newString;
}

// Desafio 4
function concatName(FirstAndLast) {
  let stringTwo = `${FirstAndLast[FirstAndLast.length - 1]}, ${FirstAndLast[0]}`;
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
    if (largestNumber === null || largestNumber < iterationNumber) {
      largestNumber = iterationNumber;
      countingTimes = 1;
    } else if (largestNumber === iterationNumber) {
      countingTimes += 1;
    }
  }
  return countingTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanceC1 = Math.abs(cat1 - mouse);
  let distanceC2 = Math.abs(cat2 - mouse);

  if (distanceC1 < distanceC2) {
    return 'cat1';
  }
  if (distanceC2 < distanceC1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
let avaliaValor = (value) => {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'fizzBuzz';
  }
  if (value % 3 === 0) {
    return 'fizz';
  }
  if (value % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
};

function fizzBuzz(bigArray) {
  let arrayFizzBuzz = [];

  for (let index = 0; index < bigArray.length; index += 1) {
    arrayFizzBuzz.push(avaliaValor(bigArray[index]));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(findVowelsInString) {
  let encodedString = '';

  for (let index = 0; index < findVowelsInString.length; index += 1) {
    if (!'aeiou'.includes(findVowelsInString[index])) {
      encodedString += findVowelsInString[index];
    } else if ('aeiou'.includes(findVowelsInString[index])) {
      encodedString += findVowelsInString[index]
        .replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4)
        .replace('u', 5);
    }
  }
  return encodedString;
}

function decode(findNumbersInString) {
  let decodedString = '';

  for (let index = 0; index < findNumbersInString.length; index += 1) {
    if (!'12345'.includes(findNumbersInString[index])) {
      decodedString += findNumbersInString[index];
    } else if ('12345'.includes(findNumbersInString[index])) {
      decodedString += findNumbersInString[index]
        .replace(1, 'a').replace(2, 'e').replace(3, 'i').replace(4, 'o')
        .replace(5, 'u');
    }
  }
  return decodedString;
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
