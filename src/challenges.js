// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(array) {
  let maior
  const repeticoes = {}

  for (let numero of array) {
    if (!maior || (numero > maior)) {
      maior = numero
    }
    repeticoes[numero] = (repeticoes[numero] || 0) + 1
  }

  return repeticoes[maior]
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1
  let distanciaCat2 = mouse - cat2

  if (distanciaCat1 < 0)
    distanciaCat1 = -distanciaCat1

  if (distanciaCat2 < 0)
    distanciaCat2 = -distanciaCat2

  if (distanciaCat1 == distanciaCat2) {
    return "os gatos trombam e o rato foge"

  } else if (distanciaCat1 < distanciaCat2) {
    return "cat1"

  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2"

  }
}

// Desafio 8

function isDivisible(valor, numero) {
  return valor % numero == 0
}

function fizzBuzz(array) {
  const result = []

  for (let key in array) {
    const divisivelPor3 = isDivisible(array[key], 3)
    const divisivelPor5 = isDivisible(array[key], 5)

    if (divisivelPor3 && divisivelPor5) {
      result[key] = "fizzBuzz"
    } else if (divisivelPor3) {
      result[key] = "fizz"
    } else if (divisivelPor5) {
      result[key] = "buzz"
    } else {
      result[key] = "bug!"
    }
  }

  return result
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
