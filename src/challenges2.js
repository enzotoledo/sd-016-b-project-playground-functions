// Desafio 10
function techList(techs, name) {
  let techObjects = [];

  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (const i of techs.sort()) {
    techObjects.push({
      tech: i,
      name,
    });
  }

  return techObjects;
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
