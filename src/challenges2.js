// Desafio 10
function techList(arrayString, name) {
  if (arrayString.length > 0) {
    let arrayStringSorted = arrayString.sort();
    let result = [];
    for (let i of arrayStringSorted) {
      result.push({ tech: i, name });
    }
    return result;
  }
  return 'Vazio!';
}

// Desafio 11
function returnErroRepeat(arrayNumber) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i of arrayNumber) {
    count[i] += 1;
    if ((i < 0) || (i > 9) || (count[i] >= 3)) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return ('');
}

function returnErro(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  let z = returnErroRepeat(arrayNumber);
  if (z.length > 0) {
    return z;
  }
  return '';
}

function generatePhoneNumber(arrayNumber) {
  let z = returnErro(arrayNumber);
  if (z.length > 0) {
    return z;
  }
  let result = '(';
  result += (`${arrayNumber[0]}${arrayNumber[1]}) `);
  for (let i = 2; i < 7; i += 1) {
    result += arrayNumber[i];
  }
  result += (`-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`);
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let array = [lineA, lineB, lineC];
  let a = 0;
  let b = 1;
  let c = 2;
  for (let i = 0; i < array.length; i += 1) {
    if ((array[a] < array[b] + array[c]) && (Math.abs(array[b] - array[c]) < array[a])) {
      return true;
    }
    let aux = a;
    a = b;
    b = c;
    c = aux;
  }
  return false;
}

// Desafio 13
/* Conteudo adicional para resolucao deste problema adquirido na pagina:
https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 */
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  if (sum === 1) {
    return (`${sum} copo de água`);
  }
  return (`${sum} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
