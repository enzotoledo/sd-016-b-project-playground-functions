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
function generatePhoneNumber(array) {
  let str = array.toString().replace(/,/g, '');
  let strTelephone = str.replace(/(\d{2})?(\d{5})?(\d{4})?/, '($1) $2-$3');
  let count = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let position = 0; position < array.length; position += 1) {
      if (array[index] === array[position]) {
        count = count + 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
  }
  return strTelephone;
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
  let message;
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
