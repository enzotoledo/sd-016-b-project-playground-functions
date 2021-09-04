// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let divisor = frase.split(' ');
  return divisor;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let newArray = [];
  newArray.push(array[0]);
  newArray.push(array[array.length - 1]);
  newArray = newArray.reverse().join(', ');
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valor = 0;
  if (wins === 0 && ties === 0) {
    return valor;
  }
  valor = (wins * 3) + (ties);
  return valor;
}

// Desafio 6
function controle(outroNome) {
  for (let index2 in outroNome) {
    if (outroNome[index2] < 0) {
      return true;
    }
  }
}

function highestCount(array) {
  let funcao = controle(array);
  if (funcao) {
    array.sort().reverse();
  } else {
    array.sort();
  }
  let contador = 0;
  let numeroMaior = array[array.length - 1];
  for (let index in array) {
    if (numeroMaior === array[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    resultado = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  // dica passada pelo Gabriel Pinheiro Turma 16-B de usar o forEach para passar no lint - buscado como funciona no youtube da trybe:https://www.youtube.com/watch?v=NvTJJDDu7iE&ab_channel=Trybe
  let newArray = [];
  array.forEach((index) => {
    if (index % 3 === 0 && index % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (index % 3 === 0) {
      newArray.push('fizz');
    } else if (index % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  });
  return newArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  // dica de refatorar com o replace passada e explicada sua funcionalidade pelo André Melo Turma 16-B via Zoom
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
