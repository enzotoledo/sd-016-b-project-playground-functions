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
function generatePhoneNumber(arrayPhone) {
  let qtdRepete = 0;
 
  if (arrayPhone.length !== 11){
    return 'Array com tamanho incorreto.';
   }else{
    for(let index of arrayPhone){
      if(index < 0 || index > 9){
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let index2 of arrayPhone){
        if(index2 === index){
          qtdRepete+=1;
        }
        if(qtdRepete >=3){
          return 'não é possível gerar um número de telefone com esses valores';
       }
     }
   }
  //     //Remove 0 elementos apartir de onde se desejaarray.splice(2,0,"") e acrescenta oq está dentro das aspas
  }
  let phone = arrayPhone;
      phone.splice(0,0,"(");
      phone.splice(3,0,")");
      phone.splice(4,0," ");
      phone.splice(10,0,"-");
    
      return phone.join("");
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a;
  let b;
  let c;
  let result = a+b+c;
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB -lineC))){
    return (a = true);
  } 
  if ((lineA > lineB + lineC) && (lineA > Math.abs(lineB -lineC))){
    return (a = false);
  } 
  if ((lineB < lineA + lineC) && (lineB < Math.abs(lineA - lineC))){
    return (b = true);
  }
  if ((lineB > lineA + lineC) && (lineB > Math.abs(lineA - lineC))){
    return (b =false);
  
  }
  if (lineC < lineA + lineB && lineC < Math.abs(lineA - lineB)){
    return (c = true);
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
    return (c = false);
  }
  return result;
}


// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
