// Desafio 10
function techList(itemsTech, name) {
  // seu código aqui
  let arrayTech = [];
  let arraySort = itemsTech.sort();
  if (itemsTech.length === 0) {
    return 'Vazio!';
  }
  for (let item of arraySort) {
    let objTech = {
      tech: item,
      name,
    };
    arrayTech.push(objTech);
  }
  return arrayTech;
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
