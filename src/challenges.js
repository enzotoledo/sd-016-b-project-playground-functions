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

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
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
