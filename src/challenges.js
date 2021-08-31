// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if ((v1 && v2) === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let arraysentence = phrase.split(' ');
  return arraysentence;
}

// Desafio 4
function concatName(vetorstring) {
  // seu código aqui
  let phrase = vetorstring[vetorstring.length -1] + ', '  + vetorstring[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let campeonato = (wins * 3) + (ties);
  return campeonato;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maior = -1;
  for (i = 0; i < numbers.length; i += 1) {
     if (numbers[i] > maior) {
      maior = numbers[i];
       }
  }
  let count = 0;
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === maior) {
     count = count + 1; 
    }
  }
  return count;
}
console.log(highestCount([ 1, 2, 3, 0, 7, 2, 1 ]));

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
