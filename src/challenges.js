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
// Creditos a Israel Sant'Anna e Gabriel Rodrigues Leite que me deram a ideia de dividir em mais funcoes
function divisibleBy3(number) {
  return number % 3 === 0;
}
function divisibleBy5(number) {
  return number % 5 === 0;
}
function divisblebyBoth(number) {
  return number % 15 === 0;
}

function fizzAndBuzz(number2) {
  if (divisblebyBoth(number2)) {
    return 'fizzBuzz';
  }
  if (divisibleBy3(number2)) {
    return 'fizz';
  }
  if (divisibleBy5(number2)) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbersArray) {
  let result = [];
  for (let i = 0; i < numbersArray.length; i += 1) {
    result.push(fizzAndBuzz(numbersArray[i]));
  }
  return result;
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
