// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(a, b) {
  // seu código aqui
  return (a * b) / 2;
}

// Desafio 3
function splitSentence(myString) {
  // seu código aqui
  return myString.split(' ');
}

// Desafio 4
function concatName(myString) {
  // seu código aqui
  let finalWord = myString[myString.length - 1];
  let firstWord = myString[0];
  return `${finalWord}, ${firstWord}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  // Pesquisada funcao sort para numeros no site https://www.w3schools.com/jsref/jsref_sort.asp
  let ordenedNumbers = numbers.sort(function (a, b) { return a - b; });
  let highest = ordenedNumbers[ordenedNumbers.length - 1];
  let count = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (highest === numbers[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (Math.abs(cat1Distance) < (cat2Distance)) {
    return 'cat1';
  }
  if ((cat1Distance) > (cat2Distance)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
