// Desafio 10
function techList(technologies,person) {
    let techSort = technologies.sort();
    let techGroup = [];
    
    for(let index = 0; index < technologies.length; index += 1){
      techGroup.push({ tech: techSort[index], name: person })
    }
    
    if(technologies.length <= 0){
      return "Vazio!"
    }
    
      return techGroup
    
    }

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineC < lineB + lineA && lineB < lineC + lineA){
    return true
  }else{
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  let num = /[0-9]/gi
  let found = str.match(num);
  let finalNum = 0;
  for(let i = 0; i < found.length; i += 1){
      parseInt(finalNum = finalNum + found[i])
  }
  return finalNum;
}




module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
