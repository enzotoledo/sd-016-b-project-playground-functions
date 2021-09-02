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

// Função que checa se o número é menor que zero
function minorThanZero(array) {
  let test = false;
  for (let index in array) {
    if (array[index] < 0) {
      test = true;
    }
  }
  return test;
}

// Função que checa se o número é maior que nove
function biggerThanNine(array) {
  let teste = false;
  for (let index in array) {
    if (array[index] > 9) {
      teste = true;
    }
  }
  return teste;
}

// Função que retorna true ou false para a posterior
function trOrFal(num) {
  return (num >= 3);
}

// Função pra passar a contagem no lint
function count(array, num) {
  let cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (num === array[i]) cont += 1;
  }
  return cont;
}

// Função que checa o maior número de repetições
function contThree(array) {
  let cont = 0;
  let biggestCont = 0;
  for (let i = 0; i < array.length; i += 1) {
    cont = count(array, array[i]);
    if (cont > biggestCont) biggestCont = cont;
    cont = 0;
  }
  return biggestCont;
}

// Função que checa se um número se repete 3 vezes ou mais
function moreThanThreeTimes(array) {
  let maiorCont = contThree(array);
  return trOrFal(maiorCont);
}

// Função que checa se dentro do array existe algum valor inválido
function checagem(array) {
  let teste = true;
  let threeTimes = moreThanThreeTimes(array);
  let biggerNine = biggerThanNine(array);
  let minorZero = minorThanZero(array);
  if (threeTimes === true || biggerNine === true || minorZero === true) {
    teste = false;
  }
  return teste;
}

// Função que monta a primera parte do número
function mont2(array) {
  let res = '';
  let numb = [];
  for (let index = 0; index < 2; index += 1) {
    numb.push(array[index]);
  }
  return res.concat('(', numb.join(''), ')', ' ');
}

// Função que monta a segunda parte do número
function mont5(array) {
  let res = '';
  let numb = [];
  for (let index = 2; index < 7; index += 1) {
    numb.push(array[index]);
  }
  numb = numb.join('');
  return res.concat(numb);
}

// Função que monta a última parte do número
function mont4(array) {
  let numb = [];
  for (let index = 7; index < 11; index += 1) {
    numb.push(array[index]);
  }
  return numb.join('');
}

// Desafio 11
function generatePhoneNumber(array) {
  let res = '';
  let valid = checagem(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (valid === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  res = res.concat(mont2(array), mont5(array), '-', mont4(array));
  return res;
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a < (b + c) && a > (Math.abs(b - c))) return true;
  return false;
}

// Desafio 13
function hydrate(string) {
  let form = /\d+/g;
  let corresp = string.match(form);
  let somador = 0;
  let frase = ' copo de água';
  for (let i = 0; i < corresp.length; i += 1) {
    somador += parseInt(corresp[i], 10);
  }
  if (somador > 1) frase = ' copos de água';
  return somador + frase;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
