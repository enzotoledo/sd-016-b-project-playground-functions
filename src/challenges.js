// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(namesArray) {
  return `${namesArray[namesArray.length - 1]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray.sort((a, b) => a - b).pop();
  let highestNumberCount = 1;
  for (const index in numbersArray) {
    if (numbersArray[index] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1ToMouse = Math.abs(cat1 - mouse);
  const cat2ToMouse = Math.abs(cat2 - mouse);
  if (cat1ToMouse < cat2ToMouse) return 'cat1';
  if (cat1ToMouse > cat2ToMouse) return 'cat2';
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
