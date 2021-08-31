// Desafio 1
function compareTrue (ValorA, ValorB) {
  if(ValorA && ValorB) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(texto) {
  let arraytexto = texto.split(' ');
  return arraytexto;
}

// Desafio 4
function concatName(recebearray) {
  let lastname = recebearray[recebearray.length - 1];
  let firstname = recebearray[0];
  let text = lastname + ", "  + firstname;
  return text;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6//
function highestCount(arraynumber) {
  let organizedNumber = arraynumber.sort();
  let quants = 0;

  for (let i = organizedNumber.length - 1; i >= 0; i -= 1) {
    if (organizedNumber[organizedNumber.length - 1] <= organizedNumber[i]) {
      quants += 1;
    }
  }

  return quants;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distca1 = Math.abs(mouse - cat1);
  let distca2 = Math.abs(mouse - cat2);
  let quempega = '';
  if (distca1 > distca2) {
    quempega = 'cat2';
  } else if (distca1 < distca2) {
    quempega = 'cat1';
  } else {
    quempega = 'os gatos trombam e o rato foge';
  }
  return quempega;
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
