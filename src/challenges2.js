// Desafio 10
function techList(technologies, name) {
  let technologiesList = technologies.sort();
  let objectsList = [];

  if (technologiesList.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < technologiesList.length; index += 1) {
    objectsList[index] = {
      tech: technologiesList[index],
      name,
    };
  }
  return objectsList;
}

// Desafio 11
function elementIsRepeated(numbers) {
  let counter = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    for (let element of numbers) {
      if (element === numbers[index]) {
        counter += 1;
        if (counter >= 3) {
          return true;
        }
      }
    }
    counter = 0;
  }
}
function elementIsOutOfRange(numbers) {
  for (let element of numbers) {
    if (element < 0 || element > 9) {
      return true;
    }
  }
}
function sizeIsOutOfRang(numbers) {
  if (numbers.length !== 11) {
    return true;
  }
}
function putPhoneNumberElements(numbers) {
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}
function generatePhoneNumber(numbers) {
  if (sizeIsOutOfRang(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (elementIsRepeated(numbers) || elementIsOutOfRange(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = putPhoneNumberElements(numbers);

  return phoneNumber;
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
