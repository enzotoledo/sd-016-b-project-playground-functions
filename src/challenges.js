// Desafio 1
function compareTrue(value1, value2) {
if (value1 === true && value2 === true){
  return true;
  }
  else{
  return false;
  } 
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  const area = (base * height)/2;
  return area;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(word) {
  const wordSpace = word.split(' ');
  return wordSpace; 
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  const nameList = [ ]
  let names = nameList.push(array[array.length -1], array[0])
  let nameConcat = nameList.join(", ")
  return nameConcat
}
console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let somaPoints = vitoria + empate;
  return somaPoints;
}
console.log(footballPoints(1, 2));

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
