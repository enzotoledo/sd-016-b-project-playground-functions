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
let answer = [];
function repeat (n) {
  let nOrder = n.sort();
  let count = 0;
  let current = nOrder[0];
  for (let i = 0; i < nOrder.length; i += 1) {
    if (current === nOrder[(i + 1)]){
      count += 1;
    } else {
      current = nOrder[(i + 1)]
    }
}
if ( count >= 3){
  return false;
} else {
  return true;
}
nOrder = n;
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
    answer.push(array[indice])
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
