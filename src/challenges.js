// Desafio 1
function compareTrue(vauleA, vauleB) {
  if( (vauleA == true) && (vauleB== true)){
    return true;
  } else { 
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(sentence, separator) {
 return sentence.split(" ");
}

// Desafio 4
function concatName(names) {
  return [names.length] + (names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
 return ((wins*3) + ties);
}

// Desafio 6
function highestCount(numbers) {
let counter = [];
let higthNumber = Math.max(numbers);

  for (let index = 0; index < numbers.length; index+=1) {
   if (higthNumber === numbers[index]) {
     counter +=1;
   }
  return counter;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
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
