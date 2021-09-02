// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2)
  return area
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ")
  return resultado
}

// Desafio 4
function concatName(concatenar) {
  let concatenado = concatenar[concatenar.length-1] + ", " + concatenar[0];
  return concatenado
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties)
  return pontos
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let repete = 0;

  for (let index = 0; index < numeros.length; index += 1) {
  if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
      }
    }
    for (let index = 0; index < numeros.length; index += 1) {
      if (numeros[index] === maiorNumero) {
        repete += 1;
      }
    }
    return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse)
  let positionCat2 = Math.abs(cat2 - mouse)
  if (positionCat1 < positionCat2){
    return "cat1"
  } else if (positionCat1 > positionCat2){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let novoArray = [];
  for (index of array){
    if (index % 3 === 0 && index % 5 === 0){
      novoArray.push("fizzBuzz")
    } else if (index % 3 === 0){
      novoArray.push("fizz")
    } else if (index % 5 === 0){
      novoArray.push("buzz")
    } else {
      novoArray.push("bug!")
    }
  }
  return novoArray
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
