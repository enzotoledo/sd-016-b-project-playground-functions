// Desafio 10
function criarObjeto(arrayTechs, nome) {
  let ordemArray = arrayTechs.sort();
  let conjuntoObj = [];

  for (let index = 0; index < ordemArray.length; index += 1) {
    conjuntoObj[index] = { tech: ordemArray[index], name: nome };
  }
  return conjuntoObj;
}

function techList(arrayTechs, name) {
  if (arrayTechs.length > 0) {
    return criarObjeto(arrayTechs, name);
  }
  return 'Vazio!';
}

// Desafio 11
function validaTamanho(arrayNumbers) {
  if (arrayNumbers.length > 11 || arrayNumbers.length < 11) {
    return false;
  }
  return true;
}

function validaNumero(arrayValido) {
  for (let index = 0; index < arrayValido.length; index += 1) {
    if (arrayValido[index] > 9 || arrayValido[index] < 0) {
      return false;
    }
  }
  return true;
}

function validaRepeticao(arrayValido) {
  let aux = 1;

  for (let countL = 0; countL < arrayValido.length; countL += 1) {
    for (let countC = 0; countC < arrayValido.length; countC += 1) {
      if (arrayValido[countL] === arrayValido[countC + 1]) {
        aux += 1;
        if (aux >= 3) {
          return false;
        }
      }
    }
    aux = 0;
  }
  return true;
}

function impressaoRetornoTrue(retorno) {
  let textAjust;

  const part1 = retorno.slice(0, 2).join('');
  const part2 = retorno.slice(2, 7).join('');
  const part3 = retorno.slice(7, 11).join('');
  textAjust = `(${part1}) ${part2}-${part3}`; // referência: https://www.alura.com.br/artigos/criando-uma-mascara-de-telefone-com-javascript

  return textAjust;
}

function impressaoRetornoFalse(count) {
  let aux = '';

  if (count === 1) aux = 'Array com tamanho incorreto.';
  else if (count === 2 || count === 3) {
    aux = 'não é possível gerar um número de telefone com esses valores';
  }
  return aux;
}

function generatePhoneNumber(numbers) {
  let countFuncao = 0;
  let aux;

  if (validaTamanho(numbers) !== true) {
    countFuncao = 1;
    aux = impressaoRetornoFalse(countFuncao);
  } else if (validaNumero(numbers) !== true) {
    countFuncao = 2;
    aux = impressaoRetornoFalse(countFuncao);
  } else if (validaRepeticao(numbers) !== true) {
    countFuncao = 3;
    aux = impressaoRetornoFalse(countFuncao);
  } else {
    return impressaoRetornoTrue(numbers);
  }
  return aux;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([8, 4, 9, 8, 7, 4, 3, 9, 0, 1, 5]));
// console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 0, 1, 2, 10]));
// console.log(generatePhoneNumber([0, 1, 6]));

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
