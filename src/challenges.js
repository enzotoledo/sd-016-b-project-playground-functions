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
/* Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.
Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
O que será verificado:
Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates
Retorne 5 pontos quando o time tenha 1 vitória e 2 empates
Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates */

function footballPoints(wins, ties) {
  points = ((wins*3) + (ties*1));
  return points
}
footballPoints(14,8);
footballPoints(1,2);
footballPoints(0,0);


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
