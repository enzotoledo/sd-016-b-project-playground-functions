//Desafio 10
function techList (arrayTec,name){
  let listaTecnologia = [];
  let array = arrayTec.sort();

if(array.length === 0){
  return "Vazio!";
}
  for(let index in array){
      listaTecnologia.push({
        tech : array[index],
        name 
      });
  }
  return listaTecnologia;
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],"Lucas"));

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
