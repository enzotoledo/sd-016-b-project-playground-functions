// Desafio 10
function techList(arr, name) {
  if(arr.length > 0){
    let arrSorted = arr.sort();
    let result = [];
    for(i of arrSorted){
      result.push({tech: i, name: name});
    }
    return result;
  }else{
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(arr) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if(arr.length!=11){
    return ('Array com tamanho incorreto.');
  }else{
    for(let i of arr){
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
  let result = '(';
  for(i=0;i<2;i+=1){
    result += arr[i];
  }
  result += ') ';
  for(i=2;i<7;i+=1){
    result += arr[i];
  }
  result += '-';
  for(i=7;i<11;i+=1){
    result += arr[i];
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
function hydrate(string) {
  var match = string.match(/\d+/g);
  var map = match.map(Number);
  let sum = 0;
  for(i of map){
    sum += i;
  }
  if(sum === 1){
    return (sum+' copo de água');
  }else{
    return (sum+' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
