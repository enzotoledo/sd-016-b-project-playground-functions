// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) {
    return true;
  } else {
    return false;
  }
};
compareTrue(true, true);





// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
calcArea(10, 50);
console.log(calcArea);





// Desafio 3
// const str = "go Trybe!";

function splitSentence(sentence) {
  const myArr = sentence.split(" ");

  return myArr
}
// console.log(splitSentence(str));





// // Desafio 4
const vingadores = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const foguete = ['foguete', 'não', 'tem', 'ré'];
const captain = ['captain', 'my', 'captain'];

function concatName(names) {
  let getFirstName = names[0];
  let getLastName = names[names.length - 1];
  return getLastName + ', ' + getFirstName;
}
console.log(concatName(vingadores));
console.log(concatName(foguete));
console.log(concatName(captain));





// Desafio 5
const WIN_SCORE = 3; // boa pratica - valores chumbados (fixos / hard coded) 
const TIE_SCORE = 1;

function footballPoints(wins, ties) {
  const numberOfPoints = (wins * WIN_SCORE) + (ties * TIE_SCORE);
  return numberOfPoints;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));





// Desafio 6
const firstArr = [9, 1, 2, 3, 9, 5, 7,];

function highestCount(numbers) {
  const biggestNumber = Math.max(...numbers);
  const biggestNumberTimes = numbers.filter(item => item === biggestNumber);
  const quantityBiggestNumber = biggestNumberTimes.length;

  return quantityBiggestNumber;
}
console.log(highestCount(firstArr));





// Desafio 7
// const FIRST_CAT = "cat1"
// const SECOND_CAT = "cat2"
// const RESULT = "os dois gatos se trombam e o rato foge"

function catAndMouse(mouse, cat1, cat2) {
  const firstDistance = mouse - cat1;
  const secondDistance = mouse - cat2;

  if (firstDistance < secondDistance) return "cat1"
  if (secondDistance < firstDistance) return "cat2"

  return "os dois gatos se trombam e o rato foge"
}
console.log(catAndMouse(5, 1, 2));





// Desafio 8
const arrayNumbers = [2, 15, 7, 9, 45];
// const FIZZBUZZ = "fizzBuzz"
// const FIZZ = "fizz"
// const BUZZ = "buzz"
// const BUG = "bug!"


function fizzBuzz(numbers) {
  const finalArrayNumbers = numbers.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) return "fizzBuzz"
    if (item % 3 === 0) return "fizz"
    if (item % 5 === 0) return "buzz"
    if (item % 3 !== 0 && item % 5 !== 0) return "bug!"
  })

  return finalArrayNumbers
}

console.log(fizzBuzz(arrayNumbers));





// Desafio 9
const vogals = {
  a: "1",
  e: "2",
  i: "3",
  o: "4",
  u: "5"
}

function encode(string) {
  const splittedString = string.split("") //separa por caracter (sem espacos entre as aspas)
  const changedLetters = splittedString.map((item) => {
    if (Object.keys(vogals).includes(item)) return vogals[item]

    return item
  })
  const encoded = changedLetters.join("")

  return encoded
}
console.log(encode("hi there!"));

// const vogals = {
//   a: "1",
//   e: "2",
//   i: "3",
//   o: "4",
//   u: "5"
// }

function decode(string) {
  //Recebendo string e separando por caracteres gerando um array
  const splittedString = string.split("")

  // Percorrendo cada item desse novo array (splittedString) e
  // transformando o caracter encriptado
  const changedCharacters = splittedString.map((character) => {
    // Pega os valores do objeto vogals (1, 2, 3, 4, 5) 
    const vogalObjectValues = Object.values(vogals)
    // Pega as chaves/propriedades do objeto vogal (a, e, i, o, u)
    const vogalObjectKeys = Object.keys(vogals)

    // Verifica se o caractere eh um numero ou nao
    // Se nao for um numero ele retorna o proprio caractere
    if (Number.isNaN(character)) return character

    // Se pular o if anterior, significa que o caractere eh um numero
    // entao, verifica se o numero faz parte dos numeros/valores do objeto vogals
    // Se o numero nao esta incluse nos valores do objeto vogals retorna ele proprio
    if (!vogalObjectValues.includes(character)) return character

    // Se chegou ate aqui, significa que eh um valor do objeto vogals
    // entao devo descobrir em qual posicao/index do objeto ele se encontra pra saber qual chave ele representa (a, e, i, o, u)
    const index = vogalObjectValues.findIndex(value => character === value)

    // tranformei as chaves em array e agora acesso a posicao do meu caractere e retornar qual letra ele representa
    return vogalObjectKeys[index]
  })

  //o map gerou um array de strings modificadas
  //agora unifica o array e transforma numa string atraves do metodo join
  const decoded = changedCharacters.join("")
  // retorna a string decodificada
  return decoded

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
