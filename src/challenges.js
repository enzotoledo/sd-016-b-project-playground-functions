// Desafio 1
function compareTrue(value1, value2) {
  /**
   * Se o value1 e value2 forem boolean true, retorne boolean true. Caso contrário, retorne boolean false.
   * O operador AND compara dois valores e só resulta em verdadeiro se todos os operandos forem verdadeiros, ou seja, true ou truthy. Ele retorna o valor de um dos operandos especificados, e por isso posso usar o prefer-single-boolean-return sugerido pelo Linter, já que a entrada dos dois parâmetros do desafio são boleanos.
   * Usei o comparador de igualdade estrita para comparar valor e tipo.
   * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
   * Consultei o repositório de Stas Vilchik e usei a Compliant Solution.
   * Link: https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md
   */
  let trueOrFalse = ((value1 === true) && (value2 === true));
  return trueOrFalse;
}

// Desafio 2
function calcArea(base, height) {
  // Calcula a área de um triângulo.
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(list) {
  /**
   * Retorna o primeiro e o último item de uma array separados por vírgula.
   * O último item corresponde ao valor do último índice da array que é o comprimento da array - 1, e o primeiro item corresponde ao valor do índice 0 da array.
  */
  let lastAndFirst = list[list.length - 1] + ', ' + list[0];
  return lastAndFirst;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
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
