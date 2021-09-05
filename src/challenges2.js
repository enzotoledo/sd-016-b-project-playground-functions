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
function sizeIsOutOfRange(numbers) {
  if (numbers.length !== 11) {
    return true;
  }
}
function putPhoneNumberElements(numbers) {
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}
function generatePhoneNumber(numbers) {
  if (sizeIsOutOfRange(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (elementIsRepeated(numbers) || elementIsOutOfRange(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = putPhoneNumberElements(numbers);

  return phoneNumber;
}

// Desafio 12
function sideCheck(side, oppositeSide1, oppositeSide2) {
  let sum = oppositeSide1 + oppositeSide2;
  let difference = Math.abs(oppositeSide1 - oppositeSide2);

  if (side < sum && side > difference) {
    return true;
  }

  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  if (sideCheck(lineA, lineB, lineC) && sideCheck(lineB, lineA, lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function convertArrayOfStringsIntoArrayOfNumber(arrayOfStrings) {
  let arrayOfNumbers = [];

  for (let index = 0; index < arrayOfStrings.length; index += 1) {
    arrayOfNumbers[index] = parseInt(arrayOfStrings[index], 10);
  }

  return arrayOfNumbers;
}
function sumAllNumbersFromArray(arrayOfNumbers) {
  let sum = 0;

  for (let element of arrayOfNumbers) {
    sum += element;
  }

  return sum;
}
function hydrate(sentence) {
  let sentenceNumbers = sentence.match(/[0-9]/g);
  let numbersOfDrinks = convertArrayOfStringsIntoArrayOfNumber(sentenceNumbers);
  let cupOfWater = sumAllNumbersFromArray(numbersOfDrinks);

  if (cupOfWater > 1) {
    return `${cupOfWater} copos de água`;
  }

  return `${cupOfWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
