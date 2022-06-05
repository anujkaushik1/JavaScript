let singleQuotes = 'String with Single Quotes';
let doubleQuotes = "String with Double Quotes";

console.log(singleQuotes);
console.log(doubleQuotes);

let char = doubleQuotes.charAt(4); // char is treated as a string only

let subStr = singleQuotes.substring(2, 10);
console.log(subStr);

let ascii = singleQuotes.charCodeAt(1);
console.log(ascii);

// Split
let arrString = singleQuotes.split("");
console.log(arrString);

// Join

let str = arrString.join("$");
console.log(str);

// Trim

let tr = "   How are you  ";
console.log(tr.trim());