// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado;
  if (valor1 === true && valor2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let calculaArea = (base * height) / 2;

  return calculaArea;
}

// Desafio 3
function splitSentence(name) {
  let resultado = name.split(" ");

  return resultado;
}

// Desafio 4
function concatName(names) {
  let concatena = names[names.length-1] +", "+ names[0];

  return concatena;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;

  let totalPontos = vitorias + empates;
  return totalPontos;
}

// Desafio 6
function highestCount(contagem) {
  let nMaior = Math.max.apply(null, contagem);
  let verificaRepeticao = 0;
  for (let i = 0; i < contagem.length; i += 1) {
    if (nMaior === contagem[i]) {
      verificaRepeticao += 1;
    }
  }
  return verificaRepeticao;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {

  let distanciacat1 = (cat1 - mouse) ;
  let distanciacat2 = (cat2 - mouse);
  let distancia2gatos= ((cat1 - cat2) * mouse);
  
  if(distancia2gatos === mouse ){return "os gatos trombam e o rato foge";}
  else if (distanciacat2 < distanciacat1){return "cat1";}
  else if (distanciacat1 < distanciacat2){return "cat2";}
}

// Desafio 8
function fizzBuzz(n) {
  let array = [];
  for (let index = 0; index < n[index].length; index += 1) {
    if (n[index] % 3 === 0 && n[index] % 5 === 0){
      array.push("FizzBuzz");
    } else if (n[index] % 5 === 0){
      array.push("Buzz");
    } else if (n[index] % 3 === 0){
      array.push("Fizz");
    } else {
      array.push("bug!");
    }
  }
  return array;
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
