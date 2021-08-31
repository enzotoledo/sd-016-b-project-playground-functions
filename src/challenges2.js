// Desafio 10
function techList(array, name) {
  const result = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();

  for (let value of array) {
    result.push({ tech: value, name });
  }

  return result;
}

// Desafio 11
function isValidNumber(repeatObject, number) {
  if (number < 0) return false;
  if (number > 9) return false;

  if (!repeatObject[number]) {
    repeatObject[number] = 0;
  }

  repeatObject[number] += 1;

  if (repeatObject[number] >= 3) {
    return false;
  }

  return true;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const repeated = {};

  for (let number of array) {
    if (!isValidNumber(repeated, number)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  array.splice(0, 0, '(');
  array.splice(3, 0, ')');
  array.splice(4, 0, ' ');
  array.splice(10, 0, '-');

  return array.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (((lineA + lineB) > lineC) && (lineC < Math.abs(lineA - lineB))) {
    return false;
  }

  if (((lineA + lineC) > lineB) && (lineB < Math.abs(lineA - lineC))) {
    return false;
  }

  if (((lineB + lineC) > lineA) && (lineA < Math.abs(lineB - lineC))) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(string) {
  let total = 0;

  for (let number of string.match(/\d/g)) {
    total += Number(number);
  }

  return `${total} ${total > 1 ? 'copos' : 'copo'} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
