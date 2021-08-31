// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let stringSeparada = [];
  stringSeparada = frase.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(meuArray) {
  let resulltado;
  let ultimoItem;
  let primeiroItem;
  ultimoItem = meuArray[meuArray.length - 1];
  primeiroItem = meuArray.shift();
  resulltado = ultimoItem + ', ' + primeiroItem;
  return resulltado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao;
  let pontuacaoVitorias = wins * 3;
  let pontuacaoEmpates = ties;
  pontuacao = pontuacaoVitorias + pontuacaoEmpates;
  return pontuacao;
}

// Desafio 6
function highestCount(numerosArray) {
  let maior = numerosArray[0];
  let quntidade = 0;
  for (let key in numerosArray) {
    if (numerosArray[key] > maior) {
      maior = numerosArray[key];
    }
  }
  for (let key in numerosArray) {
    if (numerosArray[key] === maior) {
      quntidade += 1;
    }
  }
  return quntidade;
}

console.log(highestCount([-2, -2, -1]));

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
