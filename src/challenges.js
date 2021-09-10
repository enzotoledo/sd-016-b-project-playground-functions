// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let resp = [];
  resp[1] = ' ' + arr[0];
  resp[0] = arr.reverse()[0];
  return resp.join(',');
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highest = -Infinity;
  let theFinalCountUp = 0;
  for (let i in array) {
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  for (let i in array) {
    if (array[i] === highest) {
      theFinalCountUp += 1;
    }
  }
  return theFinalCountUp;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  if (cat1 + 1 === cat2 || cat1 - 1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse > cat2 - mouse) {
    return 'cat1';
  } else if (cat2 - mouse > cat1 - mouse) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(a) {
  // seu código aqui
  aF = [];
  for (let i in a) {
    if (a[i] % 3 !== 0 && a[i] % 5 !== 0) {
      aF.push('bug!');
    }
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      aF.push('fizzBuzz');
    } else if (a[i] % 3 === 0) {
      aF.push('fizz');
    } else if (a[i] % 5 === 0) {
      aF.push('buzz');
    }
  }
  return aF;
}

// Desafio 9
function encode(msg) {
  // seu código aqui
  let boxer = [];
  let switcher = [];
  for (let index = 0; index < msg.length; index++) {
    boxer.push(msg[index])
  }
  for (let i in boxer) {
    if (boxer[i] === 'a') {
      switcher.push('1');
    } else if (boxer[i] === 'e') {
      switcher.push('2');
    } else if (boxer[i] === 'i') {
      switcher.push('3');
    } else if (boxer[i] === 'o') {
      switcher.push('4');
    } else if (boxer[i] === 'u') {
      switcher.push('5');
    } else {
      switcher.push(boxer[i])
    }

  }
  return switcher.join('');
}
function decode(msg) {
  // seu código aqui
  let boxer = [];
  let switcher = [];
  for (let index = 0; index < msg.length; index++) {
    boxer.push(msg[index])
  }
  for (let i in boxer) {
    if (boxer[i] === '1') {
      switcher.push('a');
    } else if (boxer[i] === '2') {
      switcher.push('e');
    } else if (boxer[i] === '3') {
      switcher.push('i');
    } else if (boxer[i] === '4') {
      switcher.push('o');
    } else if (boxer[i] === '5') {
      switcher.push('u');
    } else {
      switcher.push(boxer[i])
    }

  }
  return switcher.join('');
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
