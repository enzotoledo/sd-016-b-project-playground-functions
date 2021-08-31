// Desafio 1
function compareTrue(value1,value2) {
  if ((value1 == true) && (value2 == true)){
    return true;
  }else{
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
 let area = (base*height)/2;

 return area;
}

// Desafio 3
function splitSentence(frase) {
  let separa = frase.split(" ");
  return separa;
}

//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(vetor) {
  let primeiroItem = vetor[0];
  let ultimoItem = vetor[vetor.length -1];

  let resultadoConcat = (ultimoItem+", "+primeiroItem);
  
  return resultadoConcat;
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pointWin = 3;//
  let pointTie = 1;// as duas variáveis poderiam sair
  let total;

  total = wins*pointWin + ties*pointTie;

  return total;
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
