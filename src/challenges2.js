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
