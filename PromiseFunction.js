let fs = require("fs");
// async code
// console.log("Before");
// fs.readFile("f1.txt", function(err, data){
//     console.log(data.toString());
// })

console.log("Before");

let promise = fs.promises.readFile("f1.txt");
console.log(promise);
promise.then(function (data) {
  //fulfilled
  console.log(data.toString());
});

promise.catch(function (err) {
  // rejected
  console.log(err);
});

console.log("after");