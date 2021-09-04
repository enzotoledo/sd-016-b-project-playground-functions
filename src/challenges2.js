const { getVersion } = require("jest");

// Desafio 10
function techList(array,name) {
  // seu código aqui
}

let tech = ["HTML", "Javascript", "CSS", "Phyton", "React"]
   let resultado = [];

 for (let i=0; i < tech.length; i+=1){
   
}

console.log (resultado)

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui

  // gera as tres partes do numero
  let generatePrefixo = [];
  let generateFirst = [];
  let generateLast = [];


  for (let i = 0; i <= 1; i+=1){
    generatePrefixo.push(numbers[i])
  }

  for (let i = 2; i <= 6; i+=1){
    generateFirst.push(numbers[i])
  }
  
  for (let i = 7; i <= numbers.length - 1; i+=1){
    generateLast.push(numbers[i])
  }

  let prefixo = generatePrefixo.join('');
  let first = generateFirst.join('');
  let last = generateLast.join('');

  let vezesQueRepete = 1;

  for (let i =1; i < numbers.length; i+=1){
    if( numbers[0] == numbers[i]){
      vezesQueRepete+=1
    }
  }
  
  let valores = "";
  for (let i =0; i < numbers.length; i+=1){
    if (numbers[i] < 0 || numbers[i] > 9){
      valores = "não"
    }
  }


  if (numbers.length != 11 ){
    return "Array com tamanho incorreto";
  } else if (valores == "não" || vezesQueRepete >= 3){
    return"não é possível gerar um número de telefone com esses valores";
  } else {
    return "("+prefixo+")"+first+"-"+last
  }

}
//console.log(generatePhoneNumber (numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
