const code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

// Desafio 1
function compareTrue(arg1, arg2) {
  return arg1 === true && arg2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  let counter = 0;
  const negativeControl = arr[0] < 0;

  negativeControl ? arr.sort().reverse() : arr.sort();

  for (let i of arr) {
    if (i === arr[arr.length - 1]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Space = 0;
  let cat2Space = 0;
  let returnStr = '';
  const cat1Win = mouse - cat1 < 0;
  const cat2Win = mouse - cat2 < 0;

  cat1Win ? cat1Space = (mouse - cat1) * -1 : cat1Space = (mouse - cat1);
  cat2Win ? cat2Space = (mouse - cat2) * -1 : cat2Space = (mouse - cat2);

  console.log(cat1Space, cat2Space);
  if (cat1Space < cat2Space) {
    returnStr = 'cat1';
  } else if (cat2Space < cat1Space) {
    returnStr = 'cat2';
  } else {
    returnStr = 'os gatos trombam e o rato foge';
  }
  return returnStr;
}

// Desafio 8
function fizzBuzz(arr) {
  const strArray = [];

  arr.forEach((n) => {
    if (n % 3 === 0 && n % 5 === 0) {
      strArray.push('fizzBuzz');
    } else if (n % 3 === 0) {
      strArray.push('fizz');
    } else if (n % 5 === 0) {
      strArray.push('buzz');
    } else {
      strArray.push('bug!');
    }
  });

  return strArray;
}

// Desafio 9
function encode(str) {
  let encodeMsg = str.split('');

  encodeMsg.forEach((letter) => {
    for (let key in code) {
      if (letter === key) {
        encodeMsg[encodeMsg.indexOf(letter)] = code[key];
      }
    }
  });

  return encodeMsg.join('');
}
function decode(str) {
  let decodeMsg = str.split('');

  decodeMsg.forEach((letter) => {
    for (let key in code) {
      if (letter === code[key].toString()) {
        decodeMsg[decodeMsg.indexOf(letter)] = key;
      }
    }
  });

  return decodeMsg.join('');
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
