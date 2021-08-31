// Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  let names = [string[0], string.reverse()[0]];
  return names.reverse().join(', ');
}

// Desafio 5
function footballPoints(wins, tie) {
  return (wins * 3) + tie;
}

// Desafio 6
function highestCount(param) {
  let bigger = param[0];
  for (let number of param) {
    if (number > bigger) {
      bigger = number;
    }
  }
  let cont = 0;
  for (let numbers of param) {
    if (bigger === numbers) {
      cont += 1;
    }
  }
  return cont;
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
