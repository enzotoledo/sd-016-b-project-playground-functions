// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a==true && b==true) {
    return true
  } else {
    return false
  }
}

// Desafio 2

function calcArea(base,height) {
  // seu código aqui
  //let base = ;
  //let height = ;
  let area = (base * height)/2;
  return area ;
}
calcArea (10,50);
calcArea (5,2);
calcArea (51,1);

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let splitString = str.split(' ');
  return splitString
}

splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
/* Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.
 */

function concatName(names) {
  for (let index in names) {
    let primeiroItem = names[0];
    let ultimoItem = names[names.length-1];
    let concatd = ultimoItem + ', ' + primeiroItem;
    return concatd
  } 
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

console.log (concatName)
 
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
