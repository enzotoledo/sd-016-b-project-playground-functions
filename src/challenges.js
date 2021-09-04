// Desafio 1
function compareTrue(value1, value2) {
  let result = 0;
  if ((value1 == true) && (value2 == true)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let array = 0;
  array = string.split(" ");
  return array;
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {
  let result = "";
  lastWord = array[array.length - 1];
  firstWord = array[0];
  result = lastWord + "," + " " + firstWord;
  return result;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pointsScored = 0;
  pointsScored = (wins * 3) + (ties * 1);
  return pointsScored;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayInt) {
  let bigger = arrayInt[0];
  for (let index = 1; index < arrayInt.length; index += 1) {
    if (bigger < arrayInt[index]) {
      bigger = arrayInt[index];
    }
  }
  let amount = 0;
  for (let index = 0; index < arrayInt.length; index += 1) {
    if (bigger === arrayInt[index]) {
      amount += 1;
    }
  }
  return amount;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(0, 4, 4));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      result.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      result.push("fizz");
    } else if (array[index] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(str) {
  let newStr = "";
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === "a") {
      newStr += "1";
    } else if (str[index] === "e") {
      newStr += "2";
    } else if (str[index] === "i") {
      newStr += "3";
    } else if (str[index] === "o") {
      newStr += "4";
    } else if (str[index] === "u") {
      newStr += "5";
    } else {
      newStr += str[index];
    }
  }
  return newStr;
}
console.log(encode("hi there!"));

function decode(str) {
  let newStr2 = "";
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] ===  "1") {
      newStr2 += "a";
    } else if (str[index] === "2") {
      newStr2 += "e";
    } else if (str[index] === "3") {
      newStr2 += "i";
    } else if (str[index] === "4") {
      newStr2 += "o";
    } else if (str[index] === "5") {
      newStr2 += "u";
    } else {
      newStr2 += str[index];
    }
  }
  return newStr2;
}
console.log(decode("h3 th2r2!"));

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
