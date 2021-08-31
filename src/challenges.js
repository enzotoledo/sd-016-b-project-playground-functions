// Desafio 1
function compareTrue(x, y) {
  if ((x === true) && (y === true)) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/ 2;
}
// console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  const array = string.split(" ")
  return array;
  }
  
// console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName(ArrString) {
  let lastNum = ArrString[ArrString.length - 1] + ", " + ArrString[0];
  return lastNum;
}

// console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'))

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins*3;
  ties = ties;
  return wins + ties;
}
// console.log(footballPoints(1, 2));


// Desafio 6
function highestCount(numeros) {
  let numeroRepetido = 0;
  let maiorNumero = numeros[0];

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros > numeros[index]) {
      maiorNumero = index;
    }
    
  }
// pega a repetição do maior numero
  for (let index = 0; index < numeros.length; index += 1) {
    if (maiorNumero === numeros[index]) {
      numeroRepetido += 1;
    }
}

return numeroRepetido;
  }

  console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9,]));


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
