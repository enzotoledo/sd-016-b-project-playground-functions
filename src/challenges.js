// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(namesArray) {
  return `${namesArray[namesArray.length - 1]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray.sort((a, b) => a - b).pop();
  let highestNumberCount = 1;
  for (const index in numbersArray) {
    if (numbersArray[index] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1ToMouse = Math.abs(cat1 - mouse);
  const cat2ToMouse = Math.abs(cat2 - mouse);
  if (cat1ToMouse < cat2ToMouse) return 'cat1';
  if (cat1ToMouse > cat2ToMouse) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function isDivisibleBy3(number) { return number % 3 === 0; }

function isDivisibleBy5(number) { return number % 5 === 0; }

function isDivisibleBy3And5(number) {
  return isDivisibleBy3(number) && isDivisibleBy5(number);
}

function fizzBuzz(numbersArray) {
  return numbersArray.map((number) => {
    if (isDivisibleBy3And5(number)) return 'fizzBuzz';
    if (isDivisibleBy3(number)) return 'fizz';
    if (isDivisibleBy5(number)) return 'buzz';
    return 'bug!';
  });
}

// Desafio 9
const letterNumbers = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function encode(str) {
  return str.split('').map((l) => letterNumbers[l] || l).join('');
}
function decode(str) {
  return encode(str);
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
