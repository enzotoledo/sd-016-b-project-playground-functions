// Desafio 10
function techList(techs, name) {
  let techObjects = [];

  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (const i of techs.sort()) {
    techObjects.push({
      tech: i,
      name,
    });
  }

  return techObjects;
}

// Desafio 11
function countMaxRepeatedNumber(number, list) {
  let counter = 0;
  for (const key in list) {
    if (list[key] === number) counter += 1;
  }
  return counter;
}
function validatePhoneNumberDigit(digit) {
  if (digit < 0 || digit > 9) {
    return false;
  }
  return true;
}
function generatePhoneNumber(numbers) {
  let errorMsg = 'não é possível gerar um número de telefone com esses valores';
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (
      !validatePhoneNumberDigit(numbers[i])
      || countMaxRepeatedNumber(numbers[i], numbers) >= 3
    ) {
      return errorMsg;
    }
  }
  let phoneNumber = numbers;
  phoneNumber.splice(0, 0, '(');
  phoneNumber.splice(3, 0, ')');
  phoneNumber.splice(4, 0, ' ');
  phoneNumber.splice(-4, 0, '-');
  return phoneNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  if (lineA > sumBC || lineB > sumAC || lineC > sumAB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  /*
  Consultei as respostas dessa pergunta no Stack Overflow para entender como extrair os números de uma string para uma lista usando regex.
  https://stackoverflow.com/q/1623221
  */
  let drinkQty = string.match(/\d+/g);
  for (let i = 0; i < drinkQty.length; i += 1) {
    drinkQty[i] = parseInt(drinkQty[i], 10);
  }
  let waterQty = 0;
  for (let i = 0; i < drinkQty.length; i += 1) {
    waterQty += parseInt(drinkQty[i], 10);
  }
  if (waterQty === 1) {
    return '1 copo de água';
  }
  waterQty += ' copos de água';
  return waterQty;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
