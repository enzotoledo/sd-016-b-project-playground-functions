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
function generatePhoneNumber() {
  // seu código aqui
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
