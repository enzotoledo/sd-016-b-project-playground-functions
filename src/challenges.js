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
function fizzBuzz(array) {
  let newArray = [];
 array.forEach((value) => {
   if (value % 3 === 0 && value % 5 === 0) {
     newArray.push('fizzBuzz');
   } else if (value % 3 === 0) {
     newArray.push('fizz');
   } else if (value % 5 === 0) {
     newArray.push('buzz');
   } else {
     newArray.push('bug!');
   }
 });
 return newArray;
}

// Desafio 9
function encode() {
  function encode(string) {
    // seu código aqui
      string = string.replace(/a/gi, '1');
    string = string.replace(/e/gi, '2');
    string = string.replace(/i/gi, '3');
    string = string.replace(/o/gi, '4');
    string = string.replace(/u/gi, '5');
    return string;
  }
  function decode(string) {
    // seu código aqui
    string = string.replace(/1/gi, 'a');
    string = string.replace(/2/gi, 'e');
    string = string.replace(/3/gi, 'i');
    string = string.replace(/4/gi, 'o');
    string = string.replace(/5/gi, 'u');
    return string;
  }
}
function decode() {
  // seu código aqui
}

// Desafio 10
function Objetos(array, nome) {
  let newList = [];
  let newObjeto;
  array = array.sort();

  for (let key in array) {
    newObjeto = {
      tech: array[key],
      name: nome
    };

    newList[key] = newObjeto;
  }
  return newList;
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
