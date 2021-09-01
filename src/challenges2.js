// Desafio 10
function techList(arr, nm) {
  const techArray = arr.sort();
  const finalArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    finalArray.push({ tech: techArray[i], name: nm });
  }

  return (arr.length <= 0) // usei o exemplo da condicional ternaria do Israel, challenges2.js linha 3 até 6. ref: https://github.com/tryber/sd-016-b-project-playground-functions/pull/12/files
    ? 'Vazio!'
    : finalArray;
}

// Desafio 11
function validSize(arr) {
  return arr.length !== 11;
}

function validNumberValues(arr) {
  let invalid = false;
  arr.forEach((number) => {
    if (number < 0 || number > 9) {
      invalid = true;
    }
  });
  return invalid;
}

function keyPair(arr) {
  let phoneObj = {};
  for (let i of arr) {
    phoneObj[i] = 0;
  }

  return phoneObj;
}

function objCompareBuilding(arr, obj) {
  arr.forEach((number) => {
    for (let key in obj) {
      if (number.toString() === key) {
        obj[key] += 1;
      }
    }
  });
  return obj;
}

function phoneBuilder(arr) {
  let rightString = '(';
  for (let n = 0; n < arr.length; n += 1) {
    switch (n) {
    case 1:
      rightString += `${arr[n]})`;
      break;
    case 2:
      rightString += ` ${arr[n]}`;
      break;
    case 6:
      rightString += `${arr[n]}-`;
      break;
    default:
      rightString += arr[n];
    }
  }
  return rightString;
}

function generatePhoneNumber(arr) {
  let finalString = '';
  finalString = phoneBuilder(arr);
  let isRightSize = validSize(arr);
  let isValidNumber = validNumberValues(arr);
  let phoneObj = keyPair(arr);
  let compareObj = objCompareBuilding(arr, phoneObj);

  for (let key in compareObj) {
    if (compareObj[key] >= 3 || isValidNumber) {
      finalString = 'não é possível gerar um número de telefone com esses valores';
    }
  }

  if (isRightSize) {
    finalString = 'Array com tamanho incorreto.';
  }

  return finalString;
}
console.log(generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const sizeCheck1 = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  const sizeCheck2 = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);

  return sizeCheck1 && sizeCheck2;
}

// Desafio 13
function hydrate(str) {
  let cupsArray = str.split('');
  const numberArray = [];
  let sum = 0;

  for (let i of cupsArray) {
    if (Number.parseInt(i, 16)) {
      numberArray.push(Number.parseInt(i, 16));
    }
  }

  for (let n of numberArray) {
    sum += n;
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
