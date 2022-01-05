
let person = {
    name: "Batman",
    power: ''
};

//Solução 1
function run1(input) {
    input.power = "invisibilidade";
    input.novaCaracteristicaAdicionada = "e gosta de usar preto";
    return `O ${input.name} tem o poder de ${input.power} e ${input.novaCaracteristicaAdicionada}`;//Tagged template strings
};
console.log(run1(person));

//Solucão 2
function run2(input) {
    input.power = "invisibilidade";
    input.novaCaracteristicaAdicionada = "e é super rápido";
    return "O " + input.name + " tem o poder de " + input.power + " e " + input.novaCaracteristicaAdicionada;//interpolação de expressões
};
console.log(run2(person));
 