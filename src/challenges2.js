// Desafio 10

function techList(tech, name) {
  tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  }
  let techObject_0 = {
    name,
    tech: tech[0],
  };
  let techObject_1 = {
    name,
    tech: tech[1],
  };
  let techObject_2 = {
    name,
    tech: tech[2],
  };
  let techObject_3 = {
    name,
    tech: tech[3],
  };
  let techObject_4 = {
    name,
    tech: tech[4],
  };
  return [techObject_0, techObject_1, techObject_2, techObject_3, techObject_4];
}

// Desafio 11
/* Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.
Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.
Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores". */

function generatePhoneNumber(array) {
  numeroGrande = false;
  numeroErrado = false;
  repeticoes = 0;
  verificaNumRepetido = 0;

  if (array.length != 11) {
    numeroGrande = true;
  } else {
  }

  for (let k = 0; k <= array.length; k += 1) {
    if (array[k] < 0 || array[k] > 9) {
      numeroErrado = true;
      break;
    } else {
    }
  }

  for (let j = 0; j <= array.length; j += 1) {
    for (let index in array) {
      if (array[j] === array[index] && index > j) {
        repeticoes += 1;
      }
    }
  }

  if (numeroGrande === true) {
    return 'Array com tamanho incorreto.';
  } if (numeroErrado === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (repeticoes > 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let a = array.slice(0, 2).join('');
  let b = array.slice(2, 7).join('');
  let c = array.slice(7, 11).join('');
  let d = (`(${a}) ${b}-${c}`);
  return d;
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
