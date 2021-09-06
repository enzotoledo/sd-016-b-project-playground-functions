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

function countingSencondLoop(number, secondNumber) {
  let counter = 0;
  for (let indexSecondLoop = 0; indexSecondLoop < number.length; indexSecondLoop += 1) {
    if (secondNumber === number[indexSecondLoop]) {
      counter += 1;
    }
  }
  return counter;
}

function counting(number) {
  for (let index = 0; index < number.length; index += 1) {
    let counter = countingSencondLoop(number, number[index]);
    if (counter >= 3) return true;
  }
  return false;
}

function turningNumbers(number) {
  let newNumber = '';

  newNumber += `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7, number.length)}`;
  newNumber = newNumber.replace(/,/g, '');

  return newNumber;
}

function verifyWrongNumbers(number) {
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] > 9 || number[index] < 0) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (counting(phoneNumber) || verifyWrongNumbers(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return turningNumbers(phoneNumber);
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
function hydrate(drinkString) {
  let counter = 0;
  let numberOfDrinks = 0;

  for (let index = 0; index < drinkString.length; index += 1) {
    let number = drinkString[index];
    // Use of isNaN is intented to coerce non-numbers to numbers, returning true for anything that coerces to NaN. That why the use !.
    if (!Number.isNaN(parseInt(number, 10))) {
      counter += drinkString[index] - 0;
    }
  }
  if (counter === 1) {
    numberOfDrinks = `${counter} copo de água`;
  } else {
    numberOfDrinks = `${counter} copos de água`;
  }
  return numberOfDrinks;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
