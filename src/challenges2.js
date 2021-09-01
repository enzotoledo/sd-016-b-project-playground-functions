// Desafio 10
function techList(arrayTecnologias, nome) { /* Para a resolucao desse exercicio utilizei a ajuda do aluno : victor shin kamiguchi */
  let tecnologiasAAprender = [];
  if (arrayTecnologias.length > 0) {
    arrayTecnologias.sort();
    for (let index of arrayTecnologias) {
      tecnologiasAAprender.push({
        tech : index,
        name: nome
      });
    }
    return tecnologiasAAprender;
  } 
  return 'Vazio!';
  }

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
