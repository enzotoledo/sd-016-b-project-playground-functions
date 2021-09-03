// Desafio 10
function techList(arrayString, name) {
  for (let index = 0; index < arrayString.length; index += 1) {
    let listTech = [];
    let arrayStringSorted = arrayString.sort();
    for (let key of arrayStringSorted) {
      listTech.push({ tech : key, name : name });
    }
    return listTech;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = '(';
  if(arrayNumber.length!=11){
    return ('Array com tamanho incorreto.');
  } else {
    for(let index of arrayNumber) {
      if((index < 0) || (index > 9)) {
        return ('não é possível gerar um número de telefone com esses valores');
      } else {
        count[index] += 1;
        if(count[index] >= 3) {
          return ('não é possível gerar um número de telefone com esses valores');
        }
      }
    }
  }
  for(let index = 0;index < 2;index += 1) {
    result += arrayNumber[index];
  }
  result += ') ';
  for(let index = 2;index < 7;index += 1) {
    result += arrayNumber[index];
  }
  result += '-';
  for(let index = 7;index < 11;index += 1){
    result += arrayNumber[index];
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (((lineA + lineB > lineC) && (Math.abs(lineA - lineB) < lineC)) || ((lineA + lineC > lineB) && (Math.abs(lineA - lineC) < lineB)) || ((lineB + lineC > lineA) && (Math.abs(lineB - lineC) < lineA))) {
    return true;
  } else {
    return false;
  }
} 

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let sum = 0;
  for (let index of numbers) {
    sum += index;
  }
  if (sum === 1) {
    return (sum + ' copo de água');
  } else {
    return (sum + ' copos de água');
  }
}
  //Conteudo para solucionar o problema adquirido na pagina:
  // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 
  // https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript//

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
