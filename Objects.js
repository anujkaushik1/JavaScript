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