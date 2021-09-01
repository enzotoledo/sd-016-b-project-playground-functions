// Criação do objeto
function objectCreation(tecnologia, nome) {
  let obj = {
    tech: tecnologia,
    name: nome,
  };
  return obj;
}

// Desafio 10
function techList(array, name) {
  let objectList = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayOrdenado = array.sort();
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    objectList.push(objectCreation(arrayOrdenado[index], name));
  }
  return objectList;
}

// Função que checa se dentro do array existe algum valor inválido
function checagem(array) {
  let cont = 0;
  let contBiggerThan9 = 0;
  let contLowerThan0 = 0;
  let biggestCont = 0;
  for (let index = 0; index < array.length; index += 1) {
    cont = 0;
    if (array[index] < 0) {
      contLowerThan0 += 1;
    }
    if (array[index] > 9) {
      contBiggerThan9 += 1;
    }
    for (let i in array) {
      if (array[index] === array[i]) {
        cont += 1;
      }
      if (cont > biggestCont) {
        biggestCont = cont;
      }
    }
  }
  if (biggestCont >= 3 || contLowerThan0 > 0 || contBiggerThan9 > 0) {
    return 'false';
  }
  return 'true';
}

// Desafio 11
function generatePhoneNumber(array) {
  let numberCheck = checagem(array);
  let twoFirst = []
  let fivePost = []
  let lastFor = []
  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  if (numberCheck === 'false') {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index in array) {
    if (index < 2) {
      twoFirst.push(array[index]);
    } if (index >= 2 && index < 7) {
      fivePost.push(array[index]);
    } if (index >= 7 && index < 11) {
      lastFor.push(array[index]);
    }
  }
  return '(' + twoFirst.join('') + ')' + ' ' + fivePost.join('') + '-' + lastFor.join('')
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
