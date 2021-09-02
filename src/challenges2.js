// Desafio 10
function techList(tech, name) {
  const objectsList = [];

  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();

  for (let index = 0; index < tech.length; index += 1) {
    objectsList.push({ tech: tech[index], name: name });
  }
  return objectsList;
}

// Desafio 11


function generatePhoneNumber(phoneNumber) {
  let phonePattern = '';
  let counter = 0;

  if (phoneNumber.length !== 12) {
    phonePattern = 'Array com tamanho incorreto.';
  }
    for (let index = 0; index < phoneNumber.length; index += 1) {
      if (phoneNumber[index] > 9 || phoneNumber[index] < 0){
        phonePattern = 'não é possível gerar um número de telefone com esses valores';
      }
      for (let indexSecondLoop = 1; indexSecondLoop < phoneNumber.length;indexSecondLoop += 1) {
        for (let indexThirdLoop = 2; indexThirdLoop < phoneNumber.length; indexThirdLoop += 1) {
          if (phoneNumber[index] === phoneNumber[indexSecondLoop] === phoneNumber[indexThirdLoop]) {
            counter += 1;
            if (conter > 3) {
              phonePattern = 'não é possível gerar um número de telefone com esses valores';
          }
          
          else {
            phonePattern = `(${phoneNumber.slice(0, 3)} 
            ${phoneNumber.slice(3, 8)}-${phoneNumber.slice(8, 12)})`;}
        }
      }
    }
  return phonePattern;
  }
}

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
}