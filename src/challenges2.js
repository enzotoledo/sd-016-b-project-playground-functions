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

function triangleSumCheck(a, b, c) {
  if (a > (b + c) || b > (a + c) || c > (a + b)) {
    return false;
  }
  return true;
}

function triangleDifferenceCheck(a, b, c) {
  if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
    return false;
  }
  return true;
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (triangleSumCheck(a, b, c) === false || triangleDifferenceCheck(a, b, c) === false) {
    return false;
  }
  return true;
}

// Referencia da funcao replace em https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
function catchNumbers(str) {
  return str.replace(/\D/g, '');
}

// Referencia de como pegar os digitos do replace , passar pra um array e depois somar em https://www.codegrepper.com/code-examples/javascript/split+digits+in+a+number+and+sum+them+javascript
function convertNumbers(str) {
  let number = catchNumbers(str);
  let result = [];
  for (let i = 0; i < number.length; i += 1) {
    result.push(+number[i]);
  }
  return result;
}

function sumNumbers(str) {
  let number = convertNumbers(str);
  let result = 0;
  for (let i = 0; i < number.length; i += 1) {
    result += number[i];
  }
  return result;
}
// Desafio 13
function hydrate(str) {
  let sum = sumNumbers(str);
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
