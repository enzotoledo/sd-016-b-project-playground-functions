// Desafio 1
function compareTrue(value1, value2) {
  let result = 0;
  if ((value1 == true) && (value2 == true)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
  console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}
  console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let array = 0;
  array = string.split(" ");
  return array;
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {
  let result = "";
  lastWord = array[array.length -1];
  firstWord = array[0];
  result = lastWord + "," + " " + firstWord;
  return result;
}
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pointsScored = 0;
  pointsScored = (wins * 3) + (ties * 1);
  return pointsScored;
}
  console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayInt) {
  let bigger = arrayInt[0];
  for (let index = 1; index < arrayInt.length; index += 1) {
    if (bigger < arrayInt[index]) {
      bigger = arrayInt[index];
    }
  }
  let amount = 0;
  for (let index = 0; index < arrayInt.length; index += 1) {
    if (bigger === arrayInt[index]) {
      amount += 1;
    }
  }
  return amount;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
let result = [];
for(let index = 0; index < array.length; index += 1) {
  if((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
    result.push("fizzBuzz");
  } else if(array[index] % 3 === 0) {
    result.push("fizz");
  } else if(array[index] % 5 === 0) {
    result.push("buzz");
  } else {
    result.push("bug!");
  }
}
  return result;
}
  console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
