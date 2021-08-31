// Desafio 10
function techList(arr, name) {
  let lista = [];
  errorMsg = "Vazio!";
  if (arr.length === 0) {
    return errorMsg;
  }

  arr.sort();

  for (let i = 0; i < arr.length; i += 1) {
    let object = {};
    object.tech = arr[i];
    object.name = name;
    lista.push(object);
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let erroA = "Array com tamanho incorreto.";
  let erroB = "não é possível gerar um número de telefone com esses valores";

  if (arr.length !== 11) {
    return erroA;
  }

  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;
    if (arr[i] < 0) {
      return erroB;
    } else if (arr[i] > 9) {
      return erroB;
    }
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
      if (count >= 3) {
        return erroB;
      }
    }
  }
  let phone = `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  return phone;
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
