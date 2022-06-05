console.log("Hello JS :)");

let a;
console.log(a); // undefined

a = 10;
a = 10.1;

console.log(a);

a = "Hello I am a String";
a = "I am also a String";

console.log("Value of a = ", a);

for (let i = 1; i <= 10; i++) {
  console.log("number is ", i);
}

// Q = Is Prime?

let number = 234;
let flag = true;

for (let i = 2; i * i <= number; i++) {
  if (number % i == 0) {
    flag = false;
    console.log("Not Prime");
    break;
  }
}

if (flag) {
  console.log("Prime");
}

// Q = Fizz Buzz

for (let i = 1; i <= 20; i++) {
  if (i % 3== 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
