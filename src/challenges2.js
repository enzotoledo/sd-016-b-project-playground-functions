// Desafio 10
function techList(techs, theName) {
  let techSort = techs.sort();
  let arrTechs = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techs.length; index += 1) {
    arrTechs.push({ tech: techSort[index], name: theName });
  }
  return arrTechs;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqu
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let measureCheck = false;
  if ((lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) || (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) || (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB))) {
    measureCheck = true;
  }
  return measureCheck;
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
