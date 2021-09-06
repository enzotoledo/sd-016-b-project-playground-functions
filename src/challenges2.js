// Desafio 10
function techList(itemsTech, name) {
  // seu código aqui
  let arrayTech = [];
  let arraySort = itemsTech.sort();
  if (itemsTech.length === 0) {
    return 'Vazio!';
  }
  for (let item of arraySort) {
    let objTech = {
      tech: item,
      name,
    };
    arrayTech.push(objTech);
  }
  return arrayTech;
}

function checkPhoneNumber(numberReference, arrayPhone) {
  let count = 0;
  for (let number of arrayPhone) {
    if (number === numberReference) {
      count += 1;
    }
    if (count >= 3) {
      break;
    }
  }
  return count;
}

function validPhoneNumber(arrayPhone) {
  let repeatNumber;
  let validPhone = true;
  for (let number of arrayPhone) {
    repeatNumber = checkPhoneNumber(number, arrayPhone);
    if (number < 0 || number > 9 || repeatNumber >= 3) {
      validPhone = false;
    }
  }
  return validPhone;
}

// Desafio 11
function generatePhoneNumber(arrPhone) {
  // seu código aqui
  if (arrPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let telephoneNumber = validPhoneNumber(arrPhone);
  if (telephoneNumber) {
    let prefix = arrPhone.slice(0, 2);
    let phonePart1 = arrPhone.slice(2, 7);
    let phonePart2 = arrPhone.slice(7, 11);
    let concatPhoneNumber = `(${prefix.join('')}) ${phonePart1.join('')}-${phonePart2.join('')}`;
    return concatPhoneNumber;
  }
  return 'não é possível gerar um número de telefone com esses valores';
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
};
