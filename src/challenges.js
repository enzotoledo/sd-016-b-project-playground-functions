// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 == true) && (valor2 == true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(' ');
  return frase;
}


// Desafio 4
function concatName(array) {
  let ultimo = (array.length - 1);
  return(array[ultimo] + ", " + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let ganho = wins * 3;
  return(ganho + ties);
}

// Desafio 6
function highestCount(valores) {
  let maior = -1000000;
  let quantidade = 0;
  for (let i = 0; i < valores.length; i += 1){
    if (valores[i] > maior){
      maior = valores[i]
    }
  }
  for (let j = 0; j < valores.length; j += 1){
    if (valores[j] == maior) {
      quantidade += 1;
    }
} return(quantidade);
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
