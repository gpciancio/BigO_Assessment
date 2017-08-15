// O(1) example
function see10nums() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

//O(n) example
function printArr() {
  for (var i = 0; i < array.length; i++) {
    console.log(i);
  }
}

//O(n^2) example
function doubleFor() {
  for (var i = 0; i < array.length; i++) {
    for (var ii = 0; ii < array.length; ii++) {
      console.log(i);
    }
  }
}
