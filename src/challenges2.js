// Desafio 10
function techList(array, name) {
  // seu código aqui
  let lista = [];
  let myArray = array.sort();

  for (let i = 0; i < myArray.length; i += 1) {
    lista.push(
      {
        "tech": myArray[i],
        "name": name
      }
    )
  }
  if (lista.length === 0) {
    return "Vazio!"
  }else{
    return lista;
  }
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
