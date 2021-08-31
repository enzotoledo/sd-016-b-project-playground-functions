// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let phraseCharactersArray = phrase.split('');
  let wordsArray = [];
  let word = '';
  for (let index = 0; index <= phraseCharactersArray.length; index += 1) {
    if (phraseCharactersArray[index] === ' ' || index === phraseCharactersArray.length) {
      wordsArray.push(word);
      word = '';
    } else {
      word += phraseCharactersArray[index];
    }
  }
  return wordsArray;
}

// Desafio 4
function concatName(stringsArray) {
  let firstItem = stringsArray.shift();
  let lastItem = stringsArray.pop();
  return `${lastItem}, ${firstItem}`;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
