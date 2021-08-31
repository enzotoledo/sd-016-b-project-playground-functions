// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true
  } else {
    return false
  }
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
  return array[array.length -1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties)
}

// Desafio 6
function highestCount(array) {
  // encontrar o maior valor
  let maior = array[0]
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
  }

  // encontrar repetições
  let repete = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === maior) {
      repete++
    }
  }return repete
}
    

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse))
    return "cat1"   
  
  else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse))
    return "cat2"   

  else
    return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = []

  for (let i = 0; i < array.length; i++) {
    if (((array[i] % 3) === 0) && ((array[i] % 5) === 0))
    resultado.push("fizzBuzz")
  
    else if ((array[i] % 5) === 0)
    resultado.push("buzz")

    else if ((array[i] % 3) === 0)
    resultado.push("fizz")
    
    else
    resultado.push("bug!")
  }
return resultado
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
