console.log("Anuj Kaushik");

async function anuj(){
    console.log("Inside function");
    return "Hello";
}
let vari = anuj();
console.log(vari);
vari.then(function (data){
    console.log(data);
})
console.log("Before calling function");

console.log("After calling function");


console.log("Last line of js file");




