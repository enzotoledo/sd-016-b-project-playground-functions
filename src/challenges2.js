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
function testRepeatIncrement(arrayNumbers, number) {
  let repeatTest = 0;

  for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
    if (arrayNumbers[index2] === number) {
      repeatTest += 1;
    }
  }

  return repeatTest;
}

function repeatTestFunction(arrayNumbers) {
  let repeatTest = 0;

  let repeatTest2 = false;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    repeatTest = testRepeatIncrement(arrayNumbers, arrayNumbers[index]);

    if (repeatTest >= 3) {
      repeatTest2 = true;
    }

    repeatTest = 0;
  }

  return repeatTest2;
}

function numbersIrFunction(arrayNumbers) {
  let numbersIr = false;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if ((arrayNumbers[index] < 0) || (arrayNumbers[index] > 9)) {
      numbersIr = true;
    }
  }

  return numbersIr;
}

function organizenumber(Numbers) {
  let parleft = '(';
  let parRight = ')';
  let space = ' ';
  let trace = '-';
  let DDD = (parleft + Numbers[0] + Numbers[1] + parRight);
  let fiveNumbers = space + Numbers[2] + Numbers[3] + Numbers[4] + Numbers[5] + Numbers[6];
  let fourNumbers = trace + Numbers[7] + Numbers[8] + Numbers[9] + Numbers[10];

  return DDD + fiveNumbers + fourNumbers;
}

function generatePhoneNumber(arrayNumbers) {
  let phoneNumber = '';
  let repeatTest = repeatTestFunction(arrayNumbers);
  let numbersIr = numbersIrFunction(arrayNumbers);
  if (arrayNumbers.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if ((repeatTest === true) || (numbersIr === true)) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    phoneNumber = organizenumber(arrayNumbers);
  }

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, LineC) {
  let arrayTriangle = [lineA, lineB, LineC, lineA, lineB, LineC];

  let lineTriangleCheck = true;

  let sumLines = 0;

  let diffLines = 0;

  for (let index = 0; index < 4; index += 1) {
    sumLines = arrayTriangle[index + 1] + arrayTriangle[index + 2];

    diffLines = Math.abs(arrayTriangle[index + 1] - arrayTriangle[index + 2]);

    if ((arrayTriangle[index] >= sumLines) || (arrayTriangle[index] <= diffLines)) {
      lineTriangleCheck = false;
    }
  }
  return lineTriangleCheck;
}

// Desafio 13
function hydrate(numberDrinks) {
  let matchesArray = numberDrinks.match(/\d+/g).map(Number);

  let cupsWatter = 0;

  let numberCupsWatter = 0;

  let cupsWatterString = ' copos de água';

  for (let index = 0; index < matchesArray.length; index += 1) {
    cupsWatter += matchesArray[index];
  }
  if (cupsWatter > 1) {
    numberCupsWatter = cupsWatter + cupsWatterString;
  } else {
    numberCupsWatter = '1 copo de água';
  }

  return numberCupsWatter;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
