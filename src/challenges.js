// Desafio 1
function compareTrue(value1,value2) {
  if((value1 == true) && (value2 == true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,heigth) {
  return (base * heigth)/2;
}

// Desafio 3
function splitSentence(string) {
  let separa = string.split(" ");
  return separa
}

// Desafio 4
function concatName(arr) {
  for(let i= 0 ; i<4 ; i+=1){
    let first = arr[0];
    let last = arr[arr.length-1] + ", ";
    let firstLast = (last + first)
    console.log(firstLast)
    return firstLast
  }
}

// Desafio 5
function footballPoints (wins,ties) {
let winsTies = (wins * 3) + ties;
return winsTies
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = -Infinity;
  let counter = 0;
    for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];  
   }
}
  for (j=0; j<numbers.length; j+= 1){
    if(numbers[j] === highestNumber){
      counter++
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
