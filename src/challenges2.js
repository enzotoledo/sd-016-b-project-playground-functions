// Desafio 10
function techList(techs, theName) {
  let arrTechs = [];
  if (techs == 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techs.length; index += 1) {
    arrTechs.push({ tech: techs[index], name: theName });
  }
  arrTechs.sort(function (a, b) {
    if (a.tech < b.tech) {
      return false;
    } return true;
  });
  return arrTechs;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
