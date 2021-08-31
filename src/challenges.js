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
  let phrase = arrayDes4[arrayDes4.length - 1] + ', ' + arrayDes4[0];

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
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if ((arrayNumbers[index] % 3 === 0) && (arrayNumbers[index] % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }

  return arrayFizzBuzz;
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
