// Desafio 10
/*
 * Consultei o pull request do projeto do Lucas Araujo Carvalho para resolver essa parte.
 * Link: https://github.com/tryber/sd-016-b-project-playground-functions/pull/85
 */
function techList(array, name) {
  if (array.length > 0) {
    //ordena o array e define a lista de objetos.
    let organizedArray = array.sort();
    let list = [];
    //coloca cada um dos valores do array (já ordenados) na lista como objetos com as devidas propriedades. 
    for (let techs of organizedArray) {
      list.push({ tech: techs, name: name });
    }
    return list
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
