// Desafio 10
function techList(array, name) {
  let arraySort = array.sort();
  let newArray = [];
  let objectList = {};

  for (let index = 0; index < array.length; index += 1) {
    objectList.tech = arraySort[index];
    objectList.name = name;
    newArray.push(objectList);
    objectList = {};
  }
  if (newArray.length === 0) {
    newArray = 'Vazio!';
  }
  return newArray;
}

// Desafio 11
let message;

function numberTelephone(array) {
  // reference: https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex?gclid=Cj0KCQjwpreJBhDvARIsAF1_BU0rI4vAleR89opVNbPQKNGAIfYsNu5A8OQVjhbCOvBZIp1SwEuWZZYaAhQQEALw_wcB
  let strTel = array.toString().replace(/,/g, '').replace(/(\d{2})?(\d{5})?(\d{4})?/, '($1) $2-$3');
  message = strTel;
  return message;
}

function identifyNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      message = 'não é possível gerar um número de telefone com esses valores';
      return message;
    }
  }
}

function sizeArray(array) {
  if (array.length !== 11) {
    message = 'Array com tamanho incorreto.';
    return message;
  }
}

function objectNumbers(array) {
  let count = 1;
  let numberNow = 0;
  let repeatNumbers = {};
  // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  let arraySort = array.sort(function (a, b) { return a - b; });
  for (let i = 0; i < arraySort.length; i += 1) {
    if (arraySort[i] === arraySort[i + 1]) {
      numberNow = array[i];
      count += 1;
      repeatNumbers[numberNow] = count;
    } else {
      count = 1;
    }
  }

  count = 0;
  return repeatNumbers;
}

function quantityNumbers(array) {
  let object = objectNumbers(array);
  for (let key in object) {
    if (object[key] >= 3) {
      message = 'não é possível gerar um número de telefone com esses valores';
      return message;
    }
  }
}

function generatePhoneNumber(array) {
  numberTelephone(array);
  identifyNumber(array);
  sizeArray(array);
  quantityNumbers(array);
  return message;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let status = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    status = true;
  } else {
    status = false;
  }
  return status;
}

// Desafio 13
// Reference (i): https://www.youtube.com/watch?v=pfkkdzeyx6U&ab_channel=AllThingsJavaScript%2CLLC
// Reference (ii): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?redirectlocale=en-US&redirectslug=JavaScript/Reference/Global_Objects/Array/map
function hydrate(str) {
  let reg = /\d+/g;
  let result = str.match(reg).map(Number);
  let sum = 0;
  for (let index = 0; index < result.length; index += 1) {
    sum += result[index];
  }
  if (sum > 1) {
    message = (`${+sum} copos de água`);
  } else {
    message = (`${+sum} copo de água`);
  }
  return message;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
