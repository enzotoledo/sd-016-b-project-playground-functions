// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura)/2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  divisor = frase.split(' ');
  return divisor;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let newArray = [];
  newArray.push(array[0]);
  newArray.push(array[array.length -1]);
  newArray = newArray.reverse().join(', ');
  return newArray;
} 

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valor = 0;
  if(wins === 0 && ties === 0){
    return valor;
  } else{
    valor = (wins * 3) + (ties);
    return valor;
  }
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
    let contador = 0;
    let valorFinal = '';
    let maiorNumero = -10;
    for (let index in array) {
      for (let index2 in array) {
        if (array[index] === array[index2]) {
          contador += 1;
          if(maiorNumero <= array[index]){
            maiorNumero = array[index];
          }
        }
      }
      if (maiorNumero <= array[index]) {
        valorFinal = array[index];
        contador = 0;
      }
    }
    contador = 0;
    for(let index3 in array){
      if(valorFinal === array[index3]){
        contador = contador + 1;
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
