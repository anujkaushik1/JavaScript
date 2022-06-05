// Non-Primitive => arrays, objects, functions

//fn defination
function sayHi(param) {
  console.log("Param is ", param);
}
// fn calling
sayHi();
sayHi(10);
sayHi("Hello");
sayHi([1, 2, 3, 4, 5]);

function sayHello(param) {
  return "Returned from a function";
}

let rVal = sayHello([10, 20, 30, 40]);
console.log(rVal);
