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
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1'
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
  return 'cat2'
  } else {
    return "os gatos trombam e o rato foge"
  }
}
// console.log(catAndMouse(5,12,12))

// Desafio 8
function fizzBuzz(arrayN) {
  let palavras = []
  for (let index in arrayN){
    if (arrayN[index] % 3 === 0 && arrayN[index] % 5 === 0) {
      palavras[index] = "fizzBuzz";
    } else if (arrayN[index] % 3 === 0){
      palavras[index] = "fizz"
    } else if (arrayN[index] % 5 === 0){
      palavras[index] = "buzz"
    } else {
      palavras[index] = "bug!"
    }
  }
  return palavras
}
console.log(fizzBuzz([9,25]))


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
