// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true)
  return true
  else
  return false
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2

  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ")
  return array
  
  // seu código aqui
}

// Desafio 4
function concatName(array1) {
let last = array1[array1.length - 1]
let first = array1[0]
let result = (last + ", " + first)
return result

  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3
  let tiePoints = ties * 1
  return winPoints + tiePoints
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0]
  let highestNumberCount = 0
  
  for (let index = 0; index < numbers.length; index+=1) {
   if (highestNumber < numbers[index]) {
   highestNumber = numbers[index] }
  }
 
   for (let index = 0; index < numbers.length; index+=1) {
   if (highestNumber === numbers[index]) {
   highestNumberCount +=1 }
   }
   return highestNumberCount



  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0
  let distanceCat2 = 0
  if (mouse > cat1)
   distanceCat1 = mouse - cat1
   else distanceCat1 = cat1 - mouse
  if (mouse > cat2)
   distanceCat2 = mouse - cat2
   else distanceCat2 = cat2 - mouse
   if (distanceCat1 < distanceCat2)
   return "cat1"
   if (distanceCat2 < distanceCat1)
   return "cat2"
   else 
   return "os gatos trombam e o rato foge"
   
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
