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
      list.push({
        tech: techs,
        name: name
      });
    }
    return list
  }
  return 'Vazio!'
}

// Desafio 11
/*
 * Consultei esse link para utilizar o template literals
 * Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
 */
function generatePhoneNumber(array) {
  if((array.length !== 11)) {
    return 'Array com tamanho incorreto.';
  } else {
    let numberRepeat = 0;
    for(let numbers of array) {
      for (let index in array) {
        if (numbers === array[index]){
          numberRepeat += 1;
        }
        if ((numberRepeat >= 3) || (numbers > 10) || (numbers < 0)) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
      numberRepeat = 0;
    }
    return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }
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
