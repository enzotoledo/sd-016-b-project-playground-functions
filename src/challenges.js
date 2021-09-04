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
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      wordsArray.push("fizzBuzz");
    } else if (numbersArray[index] % 5 === 0) {
      wordsArray.push("buzz");
    } else if (numbersArray[index] % 3 === 0) {
        wordsArray.push("fizz");
    } else {
      wordsArray.push("bug!");
    }
  }
  return wordsArray;
}

// Desafio 9
  function encode(phrase1) {
  for (let index = 0; index < phrase1.length; index += 1) {
    if (phrase1[index] === "a") {
      phrase1 = phrase1.replace("a", 1);
    } else if (phrase1[index] === "e") {
      phrase1 = phrase1.replace("e", 2);
    } else if (phrase1[index] === "i") {
      phrase1 = phrase1.replace("i", 3);
    } else if (phrase1[index] === "o") {
      phrase1 = phrase1.replace("o", 4);
    } else if (phrase1[index] === "u") {
      phrase1 = phrase1.replace("u", 5);
    }
  }
  return phrase1
}

function decode(phrase2) {
  for (let index = 0; index < phrase2.length; index += 1) {
    if (phrase2[index] === "1") {
      phrase2 = phrase2.replace("1", "a");
    } else if (phrase2[index] === "2") {
      phrase2 = phrase2.replace("2", "e");
    } else if (phrase2[index] === "3") {
      phrase2 = phrase2.replace("3", "i");
    } else if (phrase2[index] === "4") {
      phrase2 = phrase2.replace("4", "o");
    } else if (phrase2[index] === "5") {
      phrase2 = phrase2.replace("5", "u");
    }
  }
  return phrase2
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
