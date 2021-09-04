// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let separate = phrase.split(' ');
  return separate;
}

// Desafio 4
function concatName(array) {
  let lastName = array.pop();
  let firstName = array.shift();
  let concatAll = (lastName) + (', ') + (firstName);

  return concatAll;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;

  return result;
}

// Desafio 6
function highestCount(arrNumbers) {
  let higherNumber = arrNumbers[0];
  let timesRepeat = 0;

  for (let key in arrNumbers) {
    if (arrNumbers[key] > higherNumber) {
      higherNumber = arrNumbers[key];
    }
  }
  for (let key in arrNumbers) {
    if (arrNumbers[key] === higherNumber) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
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
