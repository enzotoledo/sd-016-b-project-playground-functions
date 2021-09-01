// Desafio 10
function techList(arrayTecnologias, nome) { /* Para a resolucao desse exercicio utilizei a ajuda do aluno : victor shin kamiguchi */
  let tecnologiasAAprender = [];
  if (arrayTecnologias.length > 0) {
    arrayTecnologias.sort();
    for (let index of arrayTecnologias) {
      tecnologiasAAprender.push({
        tech: index,
        name: nome,
      });
    }
    return tecnologiasAAprender;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  let contadorNumerosRepetidos = 0;
  let numeroAtual = arrayNumeros[0];
  let numeroTelefone = '';
  if (arrayNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0 ; index < arrayNumeros.length; index += 1) {
    for (let indexNumero = 0; indexNumero < arrayNumeros.length; indexNumero += 1) {
      numeroAtual = arrayNumeros[index]
    /* verifica se o numero repete 3 vezes */
    if (arrayNumeros[indexNumero] === numeroAtual) {
      contadorNumerosRepetidos += 1;
      if(contadorNumerosRepetidos == 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    } /* Verifica se e menor que 0 ou maior que 9 */
    else if (arrayNumeros[indexNumero] < 0 || arrayNumeros[indexNumero] > 9 ) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
   
    } 
    contadorNumerosRepetidos = 0;
  }
  numeroTelefone = `(${arrayNumeros[0]}${arrayNumeros[1]}) ${arrayNumeros[2]}${arrayNumeros[3]}${arrayNumeros[4]}${arrayNumeros[5]}${arrayNumeros[6]}-${arrayNumeros[7]}${arrayNumeros[8]}${arrayNumeros[9]}${arrayNumeros[10]}`;
  return numeroTelefone;
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
