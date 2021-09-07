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
function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index++)
  if (arrayNumbers[index] % 15 == 0)
  arrayNumbers[index] = "fizzBuzz"
  else if (arrayNumbers[index] % 3 == 0)
  arrayNumbers[index] = "fizz"
  else if (arrayNumbers[index] % 5 == 0)
  arrayNumbers[index] = "buzz"
  else 
  arrayNumbers[index] = "bug!"
  return arrayNumbers
  // seu código aqui
}

// Desafio 9
function encode(string) {
  let encoded = ""
  for (let index = 0; index < string.length; index++) {
    if (string[index] === "a")
    encoded += "1"
    else if (string[index] === "e")
    encoded += "2"
    else if (string[index] === "i")
    encoded += "3"
    else if (string[index] === "o")
    encoded += "4"
    else if (string[index] === "u")
    encoded += "5"
    else encoded += string[index]}
  return encoded;  
  // seu código aqui
}
function decode(string1) {
  let decoded = ""
  for (let index = 0; index < string1.length; index++) {
    if (string1[index] === "1")
    decoded += "a"
    else if (string1[index] === "2")
    decoded += "e"
    else if (string1[index] === "3")
    decoded += "i"
    else if (string1[index] === "4")
    decoded += "o"
    else if (string1[index] === "5")
    decoded += "u"
    else decoded += string1[index]}
  return decoded;
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
