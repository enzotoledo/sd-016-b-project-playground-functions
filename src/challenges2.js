// Desafio 10
function techList(array, name) {
  let newArray = [];
  if (array.length > 0) {
    array.sort();
    for (let i in array) {
      if (Object.prototype.hasOwnProperty.call(array, i)) {
        newArray.push({
          tech: array[i],
          name,
        });
      }
    }
    return newArray;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (array.length === 11) {
    for (let i = 0; i < array.length; i++) {
      let counter = 0;
      if (array[i] < 0 || array[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
      for (let j in array) {
        if (array[i] === array[j]) {
          counter++
          if (counter > 2) {
            return 'não é possível gerar um número de telefone com esses valores'
          }
        }
      }
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
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
