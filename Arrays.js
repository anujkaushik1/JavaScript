// array declare

let arr = [1, 2, 4, 6, 3];
console.log(arr);
console.log(arr.length);

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Push, Unshift
arr.push("last value");
arr.unshift("first value");
console.log(arr);

// Pop, Shift
arr.pop();
arr.shift();
console.log(arr);

// start idx, last idx
let partOfAnArray = arr.slice(2, 4); //4, 6 (it will create copy and will not make changes in actual array)
console.log(partOfAnArray);
console.log(arr);

arr.splice(2, 3); // Generic delete-> 3 elements will be deleted after 2nd idx
console.log(arr); // will not create copy and will delete from actual array
