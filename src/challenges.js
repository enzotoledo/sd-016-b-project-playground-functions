// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return (true);
  }
  return (false);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return (array = string.split (" "));
}

// Desafio 4
function concatName(name) {
  let first = name [0];
  let last = name [name.length-1];
  return (last + ", " + first);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3)+ ties);
}

// Desafio 6
function highestCount(numbers) {
let max = Math.max (...numbers);
let cont = 0;;
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === max) cont += 1;
}
return (cont)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1)
  let positionCat2 = Math.abs(mouse - cat2)

  if (positionCat1 === positionCat2) {
    return ("os gatos trombam e o rato foge");
  } else if (positionCat1 < positionCat2) {
    return ("cat1");
  } else {
    return ("cat2");
  };
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = []
  for (index = 0 ; index < arrayNumbers.length ; index += 1 ) {
    if (arrayNumbers [index] % 15 == 0 ) {
      result.push ("fizzBuzz");
    } else if (arrayNumbers [index] % 3 == 0 ) {
      result.push ("fizz");
    } else if (arrayNumbers [index] % 5 == 0 ) {
      result.push ("buzz");
    } else {
      result.push ("bug!")
    }
  }
  return result
}

// Desafio 9
function encode(phrase) {
  let codedPhrase = "";
  for (let vowels of phrase){
    switch(vowels) {
      case "a": 
        codedPhrase += "1"
        break;
      case "e": 
        codedPhrase += "2"
        break;
      case "i": 
        codedPhrase += "3"
        break;
      case "o": 
        codedPhrase += "4"
        break;
      case "u": 
        codedPhrase += "5"
        break;
      default:
        codedPhrase += vowels
        break;
    }
  }
return codedPhrase;
}
function decode(phrase) {
  let decodedPhrase = "";
  for (let numbers of phrase){
    switch(numbers) {
      case "1": 
        decodedPhrase += "a"
        break;
      case "2": 
        decodedPhrase += "e"
        break;
      case "3": 
        decodedPhrase += "i"
        break;
      case "4": 
        decodedPhrase += "o"
        break;
      case "5": 
        decodedPhrase += "u"
        break;
      default:
        decodedPhrase += numbers
        break;
    }
  }
return decodedPhrase;
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
