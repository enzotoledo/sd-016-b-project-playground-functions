// Desafio 10
function techList(arrayTechs, name) {
  let arrayObjects = [];
  let nameParameter = name;
  arrayTechs.sort();
  if (arrayTechs.length === 0) {
    arrayObjects = 'Vazio!';
  } else {
    for (let index = 0; index < arrayTechs.length; index += 1) {
      arrayObjects.push({
        tech: arrayTechs[index],
        name: nameParameter,
      });
    }
  }
  return arrayObjects;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let phoneNumber = '';
  let repeatTest = 0;
  let repeatTest2 = false;
  let numbersIr = false;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index2] === arrayNumbers[index]) {
        repeatTest += 1;
      }
    }

    if (repeatTest >= 3) {
      repeatTest2 = true;
    }

    if ((arrayNumbers[index] < 0) || (arrayNumbers[index] > 9)) {
      numbersIr = true;
    }

    repeatTest = 0;
  }

  if (arrayNumbers.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if ((repeatTest2 === true) || (numbersIr === true)) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let DDD = ('(' + arrayNumbers[0] + arrayNumbers[1] + ')');
    let fiveNumbers = ' ' + arrayNumbers[2] + arrayNumbers[3] + arrayNumbers[4] + arrayNumbers[5] + arrayNumbers[6];
    let fourNumbers = '-' + arrayNumbers[7] + arrayNumbers[8] + arrayNumbers[9] + arrayNumbers[10];
    phoneNumber = DDD + fiveNumbers + fourNumbers;
  }

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
