// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true
  } else {
    return false
  }

}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}

// Desafio 4
function concatName(array) {
  let stringFinal = []
  stringFinal[0] =  array[array.length - 1] 
  stringFinal[1] = array[0]
  return stringFinal.join(', ')
  // return array.length
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins *3
  return pontosVitorias + ties
}

// Desafio 6
function highestCount(arrayN) {
  let sorted = arrayN.sort((a,b) => a - b);
  let highNumber = sorted[sorted.length - 1];
  let contador = 0;
  for (let i in arrayN) {
    if (highNumber === arrayN[i]) {
      contador += 1
    }
  }
  return contador
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
