// Desafio 1
function compareTrue(comp1,comp2) {
  if (comp1===true && comp2 ===true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base*height)/2)
}

// Desafio 3
function splitSentence(arr) {
  return arr.split (" ")
}

// Desafio 4
function concatName(string) {
 return string[string.length -1]+", "+ string [0]; 
} 


// Desafio 5
function footballPoints(wins,ties) {
  return wins*3 + ties
}

// Desafio 6
// Escreva uma função chamada highestCount que, ao receber uma array de números, 
// retorne a quantidade de vezes que o maior deles se repete.
// Exemplo: caso o parâmetro de highestCount seja uma array com valores 
// [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 
// (maior número do array) se repete.
// [9, 1, 2, 3, 9, 5, 7]
function highestCount(param1) {
  let maiorNumero =param1[0];
  let qntsRepete = 0;

for (let i = 1; i  <param1.length; i+=1) {
  if (param1[i]>maiorNumero) {
    maiorNumero = param1[i]
  }
}
for (let index = 0; index < param1.length; index+=1){
  if (param1[index] === maiorNumero) {
    qntsRepete += 1;
  }
}
return qntsRepete;
}
console.log(highestCount([9, 1, 9, 3, 9, 5, 7]))

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
