// Desafio 10
function techList(arrayT,name) {
  let arrayobjeto= [];
   let mensagem = 'Vazio!'
   if(arrayT.length == 0){
      return mensagem;
   }
      arrayT.sort();
      
      for (let index = 0; index < arrayT.length; index += 1) {

      /*   usei essa forma de empurrar os valores do objeto dentro do array com base na forma que o Orlando Dantas usou https://github.com/tryber/sd-016-b-project-playground-functions/pull/83/commits/f16c46076b377cb88a7c1b27dad39cefb9690436  */
        arrayobjeto.push(
           {
             tech: arrayT[index],
             name: name,
           },
         );
       }    
       return arrayobjeto
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
/* usei a formula da existencia de um triangulo desse site https://mundoeducacao.uol.com.br/matematica/condicao-existencia-um-triangulo.htm */
function triangleCheck(lineA,lineB,lineC) {
  if (lineB -lineC < lineA && lineA < lineB + lineC){
    return true
}
else{
    return false
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
