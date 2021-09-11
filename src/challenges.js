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
function splitSentence(sentence) {
  let arrayOfWords = sentence.split(' ');
  return arrayOfWords;
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
  /**
  Consultei: O MDN, após buscar no google uma função que retorna o maior valor de uma lista de números
  Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  */
  let highestNumber = Math.max(...numbers);
  let counter = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
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
function dividersTest(numbers, index) {
  if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
    return 'fizzBuzz';
  }
  if (numbers[index] % 3 === 0) {
    return 'fizz';
  }
  if (numbers[index] % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(numbers) {
  let results = [];

  for (let index = 0; index < numbers.length; index += 1) {
    results.push(dividersTest(numbers, index));
  }

  return results;
}

// Desafio 9
function encode(string) {
  let sentence = string;
  /**
  Consultei: O MDN, após pesquisar no google como substituir os valores de uma sting
  Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  */
  sentence = sentence.replace(/a/g, '1');
  sentence = sentence.replace(/e/g, '2');
  sentence = sentence.replace(/i/g, '3');
  sentence = sentence.replace(/o/g, '4');
  sentence = sentence.replace(/u/g, '5');
  return sentence;
}
function decode(string) {
  let sentence = string;
  sentence = sentence.replace(/1/g, 'a');
  sentence = sentence.replace(/2/g, 'e');
  sentence = sentence.replace(/3/g, 'i');
  sentence = sentence.replace(/4/g, 'o');
  sentence = sentence.replace(/5/g, 'u');
  return sentence;
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
