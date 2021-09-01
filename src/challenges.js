// Desafio 1
function compareTrue(param1, param2) {  
  return (param1 === true && param2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(param) {
  const resultado = param.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let reversedArray = array.reverse();

  return `${reversedArray[0]}, ${reversedArray[reversedArray.length - 1]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins !== 0) {
    wins *= 3;
  }
  return wins + ties;
}

// Desafio 6
function highestCount(array) {
  let sum = 0;
  let indexBigger = 0;

  for (const key in array) {
    if (array[indexBigger] < array[key]) indexBigger = key;
  }
  for (const key in array) {
    if (array[indexBigger] === array[key]) sum += 1;
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = Math.abs(cat1 - mouse);
  let cat2Mouse = Math.abs(cat2 - mouse);

  if (cat1Mouse < cat2Mouse) return 'cat1';
  if (cat1Mouse > cat2Mouse) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function divide3(number) {
  return (number % 3 === 0);
}

function divide5(number) {
  return (number % 5 === 0);
}

function divide3e5(number) {
  return (number % 3 === 0 && number % 5 === 0);
}

function fizzBuzz(array) {
  let novoArray = [];

  for (let key in array) {
    if (divide3e5(array[key]) === true) novoArray.push('fizzBuzz');
    else if (divide3(array[key]) === true) novoArray.push('fizz');
    else if (divide5(array[key]) === true) novoArray.push('buzz');
    else novoArray.push('bug!');
  }
  return novoArray;
}

// Desafio 9
function letterA(text) {
  for (const key in text) {
    if (text[key] === 'a') {
      text[key] = 1;
    } else if (text[key] === '1') {
      text[key] = 'a';
    }
  }
  return text;
}

function letterE(text) {
  for (const key in text) {
    if (text[key] === 'e') {
      text[key] = 2;
    } else if (text[key] === '2') {
      text[key] = 'e';
    }
  }
  return text;
}

function letterI(text) {
  for (const key in text) {
    if (text[key] === 'i') {
      text[key] = 3;
    } else if (text[key] === '3') {
      text[key] = 'i';
    }
  }
  return text;
}

function letterO(text) {
  for (const key in text) {
    if (text[key] === 'o') {
      text[key] = 4;
    } else if (text[key] === '4') {
      text[key] = 'o';
    }
  }
  return text;
}

function letterU(text) {
  for (const key in text) {
    if (text[key] === 'u') {
      text[key] = 5;
    } else if (text[key] === '5') {
      text[key] = 'u';
    }
  }
  return text;
}

function encode(text) {
  let aux = text.split('');

  letterA(aux);
  letterE(aux);
  letterI(aux);
  letterO(aux);
  letterU(aux);

  return aux.join('');
}
console.log(encode('hello'));

function decode(text1) {
  let aux = text1.split('');

  letterA(aux);
  letterE(aux);
  letterI(aux);
  letterO(aux);
  letterU(aux);

  return aux.join('');
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
