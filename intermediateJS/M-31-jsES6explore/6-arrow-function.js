n1 = 12;
n2 = 30;

//function declearation
function minus() {
  return num2 - num1;
}
//function expression
const add = function add(num1, num2) {
  return num1 + num2;
};

//function expression (anonymous)
const add1 = function (num1, num2) {
  return num1 + num2;
};

// arrow function
const multiple = (num1, num2) => num1 * num2;
console.log(multiple(n1, n2));
