// Desafio 10
function techList(techs, name) {
  // Primeiro a função verifica se a array é um conjunto vazio por meio do comprimento da array. Se ela estiver vazia, a função retorna uma mensagem. Caso contrário, ela organiza a array em ordem alfabética com o sort() method e, por a array ser iterável, é possível usar o for/in para acessar cada posição da array, acrescentar o valor de cada posição no final da array chamada lista, que será retornada.
  if (techs.length === 0) {
    return 'Vazio!'
  } else {
    let sortedTechs = techs.sort();
    let list = [];
    for (let tech in sortedTechs) {
      list.push({
        tech: techs[tech],
        name: name,
      })
    }
    return list;
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
