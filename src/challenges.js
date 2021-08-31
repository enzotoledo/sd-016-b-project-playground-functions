// Desafio 1
function compareTrue(numberOne, numberTwo) {
  if ((numberOne === true) && (numberTwo === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  areaTriangle = (base*height) / 2;
  return areaTriangle;
}

// Desafio 3
function splitSentence(text) {
  let x = text.split(' ');
  return x
}

// Desafio 4
function concatName(listOne) {
  let lastArray = listOne[listOne.length - 1] + ', ' + listOne[0];
  return lastArray;
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
function highestCount(listTwo) {
  let accountant = 0;
  let higherNumber = Math.max.apply(null, listTwo);

  for (let i = 0; i < listTwo.length; i += 1) {
    if (listTwo[i] === higherNumber){
      accountant += 1;
    }
  }
  return accountant;
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
