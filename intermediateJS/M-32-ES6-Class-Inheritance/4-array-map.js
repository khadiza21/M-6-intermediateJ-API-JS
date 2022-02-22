//function , array and loop works
const number = [12, 23, 11, 33, 55, 90];
const output = [];
//arrow function
const doubleIt = (nums) => nums * 2;
for (num of number) {
  const result = doubleIt(num);
  output.push(result);
}
console.log(output);

/* how works map
1. loop through each element 
2. for each element call the provided function 
3. result for each element will be stored in an array
*/
//type 1
const output21 = [];
const output2 = number.map(doubleIt);
console.log(output2);
//type 2
const output31 = [];
const output3 = number.map((nums) => nums * 3);
console.log(output3);
//type 3
const newSquare = [];
const square = number.map((x) => x * x);
console.log(square);
