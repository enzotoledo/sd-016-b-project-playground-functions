// Desafio 1
function compareTrue(boolean1, boolean2) {
  if ((boolean1 === true) && (boolean2 === true)) {
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
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[(array.length - 1)]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function findHighestNumber(array) {
  let theHighestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (theHighestNumber < array[index]) {
      theHighestNumber = array[index];
    }
  }
  return theHighestNumber;
}

function highestCount(array) {
  let timesTheNumberAppear = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (findHighestNumber(array) === array[index]) {
      timesTheNumberAppear += 1;
    }
  }
  return timesTheNumberAppear;
}

// Desafio 7
function findCat1Distance(mouse, cat1) {
  let cat1Distance = 0;
  if (mouse >= cat1) {
    cat1Distance = mouse - cat1;
  } else {
    cat1Distance = cat1 - mouse;
  }
  return cat1Distance;
}

function findCat2Distance(mouse, cat2) {
  let cat2Distance = 0;
  if (mouse >= cat2) {
    cat2Distance = mouse - cat2;
  } else {
    cat2Distance = cat2 - mouse;
  }
  return cat2Distance;
}

function catAndMouse(mouse, cat1, cat2) {
  // returns wich one is closest or if both are in the same distance.
  if (findCat1Distance(mouse, cat1) > findCat2Distance(mouse, cat2)) {
    return 'cat2';
  }
  if (findCat1Distance(mouse, cat1) < findCat2Distance(mouse, cat2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzzTransformer(value) {
  if (value % 15 === 0) {
    value = 'fizzBuzz';
  } else if (value % 3 === 0) {
    value = 'fizz';
  } else if (value % 5 === 0) {
    value = 'buzz';
  } else {
    value = 'bug!';
  }
  return value;
}
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = fizzBuzzTransformer(array[index]);
  }
  return array;
}

// Desafio 9
/*
 * Consultei o pull request do projeto do Lucas Araujo Carvalho para resolver essa parte.
 * Link: https://github.com/tryber/sd-016-b-project-playground-functions/pull/85
 */
function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let codedString = '';
  for (let letter of string) {
    let control = 0;
    for (let property in code) {
      if (letter === property) {
        codedString += code[property];
        control = 1;
        break;
      }
    }
    if (control === 0) {
      codedString += letter;
    }
  }
  return codedString;
}
console.log(encode('hello'));
function decode(string) {
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  for (let letter of string) {
    let control = 0;
    for (let property in code) {
      if (letter === property) {
        decodedString += code[property];
        control = 1;
        break;
      }
    }
    if (control === 0) {
      decodedString += letter;
    }
  }
  return decodedString;
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
