// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSep = frase.split(' ');
  return fraseSep;
}

// Desafio 4
function concatName(nomes) {
  let lastPos = nomes.length - 1;
  let last = nomes[lastPos];
  let first = nomes[0];
  let junto = '';
  return junto.concat(last, ', ', first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let contBigger = 0;
  let biggerNum = numeros[0];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > biggerNum) {
      contBigger = 0;
      biggerNum = numeros[index];
    }
    if (numeros[index] === biggerNum) {
      contBigger += 1;
    }
  }
  return contBigger;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let contGato1 = 0;
  let contGato2 = 0;
  for (let casas1 = cat1; casas1 !== mouse;) {
    if (casas1 > mouse) {
      casas1 -= 1;
      contGato1 += 1;
    } else {
      casas1 += 1;
      contGato1 += 1;
    }
  }
  for (let casas2 = cat2; casas2 !== mouse;) {
    if (casas2 > mouse) {
      casas2 -= 1;
      contGato2 += 1;
    } else {
      casas2 += 1;
      contGato2 += 1;
    }
  }
  if (contGato1 < contGato2) {
    return 'cat1';
  } if (contGato2 < contGato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
