// Desafio 10
function techList(newTechs, name) {
  
}

function verificaDuplicados(numero, arrayTel){

  let cont = 0;

  for(let num of arrayTel){

    if(num === numero){
      cont++;
    }

  }

  return cont;

}

// Desafio 11
function generatePhoneNumber(arrayTel) {

  if(arrayTel.length != 11){
    return "Array com tamanho incorreto."
  }

  for(let i = 0 ; i < arrayTel.length ; i++){

    if((arrayTel[i]<0) || (arrayTel[i]>9)){
      return "não é possível gerar um número de telefone com esses valores"
    } 

    if(verificaDuplicados(arrayTel[i], arrayTel) >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }
     
      
  }
  
  return "("+arrayTel[0]+arrayTel[1]+")"+" "+arrayTel[2]+arrayTel[3]+arrayTel[4]+arrayTel[5]+arrayTel[6]+"-"+arrayTel[7]+arrayTel[8]+arrayTel[9]+arrayTel[10]

  }



// Desafio 12
function triangleCheck(lineA,lineB,lineC) {

  if(((lineA > (lineB+lineC)) || (lineB > (lineA+lineC)) || (lineC > (lineA+lineB)))){
    return false;
  }else{
    return true;
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
