function fullName(first, last = "Chowdhury") {
  const name = first + " " + last;
  return name;
}
console.log("Full Name is ", fullName("Akramul"));
console.log("Full Name is ", fullName("Akramul", "Khan"));

function add(num1 = 0, num2 = 12) {
  const add = num1 + num2;
  return add;
}
console.log("The Summetion is ", add(12));
console.log("The Summetion is ", add(12, 45));
console.log("The Summetion is ", add());
