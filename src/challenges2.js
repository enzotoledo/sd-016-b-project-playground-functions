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
  return arrayNumbers.length === 11;
}

function validaNumero(arrayValido) {
  for (const key of arrayValido) {
    if (arrayValido[key] > 9 || arrayValido[key] < 0) {
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
  let msgError;

  if (!validaTamanho(numbers)) {
    countFuncao = 1;
    msgError = impressaoRetornoFalse(countFuncao);
  } else if (!validaNumero(numbers)) {
    countFuncao = 2;
    msgError = impressaoRetornoFalse(countFuncao);
  } else if (!validaRepeticao(numbers)) {
    countFuncao = 3;
    msgError = impressaoRetornoFalse(countFuncao);
  } else {
    return impressaoRetornoTrue(numbers);
  }
  return msgError;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);

  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  }
  return true;
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
