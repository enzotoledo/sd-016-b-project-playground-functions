// Desafio 10
function techList(arrayString, name) {
  for (let index = 0; index < arrayString.length; i += 1){
    let listTech = [];
    let arrayStringSorted = arrayString.sort();
    for (let key of arrayStringSorted){
      listTech.push({tech: key, name : name});
    }
    return listTech;
  }
  return 'Vazio!'
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
