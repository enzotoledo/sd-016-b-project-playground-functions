let array = [1, 2, 3, 4, 5, 6, 7, 1, 9, 1, 1];
let numeroGrande = false;
let numeroErrado = false;
let repeticoes = 0;
let verificaNumRepetido = 0;

if (array.length != 11) {
  numeroGrande = true;
} else {
}
//console.log(numeroGrande);

for (let k = 0; k <= array.length; k += 1) {
  if (array[k] < 0 || array[k] > 9) {
    numeroErrado = true;
    break;
  } else {
}
}
//console.log(numeroErrado);

for (let j = 0; j <= array.length; j += 1) {
  for (let index in array) {
  // verificaNumRepetido = verificaNumRepetido +1;
    if (array[j] === array[index] && index > j) {
      repeticoes += 1;
    }
  }
}

//console.log(repeticoes);

if (numeroGrande === true) {
  console.log('Numero Grande: Array com tamanho incorreto');
} else if (numeroErrado === true) {
  console.log('Numero Errado: Não é possível gerar um número de telefone com esses valores');
} else if (repeticoes > 3) {
  console.log('Numero Repetido: Não é possível gerar um número de telefone com esses valores');
} else {
  let a = array.slice(0, 2).join('');
  let b = array.slice(2, 7).join('');
  let c = array.slice(7, 11).join('');
  let d = (`(${a}) ${b}-${c}`);
  console.log(d);
}
