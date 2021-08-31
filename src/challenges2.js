// Desafio 10
function techList(techArray, name) {
  return (techArray.length === 0)
    ? 'Vazio!'
    : techArray.sort().map(function (tech) { return { tech, name }; });
}

// Desafio 11

function areValidNumbers(numbersArray) {
  if (numbersArray.length !== 11) {
    return {
      isValid: false,
      msg: 'Array com tamanho incorreto.',
    };
  }
  if (numbersArray.some(function (number) {
    return numbersArray.filter((value) => value === number).length >= 3 || number < 0 || number > 9;
  })) {
    return {
      isValid: false,
      msg: 'não é possível gerar um número de telefone com esses valores',
    };
  }
  return { isValid: true, msg: '' };
}
function generatePhoneNumber(numbersArray) {
  let isValidArray = areValidNumbers(numbersArray);
  if (!isValidArray.isValid) return isValidArray.msg;
  let formattedPhoneNumber = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (index === 0) formattedPhoneNumber.push('(');
    formattedPhoneNumber.push(numbersArray[index]);
    if (index === 1) formattedPhoneNumber.push(') ');
    if (index === 6) formattedPhoneNumber.push('-');
  }
  return formattedPhoneNumber.join('');
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
