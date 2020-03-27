var person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function() {
    return this.firstname + " " + this.lastname;
  }
};
/////////////IIFE////////////////
for (var index = 0; index < 3; index++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 3000);
  })(index);
}
/////////// Bind - Call - Apply ///////////
(function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------------------------");
}.bind(person)("en", "ar"));

(function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------------------------");
}.call(person, "en", "ar"));

(function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------------------------");
}.apply(person, ["en", "ar"]));

////////////// Function Borrowing //////////////////
var person2 = {
  firstname: "Jane",
  lastname: "Doe"
};

console.log(person.getFullName.apply(person2));

////////////////// Function Currying //////////////////
function multiply(a, b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(3));
