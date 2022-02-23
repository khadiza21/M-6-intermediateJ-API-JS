console.log("json");

// JSON - Javascript Object Notation
const bk = ["23", 34, "khadiza", true, 23.34];
console.log(bk);
const bk2 = JSON.stringify(bk);
console.log(bk2);
const bk3 = JSON.parse(bk2);
console.log(bk3);

const student = { name: "bk", age: 23, class: "bsc-3rd", subject: "cse" };
console.log(student);
const student2 = JSON.stringify(student);
console.log(student2);
const student3 = JSON.parse(student2);
console.log(student3);

const shop = {
  name: "bk3",
  address: "aricha road",
  profit: 343434,
  products: ["laptop", "mobile", "pepsi"],
  owner: {
    name: "khadiza",
    profession: "developer",
  },
  isExpensive: true,
};
const shop2 = JSON.stringify(shop);
console.log(shop);
console.log(shop2);

const shop3 = JSON.parse(shop2);
console.log(shop3);
