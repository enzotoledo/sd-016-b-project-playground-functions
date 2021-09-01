// Desafio 1
function compareTrue(a, b) {
    if ((a === true) && (b === true)) {
    return true;
    } else {
    return false;
    }
    }
    compareTrue (true, true);
    


// Desafio 2
function calcArea(base, height) {
let area = ( (base * height)/ 2 );
return area;
    }
    calcArea (10, 50);


// Desafio 3
function splitSentence(string) {
let arrayDeString = string.split(' ');
return arrayDeString;
    }
    splitSentence("go Trybe");


// Desafio 4
function concatName(string) {
let stringDeArray = string[3] + ", " + string[0];
let strinfDeArray2 = string[0] + ", " + string[2];
return stringDeArray;

    }
    concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
   
    


// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 0 && ties === 0) {
    let result = 0;
  }
return 0; }
  
footballPoints (0, 0);

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
