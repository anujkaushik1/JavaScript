// Obejcts are group of key, value pair

// key : value -> property
// key : value -> method

let cap = {
  name: "Steve",
  lastName: "Rogers",
  address: {
    city: "Manhaten",
    state: "New York",
  },
  age: 100,
  isAvenger: true,
  movies: ["First Avenger", "Winter Soldier", "Civil War"],
  newFunc: function () {
    console.log("cap says hi");
  },
};

console.log(cap.name);
console.log(cap.movies[1]);
cap.newFunc();

console.log(cap);

// Set / Update

cap.age = 36;
cap.isAvenger = false;
cap.friends = ["Tony", "Bruce", "Peter"];

console.log(cap);

// Delete

delete cap.address;

console.log(cap);

let propKey = ["age"];
console.log(cap[propKey]);

for (let key in cap) {
  console.log(key, ": ", cap[key]);
}
