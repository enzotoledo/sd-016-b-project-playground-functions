// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  // let calcArea = (base * height) / 2;
  // return calcArea;
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(textString) {
  // seu código aqui
  // let splitSentence = textString.split(' ');
  // return splitSentence;
  return textString.split(' ');
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  // let firstArray = nameArray[0];
  // let lastArray = nameArray[nameArray.length - 1];
  // let expectedArray = lastArray + ', ' + firstArray;
  // return expectedArray;
  return `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoint = 3;
  let tiePoint = 1;
  let score = wins * winPoint + ties * tiePoint;
  return score;
}

// Desafio 6
function highestCount(numbersArray) {
  // seu código aqui
  let x = null;
  let highNumber = Math.max.apply(null, numbersArray);
  for (let i in numbersArray) {
    if (numbersArray[i] === highNumber) {
      x += 1;
    }
  }
  return x;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  // seu código aqui
  for (let x = 0; x < numbersArray.length; x += 1) {
    if (numbersArray[x] % 3 === 0 && numbersArray[x] % 5 === 0) {
      numbersArray[x] = 'fizzBuzz';
    } else if (numbersArray[x] % 3 === 0 && numbersArray[x] % 5 !== 0) {
      numbersArray[x] = 'fizz';
    } else if (numbersArray[x] % 3 !== 0 && numbersArray[x] % 5 === 0) {
      numbersArray[x] = 'buzz';
    } else numbersArray[x] = 'bug!';
  }
  return numbersArray;
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
