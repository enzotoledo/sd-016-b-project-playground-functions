// Desafio 10
function techList(array, name){
  // seu código aqui
  let interesse = [];
  let listaOrdenada = array.sort();
  if(listaOrdenada.length === 0){
    return 'Vazio!'
  }else{
    for (let i = 0; i < array.length; i++) {
      interesse[i] = {
        tech: listaOrdenada[i],
        name
      }
    }
  }
  
  return interesse
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
