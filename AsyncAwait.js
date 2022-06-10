const fetch = require('node-fetch');
// console.log("Anuj Kaushik");

// async function anuj(){
//     console.log("Inside function");
//     return "Hello";
// }
// let vari = anuj();
// console.log(vari);
// vari.then(function (data){
//     console.log(data);
// })
// console.log("Before calling function");

// console.log("After calling function");


// console.log("Last line of js file");


console.log("Anuj Kaushik");

async function anuj(){
    console.log("Inside function");
    const response = await fetch('https://api.github.com/users')
    console.log("before response");
    const users = await response.json();
    console.log('users resolved');

    return users;

}

console.log("Before calling function");

let a = anuj();

console.log("After calling function");

console.log(a);

a.then(function(data){
    console.log(data[0]);
})

console.log("Last line of js file");







