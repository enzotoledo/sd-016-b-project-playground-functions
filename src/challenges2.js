// Desafio 10
function techList(techArray, name) {
  return (techArray.length === 0)
    ? 'Vazio!'
    : techArray.sort().map(function (tech) { return { tech, name }; });
}

// Desafio 11
function areOutOfBounds(numbersArray) {
  return numbersArray.some((number) => number < 0 || number > 9);
}

function hasTooManyRepeats(numbersArray) {
  return numbersArray.some((number) => numbersArray.filter((n) => n === number).length >= 3);
}

function hasInvalidValues(numbersArray) {
  return hasTooManyRepeats(numbersArray) || areOutOfBounds(numbersArray);
}

function hasWrongSize(numbersArray) {
  return numbersArray.length !== 11;
}

function validateResponse(isValid, msg) {
  return { isValid, msg };
}

function validateNumberArray(numbersArray) {
  if (hasWrongSize(numbersArray)) return validateResponse(false, 'Array com tamanho incorreto.');
  if (hasInvalidValues(numbersArray)) {
    return validateResponse(false, 'não é possível gerar um número de telefone com esses valores');
  }
  return validateResponse(true, '');
}
function generatePhoneNumber(numbersArray) {
  let validatedArray = validateNumberArray(numbersArray);
  if (!validatedArray.isValid) return validatedArray.msg;
  let regExp = RegExp('(\\d{2})(\\d{5})(\\d{4})');
  let formattedPhoneNumber = numbersArray.join('').replace(regExp, '($1) $2-$3');
  return formattedPhoneNumber;
}

// Desafio 12
function isValidLine(line1, line2, line3) {
  let valid = false;
  if ((line1 < (line2 + line3)) && line1 > (Math.abs(line2 - line3))) {
    valid = true;
  }
  return valid;
}
function triangleCheck(lineA, lineB, lineC) {
  return isValidLine(lineA, lineB, lineC)
    && isValidLine(lineB, lineA, lineC)
    && isValidLine(lineC, lineB, lineA);
}

// Desafio 13
function hydrate(str) {
  let number = 0;
  const regExp = RegExp('([0-9])', 'g');
  const matches = str.matchAll(regExp);
  for (const match of matches) {
    number += Number.parseInt(match[0], 10);
  }
  return number === 1 ? `${number} copo de água` : `${number} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
