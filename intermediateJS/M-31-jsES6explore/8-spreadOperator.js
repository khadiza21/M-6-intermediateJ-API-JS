const numbers = [34, 65, 54, 23, 62];
console.log(...numbers);

const max = Math.max(...numbers);

const numbers2 = [23, ...numbers, 343];
numbers2.push(3424);

console.log(numbers);
console.log(numbers2);
