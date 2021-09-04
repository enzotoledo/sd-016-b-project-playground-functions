// Desafio 10
function techList(arrayTech, name) {
  let ordenarArray = arrayTech.sort();
  let objeto = {};
  let array = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  } else if (arrayTech.length > 0) { 
    for (let index in ordenarArray) {
      array.push(objeto[index] = {
        name: name,
        tech: arrayTech[index]      
      })      
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) { 
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(bebeu) {
  let somaBebeu = 0;
  let capturaNumeros = bebeu.replace(/[^0-9]/g,'');  
  let arrayCapturaNumeros =  capturaNumeros.split('').map(Number);
  for (let index in arrayCapturaNumeros){
    somaBebeu += arrayCapturaNumeros[index];
  }
  if (somaBebeu > 1){ 
    return `${+somaBebeu} copos de água`;
  } else {
    return `${+somaBebeu} copo de água`;    
  }  
}



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
