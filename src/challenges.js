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

// Desafio 9
function encode(string) {
  let letter = string.split('');
  let coded = '';
  for (let i = 0; i < letter.length; i += 1) {
    if (letter[i] === 'a') {
      letter[i] = '1';
    } else if (letter[i] === 'e') {
      letter[i] = '2';
    } else if (letter[i] === 'i') {
      letter[i] = '3';
    } else if (letter[i] === 'o') {
      letter[i] = '4';
    } else if (letter[i] === 'u') {
      letter[i] = '5';
    }
  }
  coded = letter.join('');
  return coded;
}

function decode(string) {
  let letter = string.split('');
  let decoded = '';
  for (let i = 0; i < letter.length; i += 1) {
    if (letter[i] === '1') {
      letter[i] = 'a';
    } else if (letter[i] === '2') {
      letter[i] = 'e';
    } else if (letter[i] === '3') {
      letter[i] = 'i';
    } else if (letter[i] === '4') {
      letter[i] = 'o';
    } else if (letter[i] === '5') {
      letter[i] = 'u';
    }
  }
  decoded = letter.join('');
  return decoded;
}

console.log(decode('h2ll4'));
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
