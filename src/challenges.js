// Desafio 1
function compareTrue(value01, value02) {
  if (value01 === true && value02 === true) {
    return true;
  } else { return false}
}

// Desafio 2
function calcArea(base,height) {
  let triAng =  (base * height)/2;
  return triAng;
}

// Desafio 3
function splitSentence(frase) {
  let arrayResult = frase.split(" ");
  return arrayResult;
}

// Desafio 4
function concatName(paLavras) {
  return (paLavras.pop() +', '+ paLavras.shift());
} 

// Desafio 5
function footballPoints(wins,ties) {
  let points = (wins*3) + ties;
  return points;
}

// Desafio 6
function highestCount(listNumer) {
  // let listNumer = [0, 4, 4, 4, 9, 2, 1];
  let maiorNum = Math.max.apply(null,listNumer);
  let contador = 0;
  // let maxRepit = listNumer.length;
  // console.log(maxRepit);
  // console.log(contMaior);
    for (index = 0 ; index < listNumer.length; index +=1) {
      if (maiorNum === listNumer[index]) {
        contador +=1;
      }
    }
  return contador;
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
