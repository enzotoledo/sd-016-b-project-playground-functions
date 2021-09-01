// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  } return false;
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let sentence = string.split(' ');
  return sentence;
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let concatFirstLast = `${array.slice(-1)}, ${array[0]}`;
  return concatFirstLast;
}

let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// let rocket = ['foguete', 'não', 'tem', 'ré'];
// let boat = ['captain', 'my', 'captain'];

console.log(concatName(names));

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let sumPoints = victory + ties;
  return sumPoints;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numberArray) {
  let maxValue = Math.max.apply(null, numberArray);
  let maxCount = 0;

  for (let index in numberArray) {
    if (numberArray[index] === maxValue) {
      maxCount += 1;
    }
  }

  return maxCount;
}

let numbers = [0, 0, 0];
console.log(highestCount(numbers));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat2';
  } if ((cat2 + cat1 + mouse) / 3 === 1) {
    return 'os gatos trombam e o rato foge';
  } return 'cat1';
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function divisibleBy3(currentNum) {
  if (currentNum % 3 === 0) {
    return true;
  }
}

function divisibleBy5(currentNum) {
  if (currentNum % 5 === 0) {
    return true;
  }
}

function divisibleBy3And5(currentNum) {
  if (divisibleBy3(currentNum) && divisibleBy5(currentNum) === true) {
    return true;
  }
}

function fizzBuzz(numberArray) {
  let results = numberArray.map((currentNum) => {
    if (divisibleBy3And5(currentNum) === true) return 'fizzBuzz';
    if (divisibleBy3(currentNum) === true) return 'fizz';
    if (divisibleBy5(currentNum) === true) return 'buzz';
    return 'bug!';
  });
  return results;
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
