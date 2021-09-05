// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let objects = [];
  for (let tech of techs.sort()) {
    objects.push({
      tech, name,
    });
  }
  return objects;
}

// Desafio 11
function validateArrayNumbers(array) {
  let countNumber = 0;
  let countRepeatedNumbers = 0;
  for (let num in array) {
    let checkNumber = array[num];
    for (let num2 in array) {
      if (checkNumber === array[num2]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeatedNumbers) {
      countRepeatedNumbers = countNumber;
    }
    countNumber = 0;
  }
  return countRepeatedNumbers;
}

function generatePhoneNumber(array) {
  let phone = '(';
  let hasRepeatedNumbers = validateArrayNumbers(array);
  if (hasRepeatedNumbers >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length - 9; index += 1) {
    if (array[index] < 0 || array[index] > 10) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phone += array[index];
  }
  phone += ') ';
  for (let index = 2; index < array.length - 4; index += 1) {
    if (array[index] < 0 || array[index] > 10) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phone += array[index];
  }
  phone += '-';
  for (let index = 7; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 10) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phone += array[index];
  }
  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if (((lineB + lineC) > lineA) && ((lineA + lineC) > lineB) && ((lineA + lineB) > lineC)) {
    isTriangle = true;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(string) {
  let findDrinks = /\d+/g;
  let drinks = string.match(findDrinks);
  let sum = 0;
  for (let key of drinks) {
    let result = parseInt(key, 10);
    sum += result;
  }
  let response = sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
  return response;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
