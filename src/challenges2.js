// Desafio 10
function techList(arrayString, name) {
  for (let index = 0; index < arrayString.length; i += 1){
    let listTech = [];
    let arrayStringSorted = arrayString.sort();
    for (let key of arrayStringSorted){
      listTech.push({tech: key, name : name});
    }
    return listTech;
  }
  return 'Vazio!'
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  let count = 0;
    if (numberArray.length != 11){
      return ('Array com tamanho incorreto.')
    } else {
      for(let index of numberArray) {
    if((index < 0) || (index > 9)){
      return ('não é possível gerar um número de telefone com esses valores');
    } else {
      for(let i of numberArray){
      if (numberArray[index] == numberArray[i]) {
        count ++
        if(count >= 3){
        return ('não é possível gerar um número de telefone com esses valores');
      }
    }
  }
    }
  }
  }
  let numberPhone = [];
  for (let k = 0; k < numberArray.length; k += 1) {
    if (k === 0) numberPhone.push('(');
    numberPhone.push(numbersArray[index]);
    if (k === 1) numberPhone.push(') ');
    if (k === 6) numberPhone.push('-');
  return numberPhone.join('');
}
  return numberPhone
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
