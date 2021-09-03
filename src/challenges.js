// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let phraseCharactersArray = phrase.split('');
  let wordsArray = [];
  let word = '';
  for (let index = 0; index <= phraseCharactersArray.length; index += 1) {
    if (phraseCharactersArray[index] === ' ' || index === phraseCharactersArray.length) {
      wordsArray.push(word);
      word = '';
    } else {
      word += phraseCharactersArray[index];
    }
  }
  return wordsArray;
}

// Desafio 4
function concatName(stringsArray) {
  let firstItem = stringsArray.shift();
  let lastItem = stringsArray.pop();
  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
    if (numbers[secondIndex] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(numbers) {
  let results = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      results[index] = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0) {
      results[index] = 'fizz';
    } else if (numbers[index] % 5 === 0) {
      results[index] = 'buzz';
    } else {
      results[index] = 'bug!';
    }
  }
  return results;
}

// Desafio 9
function encode(sentence) {
  let phrase = sentence;
  phrase = phrase.replace(/a/g, '1');
  phrase = phrase.replace(/e/g, '2');
  phrase = phrase.replace(/i/g, '3');
  phrase = phrase.replace(/o/g, '4');
  phrase = phrase.replace(/u/g, '5');
  return phrase;
}
function decode(sentence) {
  let phrase = sentence;
  phrase = phrase.replace(/1/g, 'a');
  phrase = phrase.replace(/2/g, 'e');
  phrase = phrase.replace(/3/g, 'i');
  phrase = phrase.replace(/4/g, 'o');
  phrase = phrase.replace(/5/g, 'u');
  return phrase;
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
