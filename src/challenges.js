// Desafio 1
function compareTrue(x, y) {
  if((x === true) && (y === true)){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(namesArray) {
  let firstName = namesArray[0];
  let lastName = namesArray[namesArray.length - 1]

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
//Ideia da sintaxe 'spread' ('...') tirada de: 
//https://stackoverflow.com/questions/54623431/find-the-biggest-number-in-an-array-by-using-javascript-loops
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function highestCount(numbersArray) {
  let repetitions = 0;
  let highestNumber = Math.max(...numbersArray);
    for (index = 0; index < numbersArray.length; index+=1){
      if (numbersArray[index] === highestNumber){
        repetitions+=1;
      } 
    }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs (cat1 - mouse);
  let distanceCat2 = Math.abs (cat2 - mouse);
  if (distanceCat1 < distanceCat2){
    return 'cat1';
  }
  else if (distanceCat1 > distanceCat2){
    return 'cat2';
  }
  else if (distanceCat1 == distanceCat2){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let result = [];
  for (let numbers of numbersArray){
    if ((numbers % 3 === 0) && (numbers % 5 === 0)){
      result.push('fizzBuzz');
    }
    else if (numbers % 3 === 0){
      result.push('fizz');
    }
    else if (numbers % 5 === 0){
      result.push('buzz');
    }
    else {
      result.push('bug!');
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
