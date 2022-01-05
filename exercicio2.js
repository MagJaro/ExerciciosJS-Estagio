
let person = {
    name: "Batman",
    power: ''
};

//Solução 1
function run1(input) {
    input.power = "invisibilidade";
    return input;
};

console.table(run1(person));

//Solução 2
function run2(input, power){
    input.power = power;
    return input;
}
console.table(run2(person, "Sabedoria"));







