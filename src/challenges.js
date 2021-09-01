// Desafio 1
function compareTrue(numberOne, numberTwo) {
  if(numberOne === true && numberTwo === true) { 
    return true;
  } else {
    return false;
  }  
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(frase) {
  let arraySplit = frase.split(' ');
  return arraySplit;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  let resultado =  ultimoItem + ', ' + primeiroItem;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contaMaior = 0;
  for (let index in array) {
    if(array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index in array) {
    if(array[index] === maior) {
      contaMaior += 1;
    }
  }  
  return contaMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distGatoUm = mouse + cat1;
  let distGatoDois = mouse + cat2;
  if(distGatoUm < distGatoDois) { 
    return 'cat1';
  } else if (distGatoDois < distGatoUm) {
    return 'cat2';
  } else if (distGatoUm === distGatoDois){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index in array) { 
    if (array[index] % 3 === 0) {
      arrayFizzBuzz[index] = 'fizz';
    }
    if (array[index] % 5 === 0) {
      arrayFizzBuzz[index] = 'buzz';
    }
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz[index] = 'fizzBuzz';
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      arrayFizzBuzz[index] = 'bug!';
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(palavras) {
  let word = palavras.split('');
  for (let index in word) { 
    if (word[index] === 'a') {
      word[index] = 1;
    } else if (word[index] === 'e') {
      word[index] = 2;
    } else if (word[index] === 'i') {
      word[index] = 3;
    } else if (word[index] === 'o') {
      word[index] = 4;
    } else if (word[index] === 'u') {
      word[index] = 5;
    }
  }
  return word.join('');    
}

function decode(palavrasTwo) {
  let wordTwo = palavrasTwo.split('');
  for (let index in wordTwo) {
    if (wordTwo[index] === '1') {
      wordTwo[index] = 'a';
    } else if (wordTwo[index] === '2') {
      wordTwo[index] = 'e';
    } else if (wordTwo[index] === '3') {
      wordTwo[index] = 'i';
    } else if (wordTwo[index] === '4') {
      wordTwo[index] = 'o';
    } else if (wordTwo[index] === '5') {
      wordTwo[index] = 'u';
    }
  }
  return wordTwo.join('');
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
