// Desafio 1
function compareTrue(val1, val2) {
  if ((val1 === true) && (val2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = (string.split(' '));
  return arrayString;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(array) {
  function retornaMaior(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > maior) {
        maior = arr[i];
      }
    }
    return maior;
  }

  let maior = retornaMaior(array);
  let contadorMaior = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) {
      contadorMaior += 1;
    }
  }
  return contadorMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let intervaloCat1 = cat1 - mouse;
  let intervaloCat2 = cat2 - mouse;

  if (Math.abs(intervaloCat1) === Math.abs(intervaloCat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(intervaloCat1) < Math.abs(intervaloCat2)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFinal = [];
  for (let number of array) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      arrayFinal.push('fizzBuzz');
    } else if (number % 3 === 0) {
      arrayFinal.push('fizz');
    } else if (number % 5 === 0) {
      arrayFinal.push('buzz');
    } else {
      arrayFinal.push('bug!');
    }
  }
  return arrayFinal;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let coded = '';
  let vogais = ['a', 'b', 'c', 'd', 'e'];
  for (let i = 0; i < vogais.length; i += 1) {
    coded += string.replace(vogais[i], i + 1);
  }
  return coded;
}
// console.log(encode('hi, there!'));

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
