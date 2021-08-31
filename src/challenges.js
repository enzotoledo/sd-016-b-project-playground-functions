const code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

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

  negativeControl ? arr : arr.sort();

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
  const cat1Win = mouse - cat1 < 0;
  const cat2Win = mouse - cat2 < 0;

  cat1Win ? cat1Space = (mouse - cat1) * -1 : cat1Space = (mouse - cat1);
  cat2Win ? cat2Space = (mouse - cat2) * -1 : cat2Space = (mouse - cat2);

  console.log(cat1Space, cat2Space);
  if (cat1Space < cat2Space) {
    return 'cat1';
  } else if (cat2Space < cat1Space) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  const strArray = [];

  for (let i of arr) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArray.push('fizzBuzz');
    } else if (i % 3 === 0) {
      strArray.push('fizz');
    } else if (i % 5 === 0) {
      strArray.push('buzz');
    } else {
      strArray.push('bug!');
    }
  }
  return strArray;
}

// Desafio 9
function encode(str) {
  let encodeMsg = str.split('');

  for (let letter in encodeMsg) {
    for (let key in code) {
      if (encodeMsg[letter] === key) {
        encodeMsg[letter] = code[key];
      }
    }
  }
  return encodeMsg.join('');
}
function decode(str) {
  let decodeMsg = str.split('');

  for (let letter in decodeMsg) {
    for (let key in code) {
      if (decodeMsg[letter] == code[key]) {
        decodeMsg[letter] = key;
      }
    }
  }
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
