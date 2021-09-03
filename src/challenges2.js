// Desafio 10
function techList(tecnologia,name) {
if(tecnologia.length===0){
  return 'Vazio!';
} 
  let lista = [];
  let array = tecnologia.sort();
for(valor of array){
  lista.push({tech:valor,name} )
}
  return lista;
}
console.log(techList(["react","java","html"],"rafael"));
// Desafio 11
function generatePhoneNumber(array) {  
  for(let index=0; index<array.length ; index++){


  }
  
  if(array<array[11] || array>array[11]){
    array = "Array com tamanho incorreto."
  }
  if(array=array[11]){
  array.splice(7,0,"-")
  array.splice(2,0,")")
  array.unshift("(")

  array=array.join("")
  }
  return array
}
console.log(generatePhoneNumber(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1"]))
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
