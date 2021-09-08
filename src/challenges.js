// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let separate = phrase.split(' ');
  return separate;
}

// Desafio 4
function concatName(array) {
  let lastName = array.pop();
  let firstName = array.shift();
  let concatAll = (lastName) + (', ') + (firstName);

  return concatAll;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;

  return result;
}

// Desafio 6
function highestCount(arrNumbers) {
  let higherNumber = arrNumbers[0];
  let timesRepeat = 0;

  for (let key in arrNumbers) {
    if (arrNumbers[key] > higherNumber) {
      higherNumber = arrNumbers[key];
    }
  }
  for (let key in arrNumbers) {
    if (arrNumbers[key] === higherNumber) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let param1 = 'cat1';
  let param2 = 'cat2';
  let param3 = 'Os gatos trombam e o rato foge';

  if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    return param1;
  } else if (Math.abs(cat2 - mouse) < (cat1 - mouse)) {
    return param2;
  }
  return param3;
}

// Desafio 8
function fizzBuzz(arr) {
  let Emptarr = [];
  for (let index in arr) {
    if ((arr[index] % 5 === 0) && (arr[index] % 3 === 0)) {
      Emptarr.push('fizzBuzz');
    } else if (arr[index] % 5 === 0) {
      Emptarr.push('buzz');
    } else if (arr[index] % 3 === 0) {
      Emptarr.push('fizz');
    } else {
      Emptarr.push('bug!');
    }
  }
  return Emptarr;
}

// Desafio 9
function encode(strg) {
  let result = "";
  for (let key in strg) {
    if (strg[key] === "a"){
      result += 1;
    } else if (strg[key] === "e") {
      result += 2;
    } else if (strg[key] === "i") {
      result += 3;
    } else if (strg[key] === "o") {
      result += 4;
    } else if (strg[key] === "u") {
      result += 5;
    } else {
    result += strg[key];
    }
  }
  return result;
}

function decode(strg2) {
   let change2 = "";
  for (let key in strg2) {
    if (strg2[key] === "1") {
      change2 += "a";
    } else if (strg2[key] === "2") {
      change2 += "e";
    } else if (strg2[key] === "3") {
      change2 += "i";
    } else if (strg2[key] === "4") {
      change2 += "o";
    } else if (strg2[key] === "5") {
      change2 += "u";
    } else {
    change2 += strg2[key];
    }
  }
  return change2;
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
