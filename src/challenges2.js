// Desafio 10
function techList() {

}

// Desafio 11
function generatePhoneNumber(numero) {
  const inicial1 = numero.join('');
  inicial = inicial1.split('');
  
  // menor que 0 ou maior que 9
  let erro = 0; 
  for (let i = 0; i < numero.length; i += 1) {
    if ((numero[i] > 9) || (numero[i] < 0)) {
      erro += 1;
    }
  }

  // números iguais
  const organizando = numero.sort();
  let contagem = 1;
  let anterior;
  for (let i = 0; i < organizando.length; i += 1){
    if (anterior == organizando[i]){
      contagem += 1;
      if (contagem == 3) {
        break;
      }
    } else {
      contagem = 1;
      anterior = organizando[i];
    }
  }

  // respostas
  if ((erro > 0) || (contagem > 2)) {
    return("não é possível gerar um número de telefone com esses valores");
  } else if ((11 < numero.length) || (11 > numero.length)) {
    return("Array com tamanho incorreto.");
  } else {
    return("(" + inicial[0] + inicial[1] + ") " + inicial[2] + inicial[3] + inicial[4] + inicial[5] +  inicial[6] + "-" + inicial[7] + inicial[8] + inicial[9] + inicial[10]);
  }
}


generatePhoneNumber([1,1,9,5,4,6,0,4,3,5,0]);


{

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