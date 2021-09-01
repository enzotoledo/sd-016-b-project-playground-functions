// Desafio 10
function techList(tech,name) {
  let lista = [];
  for(let objetos=0; objetos<tech.length; objetos+=1){
  {
    lista[objetos],
    lista.tech =tech[objetos],
    lista.name= name
  };
  return lista;
}
console.log(techList(["array,css"],"rafael"));
// Desafio 11
function generatePhoneNumber(array) {  
  if(array<array[11] || array>array[11]){
    array = "Array com tamanho incorreto."
  }
  for(let index=0; index<array.length)
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
