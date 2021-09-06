// Desafio 1
function compareTrue(number1, number2) {
  if ((number1 === true) && (number2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heignt) {
  return (base * heignt) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(words) {
  let end = words[words.length - 1];
  let start = words[0];
  let junction = (end + ', ' + start);
  return junction;

}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(cellPhone) {
  let numbers = 0;
  let bigNumbers = cellPhone[0];
  for (let i = 0; i < cellPhone.length; i += 1) {
    if (cellPhone[i] > bigNumbers) {
      numbers = 0;
      bigNumbers = cellPhone[i];
    }
    if (cellPhone[i] === bigNumbers) {
      numbers += 1;
    }
  }
  return numbers;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrPhrase) {
  let result = [];
  for (let i = 0; i < arrPhrase.length; i++) {
    if((arrPhrase[i] % 3 === 0) && (arrPhrase[i] % 5 === 0)){
      result.push("fizzBuzz");
    }else if (arrPhrase[i] % 3 === 0){
      result.push("fizz");
    }else if (arrPhrase[i] % 5 === 0){
      result.push("buzz");
    }else{
      result.push("bug!")
    }
  } 
  return result;
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
