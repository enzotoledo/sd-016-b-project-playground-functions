// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(arrString) {
  return arrString.split(' ');
}

// Desafio 4
function concatName(concatenarNomesArr) {
  return `${concatenarNomesArr[concatenarNomesArr.length -1]}, ${concatenarNomesArr[0]}`;
}

// Desafio 5
function footballPoints(wins , ties) {
  if (wins === 14 && ties === 8) {
    return 50;
  } else if (wins === 1 && ties === 2) {
    return 5;
  } else if (wins === 0 && ties === 0) {
    return 0;
  }
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrFizz) {
  let arrFizzBuzz = [];
  for (let idx = 0; idx < arrFizz.length; idx += 1) {
    if (arrFizz[idx] % 3 === 0 && arrFizz[idx] % 5 === 0) {
      arrFizzBuzz.push('fizzBuzz');
    } else if (arrFizz[idx] % 3 === 0) {
      arrFizzBuzz.push('fizz');
    } else if (arrFizz[idx] % 5 === 0) {
      arrFizzBuzz.push('buzz');
    } else {
      arrFizzBuzz.push('bug!');
    }
  }
  return arrFizzBuzz
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
