// Desafio 1
function compareTrue(param1, param2) {
  if(param1 && param2){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,altura) {
  let area = (base * altura) / 2
  return area
}

// Desafio 3
function splitSentence(string) {
  let stringSeparada = string.split(' ')
  return stringSeparada
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length-1]}, ${array[0]}`)
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = (wins * 3) + (ties)
  return pontos
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let repeticoes = 0;
  let todosNegativos = false;
  for(let i =0; i < array.length; i++){
    if(array[i] < maior){
        todosNegativos = true
    }else{
      break
    }
  }
  if (todosNegativos == true){
    return 1
  }
  for(let i =0; i < array.length; i++){
      if(array[i] > maior){
          maior = array[i]
      }
  }
  if(maior < 0){
    return 1
  }
  for (let y = 0; y < array.length; y++) {
      if(array[y] == maior){
          repeticoes++
      }  
  }
  return repeticoes
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(mouse + cat1 > mouse + cat2){
      return 'cat1'
  }else if(mouse + cat2 > mouse + cat1){
      return 'cat2'
  }else{
      return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayModificado = array
  for(let i = 0; i < arrayModificado.length; i++){
    if ((arrayModificado[i] % 3 == 0) && (arrayModificado[i] % 5 != 0)) {
      arrayModificado[i] = 'fizz'
    }else if((arrayModificado[i] % 5 == 0) && (arrayModificado[i] % 3 != 0)){
      arrayModificado[i] = 'buzz'
    }else if((arrayModificado[i] % 5 == 0) && (arrayModificado[i] % 3 == 0)){
      arrayModificado[i] = 'fizzBuzz'
    }else{
      arrayModificado[i] = 'bug!'
    }
  }
  return arrayModificado
}

// Desafio 9
function encode(string) {
  let stringModificada = []
  let codificada = ''

  for(let i = 0; i < string.length; i++){
    let seraAdd = string[i];
    if(seraAdd == 'a'){
      seraAdd = '1'
    }else if(seraAdd == 'e'){
      seraAdd = '2'
    }else if(seraAdd == 'i'){
      seraAdd = '3'
    }else if(seraAdd == 'o'){
      seraAdd = '4'
    }else if(seraAdd == 'u'){
      seraAdd = '5'
    }
    stringModificada.push(seraAdd)
  }
  for(let y = 0; y < stringModificada.length; y++){
    codificada += stringModificada[y]
  }
  return codificada

}
function decode(string) {
  let stringModificada = []
  let decofidicada = ''

  for(let i = 0; i < string.length; i++){
    let seraAdd = string[i];

    if(seraAdd == '1'){
        seraAdd = 'a'
    }else if(seraAdd == '2'){
        seraAdd = 'e'
    }else if(seraAdd == '3'){
        seraAdd = 'i'
    }else if(seraAdd == '4'){
        seraAdd = 'o'
    }else if(seraAdd == '5'){
        seraAdd = 'u'
    }

    stringModificada.push(seraAdd)

    }

  for(let y = 0; y < stringModificada.length; y++){
    decofidicada += stringModificada[y]
  }

  return decofidicada
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
