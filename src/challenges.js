// Desafio 1
function compareTrue(value1, value2) {
  if(value1 && value2) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitedString = string.split(' ');
  return splitedString;
}

// Desafio 4
function concatName(stringArray) {
  let last = stringArray[stringArray.length - 1];
  let first = stringArray[0];
  let concatenated = `${last}, ${first}`;
  return concatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let repeatCount = 0;

  for (let index of numberArray) {
    if(index > highestNumber){
      highestNumber = index;
    }
  }
  for (let index2 of numberArray) {
    if(index2 === highestNumber){
      repeatCount += 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1Rat = Math.abs(mouse - cat1);
  let distCat2Rat = Math.abs(mouse - cat2);

  if (distCat1Rat < distCat2Rat) {
    return 'cat1';
  }
  else if (distCat1Rat > distCat2Rat) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let emptyArray = [];
  for(let index in array){
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
      emptyArray.push('fizzBuzz');
    }
    else if (array[index] % 3 === 0 ) {
      emptyArray.push('fizz');
    }
    else if (array[index] % 5 ===0) {
      emptyArray.push('buzz');
    }
    else{
      emptyArray.push('bug!');
    }
  }
  return emptyArray;
}

// Desafio 9
function encode(string) {
  let emptyArray = [];

  for(let index in string){
    if(string[index] === 'a'){
      emptyArray.push('1');
    }
    else if(string[index] === 'e'){
      emptyArray.push('2');
    }
    else if(string[index]=== 'i'){
      emptyArray.push('3');
    }
    else if(string[index] === 'o'){
      emptyArray.push('4');
    }
    else if(string[index] === 'u'){
      emptyArray.push('5');
    }
    else{
      emptyArray.push(string[index]);
    }
  }
  return emptyArray.join("");
}

function decode(string){
  let emptyArray = [];

  for(let index in string){
    if(string[index] === '1'){
      emptyArray.push('a');
    }
    else if(string[index] === '2'){
      emptyArray.push('e');
    }
    else if(string[index]=== '3'){
      emptyArray.push('i');
    }
    else if(string[index] === '4'){
      emptyArray.push('o');
    }
    else if(string[index] === '5'){
      emptyArray.push('u');
    }
    else{
      emptyArray.push(string[index]);
    }
  }
  return emptyArray.join("");
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
