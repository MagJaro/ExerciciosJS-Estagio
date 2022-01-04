//Solução 1
let person = {
    name: "Batman",
    power: ''
};

function run1(input) {
    input.power = "invisibilidade";
    input.novaCaracteristicaAdicionada = "é cego";
    return `O ${input.name} tem o poder de ${input.power} e ${input.novaCaracteristicaAdicionada}`
};

console.log(run1(person));

//Solucão 2
