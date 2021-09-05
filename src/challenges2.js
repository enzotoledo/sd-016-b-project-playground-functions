// Desafio 10
function techList(techs, nome) {
  // cria uum funcao de listas de tec recebendo um array de nomes
  // Deve tqambém receber um segundo parametro name
  // para cada tec no array criar um objeto
  // os objetos devem ser inseridos em uma lista em ordem crescente a partir do campo tech no objeto.
  // saida da função é uma lista de objetos ordenada pelo campo tech dos objs formados
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
function generatePhoneNumber(numeroTefone) {
  // recebe uma array c 11 numeros 
  // retornar um numero de telefone respeitando parenteses, traços e espaços
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // retornar se é possivel formar um triangulo com os valores das linhas que

  if (lineA < lineB + lineC && lineA > Math.abs((lineB - lineC))) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs((lineA - lineC))) {
    return true;
  }
  // if (lineB < lineA + lineC && lineB > Math.abs((lineA - lineC))) {
  //   return true;
  // }
  return false;
}

// Desafio 13
function hydrate(coposDeAgua) {
  // Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
  // Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber.
  let r = /\d+/g;
  let retorno = 0;
  let quantidadeDeAlcool = coposDeAgua.match(r);
  for (let i of quantidadeDeAlcool) {
    retorno = retorno + parseInt(i, 10);
  }
  if (retorno === 1) {
    return retorno + " copo de água";
  }
  return retorno + " copos de água";
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
