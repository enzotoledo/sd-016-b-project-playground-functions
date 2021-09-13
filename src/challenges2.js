// Desafio 10
function techList(tecno, name) {
  if (tecno.length === 0) {
    return 'Vazio!';
  }
  let tecnologias = [];
  tecno.sort();
  for (let i = 0; i < tecno.length; i += 1) {
    let tech = tecno[i];
    tecnologias.push({ tech, name });
  }
  return tecnologias;
}


// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let qtdRepete;

  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of arrayPhone) {
    qtdRepete = 0; 

    if (index < 0 || index > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 of arrayPhone) {
      if(index2 === index) {
        qtdRepete += 1;
       }
      if (qtdRepete >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let phone = arrayPhone;
  phone.splice(0, 0, '(');
  phone.splice(3, 0, ')');
  phone.splice(4, 0, ' ');
  phone.splice(10, 0, '-');

  return phone.join('');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < (lineA+lineC) && lineB < (lineC+lineA) && lineC < (lineA+lineB) && lineA > Math.abs(lineB-lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineB-lineA)){
    return true;
  }
  else{
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
