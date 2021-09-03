// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;
  return area;
}

// Desafio 3
function splitSentence(originalSentence) {
  let splittedSentence = originalSentence.split(' ');
  return splittedSentence;
}

// Desafio 4
function concatName(exmpArray) {
  let stringFromArray = exmpArray[exmpArray.length -1] + ", " + exmpArray[0];
  return stringFromArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winpoints = 3;
  let tiepoints = 1;
  let totalpoints = (wins * winpoints) + (ties * tiepoints);
  return totalpoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumb = Math.max(...numbers);
  let repeated = 0;
  for (let number of numbers) {
    if (number === highestNumb) {
      repeated += 1;
    }
  }
  return repeated;
  }


// Desafio 7
function catAndMouse(mouse, c1, c2) {
  if (Math.abs(c1 - mouse) < Math.abs(c2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(c1 - mouse) > Math.abs(c2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
  }

// Desafio 8
function fizzBuzz(numbersArray) {
  let wordsArray = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 == 0 && numbersArray[index] % 5 == 0) {
    wordsArray.push("fizzBuzz");
    } else if (numbersArray[index] % 5 == 0) {
      wordsArray.push("buzz");
    } else if (numbersArray[index] % 3 == 0) {
        wordsArray.push("fizz");
    } else {
      wordsArray.push("bug!");
    }
    return wordsArray;
  }
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
