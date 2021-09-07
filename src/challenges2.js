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

function sizesTriangle(param1, param2, param3) {
  let side1 = param1 < (param2 + param3) && param1 > Math.abs((param2 - param3));
  let side2 = param2 < (param1 + param3) && param2 > Math.abs((param1 - param3));
  let side3 = param3 < (param1 + param2) && param3 > Math.abs((param1 - param2));
  return {
    side1,
    side2,
    side3,
  };
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangle = sizesTriangle(lineA, lineB, lineC);
  for (let key in triangle) {
    if (triangle[key] === false) {
      return false;
    }
  }
  return true;
}

// Desafio 13
function hydrate(paramDrink) {
  // seu código aqui
  let count = 0;
  let patternNumber = /\d/g;
  let waterCups = 'copos de água';
  let arrDrinks = paramDrink.match(patternNumber);
  for (let item of arrDrinks) {
    let numberDrink = Number(item);
    count += numberDrink;
  }
  if (count === 1) {
    waterCups = 'copo de água';
  }
  let cups = `${count} ${waterCups}`;
  return cups;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
