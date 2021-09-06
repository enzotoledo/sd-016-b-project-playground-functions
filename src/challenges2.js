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
function count(numbers, number) {
  let counter = 0;

  for (let element of numbers) {
    if (element === number) {
      counter += 1;
    }
    if (counter >= 3) {
      return true;
    }
  }
}
function elementIsRepeated(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (count(numbers, numbers[index])) {
      return true;
    }
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
function concatPhoneNumberElements(numbers) {
  let ddd = `(${numbers[0]}${numbers[1]}) `;
  let firstHalf = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  let secondHalf = `-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;

  return ddd.concat(firstHalf, secondHalf);
}
function generatePhoneNumber(numbers) {
  if (sizeIsOutOfRange(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (elementIsRepeated(numbers) || elementIsOutOfRange(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = concatPhoneNumberElements(numbers);

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
  let sideA = sideCheck(lineA, lineB, lineC);
  let sideB = sideCheck(lineB, lineA, lineC);
  let sideC = sideCheck(lineC, lineA, lineB);

  if (sideA && sideB && sideC) {
    return true;
  }
  return false;
}

// Desafio 13
function convertArrayOfStringsIntoArrayOfNumbers(arrayOfStrings) {
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
  let numbersFromSentence = sentence.match(/[0-9]/g);
  let numbersOfDrinks = convertArrayOfStringsIntoArrayOfNumbers(numbersFromSentence);
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
