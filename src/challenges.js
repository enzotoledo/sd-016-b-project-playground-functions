// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maior;
  const repeticoes = {};

  for (let numero of array) {
    if (!maior || (numero > maior)) {
      maior = numero;
    }
    repeticoes[numero] = (repeticoes[numero] || 0) + 1;
  }

  return repeticoes[maior];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function isDivisible(valor, numero) {
  return valor % numero === 0;
}

function fizzBuzz(array) {
  const result = [];

  for (let key in array) {
    if ({}.hasOwnProperty.call(array, key)) {
      if (isDivisible(array[key], 3) && isDivisible(array[key], 5)) {
        result[key] = 'fizzBuzz';
      } else if (isDivisible(array[key], 3)) {
        result[key] = 'fizz';
      } else if (isDivisible(array[key], 5)) {
        result[key] = 'buzz';
      } else {
        result[key] = 'bug!';
      }
    }
  }

  return result;
}

// Desafio 9
function encode(string) {
  const object = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  let result = '';
  const array = string.split('');

  for (let value of array) {
    result += (object[value] || value);
  }

  return result;
}

function decode(string) {
  const object = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let result = '';
  const array = string.split('');

  for (let value of array) {
    result += (object[value] || value);
  }

  return result;
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
