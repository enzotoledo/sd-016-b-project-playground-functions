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
  let namCon = 0;
  return (nameConcat = nameConcat[nameConcat.length - 1] + ',' + nameConcat[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(maxNumber) {
  let resultado = 0;
  let maxRes;
  for (let number of maxNumber) {
    if (number === maxRes) {
      result++;
    } else if (!maxRes || number > maxNumber) {
      maxRes = number;
      resultado = 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, catY, catX) {
  if (Math.abs(mouse - catY) < Math.abs(mouse - catX)) {
    return 'catY'
  } else if (Math.abs(mouse - catX) < Math.abs(mouse - catY)){
    return 'catX'
  } else if (Math.abs(mouse - catY) === Math.abs(mouse - catX)) {
    return 'os gatos se trombaram e o rato foge'
  } 
}

// Desafio 8
function fizzBuzz() {
  if (buzzFizz % 3 === 0 && buzzFizz % 5 === 0) {
    return 'fizzBuzz';
  }
  if (buzzFizz % 5 === 0) {
    return 'buzz';
  }
  if (buzzFizz % 3 === 0) {
    return 'fizz';
  }
  return 'bug!'
}

// Desafio 9
function encode(gocode) {
  let gocode = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let coded = gocode.replace(/[aeiou]/g, (letras) => gocode[letras]);
  return coded;
}
function decode(uncode) {
  let uncode = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let uncoded = uncode.replace(/[12345]/g, (letras) => uncoded[letras]);
  return uncoded;
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
