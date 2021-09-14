// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  let boolean = false;
  if (x == true & y == true)
    boolean = true;
  return boolean
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsVal = 3;
  let tiesVal = 1;

  return (wins * winsVal) + (ties * tiesVal)

}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorValor;
  let cont = 0;
  
  maiorValor = Math.max.apply(Math, array);

  for(let i = 0; i < array.length; i++){
    if(array[i] === maiorValor){
      cont += 1;
    }
  }
  return cont
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
