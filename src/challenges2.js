// Desafio 10
function techList(learn, name) {
  // seu código aqui
  learn = learn.sort();
  let array = [];
  if (learn.length === 0) {
    return "Vazio!";
  }
  for (i=0; i < learn.length; i += 1) {
  let NomeTech = {
    tech: learn[i],
    name: name
  } ;
  array.push(NomeTech);
}
  return array;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
let contador = [0,0,0,0,0,0,0,0,0,0];
  if (numbers.length !== 11) {
   return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] >9 || numbers[i] <0) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    contador[numbers[i]]+=1;
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (contador[i] > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let ddd = "(" + numbers.slice(0,2).join("") + ")";
  let part1 = numbers.slice(2,7).join("");
  let part2 = numbers.slice(7).join("");
  return ddd + " " + part1 + "-" + part2;
  }
 
//, generatePhoneNumber
 //deverá retornar (12) 34567-8901.

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
