// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) {
    return true;
  } else {
    return false;
  }
};
compareTrue(true, true);



// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
calcArea(10, 50);
console.log(calcArea);



// Desafio 3
function splitSentence() {

}



// // Desafio 4
const vingadores = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const foguete = ['foguete', 'não', 'tem', 'ré']
const captain = ['captain', 'my', 'captain']

function concatName(names) {
  let getFirstName = names[0];
  let getLastName = names[names.length - 1];
  return getLastName + ', ' + getFirstName;
}
console.log(concatName(vingadores));
console.log(concatName(foguete));
console.log(concatName(captain));



// Desafio 5
let winScore = 3;
let tieScore = 1;

function footballPoints(wins, ties) {
  let numberOfPoints = (wins * winScore) + (ties * tieScore);
  // numberOfPoints = ((wonGames * winPoints) + (tiedGames * tiePoints));
  return numberOfPoints;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));



// Desafio 6
const firstArr = [9, 1, 2, 3, 9, 5, 7];
// let repeatedNumber = 0;
let biggestNumber = 0;

function highestCount(numbers) {
  for (i = 0; i <= biggestNumber; i++) {
    if (numbers[i] > biggestNumber) {
      let biggestNumber = numbers[i];
    }
    console.log(biggestNumber);
  };
}
// console.log(highestCount(firstArr));

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
