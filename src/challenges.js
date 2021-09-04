// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2

function calcArea(base, height) {
  // seu código aqui
  // let base = ;
  // let height = ;
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let splitString = str.split(' ');
  return splitString;
}

// Desafio 4

function concatName(names) {
  for (let index in names) {
    let primeiroItem = names[0];
    let ultimoItem = names[names.length - 1];
    let concatd = `${ultimoItem}, ${primeiroItem}`;
    return concatd;
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties * 1));
  return points;
}

// Desafio 6

function highestCount(numeros) {
  // let numeros = [9, 1, 2, 3, 9, 5, 7];
  let repeticoes = 0;
  let maiorNumero = 0;

  for (let index in numeros) {
    if (numeros[maiorNumero] < numeros[index]) {
      maiorNumero = index;
    }
  }

  for (let index in numeros) {
    if (numeros[maiorNumero] === numeros[index]) {
      repeticoes += 1;
    }
  }
  // console.log ('repeticoes: '+repeticoes);
  return repeticoes;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let end = '';
  if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
    end = 'cat2';
  } else if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    end = 'cat1';
  } else {
    end = 'os gatos trombam e o rato foge';
  }
  // console.log (end)
  return end;
}

// Desafio 8
function fizzBuzz(numeros) {
  let newArray = [];
  for (let index in numeros) {
    if ((numeros[index] % 3 === 0) && (numeros[index] % 5 === 0)) {
      string = 'fizzBuzz';
    } else if (numeros[index] % 3 === 0) {
      string = 'fizz';
    } else if (numeros[index] % 5 === 0) {
      string = 'buzz';
    } else {
      string = 'bug!';
    }
    newArray.push(string);
    // console.log (newArray);
    // console.log (newArray.push(string));
  }
  return newArray;
}

// Desafio 9
function encode(str) {
  let newArray = [];
  let splitString = str.split('');
  for (let index in splitString) {
    if (splitString[index] === 'a') {
      splitString[index] = 1;
    } else if (splitString[index] === 'e') {
      splitString[index] = 2;
    } else if (splitString[index] === 'i') {
      splitString[index] = 3;
    } else if (splitString[index] === 'o') {
      splitString[index] = 4;
    } else if (splitString[index] === 'u') {
      splitString[index] = 5;
    } else {
    }
    newArray.push(splitString[index]);
  }
  let joinArray = newArray.join('');
  return joinArray;
}
encode('hi there!');

function decode(str) {
  let newArray = [];
  let splitString = str.split('');
  for (let index in splitString) {
    if (splitString[index] === '1') {
      splitString[index] = 'a';
    } else if (splitString[index] === '2') {
      splitString[index] = 'e';
    } else if (splitString[index] === '3') {
      splitString[index] = 'i';
    } else if (splitString[index] === '4') {
      splitString[index] = 'o';
    } else if (splitString[index] === '5') {
      splitString[index] = 'u';
    } else {
    }
    newArray.push(splitString[index]);
  }
  let joinArray = newArray.join('');
  return joinArray;
}
decode('h3 th2r2!');

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
