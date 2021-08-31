// Desafio 10
function techList(arrayString, name) {
  if(arrayString.length > 0){
    let arrayStringSorted = arrayString.sort();
    let result = [];
    for(i of arrayStringSorted){
      result.push({tech: i, name: name});
    }
    return result;
  }else{
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = '(';
  if(arrayNumber.length!=11){
    return ('Array com tamanho incorreto.');
  }else{
    for(i of arrayNumber){
      if((i<0)||(i>9)){
        return ('não é possível gerar um número de telefone com esses valores');
      }else{
        count[i] += 1;
        if(count[i]>=3){
          return ('não é possível gerar um número de telefone com esses valores');
        }
      }
    }
  }
  for(i=0;i<2;i+=1){
    result += arrayNumber[i];
  }
  result += ') ';
  for(i=2;i<7;i+=1){
    result += arrayNumber[i];
  }
  result += '-';
  for(i=7;i<11;i+=1){
    result += arrayNumber[i];
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(((lineA+lineB > lineC)&&(Math.abs(lineA-lineB)<lineC))||((lineC+lineB > lineA)&&(Math.abs(lineC-lineB)<lineA))||((lineA+lineC > lineB)&&(Math.abs(lineA-lineC)<lineB))){
    return true;
  }else{
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
