// Desafio 10
function techList(array1, name) {
  let objetoTecnologias = [];
  let arraySorted = array1.sort();
  if (arraySorted.length === 0){
    return "Vazio!"
  }else {
    for (let i in array1) {
      objetoTecnologias[i] = {
        "tech": array1[i],
        "name": name
      }
    }  
  }  
  return objetoTecnologias;
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
