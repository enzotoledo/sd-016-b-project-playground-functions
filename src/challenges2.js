// Desafio 10
let resTechList = [];
function techList(techNames, name) {
  for (let tech of techNames.sort()) {
    resTechList.push({
      tech,
      name,
    });
  }
  if (resTechList.length === 0) {
    return 'Vazio!';
  }
  return resTechList;
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
