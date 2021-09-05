// Desafio 10
function techList(techs, nome) {
  //cria uum funcao de listas de tec recebendo um array de nomes
  //Deve tqambém receber um segundo parametro name
  //para cada tec no array criar um objeto
  //os objetos devem ser inseridos em uma lista em ordem crescente a partir do campo tech no objeto.
  //saida da função é uma lista de objetos ordenada pelo campo tech dos objs formados
  // caso o array venha vazio a função deve retornar 'Vazio!'

  if (techs.length === 0) {
    return 'Vazio!';
  }

  let tecnologias = [];
  techs = techs.sort();
  for (let tec of techs) {
    let objeto = {
      tech: tec,
      name: nome
    };
    tecnologias.push(objeto);
  }
  return tecnologias;

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
