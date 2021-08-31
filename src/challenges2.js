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
/* lint acusa uma quantidade de linhas superior a 20 */
function generatePhoneNumber(arrayNumber) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (arrayNumber.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  for (let i of arrayNumber) {
    count[i] += 1;
    if ((i < 0) || (i > 9) || (count[i] >= 3)) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
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
/* lint acusa uma complexidade maior que 5, requesita uma refatoracao da funcao */
function triangleCheck(lineA, lineB, lineC) {
  /* linha com tamanho superior a 100 */
  if (((lineA + lineB > lineC) && (Math.abs(lineA - lineB) < lineC)) || ((lineC + lineB > lineA) && (Math.abs(lineC - lineB) < lineA)) || ((lineA + lineC > lineB) && (Math.abs(lineA - lineC) < lineB))) {
    return true;
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
