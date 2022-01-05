function run(input){
    let newJson = JSON.parse(input);//transformar string de objeto para objeto
    newJson.name = "Superman"; //atribuição ao atributo name do objeto a string superman 
    return JSON.stringify(newJson);//stringfy => transfroma em string 
};

let json = '{"name":"Batman"}';

run(json);

console.log(run(json));

