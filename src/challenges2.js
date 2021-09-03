// Desafio 10
function techList(tech, title) {
  const objectsList = [];

  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();

  for (let index = 0; index < tech.length; index += 1) {
    objectsList.push({ tech: tech[index], name: title });
  }
  return objectsList;
}

function counting(number) {
  let counter = 0;
  for (let index = 0; index < number.length; index += 1) {
    for (let indexSecondLoop = 0; indexSecondLoop < number.length; indexSecondLoop += 1) {
      counter = 1;
      if (number[index] === number[indexSecondLoop]) {
        counter += 1;
      }
    }
  }
  return counter;
}

function turningNumbers(number) {
  let newNumber = '';

  newNumber += `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7, 12)}`;

  newNumber = newNumber.replace(/,/g, '');

  return newNumber;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (counting(phoneNumber) >= 3 || phoneNumber[index] > 9 || phoneNumber[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
      return turningNumbers(phoneNumber);
    }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumBC = lineB + lineC;
  let subtractionBC = Math.abs(lineB - lineC);

  if (sumBC > lineA && subtractionBC < lineA) {
    return true;
  }
  return false;
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
