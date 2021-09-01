// Criação do objeto
function objectCreation(tecnologia, nome) {
  let obj = {
    tech: tecnologia,
    name: nome,
  };
  return obj;
}

// Desafio 10
function techList(array, name) {
  let objectList = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayOrdenado = array.sort();
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    objectList.push(objectCreation(arrayOrdenado[index], name));
  }
  return objectList;
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
