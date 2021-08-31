// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTri = (base * height) / 2;
  return areaTri;
}

// Desafio 3
function splitSentence(str) {
  let space = ' ';
  return str.split(space);
}
splitSentence('go Trybe');

// Desafio 4
function concatName(arrayOfStrings) {
  return `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggestNumber = -100000;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    let actualNumber = arrayOfNumbers[i];
    if (actualNumber > biggestNumber) {
      biggestNumber = actualNumber;
    }
  }
  let count = 0;
  for (let i2 = 0; i2 < arrayOfNumbers.length; i2 += 1) {
    if (arrayOfNumbers[i2] === biggestNumber) { count += 1; }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catClose = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    catClose = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    catClose = 'cat2';
  } else {
    catClose = 'os gatos trombam e o rato foge';
  }
  return catClose;
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let newArrayStr = [];
  for (let i3 = 0; i3 < arrayOfNumbers.length; i3 += 1) {
    let actualNumber = arrayOfNumbers[i3];
    if (actualNumber % 3 === 0 && actualNumber % 5 !== 0) {
      newArrayStr.push('fizz');
    } else if (actualNumber % 5 === 0 && actualNumber % 3 !== 0) {
      newArrayStr.push('buzz');
    } else if (actualNumber % 3 === 0 && actualNumber % 5 === 0) {
      newArrayStr.push('fizzBuzz');
    } else {
      newArrayStr.push('bug!');
    }
  }
  return newArrayStr;
}

// Desafio 9
function encode(str) {
  let newStr = '';
  let objectRef = { a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < str.length; i += 1) {
    let actLett = str[i];
    for (let key in objectRef) {
      if (key === actLett) {
        let newNumber = objectRef[key];
        actLett = newNumber;
        break;
      }
    }
    newStr += actLett;
  }
  return newStr;
}

function decode(str) {
  let newStr = '';
  let objectRef = { a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < str.length; i += 1) {
    let actLett = str[i];
    for (let key in objectRef) {
      if (objectRef[key].toString() === actLett) {
        let newLett = key;
        actLett = newLett;
        break;
      }
    }
    newStr += actLett;
  }
  return newStr;
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
