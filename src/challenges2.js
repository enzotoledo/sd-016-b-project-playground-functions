// Desafio 10
/*
 * Consultei o pull request do projeto do Lucas Araujo Carvalho para resolver essa parte.
 * Link: https://github.com/tryber/sd-016-b-project-playground-functions/pull/85
 */
function techList(array, name) {
  if (array.length > 0) {
    let organizedArray = array.sort();
    let list = [];
    for (let techs of organizedArray) {
      list.push({
        tech: techs,
        name,
      });
    }
    return list;
  }
  return 'Vazio!';
}

// Desafio 11
/*
 * Consultei esse link para utilizar o template literals
 * Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
*/
function checkNumberRepeatError(array, number) {
  let numberRepeat = 0;
  for (let value of array) {
    if (value === number) {
      numberRepeat += 1;
    }
    if (numberRepeat >= 3) {
      return true;
    }
  }
}
function checkTheNumbersError(array) {
  for (let number of array) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}
function generatePhoneNumber(n) {
  if ((n.length !== 11)) {
    return 'Array com tamanho incorreto.';
  }
  if (checkTheNumbersError(n) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let number of n) {
    if (checkNumberRepeatError(n, number) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB;
  let somaBC = lineB + lineC;
  let somaCA = lineC + lineA;
  let diffAB = Math.abs(lineA - lineB);
  let diffBC = Math.abs(lineB - lineC);
  let diffAC = Math.abs(lineA - lineC);
  if ((lineA < diffBC) || (lineA > somaBC)) {
    return false;
  }
  if ((lineB < diffAC) || (lineB > somaCA)) {
    return false;
  }
  if ((lineC < diffAB) || (lineC > somaAB)) {
    return false;
  }
  return true;
}
// Desafio 13
/*
 * Consultei esse link para resolver o desafio.
 * Link: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
 */
function hydrate(request) {
  let glassOfWater = 0;
  let requestNumbers = request.match(/\d+/g).map(Number);
  for (let number of requestNumbers) {
    glassOfWater += number;
  }
  if (glassOfWater === 1) {
    return `${glassOfWater} copo de água`;
  }
  return `${glassOfWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
