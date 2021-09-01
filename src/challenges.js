// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(names) {
  let newArray = [names[names.length - 1], names[0]];
  return newArray.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 1; i <= wins; i += 1) {
    points += 3;
  }
  for (let i = 1; i <= ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(numArray) {
  let biggestNum = numArray.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let counter = 0;

  for (const num of numArray) {
    if (num === biggestNum) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(stringToEncode) {
  let newString = stringToEncode;
  newString = newString.replace(/a/g, '1');
  newString = newString.replace(/e/g, '2');
  newString = newString.replace(/i/g, '3');
  newString = newString.replace(/o/g, '4');
  newString = newString.replace(/u/g, '5');
  return newString;
}
function decode(stringToDecode) {
  let newString = stringToDecode;
  newString = newString.replace(/1/g, 'a');
  newString = newString.replace(/2/g, 'e');
  newString = newString.replace(/3/g, 'i');
  newString = newString.replace(/4/g, 'o');
  newString = newString.replace(/5/g, 'u');
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
