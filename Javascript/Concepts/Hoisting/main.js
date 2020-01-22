//console.log(d);
//console.log(b);

//a();
console.log(window.a);
a = 200;
var a = 100;
function ab() {
  c = 3;
  console.log("from function a");
  b();
  return;
  function b() {
    console.log("from function b");
  }
}
ab();
console.log(window.c);
console.log(window.b);
