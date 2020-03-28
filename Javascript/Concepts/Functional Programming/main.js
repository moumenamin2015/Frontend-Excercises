function mapForEach(array, fn) {
  var newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    var mappedElement = fn(element);
    if (mappedElement != null) newArray.push(fn(element));
  }
  return newArray;
}
var arr = [1, 2, 3];
var biggerThanTwo = mapForEach(arr, function(item) {
  return item > 2 ? item : null;
});
console.log(biggerThanTwo);
