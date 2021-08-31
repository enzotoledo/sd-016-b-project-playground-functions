// Desafio 10
function techList(array, name) {
    var ordened = array.sort();
    var newList = [];
    if (array.length > 0) {
        for (let key in array) {
            newList.push({ tech: array[key], name: name })
        }
    } else return 'Vazio!'

    return newList;
}




// Desafio 11
function generatePhoneNumber() {
    // seu código aqui
}

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