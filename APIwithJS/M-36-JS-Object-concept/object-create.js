//1. Object
let student = { name: "khadiza", id: 123 };
//2. constructor
const human = new Object();
//3.inheritance
const people = Object.create(null);
const people1 = Object.create(student);
console.log(people1.name);
// 4. class 
class info {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const p1 = new info('khadiza',345);
console.log(p1);
