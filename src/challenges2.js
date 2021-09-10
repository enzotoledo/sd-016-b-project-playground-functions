// Desafio 10
function techList(Technology, name) {
  // seu código aqui
  //     Entradas da função:
  // ["React", "Jest", "HTML", "CSS", "JavaScript"]
  // "Lucas"
  // Caso o array venha vazio sua função deve retornar 'Vazio!'
  let objectList = [];
  if (Technology.length !== 0) {
    for (let i = 0; i < Technology.length; i+=1) {
      let object = {};
      object.tech = Technology.sort()[i];
      object.name = name;
      objectList.push(object);
    }
    return objectList;
  } else {
    return 'Vazio!';
  }
}
// testando a função
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));
// console.log(techList([], 'Lucas'));
// --------------------------------------------------------------------------------------------------
// Desafio 11
function generatePhoneNumber(array) {
  console.log(array.length);
  // seu código aqui
  let counter = 0;
  //Verificação das condições de entrada
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] == array[j]) {
        counter += 1;
      }
      if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    counter = 0;
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Montando o numero de telefone
  return `(${array.slice(0,2).join("")}) ${array.slice(2,7).join("")}-${array.slice(7,11).join("")}`;
}
// Testando a função
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([0, 1, 6]));
// console.log(generatePhoneNumber([]));
// console.log(generatePhoneNumber([1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 1]));
// console.log(generatePhoneNumber([1, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([1, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3]));
// console.log(generatePhoneNumber([1, -2, 3, 4, -5, 6, 7, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([-1, 2, 3, 4, 5, 6, 7, 8, -9, 0, -1]));
// --------------------------------------------------------------------------------------------------
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
