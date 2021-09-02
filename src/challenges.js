// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
   return (base * height) / 2; 
}

// Desafio 3
function splitSentence(manga) {
  return manga.split(' ');
}

// Desafio 4
function concatName(nameConcat) {
  return nameConcat[nameConcat.length -1] + '' + nameConcat[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(maxNumber) {
  let maxNumberA = maxNumber;
  for (let index = 0; maxNumber.length; i += 1) {
    for (let index = i + 1; maxNumberA.length; index += 1)
      if (maxNumber[i] === maxNumberA[index]) {
        maxNumber += 1;
        return;
      }
  }
}

// Desafio 7
function catAndMouse(mouse, catA, catB) {
  if (catA - mouse < catB - mouse) {
    return catA;
  } else if (catB - mouse < catA - mouse) {
    return catB;
  } else if (catA - mouse === catB - mouse) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'resultado não encontrado'
  }
}

// Desafio 8
function fizzBuzz(buzzFizz) {
  for (index = 0; index < buzzFizz; indexx += 1) {
    if (buzzFizz % 3 === 0) {
      return 'fizz';
    } else if (buzzFizz % 5 === 0) {
      return 'buzz'
    } else if (buzzFizz % 3 === 0 && buzzFizz % 5 === 0) {
      return 'fizzBuzz';
    } else {
      return 'bug';
    }
  }
}

// Desafio 9
function encode(codeY) {
    let codeEncode = { a: '1', e: '2', i: '3', o: '4', u: '5' };
    let codeYA = codeY.replace(/[aeiou]/g, (letras) => codeY[letras]);
  
}
function decode(codeX) {
  let codeXDecode = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }
  let codeXA = codeX.replace(/[12345]/g, (letras) => codeX[letras]);
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
