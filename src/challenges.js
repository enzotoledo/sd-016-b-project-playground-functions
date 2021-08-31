// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 == true) && (param2 == true))
    return true
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split('')
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;

}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(param) {
  let maiorValor = 0;
  let numRepeticoes = 0;
  for (let i = 0; i < param.length; i += 1) {
    if (maiorValor < param[i]) {
      maiorValor = param[i];
    }
  }
  for (let j = 0; j < param.length; j += 1) {
    if (maiorValor === param[j]) {
      numRepeticoes += 1;
    }
  }

  return numRepeticoes
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
