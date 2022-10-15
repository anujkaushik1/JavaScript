// let p1 = new Promise(function(resolve, reject){

//     console.log("hi");
//     console.log("my name is anuj");

// })

// bina then ya catch kre run krte hi (hi and my name is anuj print hojaega)

// const fs = require("fs");

// console.log("before");
// let p2 = new Promise(function(resolve, reject){
//     fs.readFile("f1.txt", function(err,d){
//         resolve(d + "");
//     })

// })

// console.log("After");   // yha tk print hoga before after


// p2.then(function(data){
//     console.log(data);  
// })

const fs = require("fs");

console.log("before");
let p2 = new Promise(function(resolve, reject){
    fs.readFile("f1.txt", function(err,d){
        console.log(d + "");
    })

})

console.log("After");   

// before
// after 
// I am f1







