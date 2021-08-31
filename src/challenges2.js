// Desafio 10
function techList(arr, name) {
  let lista = [];
  errorMsg = "Vazio!";
  if (arr.length === 0) {
    return errorMsg;
  }

  arr.sort();

  for (let i = 0; i < arr.length; i += 1) {
    let object = {};
    object.tech = arr[i];
    object.name = name;
    lista.push(object);
  }
  return lista;
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
