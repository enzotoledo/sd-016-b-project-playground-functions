// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  let novoObjeto = {}
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    tech.sort();
    for (let index in tech) {
      novoObjeto = {
        tech: tech[index],
        name: name,
      };
      array.push(novoObjeto);
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let numero = '';
  let contador = 0;
  let valorFinal = 0;
  //verificar numeros repetidos
  for (let teste in array) {
    for (let teste2 in array) {
      if (array[teste] === array[teste2]) {
        contador += 1;
      }
    }
    if (valorFinal < contador) {
      valorFinal = contador;
    }
    contador = 0;
  }
if (array.length === 11) {
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9 || valorFinal >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    if (index === '0') {
      numero = '(' + array[index];
    } else if (index === '1') {
      numero += '' + array[index] + ') ';
    } else if (index > '1' && index < '7') {
      numero += '' + array[index];
    } else if (index === '7') {
      numero += '-' + array[index];
    } else if (index > '7') {
      numero += '' + array[index];
    }
  }
} else {
  return 'Array com tamanho incorreto.';
}
return numero;
}
console.log(generatePhoneNumber([2, 2, 2, 4, 5, 6, 7, 8, 9, 0, 1]));

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
