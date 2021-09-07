// Desafio 1
function compareTrue(param1, param2) {
  let valueBolean = false;
  if ((param1 === true) && (param2 === true)) {
    valueBolean = true;
  } else {
    valueBolean = false;
  }
  return valueBolean;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');

  return array;
}

// Desafio 4
function concatName(arrayDes4) {
  let string1 = ', ';

  let phrase = arrayDes4[arrayDes4.length - 1] + string1 + arrayDes4[0];

  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount(valuesArray) {
  let bigger = Math.max.apply(null, valuesArray);

  let countBigger = 0;

  // for (let index = 0; index < valuesArray.length; index += 1) {
  //  if (valuesArray[index] > bigger) {
  //    bigger = valuesArray[index];
  //  }
  // }

  for (let index = 0; index < valuesArray.length; index += 1) {
    if (valuesArray[index] === bigger) {
      countBigger += 1;
    }
  }

  return countBigger;
}

// Desafio 7
function catAndMouse(positionMouse, positionCat1, positionCat2) {
  let distCat1 = Math.abs(positionMouse - positionCat1);

  let distCat2 = Math.abs(positionMouse - positionCat2);

  let catPull = '';

  if (distCat1 < distCat2) {
    catPull = 'cat1';
  } else if (distCat1 === distCat2) {
    catPull = 'os gatos trombam e o rato foge';
  } else {
    catPull = 'cat2';
  }
  return catPull;
}

// Desafio 8
function testFizzBuzzBug(number) {
  let result = '';
  if ((number % 3 === 0) && (number % 5 === 0)) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }

  return result;
}

function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    arrayFizzBuzz.push(testFizzBuzzBug(arrayNumbers[index]));
  }

  return arrayFizzBuzz;
}

// Desafio 9
function encode(stringCode) {
  let stringEncode = stringCode.replace(/a/g, '1');
  stringEncode = stringEncode.replace(/e/g, '2');
  stringEncode = stringEncode.replace(/i/g, '3');
  stringEncode = stringEncode.replace(/o/g, '4');
  stringEncode = stringEncode.replace(/u/g, '5');
  return stringEncode;
}

function decode(stringEncode) {
  let stringDecode = stringEncode.replace(/1/g, 'a');
  stringDecode = stringDecode.replace(/2/g, 'e');
  stringDecode = stringDecode.replace(/3/g, 'i');
  stringDecode = stringDecode.replace(/4/g, 'o');
  stringDecode = stringDecode.replace(/5/g, 'u');
  return stringDecode;
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
