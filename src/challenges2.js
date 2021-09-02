// Desafio 10
function techList(arrayTech, dudeName) {
  let list = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  arrayTech.sort();
  for (let i = 0; i < arrayTech.length; i += 1) {
    let obj = {
      tech: arrayTech[i],
      name: dudeName,
    };
    list.push(obj);
  }
  return list;
}

// Desafio 11
function ddd(number) {
  return `(${number[0]}${number[1]})`;
}

function firstHalf(number) {
  let result = ' ';
  for (let i = 2; i < 7; i += 1) {
    result += number[i];
  }
  return result;
}

function secondHalf(number) {
  let result = '-';
  for (let i = 7; i < number.length; i += 1) {
    result += number[i];
  }
  return result;
}

function checkNumbers(number) {
  let result = true;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > 9 || number[i] < 0) {
      result = false;
    }
  }
  return result;
}

// ultilizada a funcao filter devido ao erro de complexidade no lint ao tentar ultilizar o for duas vezes, estudada no filter no site https://pt.stackoverflow.com/questions/484146/como-contar-ocorr%C3%AAncias-de-um-valor-dentro-de-um-array
// tambem aprendi mais sobre a funcao arrow e o filter neste video do canal The Coding Train https://www.youtube.com/watch?v=qmnH5MT_luk&ab_channel=TheCodingTrain
function checkRepetition(number) {
  for (let i = 0; i < number.length; i += 1) {
    let count = 0;
    count = number.filter((x) => x === number[i]).length;
    if (count >= 3) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkNumbers(number) === false || checkRepetition(number) === false
  || checkRepetition(number) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return (ddd(number) + firstHalf(number) + secondHalf(number));
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
