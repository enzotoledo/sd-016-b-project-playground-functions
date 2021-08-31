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
// Esse exercicio foi resolvido com a ajuda da galera no slack - 
// Gabriel Rodrigues Leite, Victor S. Kamagushi e Guilherme Rosa
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
}


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


// Desafio 9
function encode(param1) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  let fraseArray = param1.split('')
  for (let i in fraseArray){
    for (let keys in code) {
      if (keys === fraseArray[i]) {
        fraseArray[i] = code[keys]
      }
    }
  }
  return fraseArray.join('')
}


function decode(param1) {
  let code = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
  };
  let fraseArray = param1.split('')
  for (let i in fraseArray){
    for (let keys in code) {
      if (keys === fraseArray[i]) {
        fraseArray[i] = code[keys]
      }
    }
  }
  return fraseArray.join('')
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
