// Desafio 1
function compareTrue(param1,param2) {
  if((param1 === true) && (param2 === true)){
    return true;
  }  else {
    return false;
  }
};

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
};

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
};

// Desafio 4
function concatName(arrayString) {
  return (arrayString[arrayString.length - 1] + ", " + arrayString[0]);  
};

// Desafio 5
function footballPoints(wins , ties) {
  let points = wins*3 + ties;
  return points;
};


// Desafio 6
function highestCount(numbersArray) {
  let max = - Infinity;
  let repeat = 0;
  for (let index of numbersArray){
    if(index>max){
      max = index;
      repeat = 1;
    } else if (index === max){
      repeat += 1;
    }
  }
  return repeat;
};

// Desafio 7
function catAndMouse(mouse ,cat1 , cat2) {
  if(Math.abs(mouse -cat1) < Math.abs(mouse -cat2)){
    return "cat1"
  } else if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
    return "cat2"
  } else {
  return "os gatos trombam e o rato foge"
  }
};

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
