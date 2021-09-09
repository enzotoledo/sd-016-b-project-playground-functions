// Desafio 10
function techList(Technology, name) {
    // seu código aqui
    //     Entradas da função:
    // ["React", "Jest", "HTML", "CSS", "JavaScript"]
    // "Lucas"
    // Caso o array venha vazio sua função deve retornar 'Vazio!'
    let objectList = [];
    if (Technology.length !== 0) {
        for (i = 0; i < Technology.length; i++) {
            let object = {};
            object.tech = Technology.sort()[i];
            object.name = name;
            objectList.push(object);
        }
        return objectList;
    } else {
        return 'Vazio!';
    }
}
// testando a função
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));
// console.log(techList([], 'Lucas'));
// --------------------------------------------------------------------------------------------------
// Desafio 11
function generatePhoneNumber(array) {
    // seu código aqui
    let num;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return 'Não é possível gerar um número de telefone com esses valores.'
        }
    }
    if (array.length > 11) {


    } else {
        return 'Array com tamanho incorreto.'
    }
}
// testando a função
// console.log(generatePhoneNumber();
// --------------------------------------------------------------------------------------------------
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