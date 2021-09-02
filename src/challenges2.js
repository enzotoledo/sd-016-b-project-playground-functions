// Desafio 10
function techList(tech, inName) {
  let message = [];
  let orderedTech = tech.sort();
  let finalList = [];
  if (orderedTech.length !== 0) {
    for (let index in orderedTech) {
      let list = {
        name: inName,
        tech: orderedTech[index],
      };
      finalList.push(list);
      message = finalList;
    }
  } else {
    message = 'Vazio!';
  }
  return message;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let part1 = '';
  let part2 = ''; 
  let part3 = '';
  let message;

  // VERIFICAÇÕES

  // Verifica tamanho igual a 11.

  let tamanho = numbers.length === 11;
  if (!tamanho) {
    message = "Array com tamanho incorreto."
    return message; 
  }

  // Verifica números entre 0 e 9.
  let domain = true;
  for (let index = 0; index < numbers.length; index += 1) {
    domain = numbers[index] >= 0 && numbers[index] <= 9;
    if (!domain) {
      domain = false;
      message = "não é possível gerar um número de telefone com esses valores";
      break;
   }
  }

  // Não se repete 3x ou mais.
  let tested = true;
  for (let index = 0; index < numbers.length; index += 1) {
    let numberTested = numbers[index];
    if (!tested) {
     break;
   }
    let count = 0;
    for (let index = 0; index < numbers.length; index += 1) {
     if (numberTested === numbers[index]) {
       count += 1;
     }
      if (count > 2) {
       tested = false;
       message = "não é possível gerar um número de telefone com esses valores"
       break;
      }  
   }
  }

  // PASSOU EM VERIFICAÇÕES - MONTA NÚMERO
   if (tamanho && domain && tested) {
     for (let index = 0; index < 2; index += 1) {
       part1 = part1 + numbers[index];  
     }
     for (let index = 2; index < 7; index += 1) {
       part2 = part2 + numbers[index];  
     }
     for (let index = 7; index < 11; index += 1) {
       part3 = part3 + numbers[index];  
     }
     message = '(' + part1 + ') ' + part2 + '-' + part3; 
   } 
   return message;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
let funcao = generatePhoneNumber(numbers);
console.log(funcao);

// https://github.com/tryber/sd-016-b-project-playground-functions 



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
