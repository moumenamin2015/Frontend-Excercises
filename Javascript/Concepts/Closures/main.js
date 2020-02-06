function createCounter() {
  var counter = 0;
  function myFunction() {
    counter = counter + 1;
    return counter;
  }
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);

var num = 10,
  name = "Addy Osmani",
  obj1 = {
    value: "first value"
  },
  obj2 = {
    value: "second value"
  },
  obj3 = obj2;

function change(num, name, obj1, obj2) {
  num = num * 10;
  name = "Paul Irish";
  obj1 = obj2;
  obj2.value = "new value";
}

change(num, name, obj1, obj2);
console.log(num);
console.log(name);
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);

for (let i = 0; i < 101; i++) {
  if (i % 3 === 0) console.log(i + "fizz");
  else if (i % 5 === 0) console.log(i + "buzz");
}

var animals = [
  {
    name: "Meowsy",
    species: "cat",
    foods: {
      likes: ["tuna", "catnip"],
      dislikes: ["ham", "zucchini"]
    }
  },
  {
    name: "Barky",
    species: "dog",
    foods: {
      likes: ["bones", "carrots"],
      dislikes: ["tuna"]
    }
  },
  {
    name: "Purrpaws",
    species: "cat",
    foods: {
      likes: ["mice"],
      dislikes: ["cookies"]
    }
  }
];
var isCats = function(animal) {
  return animal.species === "cat";
};
var cats = animals.filter(isCats);
var others = animals.filter(isCats);
console.log(cats);
