// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if ((lineB + lineC) > lineA && lineA > Math.abs(lineB - lineC)) {
    isTriangle = true;
  }
  if ((lineA + lineC) > lineB && lineB > Math.abs(lineA - lineC)) {
    isTriangle = true;
  }
  if ((lineA + lineB) > lineC && lineC > Math.abs(lineA - lineB)) {
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
  if (sum > 1) {
    return sum + ' copos de água';
  } else {
    return sum + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
