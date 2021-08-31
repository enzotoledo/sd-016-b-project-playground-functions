// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTri = (base * height) / 2;
  return areaTri;
}

// Desafio 3
function splitSentence(str) {
  let space = ' ';
  return str.split(space);
}
splitSentence('go Trybe');

// Desafio 4
function concatName(arrayOfStrings) {
  return `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggestNumber = -100000;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    let actualNumber = arrayOfNumbers[i];
    if (actualNumber > biggestNumber) {
      biggestNumber = actualNumber;
    }
  }
  let count = 0;
  for (let i2 = 0; i2 < arrayOfNumbers.length; i2 += 1) {
    if (arrayOfNumbers[i2] === biggestNumber) { count += 1; }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catClose = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    catClose = 'cat1';
  } 
  else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    catClose = 'cat2';
  }
  else {
    catClose = 'os gatos trombam e o rato foge';
  }
  return catClose;
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
