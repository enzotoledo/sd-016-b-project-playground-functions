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
function hydrate(text) {
//  let regexp = /\d+/g;

//  let matchesArray = text.match(regexp).map(Number);

//  let cupsWatter = 0;

//  let numberCupsWatter = 0;

//  for (let index = 0; index < matchesArray.length; index += 1) {
//    cupsWatter += matchesArray[index];
//  }
//  if (cupsWatter > 1) {
//    numberCupsWatter = cupsWatter + ' copos de água';
//  } else {
//    numberCupsWatter = '1 copo de água';
//  }

//  return numberCupsWatter;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
