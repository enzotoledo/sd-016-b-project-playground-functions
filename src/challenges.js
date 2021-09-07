// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  let calculo = 0;
  calculo = (base * height) / 2;
  return calculo;
}
console.log(calcArea(1, 51));

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}
console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(concaArray) {
  let lista = concaArray;
  let ultimoNome = lista[lista.length - 1];
  let nomeString = (ultimoNome + ", " + concaArray[0]);
  return nomeString;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let calculo = 0;
  calculo = ((wins * 3) + (ties * 1));
  return calculo;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let numeroRepitido = 0;
  for (let key in arrayNumeros) {
    if (maiorNumero < arrayNumeros[key]) {
      maiorNumero = arrayNumeros[key];
    }
  }
  for (let key2 in arrayNumeros) {
    if (maiorNumero === arrayNumeros[key2]) {
      numeroRepitido += 1;
    }
  }
  return numeroRepitido;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Posicao = Math.abs(cat1 - mouse);
  let cat2Posicao = Math.abs(cat2 - mouse);
  if (cat1Posicao < cat2Posicao) {
    return 'cat1';
  } if (cat1Posicao > cat2Posicao) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(7, 9, 5));

// Desafio 8
function fizzBuzz(arrayNumber) {
  let resultado = [];
  for (let key in arrayNumber) {
    let resultado3 = arrayNumber[key] / 3;
    let resultado5 = arrayNumber[key] /5;
    if (resultado3 % 1 === 0 && resultado5 % 1 === 0) {
      resultado.push("fizzBuzz");
    } else if (resultado3 % 1 === 0 && !(resultado5 % 1 === 0)) {
      resultado.push("fizz");
    } else if (resultado5 % 1 === 0 && !(resultado3 % 1 === 0)) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");  
    }
  }
  return resultado;
  }
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(strg) {
  let troca = "";
  for (let key in strg) {
    if (strg[key] === "a") {
      troca += 1;
    } else if (strg[key] === "e") {
      troca += 2;
    } else if (strg[key] === "i") {
      troca += 3;
    } else if (strg[key] === "o") {
      troca += 4;
    } else if (strg[key] === "u") {
      troca += 5;
    } else {
    troca += strg[key];
    }
  }
  return troca;
}
console.log(encode("hi there!"));

function decode(strg2) {
  let destroca = "";
  for (let key in strg2) {
    if (strg2[key] === "1") {
      destroca += "a";
    } else if (strg2[key] === "2") {
      destroca += "e";
    } else if (strg2[key] === "3") {
      destroca += "i";
    } else if (strg2[key] === "4") {
      destroca += "o";
    } else if (strg2[key] === "5") {
      destroca += "u";
    } else {
    destroca += strg2[key];
    }
  }
  return destroca;
}
console.log(decode("h3 th2r2!"));

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
