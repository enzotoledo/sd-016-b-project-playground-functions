// Desafio 10
function techList(array, name) {
  if ( array[0] === undefined) {
  return 'Vazio!';
  } else {
  let arraySort = array.sort();
  let answer = [];
  let obj = {};
  for (let i = 0; i < arraySort.length; i +=1) {
    obj = {
      tech: arraySort[i],
      name: name
    }
    answer.push(obj);
  }
return answer;
}
}

// Desafio 11
function generatePhoneNumber(array) {
  function repeat (n){  // estava tentando usar o comando sort, mas estava dando errado então recebi a sujestão de usar for dentro de for, vinda do Gustavo Mendes turma 11 , um amigo de longas datas com isso consegui completar o código;
    let can = true;
    let current = n[0];
    let count = 1;
    for (let i = 0; i < n.length; i += 1){
      for (let i2 = 1; i2 < n.length; i2 += 1){
        if (current === n[i2]){
          count += 1;
        }
      }
      current = n[i];
      if ( count > 2){
        can = false;
      } else {
        count = 0;
      }
    }
    return can;
  }

  function verify (n2){ // Verificar se o max é maior que 9 e o min é menor que 0 ok
  let maxhNumber = Math.max.apply(null, n2);// Retirado a informação para fazer a linha do código no site 'https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array'
  let minNumber = Math.min.apply(null, n2);// Retirado a informação para fazer a linha do código no site 'https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array'
    if ((maxhNumber > 9) || (minNumber < 0)) {
      return false;
    } else {
      return true;
    }
}

if ((array.length !== 11)) {
  return 'Array com tamanho incorreto.';
 } else if ((verify(array) === false ) || (repeat(array) === false)) {
  return 'não é possível gerar um número de telefone com esses valores';
 } else {
  let answer = [];
for (let indice = 0; indice < array.length; indice += 1 ){
  if (indice === 0){
    answer.push('(');
    answer.push(array[indice]);
  } else if (indice === 1){
    answer.push(array[indice]);
    answer.push(')');
    answer.push(' ');
  } else if (indice === 7 ) {
    answer.push('-');
    answer.push(array[indice]);
  } else {
    answer.push(array[indice]);
  }
}
let resposta = answer.join('');
return resposta;
 }
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
