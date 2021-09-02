// Desafio 1
function compareTrue(ValorA, ValorB) {
  let compare = false;
  if (ValorA && ValorB) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
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
  let tamanhoarray = organizedNumber.length - 1;
  if(organizedNumber[tamanhoarray] >= 0) {
    for (let i = organizedNumber.length - 1; i >= 0; i -= 1) {
      if (organizedNumber[organizedNumber.length - 1] == organizedNumber[i]) {
        quants += 1;
      }
    }
  } else {
    for (let i = organizedNumber.length - 1; i >= 0; i -= 1) {
      if (organizedNumber[0] == organizedNumber[i]) {
        quants += 1;
      }
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
function fizzBuzz(fizzbuzzbug) {
  let bugbugbug = [];
  for (let i = 0; i < fizzbuzzbug.length; i += 1) {
    if ((fizzbuzzbug[i] % 3 === 0) && (fizzbuzzbug[i] % 5 === 0)) {
      bugbugbug.push('fizzBuzz');
    } else if (fizzbuzzbug[i] % 3 === 0) {
      bugbugbug.push('fizz');
    } else if (fizzbuzzbug[i] % 5 === 0) {
      bugbugbug.push('buzz');
    } else {
      bugbugbug.push('bug!');
    }
  }
  return bugbugbug;
}

// Desafio 9
function encode(textEncodes) {
  let textEncode = textEncodes.split('');
  for (let i = 0; i < textEncode.length; i += 1) {
    switch (textEncode[i]) {
      case 'a' :
        textEncode[i] = '1';
        break;

      case 'e' :
        textEncode[i] = '2';
        break;

      case 'i' :
        textEncode[i] = '3';
        break;

      case 'o' :
        textEncode[i] = '4';
        break;

      case 'u' :
        textEncode[i] = '5';
        break;
    }
  }
  return textEncode.join('');
}
function decode(textDecodes) {
  let textDecode = textDecodes.split('');
  for (let i = 0; i < textDecode.length; i += 1) {
    switch (textDecode[i]) {
      case '1' :
        textDecode[i] = 'a';
        break;

      case '2' :
        textDecode[i] = 'e';
        break;

      case '3' :
        textDecode[i] = 'i';
        break;

      case '4' :
        textDecode[i] = 'o';
        break;

      case '5' :
        textDecode[i] = 'u';
        break;
    }
  }
  return textDecode.join('');
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
