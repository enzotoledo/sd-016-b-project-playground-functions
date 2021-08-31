// Desafio 10
function techList(tech,name) {
  this.name = name
  this.tech = tech.sort()
  if(tech.length == 0){
    return 'Vazio!'
  }
  let arrayDeTechs = []
  for(let i = 0; i < this.tech.length;i++){
    arrayDeTechs.push({tech: this.tech[i], name: this.name})
  }
  return arrayDeTechs
}

// Desafio 11
function generatePhoneNumber(telefone) {
  if(telefone.length != 11){
    return  "Array com tamanho incorreto."
  }
  let countEquals = 0
  let stringPhone = ''

  for(let i = 0; i < telefone.length; i++){
    let countEquals = 0
    for (let y = 1; y < telefone.length; y++) {
        if(telefone[i] == telefone[y]){
            countEquals++
        }
    }

    if(countEquals >= 3 || telefone[i] > 9 || telefone[i] < 0){
        return "não é possível gerar um número de telefone com esses valores"
    }  
  }
  return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineB + lineA)){
    return true
  }else {
    return false
  }
}

// Desafio 13
function hydrate(bebidas){
  let contadorDeAgua = 0
  for(let i = 0; i < bebidas.length; i++){
    if(bebidas[i] % bebidas[i] == 0){
        contadorDeAgua += parseInt(bebidas[i])
    
    }
  }
  if(contadorDeAgua > 1){
    return `${contadorDeAgua} copos de água`
  }else{
    return `${contadorDeAgua} copo de água`
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
