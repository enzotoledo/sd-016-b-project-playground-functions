// Desafio 10
function techList(techs, name) {
  let objects = [];
  for (let tech of techs.sort()) {
    objects.push({
      tech, name
    });
  }
  if (objects.length === 0) {
    return 'Vazio!';
  }
  return objects;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if (((lineB + lineC) > lineA && lineA > Math.abs(lineB - lineC))
    || ((lineA + lineC) > lineB && lineB > Math.abs(lineA - lineC))
    || ((lineA + lineB) > lineC && lineC > Math.abs(lineA - lineB))) {
    isTriangle = true;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(string) {
  let findDrinks = /\d+/g;
  let drinks = string.match(findDrinks);
  let sum = 0;
  for (let key of drinks) {
    sum = sum + parseInt(key);
  }
  let response = sum > 1 ? sum + ' copos de água' : sum + ' copo de água';
  return response;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
