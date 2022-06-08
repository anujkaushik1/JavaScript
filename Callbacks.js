function greet(personName, age, callback, callback2){
    let msg = "Hello" + personName;
    let personAge = age;

    callback(msg);
    callback2(personAge);
}

function logGreeting(greeting){
    console.log(greeting);
}

function showAge(age){
    console.log(age);
}

greet('Stieve', 35, logGreeting, showAge);
