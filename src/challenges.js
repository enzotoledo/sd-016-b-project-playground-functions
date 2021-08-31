// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfWords = [];
  let words = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      words += string[index];
    } else {
      arrayOfWords.push(words);
      words = '';
    }
  }

  arrayOfWords.push(words);

  return arrayOfWords;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let finalString = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;

  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let finalPoints = wins * 3 + ties;

  return finalPoints;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = array[0];
  let repeatCount = 0;

  for (let number in array) {
    if (array[number] > biggestNumber) {
      biggestNumber = array[number];
    }
  }

  for (let number in array) {
    if (array[number] === biggestNumber) {
      repeatCount += 1;
    }
  }

  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let result = '';

  if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let finalArray = [];

  for (let number in array) {
    if (array[number] % 3 === 0 && array[number] % 5 === 0) {
      finalArray.push('fizzBuzz');
    } else if (array[number] % 3 === 0) {
      finalArray.push('fizz');
    } else if (array[number] % 5 === 0) {
      finalArray.push('buzz');
    } else {
      finalArray.push('bug!');
    }
  }

  return finalArray;
}

// Desafio 9
function encode(string) {
  let vogals = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let check = 0;
    for (let vogal in vogals) {
      if (string[index] === vogal) {
        newString += vogals[vogal];
        check += 1;
      }
    }

    if (check === 0) {
      newString += string[index];
    }
  }

  return newString;
}

function decode(string) {
  let vogals = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let check = 0;

    for (let vogal in vogals) {
      if (string[index] === vogal) {
        newString += vogals[vogal];
        check += 1;
      }
    }

    if (check === 0) {
      newString += string[index];
    }
  }
  return newString;
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
