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
  let newArray = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let novaPalavra = '';
  for (let index in string) {
    if (string[index] === 'a') {
      novaPalavra += '1';
    } else if (string[index] === 'e') {
      novaPalavra += '2';
    } else if (string[index] === 'i') {
      novaPalavra += '3';
    } else if (string[index] === 'o') {
      novaPalavra += '4';
    } else if (string[index] === 'u') {
      novaPalavra += '5';
    } else {
      novaPalavra += string[index];
    }
  }
  return novaPalavra;
}

function decode(string) {
  // seu código aqui
  let novaPalavra = '';
  for (let index in string) {
    if (string[index] === '1') {
      novaPalavra += 'a';
    } else if (string[index] === '2') {
      novaPalavra += 'e';
    } else if (string[index] === '3') {
      novaPalavra += 'i';
    } else if (string[index] === '4') {
      novaPalavra += 'o';
    } else if (string[index] === '5') {
      novaPalavra += 'u';
    } else {
      novaPalavra += string[index];
    }
  }
  return novaPalavra;
}
console.log(decode('h3 th2r5!'));

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
