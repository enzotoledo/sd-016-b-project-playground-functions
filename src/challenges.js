// Desafio 1
function compareTrue(parametro1, parametro2) {
  // seu código aqui

  return parametro1 && parametro2;

  // if ( parametro1 && parametro2 ) {
  //   return true
  // }else if ( parametro1 && parametro2) {
  //   return false
  // }else {
  //   return false
  // }

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return (base * height) / 2;
}

// Desafio 3
function splitSentence(parametro3) {
  // seu código aqui
  return parametro3.split(" ");
}

// Desafio 4
function concatName(parametro4) {
  // seu código aqui
  let primeiraPalavra = parametro4[parametro4.length - 1];
  let segundaPalavra = parametro4[0];

  let resultado = primeiraPalavra + ", " + segundaPalavra;

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winValue = 3;
  // let tiesValue = 1;

  return (wins * winValue) + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let resultado = 0;
  let max = Math.max.apply({}, array);
  for (let index = 0; index < array.length; index += 1) {
    if (max === array[index]) {
      resultado += 1;
    }
  }
  return resultado;
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
