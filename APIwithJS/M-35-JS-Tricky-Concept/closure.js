// APIwithJS/M-35-JS-Tricky-Concept/closure.js
function stopwatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
let clock1 = stopwatch();
console.log(clock1);
console.log(clock1());
console.log(clock1());

