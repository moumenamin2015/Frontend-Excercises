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

/////////////IIFE////////////////
for (var index = 0; index < 5; index++) {
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button " + index));
  btn.addEventListener(
    "click",
    (function(i) {
      return function() {
        alert(i);
      };
    })(index)
  );
  document.body.appendChild(btn);
}
for (var index = 10; index < 15; index++) {
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button " + index));
  (function(i) {
    btn.addEventListener("click", function() {
      alert(i);
    });
  })(index);
  document.body.appendChild(btn);
}

for (var index = 0; index < 3; index++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 3000);
  })(index);
}

for (var index = 5; index < 10; index++) {
  logIndex(index);
}
for (var index = 10; index < 20; index++) {
  setTimeout(
    (function(i) {
      return function() {
        console.log(i);
      };
    })(index),
    3000
  );
}
function logIndex(index) {
  setTimeout(function() {
    console.log(index);
  }, 3000);
}
